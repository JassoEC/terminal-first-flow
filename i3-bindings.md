# i3 — Default Key Bindings (Fuente de Verdad)

> Modificador por defecto: **`$mod`** = Super (Windows) o `Alt`
> Depende de la distribución: `Mod4` = Super, `Mod1` = Alt
> Convención: `S-` = Shift, `C-` = Ctrl
> `$mod` + flecha también funciona con `h` `j` `k` `l` `;` (vim-keys)

---

## 1. Gestión de Ventanas

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `$mod Enter` | `exec terminal` | Abre una terminal (por defecto: i3-sensible-terminal) |
| `$mod q` | `kill` | Cierra la ventana enfocada |
| `$mod d` | `exec dmenu_run` | Lanzador de aplicaciones (dmenu / rofi) |
| `$mod f` | `fullscreen toggle` | Alterna pantalla completa |

---

## 2. Navegación

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `$mod ←↓↑→` / `$mod h j k l ;` | `focus` | Mover foco en la dirección indicada |
| `$mod Space` | `focus toggle` | Alterna foco entre ventanas flotantes y aneladas |
| `$mod a` | `focus parent` | Foco al contenedor padre |
| `$mod 0` … `$mod 9` | `workspace N` | Cambia al workspace con número N |
| `$mod Shift+0` … `$mod Shift+9` | `move container to workspace N` | Mueve la ventana al workspace N |

---

## 3. Mover y Redimensionar

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `$mod Shift+←↓↑→` / `$mod Shift+h j k l ;` | `move` | Mueve la ventana en la dirección indicada |
| `$mod r` | `mode resize` | Entra en modo redimensionar |
| (en resize) `←↓↑→` / `h j k l ;` | `resize grow/shrink` | Redimensiona en esa dirección |
| (en resize) `Esc` / `Enter` / `$mod r` | `mode default` | Sale del modo resize |
| `$mod Shift+f` | — | Alterna no-pantalla completa (ventana flotante) |

---

## 4. Layouts

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `$mod e` | `layout toggle split` | Alterna entre orientaciones (split h/v) |
| `$mod s` | `layout stacking` | Apila las ventanas verticalmente |
| `$mod w` | `layout tabbed` | Muestra ventanas como pestañas |
| `$mod h` | `split h` | La próxima división será horizontal |
| `$mod v` | `split v` | La próxima división será vertical |

---

## 5. Ventanas Flotantes y Scratchpad

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `$mod Shift+Space` | `floating toggle` | Alterna la ventana entre anelada y flotante |
| `$mod arrastrar` | — | Mueve ventana flotante (clic izquierdo + arrastrar) |
| `$mod clic derecho` | — | Redimensiona ventana flotante (clic en esquina) |
| `$mod Shift+Enter` | `move —to-scratchpad` | Mueve la ventana al scratchpad |
| `$mod minus` | `scratchpad show` | Muestra/oculta el scratchpad |

---

## 6. Sistema

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `$mod Shift+c` | `reload` | Recarga el archivo de configuración |
| `$mod Shift+r` | `restart` | Reinicia i3 en su lugar (sin cerrar apps) |
| `$mod Shift+e` | `exit` | Sale de i3 (pide confirmación) |
| `$mod Shift+x` | `exec i3lock` | Bloquea la pantalla (si i3lock está instalado) |

---

## A. Quick Start — Primeros pasos

| Atajo | Por qué |
|-------|---------|
| `$mod Enter` | Abre una terminal para empezar a trabajar |
| `$mod d` | Lanza aplicaciones sin usar el ratón |
| `$mod ←↓↑→` | Navega entre ventanas abiertas |
| `$mod 1-9` | Cambia entre workspaces |
| `$mod Shift+q` | Cierra la ventana activa |
| `$mod Shift+e` | Sale de i3 (al terminar) |

## B. Troubleshooting

| Problema | Solución |
|----------|----------|
| No sé qué `$mod` tengo | Prueba `Mod4` (Super) y `Mod1` (Alt). `$mod` se define al inicio del config |
| No funciona `$mod d` | Verifica que `dmenu` o `rofi` esté instalado: `sudo apt install dmenu` |
| i3 no responde | `Ctrl+Mod4+Shift+r` (alternativa a `$mod Shift+r` incluso si config está roto) |
| Quiero cambiar `$mod` | En `~/.config/i3/config`: `set $mod Mod1` para `Alt`, `set $mod Mod4` para Super |
| Las apps flotan solas | Configura `for_window [class="App"] floating enable` en el config |
| Pantalla negra al salir de i3 | i3 no mata las apps; usa `exec i3-msg exit` para salir limpiamente |

## C. Configuración de i3

- **Archivo:** `~/.config/i3/config` (o `~/.i3/config` legacy)
- **Recargar:** `$mod Shift+c` (no necesita reiniciar la sesión)
- **Atajos nuevos:** `bindsym $mod+<key> exec <comando>`
- **Asignar a workspace:** `assign [class="Firefox"] → 2`
- **Variables:** `set $nombre valor`
- **Modos:** `mode "nombre" { bindsym ... }` para modos personalizados
- **Barra:** `bar { status_command i3status }` (o i3blocks, polybar, etc.)
- **Gaps:** `for_window [class=".*"] border pixel 0` + `gaps inner N`
- **$mod por defecto:** `Mod4` (Super/Windows). Cambia con `set $mod Mod1` (Alt)

## D. Convenciones

| Símbolo | Significado |
|---------|-------------|
| `$mod` | Modificador principal (Super o Alt según configuración) |
| `←↓↑→` | Flechas del cursor |
| `h j k l ;` | Vim-keys (h=izquierda, j=abajo, k=arriba, l=derecha, ;=siguiente) |
| `S-` | Shift |
| `C-` | Ctrl |
