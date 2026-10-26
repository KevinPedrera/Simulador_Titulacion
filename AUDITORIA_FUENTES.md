# Memoria maestra de titulación — fuentes y banco del simulador

Documento vivo guardado en **Google Drive > Titulacion**:

**[Abrir memoria maestra en Google Docs](https://docs.google.com/document/d/18wAVBIRJWlDghIcVKZsTpxmJ8TAqTv8lfwTCTBLRnFE/edit)**

Este documento contiene el inventario y los enlaces de **16 evaluaciones PDF**, **4 guías de estudio**, referencias de transcripciones, el análisis del banco actual y **199 registros de preguntas distintas** con ID, enunciado, respuesta y origen.

## Estado vigente: banco estrictamente documental (25 de octubre de 2026)

**Fuente exclusiva del banco activo: preguntas y claves explícitas de las evaluaciones PDF.** Se excluyeron las preguntas elaboradas a partir de las guías, sin atribuirlas a exámenes oficiales.

| Núcleo | Registros respaldados por PDF | Preguntas distintas |
| --- | ---: | ---: |
| 1 — Spring Boot y Java | 80 | 80 |
| 2 — Bases de datos | 40 | 39 |
| 3 — Aplicaciones móviles | 20 | 20 |
| 4 — Aplicaciones web | 20 | 20 |
| **Total** | **160** | **159** |

Se recuperaron, con pregunta, opciones y respuesta **expresa en los PDF**, seis ítems omitidos: `N3-P1-Q8`, `N3-P2-Q1`, `N4-P1-Q7`, `N4-P2-Q1`, `N4-P2-Q2`, `N4-P2-Q6`. Commit de banco: `f5d6c0869d670d5d8879250fb3df8d79dfbe3df4`.

Se retiraron del banco activo **46 preguntas elaboradas** a partir de guías de estudio (22 del núcleo 3 y 24 del núcleo 4), preservadas solo en versiones anteriores del repositorio.

### Material identificado pero no calificable sin evidencia adicional

- **Núcleo 3, pruebas 3 y 4:** hay 10 preguntas en cada PDF y sus opciones se pueden leer. Sin embargo, las copias disponibles no muestran clave explícita de corrección (figura «Finalizado Se puntúa como 0 sobre 1,00»); no se debe asignar una respuesta inferida.
- **Núcleo 4, pruebas 3 y 4:** existen en Drive, pero el conector no devolvió texto. Es necesario inspeccionar imágenes de sus páginas antes de incorporar contenido.
- **Núcleo 2:** `N2-P1-Q4` y `N2-P1-Q5` repiten el mismo enunciado y respuesta con opciones en orden diferente; el simulador conserva una sola al deduplicar.

La memoria maestra contiene los enlaces originales, inventario de transcripciones, incidencias y preguntas. El código `preguntas.js` es el origen del banco activo, no la lista histórica del documento.

## Protocolo para posteriores cambios

1. Abrir primero la memoria maestra, revisar pendientes y enlaces de las fuentes.
2. Consultar el PDF específico y verificar enunciado, opciones y clave antes de modificar `preguntas.js`.
3. Mantener identificador único y `source` exacto. No inventar respuestas faltantes.
4. Comprobar unicidad y validez del banco, y que el simulador siga construyendo exámenes de 40 preguntas con diez por núcleo.
5. Actualizar la memoria maestra y este archivo cuando haya resultados nuevos.

Último levantamiento: **25 de octubre de 2026**. La memoria es un índice reutilizable, pero **no reemplaza los PDF originales**.
