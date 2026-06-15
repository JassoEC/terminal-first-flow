# tmux — Default Key Bindings (Fuente de Verdad)

> Prefijo por defecto: **`Ctrl+b`** (representado como `PREFIX`)
> Modo copia: **Emacs** (por defecto)
> Convención: `C-` = Ctrl, `M-` = Alt, `S-` = Shift, `PREFIX` = Ctrl+b

---

## 1. Sesiones y Ventanas — Gestión

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `PREFIX c` | `new-window` | Crea una nueva ventana |
| `PREFIX ,` | `rename-window` | Renombra la ventana actual (prompt) |
| `PREFIX $` | `rename-session` | Renombra la sesión actual (prompt) |
| `PREFIX &` | `kill-window` | Mata la ventana actual (pide confirmación) |
| `PREFIX .` | `move-window` | Mueve la ventana a otro índice (prompt) |
| `PREFIX d` | `detach-client` | Desconecta el cliente (la sesión sigue viva) |
| `PREFIX D` | `choose-client` | Muestra lista de clientes para desconectar |
| `PREFIX s` | `choose-tree -Zs` | Árbol interactivo de sesiones y ventanas |
| `PREFIX w` | `choose-tree -Zw` | Árbol interactivo de ventanas |
| `PREFIX L` | `switch-client -l` | Va al último cliente usado |
| `PREFIX (` | `switch-client -p` | Cliente anterior |
| `PREFIX )` | `switch-client -n` | Cliente siguiente |

---

## 2. Ventanas — Navegación

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `PREFIX 0` … `PREFIX 9` | `select-window -t :=N` | Va a la ventana con índice N |
| `PREFIX n` | `next-window` | Ventana siguiente |
| `PREFIX p` | `previous-window` | Ventana anterior |
| `PREFIX l` | `last-window` | Última ventana visitada (toggle) |
| `PREFIX '` | `select-window -t` | Prompt para ir a ventana por índice |
| `PREFIX f` | `find-window` | Busca ventana por nombre (prompt) |
| `PREFIX M-n` | `next-window -a` | Siguiente ventana con actividad/alerta |
| `PREFIX M-p` | `previous-window -a` | Anterior ventana con actividad/alerta |
| `PREFIX C-o` | `rotate-window` | Rota las posiciones de los paneles adelante |
| `PREFIX M-o` | `rotate-window -D` | Rota las posiciones de los paneles atrás |

---

## 3. Paneles — Dividir y Layout

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `PREFIX "` | `split-window` | Divide horizontalmente (panel arriba/abajo) |
| `PREFIX %` | `split-window -h` | Divide verticalmente (panel izquierda/derecha) |
| `PREFIX !` | `break-pane` | Mueve el panel actual a una ventana nueva |
| `PREFIX z` | `resize-pane -Z` | Maximiza/restaura el panel (zoom toggle) |
| `PREFIX Space` | `next-layout` | Siguiente layout predefinido |
| `PREFIX E` | `select-layout -E` | Menú interactivo para elegir layout |
| `PREFIX M-1` | `select-layout even-horizontal` | Layout: filas iguales |
| `PREFIX M-2` | `select-layout even-vertical` | Layout: columnas iguales |
| `PREFIX M-3` | `select-layout main-horizontal` | Layout: panel grande arriba, resto abajo |
| `PREFIX M-4` | `select-layout main-vertical` | Layout: panel grande izquierda, resto derecha |
| `PREFIX M-5` | `select-layout tiled` | Layout: mosaico uniforme |

---

## 4. Paneles — Navegación

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `PREFIX o` | `select-pane -t :.+` | Siguiente panel en orden numérico |
| `PREFIX ;` | `last-pane` | Último panel activo |
| `PREFIX q` | `display-panes` | Muestra números de panel (pulsa el nº para ir) |
| `PREFIX ↑` | `select-pane -U` | Panel de arriba |
| `PREFIX ↓` | `select-pane -D` | Panel de abajo |
| `PREFIX ←` | `select-pane -L` | Panel izquierdo |
| `PREFIX →` | `select-pane -R` | Panel derecho |
| `PREFIX {` | `swap-pane -U` | Intercambia con el panel de arriba |
| `PREFIX }` | `swap-pane -D` | Intercambia con el panel de abajo |
| `PREFIX m` | `select-pane -m` | Marca el panel actual |
| `PREFIX M` | `select-pane -M` | Limpia la marca del panel |
| `PREFIX x` | `kill-pane` | Mata el panel actual (pide confirmación) |

---

## 5. Paneles — Redimensionar

> Los bindings con `-r` son **repeatables**: puedes mantener `PREFIX` pulsado y repetir la tecla sin soltar Ctrl/Alt.

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `PREFIX C-↑` | `resize-pane -U` | 1 línea más arriba |
| `PREFIX C-↓` | `resize-pane -D` | 1 línea más abajo |
| `PREFIX C-←` | `resize-pane -L` | 1 columna más a la izquierda |
| `PREFIX C-→` | `resize-pane -R` | 1 columna más a la derecha |
| `PREFIX M-↑` | `resize-pane -U 5` | 5 líneas más arriba |
| `PREFIX M-↓` | `resize-pane -D 5` | 5 líneas más abajo |
| `PREFIX M-←` | `resize-pane -L 5` | 5 columnas más a la izquierda |
| `PREFIX M-→` | `resize-pane -R 5` | 5 columnas más a la derecha |
| `PREFIX S-↑` | `refresh-client -U 10` | Scroll vista 10px arriba |
| `PREFIX S-↓` | `refresh-client -D 10` | Scroll vista 10px abajo |
| `PREFIX S-←` | `refresh-client -L 10` | Scroll vista 10px izquierda |
| `PREFIX S-→` | `refresh-client -R 10` | Scroll vista 10px derecha |
| `PREFIX Delete` | `refresh-client -c` | Limpia el scrollback del panel |

### Comandos de redimensionamiento (desde `PREFIX :`)

| Comando | Descripción |
|---------|-------------|
| `resize-pane -U` | 1 línea más arriba |
| `resize-pane -D` | 1 línea más abajo |
| `resize-pane -L` | 1 columna más a la izquierda |
| `resize-pane -R` | 1 columna más a la derecha |
| `resize-pane -U 5` | 5 líneas más arriba |
| `resize-pane -D 5` | 5 líneas más abajo |
| `resize-pane -L 5` | 5 columnas más a la izquierda |
| `resize-pane -R 5` | 5 columnas más a la derecha |
| `resize-pane -y 10` | Fijar altura a 10 líneas |
| `resize-pane -x 40` | Fijar ancho a 40 columnas |
| `resize-pane -Z` | Zoom / Unzoom panel |
| `resize-pane -t 2 -U` | Redimensionar panel #2 arriba |

---

## 6. Copy, Paste & Buffers

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `PREFIX [` | `copy-mode` | Entra al modo copia/scroll (Emacs) |
| `PREFIX ]` | `paste-buffer -p` | Pega el contenido del buffer más reciente |
| `PREFIX PgUp` | `copy-mode -u` | Entra a copy-mode y hace scroll up |
| `PREFIX =` | `choose-buffer -Z` | Menú interactivo para elegir buffer |
| `PREFIX #` | `list-buffers` | Muestra lista de buffers |
| `PREFIX -` | `delete-buffer` | Borra el buffer más reciente |

### Comandos desde prompt (`PREFIX :`)

```
list-buffers   →  muestra todos los buffers
capture-pane   →  captura el contenido del panel al buffer
save-buffer <file>  →  guarda el buffer en un archivo
choose-buffer  →  elegir buffer interactivamente
```

> El buffer de tmux es independiente del portapapeles del sistema. Para sincronizar:
> ```
> set -g set-clipboard on
> ```

---

## 7. Copy-Mode (Emacs) — Referencia Completa

> Entras con `PREFIX [` y sales con `Escape` / `q`. Todas las teclas de esta sección se pulsan **dentro** del modo copia, sin prefijo.

### 7.1 Navegación

#### Movimiento básico

| Atajo | Movimiento |
|-------|------------|
| `C-b` / `←` | Carácter a la izquierda |
| `C-f` / `→` | Carácter a la derecha |
| `C-p` / `↑` | Línea anterior (arriba) |
| `C-n` / `↓` | Línea siguiente (abajo) |

#### Línea

| Atajo | Movimiento |
|-------|------------|
| `C-a` / `Home` | Inicio de línea |
| `C-e` / `End` | Fin de línea |
| `C-k` | Copia desde el cursor hasta el fin de línea y sale |

#### Palabras

| Atajo | Movimiento |
|-------|------------|
| `M-b` | Palabra anterior |
| `M-f` | Final de palabra siguiente |

#### Páginas y pantalla

| Atajo | Movimiento |
|-------|------------|
| `C-v` / `Space` / `PgDn` | Página abajo |
| `M-v` / `PgUp` | Página arriba |
| `M-Up` / `M-Down` | Media página arriba / abajo |
| `C-Up` / `C-Down` | 1 línea arriba / abajo (scroll fino) |
| `M-R` | Principio de la pantalla (top line) |
| `M-r` | Mitad de la pantalla (middle line) |

#### Historial

| Atajo | Movimiento |
|-------|------------|
| `M-<` | Principio del historial completo |
| `M->` | Final del historial completo |
| `g` | Prompt: "goto line" — ir a línea específica |

#### Bloques

| Atajo | Movimiento |
|-------|------------|
| `M-m` | Retrocede al primer carácter no-espacio de la línea |
| `M-{` | Párrafo anterior (línea en blanco) |
| `M-}` | Párrafo siguiente |
| `M-C-b` | Paréntesis/llave/corchete anterior correspondiente |
| `M-C-f` | Paréntesis/llave/corchete siguiente correspondiente |

### 7.2 Selección y Copia

| Atajo | Acción |
|-------|--------|
| `C-Space` | Inicia la selección (ancla) |
| `C-g` | Limpia la selección actual |
| `R` | Alterna entre selección normal y rectangular |
| `X` | Marca una posición (set-mark) |
| `M-x` | Salta a la marca (jump-to-mark) |
| `C-w` | Copia la selección al buffer y sale |
| `M-w` | Copia la selección al buffer y sale |
| `C-k` | Copia desde el cursor al fin de línea y sale |
| `Escape` / `q` | Sale sin copiar |
| `C-c` | Sale sin copiar |

### 7.3 Búsqueda

| Atajo | Acción | Nota |
|-------|--------|------|
| `C-r` | Búsqueda incremental hacia arriba | Prompt interactivo, busca mientras escribes |
| `C-s` | Búsqueda incremental hacia abajo | Prompt interactivo |
| `n` | Siguiente coincidencia (misma dirección) | |
| `N` | Coincidencia anterior (dirección opuesta) | |
| `r` | Refresca el panel desde la salida actual | Útil si el contenido cambió |

### 7.4 Jump (salto por carácter)

| Atajo | Acción |
|-------|--------|
| `f <char>` | Salta hacia adelante al carácter `<char>` |
| `F <char>` | Salta hacia atrás al carácter `<char>` |
| `t <char>` | Salta hacia adelante hasta justo antes de `<char>` |
| `T <char>` | Salta hacia atrás hasta justo después de `<char>` |
| `;` | Repite el último jump en la misma dirección |
| `,` | Repite el último jump en dirección opuesta |

### 7.5 Ratón (mouse)

| Gestos | Acción |
|--------|--------|
| Arrastrar con botón izq. | Selecciona y copia automáticamente al soltar |
| Doble click | Selecciona la palabra completa y copia |
| Triple click | Selecciona la línea completa y copia |
| Scroll (rueda) | Navega el historial (5 líneas por tick) |

### 7.6 Teclas de repetición

| Atajo | Acción |
|-------|--------|
| `M-1` … `M-9` | Prompt para repetir el próximo movimiento N veces |

---

## 8. Comandos Útiles (desde `PREFIX :`)

| Comando | Descripción |
|---------|-------------|
| `set -g mouse on` | Activa el ratón |
| `set -g mode-keys vi` | Cambia a modo VI en copy-mode |
| `set -g set-clipboard on` | Sincroniza buffer con clipboard del sistema |
| `setw -g mode-keys vi` | Lo mismo pero para la ventana actual |
| `bind-key -T copy-mode C-v send -X page-down` | Personalizar bindings de copy-mode |
| `list-buffers` | Muestra buffers almacenados |
| `capture-pane -S -` | Captura todo el historial del panel |
| `save-buffer buf.txt` | Guarda el buffer en un archivo |
| `choose-buffer` | Selecciona buffer interactivamente |
| `show-options -g` | Muestra todas las opciones globales |

---

## 9. Menús Contextuales (`PREFIX <` y `PREFIX >`)

### `PREFIX <` — Menú de ventana

```
Swap Left      l → swap-window -t:-1
Swap Right     r → swap-window -t:+1
Swap Marked    s → swap-window
Kill Window    X → kill-window
Respawn        R → respawn-window -k
Mark/Unmark    m → select-pane -m
Rename         n → rename-window
New After      w → new-window -a
New At End     W → new-window
```

### `PREFIX >` — Menú de panel

```
Horizontal Split   h → split-window -h
Vertical Split     v → split-window -v
Swap Up            u → swap-pane -U
Swap Down          d → swap-pane -D
Swap Marked        s → swap-pane
Kill Pane          X → kill-pane
Mark/Unmark        m → select-pane -m
Zoom/Unzoom        z → resize-pane -Z
Go To Top          < → send -X history-top
Go To Bottom       > → send -X history-bottom
Search Word       C-r → search-backward
Copy Word          c → set-buffer
Copy Line          l → set-buffer
```

---

## 10. Otros Atajos

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `PREFIX ?` | `list-keys -N` | Muestra todos los bindings activos |
| `PREFIX :` | `command-prompt` | Abre el prompt de comandos tmux |
| `PREFIX r` | `source-file ~/.tmux.conf` | Recarga la configuración |
| `PREFIX t` | `clock-mode` | Muestra un reloj digital en el panel |
| `PREFIX i` | `display-message` | Muestra información de la ventana actual |
| `PREFIX P` | `display-popup` | Abre un popup en el directorio del panel |
| `PREFIX C` | `customize-mode -Z` | Modo personalización de opciones |
| `PREFIX C-z` | `suspend-client` | Suspende tmux (volver con `fg`) |
| `PREFIX ~` | `show-messages` | Muestra mensajes del servidor tmux |

---

## 11. Workflows Rápidos

### Copiar una IP del log al portapapeles

```
PREFIX [         →  entrar a copy-mode
M-b M-b          →  retroceder 2 palabras
C-Space          →  iniciar selección
M-f              →  avanzar 1 palabra (selecciona IP)
C-w              →  copiar y salir
PREFIX ]         →  pegar el buffer
```

### Buscar un error y copiar la línea

```
PREFIX [         →  entrar a copy-mode
C-r              →  iniciar búsqueda hacia arriba
error            →  escribir el texto a buscar
Enter            →  confirmar búsqueda
n / N            →  navegar entre coincidencias
C-a              →  ir al inicio de la línea
C-Space          →  iniciar selección
C-e              →  ir al final de la línea
C-w              →  copiar y salir
```

### Dividir en 3 paneles y organizar

```
PREFIX "         →  split horizontal (2 paneles)
PREFIX %         →  split vertical del panel activo (3 paneles)
PREFIX M-5       →  layout tiled (mosaico)
PREFIX z         →  zoom sobre el panel que quieras enfocar
```

---

## 12. Notas

- Todos los bindings aquí listados son los **valores por defecto** de tmux. No requieren configuración adicional.
- Para ver tus bindings actuales en vivo: `PREFIX ?` o `tmux list-keys`
- Para buscar un binding específico por tecla: `PREFIX /` (tecla `/` dentro de `PREFIX`)
- Los bindings marcados como **repeatables** (`-r`) permiten mantener `PREFIX` y pulsar la tecla varias veces seguidas sin soltar.

---

## A. Quick Start — tmux sin tocar nada

### Primeros comandos (CLI)

```bash
tmux                    # nueva sesión anónima
tmux new -s nombre      # nueva sesión con nombre
tmux ls                 # listar sesiones activas
tmux attach -t nombre   # reenganchar a sesión
tmux kill-session -t n  # matar sesión
```

### Atajos esenciales (primer día)

| Contexto | Atajo | Por qué lo necesitas |
|----------|-------|---------------------|
| Nueva ventana | `PREFIX c` | Cada tarea distinta = ventana nueva |
| Navegar ventanas | `PREFIX n` / `p` | Alternar entre tareas abiertas |
| Split pane | `PREFIX "` / `%` | Ver 2 cosas simultáneamente |
| Zoom | `PREFIX z` | Enfocarte en un solo panel temporalmente |
| Copy mode | `PREFIX [` | Scrollear historial y copiar texto |
| Pegar | `PREFIX ]` | Insertar lo que copiaste |
| Detach | `PREFIX d` | Salir sin matar nada (la sesión sigue) |
| Ayuda | `PREFIX ?` | Cuando olvidas un atajo |

---

## B. Troubleshooting — solo defaults

| Problema | Síntoma | Solución con defaults |
|----------|---------|----------------------|
| No puedo scrollear | El scroll no funciona | `PREFIX [` entra a copy-mode. Ahí sí puedes scrollear con flechas/PgUp/PgDn |
| No puedo copiar con mouse | Click arrastra bordes en vez de seleccionar | Esto es normal en tmux. Usa `PREFIX [` → `C-Space` → mover → `C-w` |
| Clipboard del sistema no sincroniza | `PREFIX ]` pega cosas viejas | tmux tiene su propio buffer. Usa `PREFIX =` para elegir buffer, o `PREFIX #` para ver qué hay |
| Perdí la sesión | `tmux attach` dice "no sessions" | `tmux ls` para ver el nombre exacto. Luego `tmux attach -t nombre` |
| No puedo redimensionar paneles | Flechas sin prefijo no funcionan | Necesitas `PREFIX` + flechas. `C-↑/↓/←/→` para ±1, `M-↑/↓/←/→` para ±5 |
| Se cerró todo al cerrar la terminal | tmux murió al salir | Necesitas `PREFIX d` (detach) antes de cerrar la terminal. Así la sesión sobrevive |
| No sé en qué ventana estoy | Confusión con múltiples ventanas | La barra de estado abajo muestra `0:bash* 1:vim- 2:node`. El `*` es la activa |
| Olvidé el nombre de la sesión | `tmux ls` no la muestra | `tmux ls` lista todas. Si no aparece, no existe — crea una nueva con `tmux new -s nombre` |

---

## C. Conceptos — Sesión / Ventana / Panel

> tmux organiza tu trabajo en tres niveles jerárquicos. Pensarlo así te ahorra confusión:

```
Sesión (session) — tu "proyecto" o contexto
├── Ventana 0 (window) — una "pestaña"
│   ├── Panel 0 (pane) — división de la ventana
│   └── Panel 1 (pane) — otra división
├── Ventana 1 (window)
│   └── Panel 0 (pane)
└── Ventana 2 (window)
    ├── Panel 0
    ├── Panel 1
    └── Panel 2
```

| Nivel | Analogía | Persistencia | Comandos clave |
|-------|----------|--------------|----------------|
| **Sesión** | Tu escritorio completo | ✅ Sobrevive al cerrar terminal | `tmux new -s X`, `tmux attach -t X`, `PREFIX d` |
| **Ventana** | Una pestaña del navegador | ✅ Dentro de la sesión | `PREFIX c`, `PREFIX n/p`, `PREFIX 0-9` |
| **Panel** | Un split de la pantalla | ✅ Dentro de la ventana | `PREFIX "`, `PREFIX %`, `PREFIX z`, `PREFIX o` |

**Regla mnemotécnica:**
- Creas una **sesión** por proyecto (ej: `frontend`, `backend`, `infra`)
- Creas una **ventana** por tarea dentro del proyecto (ej: `editor`, `terminal`, `logs`)
- Divides en **paneles** cuando necesitas ver 2+ cosas a la vez (ej: `editor` + `tests`)
