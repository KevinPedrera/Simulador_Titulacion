# Auditoría técnica y pruebas de regresión (v16)

Este proyecto usa únicamente HTML, CSS y JavaScript vanilla, sin dependencia de frameworks de interfaz.

## Reglas invariantes del banco
- Los ID de preguntas deben ser únicos.
- Los enunciados normalizados dentro de cada núcleo deben ser únicos.
- Cada opción de respuesta debe tener una posición válida y su texto debe coincidir con `answer`.
- No se mezclan las preguntas derivadas de guía (`sourceType: "guide"`) con las evaluaciones originales (`source` de PDF).
- Las claves técnicamente contrastadas de los parciales N3-P3 y N3-P4 mantienen su nota `answerVerification` para no presentarlas como oficiales.
- El examen teórico selecciona 10 preguntas de opción múltiple por núcleo sin reutilizar IDs dentro del mismo examen.

## Calificación sin falsos positivos
- Una selección ausente, `null`, `undefined`, `false`, `NaN`, cadena vacía o espacios no son correctos aunque la opción válida sea la primera (`correct = 0`).
- Las selecciones deben ser números enteros dentro del rango de opciones.
- Las respuestas de texto requieren una cadena no vacía y correspondencia exacta normalizada en espacios, mayúsculas y tildes con la clave declarada. No se aplican coincidencias por subcadena ni aproximaciones semánticas.
- La nota teórica sobre 10 usa `10 * aciertos / total`; su aporte ponderado es `4 * aciertos / total`.

## Comprobación ejecutada en la actualización
- 237 registros y 237 enunciados únicos, tras retirar el duplicado N2-P1-Q5.
- Distribución por núcleo: N1 90, N2 49, N3 48, N4 50.
- 17 casos de prueba de calificación: todos correctos, incluidos valores vacíos, tipos no permitidos, límites y respuestas válidas.
- JavaScript analizado sintácticamente sin error.
- Interfaz: foco visible, selección táctil, comportamiento móvil, reducción de movimientos.
- Las funciones antiguas de transferencia manual sin Firebase fueron eliminadas del JavaScript, permaneciendo la transferencia mediante PIN.
- Se revisó la persistencia local; la recuperación real en varios dispositivos y la sincronización Firebase deben comprobarse en navegador con la cuenta del usuario.

## Procedencia y contenidos
La auditoría de materiales y sus enlaces está centralizada en Google Drive:
https://docs.google.com/document/d/18wAVBIRJWlDghIcVKZsTpxmJ8TAqTv8lfwTCTBLRnFE/edit

**Nota:** el valor 237 corresponde a preguntas de opción múltiple y respuesta breve de dos orígenes: 199 evaluaciones distintas y 38 ejercicios redactados a partir de conceptos documentados en guías. No debe confundirse con 237 preguntas textuales oficiales.

## Versión v17 — Examen guiado por voz (26 de octubre de 2026)

- **Modalidad adicional:** `voice-guide.js`, entrada independiente desde el dashboard sin modificar el examen teórico de 60 minutos.
- **Idioma solicitado:** `es-MX` para lectura y reconocimiento; el sintetizador selecciona primero una voz `es-MX` disponible en el dispositivo y, si no existe, otra voz en español.
- **Interacción:** pregunta leída en voz alta y opciones A, B, C, D (y E si procede); selección por voz o pantalla; confirmación obligatoria antes de calificar; respuesta inmediata con corrección; comando «siguiente», «repetir», «pausa» y «terminar».
- **Seguridad de calificación:** no se califica una transcripción libre aproximada ni una frase ambigua. Solo letras o comandos reconocidos estrictamente y confirmados. Se conserva el corrector determinista.
- **Guardar y continuar:** almacena el progreso guiado en `localStorage`; desde el dashboard puede retomarse; al finalizar guarda un intento en el historial existente, con respuestas y fuentes.
- **Revisión:** se muestran los tres filtros `Todas`, `Correctas` e `Incorrectas` sobre la revisión completa, tanto al terminar un examen como al abrir su historial.
- **Respaldo manual:** todas las opciones pueden tocarse sin micrófono; la voz depende del soporte Web Speech API del navegador y del sistema operativo.
- **Privacidad y coste:** no se usa ninguna API de OpenAI. `SpeechRecognition` puede enviar audio a servidores del proveedor del navegador y no siempre funciona sin conexión. No se promete que la voz suene como ChatGPT Voice.
- **Pruebas estáticas:** `app.js`, `voice-guide.js` y `sw.js` pasaron análisis de sintaxis. El parser de voz pasó pruebas con «opción a», «opción b», «la opción c», «respuesta D», «elijo la opción A» y rechazó entradas ambiguas. Todavía se requiere prueba real del micrófono, la voz y la recuperación desde Windows/iOS.

