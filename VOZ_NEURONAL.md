# Voz neuronal española de México — examen guiado

## Qué se implementó
- Reproductor de audio `neural-audio.js` para preguntas y explicaciones con prioridad a clips **Piper es_MX-claude-high**.
- Los clips se crean **una sola vez** con un modelo de síntesis local, sin créditos ni tokens de OpenAI. Después son archivos MP3 estáticos publicados en GitHub Pages.
- `voice-guide.js` usa el audio neuronal disponible y, si un archivo falta o no se puede reproducir, vuelve automáticamente a `SpeechSynthesis` del dispositivo.
- No se modifica el corrector. Las respuestas correctas siguen viniendo de `preguntas.js`, con confirmación antes de calificar.
- El reconocimiento de voz sigue dependiendo de Web Speech API. Es gratuito, pero **no siempre local ni compatible con todos los navegadores**.
- Las 40 preguntas abiertas del N1 no forman parte del examen guiado actual de opción múltiple. El banco de opciones contiene 197 preguntas únicas, que producirán 197 audios de preguntas y 197 audios correctivos, además de saludos/confirmaciones.

## Generación automática en GitHub Actions
El archivo `.github/workflows/generar-voz-mx.yml` prepara Linux con Python 3.11, instala Piper y FFmpeg, descarga **una vez** el modelo mexicano `es_MX-claude-high` y genera los MP3 del cuestionario. Después publica los archivos en `audio/es-MX/` y actualiza `neural-audio-manifest.js` mediante un commit.

El workflow puede iniciarse desde la pestaña **Actions → Generar voz mexicana local (Piper) → Run workflow**, si está permitido por la configuración del repositorio; también se dispara con cambios de su propio workflow o del generador. Si GitHub Actions está deshabilitado o sus permisos de escritura están restringidos, deberá habilitarse en GitHub; el sistema de voz se mantiene usable con la alternativa del navegador.

**Nota:** publicar el código de generación no significa que los MP3 ya estén generados. Para comprobarlo verifica que `neural-audio-manifest.js` tenga claves en `clips` y que existan archivos `audio/es-MX/*.mp3` en el repositorio.

## Alternativa local en Windows
Requisitos: Python **3.11 o 3.12** compatible con `piper-tts` (la instalación en Python 3.14 puede carecer de ruedas binarias), FFmpeg disponible en `PATH` y Git.

```powershell
python -m pip install piper-tts
python scripts/generar_voz_mx.py --limit 5
# Escucha primero 5 muestras en audio/es-MX/
python scripts/generar_voz_mx.py
git add audio/es-MX neural-audio-manifest.js
git commit -m "Publicar voz mexicana neuronal"
git push
```

Si falta FFmpeg: `winget install Gyan.FFmpeg` y abre una terminal nueva.

El modelo pesa aproximadamente **63 MB** y se almacena localmente bajo `.voice-models/` (excluido del control de versiones). Se descarga desde:
- Modelo: https://huggingface.co/rhasspy/piper-voices/tree/main/es/es_MX/claude/high
- Ficha y licencia del conjunto de datos: https://huggingface.co/rhasspy/piper-voices/blob/main/es/es_MX/claude/high/MODEL_CARD

## Experiencia y limitaciones
- El usuario puede pronunciar «opción A/B/C/D», confirmar «sí» o «no» y continuar. El audio se sirve como MP3.
- La calidad de Piper es **neuronal y generalmente mejor que TTS tradicional**, pero no equivale a la expresividad ni al diálogo libre de ChatGPT Voice. Para voces más naturales con Chatterbox o Qwen3-TTS se podría sustituir el generador sin cambiar el simulador, si hay hardware compatible y se verifican licencias.
- Los archivos MP3 son estáticos, por lo que el examen hablado funciona sin un servidor de IA tras la publicación. GitHub Pages requiere Internet para obtener clips no almacenados en caché.
- Para iniciar audio en iOS puede ser necesario tocar el botón por las políticas del navegador. La compatibilidad del reconocimiento de voz requiere prueba real.

## Validación
`app.js`, `voice-guide.js`, `neural-audio.js` y `sw.js` se comprueban sintácticamente antes de publicar. La presencia de archivos audio no se certifica hasta que el workflow los genere y se publiquen correctamente.
