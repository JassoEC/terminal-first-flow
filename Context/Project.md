# TerminalFirst — Estado del Proyecto

> Última actualización: 2026-07-01 (Fase 1 + Fase 2 + Refactor UI completadas; i3 eliminado)
> Generado por: Agente Documentador (siguiendo `AI/Agents.md`)

---

## 1. Resumen Ejecutivo

TerminalFirst es una **PWA offline-first** que funciona como cheat sheet de atajos de teclado para herramientas de terminal: **tmux**, **Vim**, y **NeoVim**.

- **Regla de Oro:** Se despliega como un único archivo `.html` autónomo, sin dependencias externas en producción.
- **Plataforma:** GitHub Pages (desde `dist/`).
- **Idioma:** Español.

---

## 2. Arquitectura General — Flujo de Datos

```
.md (fuente de verdad conceptual)
  ↓  SIN automatización — sincronización manual
tmux-copy-cheatsheet.html  (HTML hardcodeado, 2356 líneas, todo inline)
  ↓  build.js (Node puro, cero dependencias)
dist/index.html  (versión deployable en GitHub Pages)
```

**Punto crítico:** Los archivos `.md` son la fuente de verdad documental pero **no se procesan en el build**. Los bindings están duplicados manualmente en el HTML. Cualquier cambio en un `.md` debe reflejarse a mano en el HTML.

`build.js` solo copia archivos y ajusta `start_url` y URLs del SW. No parsea Markdown.

---

## 3. Inventario de Archivos Clave

| Archivo | Líneas | Rol |
|---|---|---|
| `tmux-bindings.md` | 444 | Sesiones, ventanas, paneles, copy-mode Emacs, troubleshooting, conceptos, Quick Start |
| `vim-bindings.md` | 251 | Modos (Normal/Insert/Visual/Command), movimiento, edición, búsqueda, troubleshooting |
| `nvim-bindings.md` | 204 | LSP, Telescope, Terminal built-in, Treesitter, Quickfix, Git |
| `tmux-copy-cheatsheet.html` | 2356 | **Único archivo deployable**. CSS + markup + JS todo inline. |
| `build.js` | 61 | Script de build: copia HTML, ajusta manifest y SW, copia iconos |
| `sw.js` | 41 | Service Worker: cache-first, precache de index.html + manifest + iconos |
| `manifest.json` | 25 | Metadatos PWA: nombre, iconos, `start_url`, theme-color |
| `package.json` | 8 | Scripts: `build` (node build.js), `dev` (build + serve) |

---

## 4. Estructura de la PWA (HTML)

El archivo `tmux-copy-cheatsheet.html` contiene **3 herramientas** organizadas en secciones con atributo `data-tool`. Inicialmente solo tmux está visible; Vim y NeoVim tienen el atributo `hidden` y se alternan mediante el `tool-selector` en JS.

### 4.1 tmux (`data-tool="tmux"`) — 2 páginas + Quick Start

| Página | Cards | Contenido |
|---|---|---|
| **— Quick Start** | (details abierto) | Primeros pasos con CLI y atajos esenciales — al inicio de la sección |
| **1 — Default Bindings** | 6 (grid-3) | Sesiones, Ventanas, Dividir Paneles, Navegar Paneles, Redimensionar, Copiar/Pegar & Comandos + Workflow 3-paneles |
| **2 — Copy-Mode Emacs** | 5 (grid-4) | Navegación, Pantalla e Historial, Seleccionar & Copiar, Búsqueda & Jump, Buffers & Pegado + Workflow visual |

### 4.2 Vim (`data-tool="vim"`) — 2 páginas + Quick Start

| Página | Cards | Contenido |
|---|---|---|
| **— Quick Start** | (details abierto) | Atajos esenciales del primer día — al inicio de la sección |
| **1 — Default Bindings** | 7 (grid-3) | Movimiento, Pantalla y Búsqueda, Edición, Copiar y Deshacer, Cambios Compuestos, Visual Mode, Búsqueda y Reemplazo, Marcas y Registros + Workflow navegar/editar |
| **2 — Avanzado** | 5 (grid-4) | Ventanas (Splits), Redimensionar y Cerrar, Tabs, Ex Commands, Macros + Workflow buscar/reemplazar |

### 4.3 NeoVim (`data-tool="nvim"`) — 2 páginas

| Página | Cards | Contenido |
|---|---|---|
| **1 — LSP, Telescope, Terminal** | 3 (grid-3) | LSP 🔌, Telescope 🔌, Terminal ■ + Workflow go-to-definition |
| **2 — Avanzado** | 3 (grid-4) | NeoVim Built-in ■, Quickfix & Location List, Telescope Advanced & Git 🔌 + Workflow git status |

---

## 5. Componentes UI y su JavaScript

Todo el JS está inline al final del HTML (desde línea ~2100). Las secciones de UI se dividen en:

| Componente | Mecanismo | Persistencia |
|---|---|---|
| **Search / Filtro** | Filtra por `.key` o `.desc` de cada `.binding`. También busca en `details.extras` (auto-abre si hay match). Oculta cards vacías y `group-label` huérfanas. Resalta matches con `<mark>`. Debounce 150ms. | No |
| **Prefix Toggle** | Inserta `<span class="key-prefix">` vía JS en las keys de `#page-prefix`. Togglea clase `show-full-prefix` en `<body>`. Dos botones: corto (`c`) / completo (`[Ctrl + b] + c`). | `localStorage` (`tmuxPrefixMode`) |
| **Tool Selector** | Barra sticky con 3 botones (`data-tool`). Oculta/muestra `.tool-section[data-tool]` completos. Oculta prefix toggle si no es tmux. Resetea búsqueda al cambiar. | `localStorage` (`tmuxTool`) |
| **Nomenclature** | Transforma `M-`, `C-`, `S-`, `PREFIX` en `<abbr title="...">` con tooltips nativos. Función `addNomenclature()`. | N/A |
| **Collapsible Extras**| Bloques `<details class="extras">` con Troubleshooting, Quick Start, Conceptos y Notas. **Quick Start** está al inicio de cada tool-section (abierto por defecto). El resto al final. Estilo con tablas, `<kbd>`, `<pre>`, lista de `<ul>`. | N/A |
| **Scroll to Top** | Botón fixed abajo-derecha, aparece tras 300px de scroll. | N/A |
| **Service Worker** | Registra `sw.js`. Cachea index.html, manifest.json, iconos. Estrategia cache-first. | Cache API |

---

## 6. Build Pipeline

```bash
npm run build    # node build.js → genera dist/
npm run dev      # build + npx serve dist/ (servidor local)
```

### Qué hace `build.js` (en orden):

1. Limpia y recrea `dist/`
2. Copia `tmux-copy-cheatsheet.html` → `dist/index.html`
3. Copia `manifest.json` ajustando `start_url` → `./index.html`
4. Copia iconos: `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
5. Copia `sw.js` reemplazando `'./tmux-copy-cheatsheet.html'` → `'./index.html'` en el array de precache

### Estructura de `dist/` resultante:

```
dist/
├── index.html
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
├── apple-touch-icon.png
├── favicon.ico
├── favicon-16x16.png
└── favicon-32x32.png
```

---

## 7. Brechas Detectadas — `.md` vs HTML

Las siguientes secciones existen en los `.md` pero **no están renderizadas en el HTML actual**:

### tmux-bindings.md (444 líneas → solo ~65% cubierto en HTML)

| Sección en .md | ¿En HTML? |
|---|---|
| 1–6. Sesiones, Ventanas, Paneles, Copy/Paste | ✅ Completo |
| 7. Copy-Mode Emacs (navegación, selección, búsqueda, jump, ratón) | ✅ Completo |
| 8. Comandos `set` y opciones (`PREFIX :`) | ❌ Solo 4 comandos de resize en card "Redimensionar" |
| 9. Menús Contextuales (`PREFIX <` y `PREFIX >`) | ✅ Inyectado en Fase 2 (collapsible, 22 entradas completas) |
| 10. Otros Atajos (`PREFIX ~`) | ❌ Ausente |
| 11. Workflows Rápidos (copiar IP, buscar error, dividir 3 paneles) | ✅ 3/3 completos (el original en card + 2 inyectados en Fase 2) |
| 12. Notas | ❌ Ausente |
| A. Quick Start — CLI + atajos esenciales primer día | ✅ Inyectado en Fase 1 (collapsible, abierto x defecto) |
| B. Troubleshooting (8 problemas comunes) | ✅ Inyectado en Fase 1 (collapsible) |
| C. Conceptos — Sesión / Ventana / Panel (jerarquía + analogías) | ✅ Inyectado en Fase 1 (collapsible) |

### vim-bindings.md (251 líneas → ~90% cubierto en HTML)

| Sección en .md | ¿En HTML? |
|---|---|
| 1–7. Movimiento, Edición, Cambios Compuestos, Visual, Búsqueda, Marcas, Ventanas | ✅ Completo |
| 8. Tabs | ✅ Completo |
| 9. Ex Commands | ✅ Completo |
| A. Quick Start | ✅ Inyectado en Fase 1 (collapsible, abierto x defecto) |
| B. Troubleshooting (7 problemas) | ✅ Inyectado en Fase 1 (collapsible) |
| C. Conceptos — Modos de Vim (tabla de 5 modos) | ✅ Inyectado en Fase 1 (collapsible) |
| D. Notas | ✅ Inyectado en Fase 1 (collapsible) |

### nvim-bindings.md (204 líneas → ~95% cubierto en HTML)

| Sección en .md | ¿En HTML? |
|---|---|
| 1–5. LSP, Telescope, Terminal, Built-in, Treesitter | ✅ Completo |
| A. Notas | ✅ Inyectado en Fase 1 (collapsible) |

---

## 8. Estilo y Convenciones del Proyecto

### CSS
- **Variables CSS** con soporte `prefers-color-scheme: dark` (modo oscuro automático).
- **Grid responsive:** 1 columna (mobile) → 2 cols (768px) → 3 o 4 cols (1024px) según `.grid-3` / `.grid-4`.
- **7 colores de card:** blue, teal, amber, violet, rose, slate, green — cada uno con header coloreado + borde.
- **Collapsible extras:** `details.extras` con `summary` estilizado (triángulo ▶ animado), tablas, `<kbd>`, `<pre>`, y listas para secciones de Troubleshooting, Quick Start, Conceptos y Notas.
- **Print styles:** A4 landscape, grid fijo a 3/4 columnas, sin scroll button.
- **Touch-friendly:** `min-height: 44px` en bindings y workflow steps.
- **Fuentes:** `Fira Code` / `Cascadia Code` para mono, `Inter` para body. Sin Google Fonts ni CDN.

### JS
- **Sin frameworks.** Vanilla JS con `debounce` manual.
- **Estados guardados en `localStorage`:** `tmuxPrefixMode`, `tmuxTool`.
- **Service Worker** solo registrado si `location.protocol.startsWith('http')` (no en `file://`).

### Markdown
- **Tablas estándar** de GFM (GitHub Flavored Markdown).
- **Convención de teclas:** `C-` = Ctrl, `M-` = Alt, `S-` = Shift, `PREFIX` = Ctrl+b.
- **Íconos semánticos:** 🔌 = requiere plugin, ■ = built-in NeoVim, ✅ = default i3.
- **Idioma:** español en todo el contenido.

---

## 9. Roadmap Implícito (según `AI/Agents.md`)

El proyecto está diseñado para evolucionar hacia una **generación automatizada del HTML** desde los `.md`:

1. **Content-Parser:** Parsear `.md` → JSON estructurado de bindings + secciones extras
2. **UI-Compiler:** Inyectar JSON en plantilla HTML base → generar cards, inyectar troubleshooting/conceptos en `<details>`
3. **PWA-Auditor:** Mantener SW cache sincronizado con `dist/`

Actualmente el proyecto se encuentra en **fase 1 + fase 2 + refactor UI completadas**:
- Fase 1 (✅): Quick Start, Troubleshooting, Conceptos, Notas para los 3 tools
- Fase 2 (✅): Menús contextuales tmux (22 entradas), Workflows tmux faltantes (2/3)
- Refactor UI (✅): Densidad de cards normalizada (8–18 bindings/card), paginación unificada (2 páginas por tool), Quick Start reposicionado al inicio, workflows agregados a todas las páginas, search extendido a extras
- Fase 3 (⏳ pendiente): Entradas individuales faltantes (tmux ~10 + vim ~6 + nvim ~28)

---

## 10. Notas para Sesiones Futuras

- El nombre del archivo `tmux-copy-cheatsheet.html` es engañoso: contiene **3 herramientas**, no solo tmux copy. Es el archivo principal.
- Para desarrollo local: `npm run dev` (levanta `serve` en `dist/`).
- No hay tests automatizados. La verificación es manual: abrir `dist/index.html` en navegador.
- El SW usa cache-first. Si modificas assets en `dist/`, incrementa `CACHE_NAME` en `sw.js`.
- Los `.md` usan encoding UTF-8. El HTML también.
- **Encoding:** al inyectar HTML, usar caracteres UTF-8 literales (ó, é, ñ, 🔧). NO usar escapes Unicode de JavaScript (`\u00f3`) porque el navegador los interpreta como texto literal.
