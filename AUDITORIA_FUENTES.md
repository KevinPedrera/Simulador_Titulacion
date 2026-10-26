# Memoria maestra de titulación — fuentes y banco del simulador

Documento vivo guardado en **Google Drive > Titulacion**:

**[Abrir memoria maestra en Google Docs](https://docs.google.com/document/d/18wAVBIRJWlDghIcVKZsTpxmJ8TAqTv8lfwTCTBLRnFE/edit)**

Este documento contiene el inventario y los enlaces de **16 evaluaciones PDF**, **4 guías de estudio**, referencias de transcripciones, el análisis del banco actual y **199 registros de preguntas distintas** con ID, enunciado, respuesta y origen.

## Estado vigente: banco estrictamente documental (25 de octubre de 2026)

Las preguntas del banco activo provienen de las evaluaciones PDF; **ninguna pregunta elaborada por IA se presenta como original**.

| Núcleo | Registros respaldados por PDF | Preguntas distintas |
| --- | ---: | ---: |
| 1 — Spring Boot y Java | 80 | 80 |
| 2 — Bases de datos | 40 | 39 |
| 3 — Aplicaciones móviles | 20 | 20 |
| 4 — Aplicaciones web | 40 | 40 |
| **Total** | **180** | **179** |

- Se reincorporaron seis preguntas de N3 y N4 a partir de PDF textuales, con enunciado, opciones y clave documentados. Commit `f5d6c0869d670d5d8879250fb3df8d79dfbe3df4`.
- Se inspeccionaron las páginas originales escaneadas de los PDF **N4 pruebas 3 y 4** y se incorporaron **20 preguntas**, con opciones y claves resaltadas en el PDF. Commit `67366c58c45d7f3efb933b645431c4ce496a7ed1`.
- Las 46 preguntas elaboradas para estudio desde las guías quedaron excluidas del banco activo.
- **Único vacío documental:** las 20 preguntas de **N3 pruebas 3 y 4** se pueden leer en sus PDFs, pero el contenido de revisión disponible **no identifica las opciones correctas**. No se asignaron claves ni se incorporaron al examen autocorregible.
- **N2**: la pregunta sobre el modelo ER aparece dos veces, como `N2-P1-Q4` y `N2-P1-Q5`, con distinta permutación de opciones. El simulador deduplica el texto y expone 39 preguntas únicas.

### Enlaces de evidencia para los PDF escaneados

- [N4 — Prueba 3](https://drive.google.com/file/d/1hM4lnLhGIpuSH5uWcUWASWKsuHeKEKZL/view)
- [N4 — Prueba 4](https://drive.google.com/file/d/1zQe0ioeKDzhHb-XWeVXfoS0b_h_vaXtY/view)

La [memoria maestra en Drive](https://docs.google.com/document/d/18wAVBIRJWlDghIcVKZsTpxmJ8TAqTv8lfwTCTBLRnFE/edit) conserva el inventario histórico, las fuentes y el seguimiento de cada corrección. Las secciones antiguas representan estados anteriores del banco, no el vigente.

## Protocolo para posteriores cambios

1. Abrir primero la memoria maestra, revisar pendientes y enlaces de las fuentes.
2. Consultar el PDF específico y verificar enunciado, opciones y clave antes de modificar `preguntas.js`.
3. Mantener identificador único y `source` exacto. No inventar respuestas faltantes.
4. Comprobar unicidad y validez del banco, y que el simulador siga construyendo exámenes de 40 preguntas con diez por núcleo.
5. Actualizar la memoria maestra y este archivo cuando haya resultados nuevos.

Último levantamiento: **25 de octubre de 2026**. La memoria es un índice reutilizable, pero **no reemplaza los PDF originales**.
