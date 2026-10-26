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
