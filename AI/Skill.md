# Catálogo de Skills - Proyecto: TerminalFirst

Este documento define las habilidades técnicas ejecutables por los agentes en el entorno de desarrollo.

## 1. Módulo: Extracción y Transformación (Data Skills)

### 🛠️ `skill-parse-markdown`

- **Descripción:** Lee un archivo `.md` específico (ej. `tmux-bindings.md`) y extrae las tablas de atajos convirtiéndolas en un objeto JSON estructurado con propiedades `key`, `description`, y `category`.
- **Entrada:** Ruta del archivo `.md`.
- **Salida:** Objeto JSON o array de bindings.

### 🛠️ `skill-enrich-metadata`

- **Descripción:** Analiza las cadenas de texto extraídas por el parser y detecta modificadores de teclado estándar (como `C-`, `M-`, `S-`, `PREFIX`). Mapea automáticamente estas abreviaturas para transformarlas en etiquetas `<abbr>` legibles con tooltips.
- **Entrada:** Objeto de bindings crudo.
- **Salida:** Objeto de bindings enriquecido con metadatos de UI.

---

## 2. Módulo: Generación de Interfaz (UI Skills)

### 🛠️ `skill-generate-cards`

- **Descripción:** Toma el JSON enriquecido de una herramienta y genera el string de marcado HTML correspondiente (usando clases `.binding`, `.card`, atributos `data-tool`, etc.) manteniendo el diseño responsive exacto del proyecto original.
- **Entrada:** JSON de bindings enriquecido.
- **Salida:** Fragmento de código HTML listo para inyectar.

### 🛠️ `skill-inject-extras`

- **Descripción:** Estructura e inyecta las secciones de _Troubleshooting_, _Concepts_ y _Quick Start_ de los archivos `.md` dentro de componentes colapsables (`<details>` / `<summary>`) en el HTML para no saturar la vista de búsqueda rápida.
- **Entrada:** Secciones de texto plano de los `.md`.
- **Salida:** Bloques HTML secundarios inyectados en las "páginas" correspondientes.

---

## 3. Módulo: Automatización y Despliegue (Build Skills)

### 🛠️ `skill-bundle-html`

- **Descripción:** Evoluciona el script `build.js` en Node.js puro. Toma un archivo base limpio (ej. `src/template.html`), busca tokens de inyección (ej. `<!-- INSERT_TMUX_BINDINGS -->`), añade los fragmentos HTML generados y escribe el resultado final en `dist/index.html`.
- **Entrada:** Plantilla base + Fragmentos HTML.
- **Salida:** `dist/index.html` compilado.

### 🛠️ `skill-validate-sw-cache`

- **Descripción:** Analiza estáticamente el directorio `dist/` para listar todos los recursos reales (iconos, manifiesto, html) y actualiza dinámicamente el array de precaché dentro de `sw.js` incrementando la versión de la caché para forzar la actualización en los navegadores de los usuarios.
- **Entrada:** Directorio `dist/`.
- **Salida:** Archivo `dist/sw.js` actualizado y listo para producción.
