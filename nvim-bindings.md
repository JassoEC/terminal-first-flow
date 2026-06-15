# NeoVim — LSP, Telescope & Built-in

> ⚠️ Esta hoja incluye bindings **específicos de NeoVim** y que requieren **plugins**.
> Los bindings Vim vanilla están en `vim-bindings.md`.
> Convención: `C-` = Ctrl, `M-` = Alt, `S-` = Shift, `<leader>` = `\` (backslash por defecto)
> 🔌 = Requiere plugin. ■ = Built-in de NeoVim (no en Vim vanilla).

---

## 1. LSP 🔌 (requiere nvim-lspconfig + servidor LSP)

> Los bindings como `gd`, `K`, etc. son los que `nvim-lspconfig` configura por defecto.
> Si usas kickstart.nvim o LazyVim, vienen preconfigurados.

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `gd` | go to definition | Ir a definición |
| `gD` | go to declaration | Ir a declaración |
| `gi` | go to implementation | Ir a implementación |
| `gr` | go to references | Referencias |
| `K` | hover | Documentación del símbolo |
| `C-k` | signature help | Ayuda de firma de función |
| `[d` / `]d` | diagnostic | Diagnóstico anterior / siguiente |
| `<leader>rn` | rename | Renombrar símbolo |
| `<leader>ca` | code action | Acción de código |
| `<leader>e` | diagnostic float | Ver diagnósticos en ventana flotante |
| `<leader>f` | format | Formatear buffer |
| `<leader>wa` | workspace add | Agregar carpeta al workspace |
| `<leader>wr` | workspace remove | Remover carpeta del workspace |
| `<leader>wl` | workspace list | Listar carpetas del workspace |
| `:LspInfo` | info | Info de servidores LSP activos |
| `:LspStart` | start | Iniciar servidor LSP manualmente |
| `:LspStop` | stop | Detener servidor LSP |
| `:LspRestart` | restart | Reiniciar servidor LSP |
| `:LspLog` | log | Ver log de LSP |

---

## 2. Telescope 🔌 (requiere telescope.nvim)

### Keymaps de la comunidad

> Estos keymaps son convención de la comunidad. Debes configurarlos en tu `init.lua`.

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `<leader>ff` | find_files | Buscar archivos |
| `<leader>fg` | live_grep | Live grep (buscar en texto) |
| `<leader>fb` | buffers | Buffers abiertos |
| `<leader>fh` | help_tags | Help tags |
| `<leader>fr` | oldfiles | Archivos recientes |
| `<leader>fc` | commands | Comandos |
| `<leader>fs` | grep_string | Buscar string (palabra bajo cursor) |
| `<leader>fd` | diagnostics | Diagnósticos |
| `<leader>fm` | marks | Marcas |
| `<leader>fk` | keymaps | Keymaps |
| `<leader>f/` | current_buffer_fuzzy_find | Búsqueda en buffer actual |
| `<leader>f:` | command_history | Historial de comandos |
| `<leader>f"` | registers | Registros |
| `<leader>fj` | jumplist | Jump list |
| `<leader>ft` | builtin | Buscar todo (multi) |
| `<leader>fp` | pickers | Mostrar todos los pickers |

### Comandos `:Telescope`

| Comando | Equivalente |
|---------|-------------|
| `:Telescope find_files` | `<leader>ff` |
| `:Telescope live_grep` | `<leader>fg` |
| `:Telescope buffers` | `<leader>fb` |
| `:Telescope help_tags` | `<leader>fh` |
| `:Telescope oldfiles` | `<leader>fr` |
| `:Telescope commands` | `<leader>fc` |
| `:Telescope diagnostics` | `<leader>fd` |
| `:Telescope git_files` | Archivos git |
| `:Telescope git_branches` | Ramas git |
| `:Telescope git_commits` | Commits git |
| `:Telescope git_status` | Estado git |
| `:Telescope lsp_references` | = gr |
| `:Telescope lsp_definitions` | = gd |
| `:Telescope lsp_implementations` | = gi |
| `:Telescope lsp_document_symbols` | Símbolos del documento |
| `:Telescope lsp_workspace_symbols` | Símbolos del workspace |
| `:Telescope lsp_dynamic_workspace_symbols` | Símbolos dinámicos |
| `:Telescope lsp_diagnostics` | Diagnósticos LSP |
| `:Telescope treesitter` | Árbol sintáctico |
| `:Telescope man_pages` | Man pages |
| `:Telescope colorscheme` | Colores |
| `:Telescope resume` | Reanudar último picker |
| `:Telescope pickers` | Listar pickers |

### Dentro de Telescope (picker abierto)

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `C-j` / `C-k` | next/prev | Siguiente / Anterior resultado |
| `C-n` / `C-p` | next/prev | Alternativo (siguiente / anterior) |
| `C-v` | vsplit | Abrir en split vertical |
| `C-x` | hsplit | Abrir en split horizontal |
| `C-t` | tab | Abrir en nueva tab |
| `Tab` | toggle | Seleccionar/deseleccionar (multiselect) |
| `C-q` | quickfix | Enviar selección a quickfix |
| `Esc` / `C-c` | close | Cerrar |
| `?` | help | Ayuda de keymaps de Telescope |
| `C-u` | clear | Limpiar input |
| `C-d` / `C-u` | scroll | Scroll down / up en preview |
| `C-f` / `C-b` | scroll | Scroll forward / backward en preview |
| `C-/` | show | Mostrar keymaps de Telescope |
| `<C-r>n` | normal | Cambiar a modo normal en Telescope |
| `C-s` | split | Abrir en split horizontal |
| `<C-s>` | hsplit | Abrir en split horizontal |

---

## 3. Terminal ■ (built-in NeoVim)

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `:term` | terminal | Abrir terminal en buffer |
| `:split term://bash` | terminal | Terminal en split horizontal |
| `:vsplit term://bash` | terminal | Terminal en split vertical |
| `i` / `a` | insert | Entrar en modo terminal (insert) |
| `C-\ C-n` | normal | Salir de modo terminal a Normal |
| `<C-w>N` | normal | Alternativo: salir a Normal |
| `<C-w>hjkl` | move | Navegar entre terminal y otras ventanas |
| `<C-w>w` | next | Siguiente ventana desde terminal |
| `<C-w>c` | close | Cerrar terminal |
| `<C-w>q` | quit | Cerrar terminal |
| `:q` | quit | Cerrar el buffer de terminal |
| `:terminal` | — | = `:term` |
| `:set shell=/bin/bash` | shell | Cambiar shell por defecto |
| `:let $TERM='xterm-256color'` | term | Setear variable TERM |

---

## 4. NeoVim Built-in

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `:checkhealth` | health | Diagnóstico del sistema |
| `:checkhealth provider` | provider | Diagnóstico de providers |
| `:checkhealth lsp` | lsp | Diagnóstico de LSP |
| `:Inspect` | inspect | Inspeccionar highlight bajo cursor |
| `:InspectTree` | tree | Inspeccionar árbol sintáctico |
| `:TSInstall <lang>` | treesitter | Instalar parser treesitter |
| `:TSModuleInfo` | module | Info de módulos treesitter |
| `:TSUpdate` | update | Actualizar parsers treesitter |
| `:TSInstallInfo` | info | Listar parsers disponibles |
| `:TSPlaygroundToggle` | playground | Alternar playground (si instalado) |
| `:TSBufEnable` | enable | Habilitar treesitter en buffer |
| `:TSBufDisable` | disable | Deshabilitar treesitter en buffer |
| `:messages` | messages | Ver mensajes/log recientes |
| `:messages clear` | clear | Limpiar mensajes |
| `:registers` | registers | Ver registros |
| `:marks` | marks | Ver marcas |
| `:jumps` | jumps | Ver jump list |
| `:changes` | changes | Ver change list |
| `:args` | args | Ver argumentos de línea de comandos |
| `:argadd` | argadd | Agregar archivo a args |
| `:argdo` | argdo | Ejecutar comando en todos los args |
| `:oldfiles` | oldfiles | Ver archivos recientes |
| `:browse oldfiles` | browse | Navegar archivos recientes |
| `:Man` | man | Ver man pages |
| `:make` | make | Ejecutar make |
| `:grep` | grep | Ejecutar grep (vimgrep) |
| `:vimgrep` | vimgrep | grep interno |
| `:copen` | quickfix | Abrir ventana quickfix |
| `:cnext` / `:cprev` | quickfix | Siguiente / Anterior en quickfix |
| `:lopen` | location | Abrir ventana location list |
| `:lnext` / `:lprev` | location | Siguiente / Anterior en location list |
| `:terminal` | terminal | = `:term` |
| `:suspend` | suspend | Suspender Vim (fg para volver) |

---

## 5. Treesitter ■ (built-in NeoVim)

> Treesitter es built-in en NeoVim pero requiere instalar parsers.

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `:TSInstall <lang>` | install | Instalar parser para `<lang>` |
| `:TSUpdate` | update | Actualizar todos los parsers |
| `:TSInstallInfo` | info | Listar parsers disponibles |
| `:TSModuleInfo` | module | Info de módulos activos |
| `:TSBufEnable` | enable | Habilitar en buffer |
| `:TSBufDisable` | disable | Deshabilitar en buffer |
| `:InspectTree` | inspect | Inspeccionar árbol sintáctico |
| `:TSPlaygroundToggle` | playground | Alternar playground |
| `:TSHighlightCapturesUnderCursor` | capture | Ver capture bajo cursor |
| `:EditQuery` | query | Editar query treesitter |

---

## A. Notas

- **LSP**: los bindings como `gd`, `K`, etc. son los que `nvim-lspconfig` configura por defecto. Si usas kickstart.nvim o LazyVim, vienen preconfigurados.
- **Telescope**: los keymaps con `<leader>` son convención de la comunidad, no vienen por defecto. Debes configurarlos en tu `init.lua`.
- **Terminal**: `C-\ C-n` sale de modo terminal. Es universal en NeoVim, no requiere configuración.
- **Treesitter**: built-in en NeoVim pero requiere instalar parsers con `:TSInstall`.
- **`<leader>`**: por defecto es `\` (backslash). Comúnmente remapeado a `Space`.
- **LazyVim**: si usas LazyVim, la mayoría de estos bindings ya están configurados.
- **kickstart.nvim**: configura Telescope + LSP + Treesitter out-of-the-box.
- **Mason**: gestor de servidores LSP (si lo usas, `:Mason` para abrir el dashboard).
