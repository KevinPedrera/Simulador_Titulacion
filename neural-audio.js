(()=>{'use strict';
/* Reproductor de clips neuronales locales publicados como archivos estáticos.
   Si no existe el archivo, el examinador usa automáticamente SpeechSynthesis. */
const manifest=window.NEURAL_AUDIO_MANIFEST||{clips:{}};
const clips=manifest.clips||{};
let active=null,sequence=0;
function stop(){sequence++;if(active){active.pause();active.onended=null;active.onerror=null;active.src='';active=null}}
function available(key){return typeof clips[key]==='string'&&/^audio\/es-MX\/[A-Za-z0-9_.-]+\.mp3$/.test(clips[key])}
function play(key,onFinish){if(!available(key))return false;stop();const track=new Audio(clips[key]);active=track;const gen=sequence;track.preload='auto';track.onended=()=>{if(sequence!==gen)return;active=null;onFinish?.()};track.onerror=()=>{if(sequence!==gen)return;active=null;onFinish?.(true)};track.play().catch(()=>{if(sequence!==gen)return;active=null;onFinish?.(true)});return true}
function preload(key){if(!available(key))return;const link=document.createElement('link');link.rel='preload';link.as='audio';link.href=clips[key];document.head.appendChild(link)}
window.neuralAudio={play,stop,preload,available,voice:manifest.voice||'es-MX',count:Object.keys(clips).length};
})();