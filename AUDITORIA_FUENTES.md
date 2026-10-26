# Memoria maestra de titulación — fuentes y banco del simulador

Documento vivo guardado en **Google Drive > Titulacion**:

**[Abrir memoria maestra en Google Docs](https://docs.google.com/document/d/18wAVBIRJWlDghIcVKZsTpxmJ8TAqTv8lfwTCTBLRnFE/edit)**

Este documento contiene el inventario y los enlaces de **16 evaluaciones PDF**, **4 guías de estudio**, referencias de transcripciones, el análisis del banco actual y **199 registros de preguntas distintas** con ID, enunciado, respuesta y origen.

## Situación del banco

| Núcleo | Registros en preguntas.js | Distintas disponibles | Evaluaciones marcadas como PDF | Elaboradas desde guía |
| --- | ---: | ---: | ---: | ---: |
| 1 — Spring Boot y Java | 80 | 80 | 80 | 0 |
| 2 — Bases de datos | 40 | 39 | 39 | 0 |
| 3 — Aplicaciones móviles | 40 | 40 | 18 | 22 |
| 4 — Aplicaciones web | 40 | 40 | 16 | 24 |
| **Total** | **200** | **199** | **153** | **46** |

## Pendientes de verificación

- **N2**: la misma pregunta de modelo conceptual Entidad-Relación consta dos veces con diferente orden de opciones (N2-P1-Q4 y N2-P1-Q5).
- **N3**: existen los PDF originales de **pruebas 3 y 4** en Drive, legibles mediante la conexión; las preguntas faltan como registros oficiales identificados en `preguntas.js`. Las respuestas deben contrastarse antes de incorporarlas.
- **N4**: existen los PDF originales de **pruebas 3 y 4**, pero su extracción de texto por Drive devolvió contenido vacío. Requieren inspección de sus páginas, no supuestos.
- Las **46 preguntas elaboradas** son material de práctica basado en guías, **no se deben presentar como copia de evaluaciones oficiales**.

## Protocolo para posteriores cambios

1. Abrir primero la memoria maestra, revisar pendientes y enlaces de las fuentes.
2. Consultar el PDF específico y verificar enunciado, opciones y clave antes de modificar `preguntas.js`.
3. Mantener identificador único y `source` exacto. No inventar respuestas faltantes.
4. Comprobar unicidad y validez del banco, y que el simulador siga construyendo exámenes de 40 preguntas con diez por núcleo.
5. Actualizar la memoria maestra y este archivo cuando haya resultados nuevos.

Último levantamiento: **25 de octubre de 2026**. La memoria es un índice reutilizable, pero **no reemplaza los PDF originales**.
