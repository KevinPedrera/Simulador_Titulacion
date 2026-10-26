# Memoria maestra de titulación — fuentes y banco del simulador

Documento vivo guardado en **Google Drive > Titulacion**:

**[Abrir memoria maestra en Google Docs](https://docs.google.com/document/d/18wAVBIRJWlDghIcVKZsTpxmJ8TAqTv8lfwTCTBLRnFE/edit)**

Este documento contiene el inventario y los enlaces de **16 evaluaciones PDF**, **4 guías de estudio**, referencias de transcripciones, el análisis del banco actual y **199 registros de preguntas distintas** con ID, enunciado, respuesta y origen.

## Estado vigente: auditoría documental completa (26 de octubre de 2026)

Se han inventariado y leído las **cuatro guías** (una por núcleo) y las **16 evaluaciones PDF**. El repositorio contiene las preguntas de esos PDF. En el núcleo 3, parciales 3 y 4, **la clave no aparece en el PDF de revisión**, por lo que las respuestas se determinaron comparando el enunciado y sus opciones con la guía docente y documentación técnica oficial de Firebase. Esas 20 preguntas están identificadas con `answerVerification`, de modo que el simulador distingue una clave técnicamente contrastada de una clave oficial visible en el PDF. No debe afirmarse que las 20 claves fueron confirmadas por la plataforma educativa.

| Núcleo | Preguntas registradas | Partiales | Detalle |
| --- | ---: | --- | --- |
| 1 — Spring Boot y Java | 80 | 20 / 20 / 20 / 20 | Los 80 enunciados y respuestas se localizaron en los PDF de las cuatro evaluaciones. |
| 2 — Bases de datos | 40 | 10 / 10 / 10 / 10 | Los 40 enunciados y respuestas se localizaron en los PDF; uno está duplicado (`N2-P1-Q4` / `N2-P1-Q5`). |
| 3 — Aplicaciones móviles | 40 | 10 / 10 / 10 / 10 | Las pruebas 1 y 2 incluyen clave oficial visible. Pruebas 3 y 4: 20 claves contrastadas técnicamente, NO visibles en la revisión. |
| 4 — Aplicaciones web | 40 | 10 / 10 / 10 / 10 | Pruebas 1 y 2 con texto; pruebas 3 y 4 verificadas visualmente en PDF escaneado, con respuesta resaltada. |
| **Total** | **200** | **16 evaluaciones** | **199 enunciados distintos** por el duplicado en N2. |

### Cambios confirmados en GitHub

- `f5d6c0869d670d5d8879250fb3df8d79dfbe3df4` — recuperar seis preguntas omitidas de PDF originales en núcleos 3 y 4.
- `67366c58c45d7f3efb933b645431c4ce496a7ed1` — incorporar 20 preguntas de PDF escaneados N4 pruebas 3 y 4, con respuestas visibles en el propio documento.
- `8c4186cca8e739100b6014786c357948872f6266` — incorporar 20 enunciados y opciones de N3 pruebas 3 y 4, con claves apoyadas en la guía docente y Firebase; sin atribuirlas a la plataforma.
- `00ebc35ca6b07a117278e2d54b747c146ca584c1` — mostrar en el simulador el indicador sobre la procedencia de la clave técnica.

### Observación de precisión técnica

En `N3-P4-Q1`, el PDF usa la alternativa «Cifrado de contraseñas». Es la **mejor respuesta dentro de las opciones ofrecidas**, y coincide con el lenguaje simplificado de la guía. Técnicamente Firebase Authentication almacena contraseñas mediante **hashing con scrypt**, no cifrado reversible. Conservar el enunciado del examen, indicar esta limitación y no convertirla en una afirmación técnica errónea.

### Enlaces importantes

- [Memoria maestra de Drive](https://docs.google.com/document/d/18wAVBIRJWlDghIcVKZsTpxmJ8TAqTv8lfwTCTBLRnFE/edit)
- [N3 prueba 3](https://drive.google.com/file/d/1IMfV8roKR-xdouRkLmPivSx0lXzXjEUF/view)
- [N3 prueba 4](https://drive.google.com/file/d/1nltFLhcV9uHf09mHvGYF0xMGtWCox9ij/view)
- [Guía de estudio N3](https://drive.google.com/file/d/1nu6jIsqUi3VlkW7C2WZ0CnmLGEvjBOIv/view)
- [N4 prueba 3](https://drive.google.com/file/d/1hM4lnLhGIpuSH5uWcUWASWKsuHeKEKZL/view)
- [N4 prueba 4](https://drive.google.com/file/d/1zQe0ioeKDzhHb-XWeVXfoS0b_h_vaXtY/view)

Se excluyeron las 46 preguntas adicionales previamente elaboradas desde guías. La guía apoya la **verificación de respuestas**, pero no se utiliza como excusa para inventar enunciados de examen.

## Ampliación del cuestionario con marco teórico de las guías (26 de octubre de 2026)

**Importante:** los PDF de evaluaciones aportan 200 registros (199 preguntas distintas). Además se han incorporado **38 preguntas de práctica derivadas de definiciones reales de las cuatro guías**; estas últimas son formulaciones de estudio, no reproducciones literales de un examen. El simulador distingue cada una con `sourceType: "guide"`, nombre de guía, sección y enlace del documento.

| Núcleo | Registros de evaluaciones | Preguntas derivadas de guía | Distintas mostrables |
| --- | ---: | ---: | ---: |
| 1 — Spring Boot y Java | 80 | 10 | 90 |
| 2 — Bases de datos | 40 (39 distintas) | 10 | 49 |
| 3 — Aplicaciones móviles | 40 | 8 | 48 |
| 4 — Aplicaciones web | 40 | 10 | 50 |
| **Total** | **200 (199 distintas)** | **38** | **237** |

**Fuentes comprobadas:**
- [N1, Integración de la Información](https://drive.google.com/file/d/19-ziLbT7mQMe8btlhcLDbtY_fE91GbqA/view): MVC, modelo/vista/controlador, Spring Boot, IoC, DI, Spring Data JPA, anotaciones y Thymeleaf.
- [N2, Diseño y Gestión de Base de Datos](https://drive.google.com/file/d/1voY4FbhtrkEVHjhClYcSUMkyqZ35YByz/view): diseño conceptual/lógico/físico, 1FN/2FN/3FN, integridad referencial, TCL y agregaciones MongoDB.
- [N3, Guía de estudio](https://drive.google.com/file/d/1nu6jIsqUi3VlkW7C2WZ0CnmLGEvjBOIv/view): componentes contenedores, Flutter/Dart, métodos HTTP, widgets, Firebase y manejo de errores.
- [N4, Aplicaciones Web](https://drive.google.com/file/d/1x_96HtpRxgsboD2dHXQPA6w3Xqs2vAiA/view): rutas, 404, two-way binding, Angular CLI, HttpClient, CRUD, DI y snapshots del router.

Los nuevos ítems están identificados `N1-GUIA-Q01..10`, `N2-GUIA-Q01..10`, `N3-GUIA-Q01..08` y `N4-GUIA-Q01..10`. Se escogieron definiciones y formulaciones distintas de los enunciados ya cargados. El simulacro de 40 preguntas puede mezclar, por cada núcleo, preguntas originales y preguntas de práctica de guía, siempre identificadas.

**Commits:** `c64dfc571875caf9039df907ba8f64fd8773779c` (N1/N2); `ed5a80e90c334289c6ae615780716b5266679b9c` (N3/N4); `93a78d943a7dcad7d59acfc9d232ae941f259b40` (desglose y marca visible).

Esta sección actualiza las cifras previas de este archivo. No sustituye las preguntas originales ni convierte material elaborado para practicar en una clave oficial del examen.

## Protocolo para posteriores cambios

1. Abrir primero la memoria maestra, revisar pendientes y enlaces de las fuentes.
2. Consultar el PDF específico y verificar enunciado, opciones y clave antes de modificar `preguntas.js`.
3. Mantener identificador único y `source` exacto. No inventar respuestas faltantes.
4. Comprobar unicidad y validez del banco, y que el simulador siga construyendo exámenes de 40 preguntas con diez por núcleo.
5. Actualizar la memoria maestra y este archivo cuando haya resultados nuevos.

Último levantamiento: **25 de octubre de 2026**. La memoria es un índice reutilizable, pero **no reemplaza los PDF originales**.
