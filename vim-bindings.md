# Vim — Default Key Bindings

> Modos: **Normal** (default), **Insert**, **Visual**, **Command-line**, **Replace**
> Convención: `C-` = Ctrl, `M-` = Alt, `S-` = Shift, `<leader>` = `\` (backslash por defecto)

---

## 1. Movimiento

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `h` / `j` / `k` / `l` | — | ← / ↓ / ↑ / → |
| `w` / `W` | word | Palabra adelante (puntuación / espacios) |
| `b` / `B` | back | Palabra atrás (puntuación / espacios) |
| `e` / `E` | end | Final de palabra (puntuación / espacios) |
| `0` / `^` / `$` | — | Inicio / 1er carácter / fin de línea |
| `gg` / `G` | — | Principio / Final del archivo |
| `{` / `}` | — | Párrafo anterior / siguiente |
| `f<char>` / `F<char>` | find | Adelante / Atrás al `<char>` |
| `t<char>` / `T<char>` | till | Hasta justo antes / después del `<char>` |
| `;` / `,` | repeat | Repetir jump / dirección opuesta |
| `%` | match | Paréntesis/llave/corchete correspondiente |
| `C-u` / `C-d` | scroll | Media página arriba / abajo |
| `zt` / `zz` / `zb` | — | Cursor arriba / centro / abajo de pantalla |
| `C-o` / `C-i` | jumplist | Posición anterior / siguiente |
| `g;` / `g,` | change-list | Cambio anterior / siguiente |
| `*` / `#` | word-search | Buscar palabra bajo cursor adelante / atrás |
| `g*` / `g#` | partial | Ídem sin word boundaries |
| `H` / `M` / `L` | screen | Primera / Media / Última línea visible |
| `ge` / `gE` | end-back | Palabra anterior al final |
| `(` / `)` | sentence | Sentencia anterior / siguiente |
| `|` / `n\|` | column | Ir a columna n |
| `]]` / `[[` | section | Sección siguiente / anterior |

---

## 2. Edición

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `i` / `I` | insert | Antes del cursor / inicio de línea |
| `a` / `A` | append | Después del cursor / fin de línea |
| `o` / `O` | open | Nueva línea abajo / arriba |
| `x` / `X` | delete | Borrar carácter bajo cursor / antes |
| `dd` | delete line | Borrar línea completa |
| `yy` / `Y` | yank | Copiar línea |
| `yw` / `y$` | yank | Copiar palabra / hasta fin de línea |
| `p` / `P` | put | Pegar después / antes |
| `u` / `C-r` | undo/redo | Deshacer / Rehacer |
| `.` | repeat | Repite el último cambio |
| `~` | toggle case | Cambia mayúsculas/minúsculas |
| `r<char>` | replace | Reemplaza carácter bajo cursor |
| `J` | join | Une la siguiente línea |
| `gJ` | join no-space | Une sin insertar espacio |
| `>>` / `<<` | indent | Indentar / Desindentar línea |
| `=` | auto-indent | Auto-indentar línea |
| `gg=G` | format file | Auto-indentar todo el archivo |
| `gu` / `gU` | case | Minúsculas / Mayúsculas |
| `C-a` / `C-x` | increment | Incrementar / Decrementar número |
| `g+` / `g-` | time-undo | Deshacer / Rehacer en base a tiempo |

---

## 3. Cambios Compuestos

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `cw` / `cW` | change word | Cambiar palabra |
| `ciw` / `ciW` | change inner | Cambiar "inner" palabra |
| `ci(` / `ci{` / `ci[` / `ci"` / `ci'` | change inside | Cambiar dentro de delimitadores |
| `ca(` / `ca{` / `ca[` / `ca"` / `ca'` | change around | Cambiar dentro + delimitadores |
| `c$` / `C` | change to end | Cambiar desde cursor hasta fin |
| `D` | delete to end | Borrar desde cursor hasta fin |
| `S` / `cc` | substitute | Borrar línea y entrar en Insert |
| `s` | substitute | Borrar carácter y entrar en Insert |
| `ct<char>` / `cf<char>` | till / find | Cambiar hasta / hasta e incluyendo |
| `gU` / `gu` | case | Mayúsculas / Minúsculas (con selección) |
| `R` | replace mode | Sobreescribir múltiples caracteres |

---

## 4. Visual Mode

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `v` | visual | Selección carácter a carácter |
| `V` | visual line | Selección por líneas |
| `C-v` | visual block | Selección rectangular |
| `gv` | reselect | Repetir última selección |
| `o` / `O` | corner | Alternar esquina de la selección |
| `gU` / `gu` | case | Mayúsculas / Minúsculas en selección |
| `>` / `<` | indent | Indentar / Desindentar selección |
| `=` | format | Auto-indentar selección |
| `J` | join | Unir líneas en selección |
| `y` | yank | Copiar selección |
| `d` / `x` | delete | Borrar selección |
| `c` | change | Cambiar selección |
| `r<char>` | replace | Reemplazar cada carácter |
| `!` | filter | Filtrar por comando externo |

---

## 5. Búsqueda y Reemplazo

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `/pattern` | search | Búsqueda hacia adelante |
| `?pattern` | search | Búsqueda hacia atrás |
| `n` / `N` | next/prev | Siguiente / Anterior coincidencia |
| `:noh` | no highlight | Quitar resaltado |
| `:%s/old/new/g` | substitute | Reemplazar en todo el archivo |
| `:%s/old/new/gc` | confirm | Reemplazar con confirmación |
| `:%g/pattern/cmd` | global | Ejecutar comando en líneas que coinciden |
| `:%v/pattern/cmd` | inverse | Ejecutar en líneas que NO coinciden |

---

## 6. Marcas y Registros

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `m{a-z}` | mark local | Marca en el archivo actual |
| `m{A-Z}` | mark global | Marca entre archivos |
| `'{mark}` | jump mark | Ir a la marca |
| `:marks` | list | Mostrar todas las marcas |
| `'{mark}` | line | Ir a la línea de la marca |
| `"{reg}` | register | Seleccionar registro |
| `"xyy` / `"xp` | — | Copiar/Pegar usando registro x |
| `q{reg}` | record | Graba macro en registro |
| `q` | stop | Detiene grabación |
| `@{reg}` | play | Ejecutar macro del registro |
| `@@` | repeat | Repetir última macro |
| `:reg` | list | Ver contenido de registros |
| `let @a='...'` | assign | Asignar texto a registro |

---

## 7. Ventanas (Splits)

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `C-w s` | split | Dividir horizontal |
| `C-w v` | vsplit | Dividir vertical |
| `C-w hjkl` | move | Ir a ventana izq/abajo/arriba/der |
| `C-w HJKL` | move far | Mover ventana a borde |
| `C-w =` | equalize | Igualar tamaños |
| `C-w _` | max height | Maximizar altura |
| `C-w \|` | max width | Maximizar ancho |
| `C-w q` | close | Cerrar ventana |
| `C-w o` | only | Cerrar todas menos la actual |
| `C-w r` / `R` | rotate | Rotar ventanas |
| `C-w t` | topleft | Ir a ventana top-left |
| `C-w p` | previous | Ir a ventana anterior |
| `C-w w` / `W` | next | Ir a ventana siguiente |
| `C-w c` | close | = C-w q |
| `C-w n` | new | Nueva ventana |
| `C-w T` | tab | Mover ventana a tab |

---

## 8. Tabs

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| `gt` / `gT` | next/prev | Siguiente / Anterior tab |
| `Ngt` | goto | Ir a tab número N |
| `:tabnew [file]` | new tab | Nueva tab |
| `:tabclose` | close | Cerrar tab actual |
| `:tabn` / `:tabp` | next/prev | = gt / gT |
| `:tabs` | list | Ver todas las tabs |
| `:tabm N` | move | Mover tab a posición N |
| `:tabdo cmd` | do | Ejecutar comando en todas las tabs |
| `:tabe file` | edit | Abrir archivo en nueva tab |
| `:tab split` | split | Abrir archivo en nueva tab |

---

## 9. Ex Commands

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `:w` | write | Guardar |
| `:q` | quit | Salir |
| `:wq` / `:x` | write+quit | Guardar y salir |
| `:q!` / `ZQ` | force quit | Salir sin guardar |
| `:e file` | edit | Abrir archivo |
| `:e!` | reload | Recargar (descartar cambios) |
| `:bn` / `:bp` | buffer next/prev | Siguiente/Anterior buffer |
| `:bd` | buffer delete | Cerrar buffer |
| `:ls` | list buffers | Listar buffers |
| `:b N` | buffer | Ir a buffer número N |
| `:set nu/nonu` | line numbers | Mostrar/Ocultar números |
| `:set hls/nohls` | highlight | Resaltar búsqueda on/off |
| `:set paste/nopaste` | paste | Modo pegado (sin auto-indent) |
| `:help` | help | Ayuda (C-] seguir links, C-t volver) |
| `:w file` | write | Guardar en archivo específico |
| `:r file` | read | Insertar contenido de archivo |
| `:r !cmd` | read shell | Insertar salida de comando |
| `:!cmd` | shell | Ejecutar comando en shell |
| `:sh` | shell | Abrir shell interactivo |

---

## A. Quick Start

| Atajo | Por qué |
|-------|---------|
| `i` | Empezar a escribir |
| `Esc` | Volver a Normal |
| `:w` | Guardar |
| `:q` | Salir |
| `h j k l` | Moverse sin flechas |
| `dd` / `yy` | Borrar/Copiar línea |
| `p` | Pegar |
| `u` | Deshacer |
| `/texto` | Buscar |
| `:help` | Ayuda |

---

## B. Troubleshooting

| Problema | Solución |
|----------|----------|
| No sé en qué modo estoy | Mira abajo: `-- NORMAL --` / `-- INSERT --` / `-- VISUAL --` |
| No puedo escribir | Estás en Normal o Visual. Pulsa `i` |
| No puedo salir | `:q!` (salir sin guardar), `:wq` (guardar y salir) |
| Pegué texto mal formateado | `:set paste`, pega, `:set nopaste` |
| La búsqueda resalta todo | `:noh` para limpiar |
| Cerré accidentalmente | `:e#` para reabrir el último archivo |
| Perdí cambios | `u` (undo) o `C-r` (redo) |

---

## C. Conceptos — Modos de Vim

| Modo | Cómo entrar | Cómo salir | Para qué |
|------|-------------|------------|----------|
| **Normal** | (default, `Esc`) | — | Navegar, borrar, buscar |
| **Insert** | `i` `I` `a` `A` `o` `O` | `Esc` | Escribir texto |
| **Visual** | `v` `V` `C-v` | `Esc` | Seleccionar texto |
| **Command** | `:` `/` `?` | `Esc` | Ejecutar comandos |
| **Replace** | `R` | `Esc` | Sobreescribir texto |

---

## D. Notas

- `<leader>` por defecto es `\` (backslash). Muchos setups lo remapean a `Space`.
- Todos los bindings son **defaults** de Vim. No requieren configuración.
- `C-w` en Ventanas = `Ctrl` + `w`. Es una combinación, no un prefijo como `PREFIX` en tmux.
