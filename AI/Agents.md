# Sistema de Agentes - Proyecto: TerminalFirst

## 1. Contexto Global del Proyecto

TerminalFirst es una PWA offline-first que funciona como un cheat sheet de atajos de teclado para herramientas de terminal (tmux, Vim, NeoVim, i3).

- **Regla de Oro:** Se despliega como un único archivo `.html` autónomo, sin dependencias externas en producción.
- **Fuente de Verdad:** Los archivos `.md` de la raíz son la fuente de verdad conceptual, pero actualmente el HTML está hardcodeado. El objetivo es automatizar esta sincronización en tiempo de desarrollo.

---

## 2. Definición de Agentes Principales y Subagentes

### Agente Documentador

- **Rol:** Supervisar que, a medida que el proyecto se crece, se actualice también el documento que describe
  el estado más actual del proyecto, (`Context/Proyect.md`) para que sirva como guía, cuando se retomen las sesiones
  con herramientas como Opencode, Claude, etc.

### 🤖 Agente Core: `Arquitecto-Desarrollador`

- **Rol:** Supervisor general del proyecto. Coordina la consistencia entre la documentación, el generador de código y la calidad del entregable final.
- **Directrices:**
  - Mantener la UI ligera, responsiva y con enfoque en la terminal (estética oscura, limpia).
  - Asegurar que ninguna dependencia de Node.js termine en el cliente final (`dist/index.html`).

#### ↳ Subagente: `Content-Parser` (Especialista en Datos)

- **Objetivo:** Leer, interpretar y estructurar la información caótica de los archivos `.md` de origen.
- **Flujo de Trabajo:** Captura tablas de Markdown, bloques de texto de _Troubleshooting_ y secciones de _Quick Start_ para transformarlos en formatos estructurados (JSON intermedio).
- **Skills Asignadas:** `skill-parse-markdown`, `skill-enrich-metadata`.

#### ↳ Subagente: `UI-Compiler` (Especialista en Frontend)

- **Objetivo:** Tomar los datos estructurados por `Content-Parser` e inyectarlos de manera inteligente en el HTML/CSS/JS final.
- **Flujo de Trabajo:** Reemplaza marcadores de posición en la plantilla base, genera las estructuras de las _cards_ y actualiza las funciones de filtrado si es necesario.
- **Skills Asignadas:** `skill-generate-cards`, `skill-inject-extras`, `skill-bundle-html`.

#### ↳ Subagente: `PWA-Auditor` (Especialista en Rendimiento y Offline)

- **Objetivo:** Garantizar que la aplicación siga funcionando al 100% sin conexión a internet y se instale correctamente.
- **Flujo de Trabajo:** Monitorear el archivo `manifest.json` y actualizar la lista de assets (caché) en el Service Worker (`sw.js`).
- **Skills Asignadas:** `skill-validate-sw-cache`.
