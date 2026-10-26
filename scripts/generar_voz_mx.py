#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genera clips neuronales para el examinador guiado de ITSQMET con Piper es-MX.
Requisitos: Python compatible con piper-tts (recomendado 3.11/3.12), pip install piper-tts,
FFmpeg disponible en PATH. La síntesis ocurre localmente; solamente se descargan los
archivos públicos del modelo al ejecutar el script por primera vez.
Ejemplo: python scripts/generar_voz_mx.py --limit 5
         python scripts/generar_voz_mx.py
"""
import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VOICE = "es_MX-claude-high"
BASE = "https://huggingface.co/rhasspy/piper-voices/resolve/main/es/es_MX/claude/high/"
OUT = ROOT / "audio" / "es-MX"
MODELS = ROOT / ".voice-models"
MANIFEST = ROOT / "neural-audio-manifest.js"


def load_bank():
    text = (ROOT / "preguntas.js").read_text(encoding="utf-8")
    start = text.find("[")
    end = text.rfind("]")
    if start == -1 or end <= start:
        raise RuntimeError("No se reconoce preguntas.js")
    questions = json.loads(text[start:end + 1])
    ids = set()
    for q in questions:
        if not q.get("id") or q["id"] in ids:
            raise RuntimeError("ID duplicado o vacío en el banco")
        ids.add(q["id"])
    return questions


def download_model():
    MODELS.mkdir(parents=True, exist_ok=True)
    model = MODELS / (VOICE + ".onnx")
    for filename in (VOICE + ".onnx", VOICE + ".onnx.json"):
        dest = MODELS / filename
        if dest.is_file() and dest.stat().st_size > 1000:
            continue
        print("Descargando el modelo de voz:", filename, flush=True)
        tmp = dest.with_suffix(dest.suffix + ".part")
        with urllib.request.urlopen(BASE + filename, timeout=120) as response, tmp.open("wb") as output:
            shutil.copyfileobj(response, output)
        tmp.replace(dest)
    return model


def clean_speech(text):
    """No cambiar la respuesta académica: solo hacer legibles símbolos de código en audio."""
    value = str(text).replace("\n", ". ")
    value = re.sub(r"[<>\[\]{}]", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def sentences(questions):
    result = {
        "intro": "Hola. ¿Listo para practicar? Vamos a comenzar con calma. Te escucharé y podrás confirmar cada respuesta.",
        "resume": "Qué gusto tenerte de vuelta. Retomamos donde nos quedamos.",
        "correct": "¡Correcto! Muy bien. Cuando quieras seguimos. Di siguiente.",
    }
    letters = "ABCDE"
    for q in questions:
        if q.get("type") != "choice":
            continue
        qid = q["id"]
        options = ". ".join(
            "Opción " + letters[i] + ": " + clean_speech(o)
            for i, o in enumerate(q["options"])
        )
        # No se dice el índice del examen: las preguntas se presentan en orden aleatorio.
        result["q:" + qid] = "Vamos con esta pregunta. " + clean_speech(q["question"]) + ". " + options + ". ¿Cuál eliges?"
        correct = int(q["correct"])
        result["wrong:" + qid] = (
            "Casi. La respuesta correcta es la opción " + letters[correct]
            + ": " + clean_speech(q["options"][correct])
            + ". Cuando quieras seguimos. Di siguiente."
        )
    return result


def key_path(key):
    fileid = re.sub(r"[^A-Za-z0-9_.-]", "-", key)
    return OUT / (fileid + ".mp3")


def synthesize(piper_binary, ffmpeg_binary, model, text, destination):
    with tempfile.TemporaryDirectory() as tempdir:
        wav = Path(tempdir) / "voice.wav"
        subprocess.run(
            [piper_binary, "--model", str(model), "--output_file", str(wav)],
            input=text, text=True, encoding="utf-8", check=True,
            stdout=subprocess.DEVNULL, stderr=subprocess.PIPE,
        )
        if not wav.exists() or wav.stat().st_size < 200:
            raise RuntimeError("Piper no produjo un WAV válido")
        tmp_mp3 = Path(tempdir) / "voice.mp3"
        subprocess.run(
            [ffmpeg_binary, "-y", "-hide_banner", "-loglevel", "error",
             "-i", str(wav), "-ar", "22050", "-ac", "1",
             "-codec:a", "libmp3lame", "-q:a", "5", str(tmp_mp3)],
            check=True,
        )
        shutil.copyfile(tmp_mp3, destination)


def write_manifest(clips):
    payload = {
        "voice": VOICE,
        "engine": "Piper TTS (generado localmente; archivos MP3 estáticos)",
        "locale": "es-MX",
        "clips": clips,
    }
    MANIFEST.write_text(
        "window.NEURAL_AUDIO_MANIFEST = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )


def main():
    parser = argparse.ArgumentParser(description="Clips TTS Piper es-MX para Simulador Titulación")
    parser.add_argument("--limit", type=int, default=0, help="Solo generar los primeros N clips (pruebas)")
    parser.add_argument("--force", action="store_true", help="Volver a crear los clips existentes")
    args = parser.parse_args()

    binary = shutil.which("piper")
    ffmpeg = shutil.which("ffmpeg")
    if not binary:
        sys.exit("Falta Piper. Instala primero: python -m pip install piper-tts")
    if not ffmpeg:
        sys.exit("Falta FFmpeg en PATH; puedes instalarlo en Windows con winget install Gyan.FFmpeg")

    OUT.mkdir(parents=True, exist_ok=True)
    model = download_model()
    prompts = sentences(load_bank())
    if args.limit > 0:
        prompts = dict(list(prompts.items())[:args.limit])
    clips = {}
    # Si se generan solo algunas muestras no se pierden los clips anteriores.
    if MANIFEST.exists():
        m = re.search(r"=\s*({[\s\S]*})\s*;?\s*$", MANIFEST.read_text(encoding="utf-8"))
        if m:
            try:
                clips.update(json.loads(m.group(1)).get("clips", {}))
            except (ValueError, AttributeError):
                pass
    total = len(prompts)
    for idx, (key, text) in enumerate(prompts.items(), start=1):
        dest = key_path(key)
        if args.force or not dest.exists() or dest.stat().st_size < 1024:
            print(f"[{idx}/{total}] {key}", flush=True)
            synthesize(binary, ffmpeg, model, text, dest)
        clips[key] = "audio/es-MX/" + dest.name
        # Guardar progresivamente incluso si se interrumpe el proceso.
        if idx % 10 == 0 or idx == total:
            write_manifest({k: v for k, v in clips.items() if (ROOT / v).is_file()})
    print("Audios disponibles:", len(clips))
    print("Manifiesto:", MANIFEST)
    print("Archivos MP3:", OUT)
    print("Sube los MP3 y el manifiesto al repositorio para reproducirlos desde GitHub Pages.")


if __name__ == "__main__":
    main()
