# Git & GitHub CLI — Comandos Esenciales (Fuente de Verdad)

> Enfoque: **profesional y competente**. Comandos para el uso diario.
> Convención: `[]` = opcional, `<>` = requerido, `gh` = GitHub CLI
> Íconos: ★ = esencial — comandos que usás todos los días

---

## 1. Setup & Colaboración

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `git init` | init | Inicializar repositorio en el directorio actual |
| `git clone <url>` | clone | Clonar repositorio remoto |
| `git remote -v` | remote | Ver repositorios remotos configurados |
| `git remote add origin <url>` | remote | Agregar repositorio remoto |
| `git fetch` | fetch | Traer cambios del remoto sin mergear |
| `git pull` | pull | `fetch` + `merge` — traer y fusionar |
| `git push` | push | Subir commits al remoto |
| `git push -u origin <branch>` | push | Subir y trackear rama (1era vez) |
| `git fetch --prune` | fetch | Limpiar referencias a ramas remotas eliminadas |

---

## 2. Cambios Locales — El ciclo diario

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `git status` | status | Ver estado del working tree |
| `git add <file>` | stage | Agregar archivo al staging |
| `git add .` | stage | Agregar todo al staging |
| `git add -p` | stage | Staging interactivo por trozos |
| `git commit -m "<msg>"` | commit | Commit con mensaje inline |
| `git commit -am "<msg>"` | commit | `add` + `commit` (solo tracked files) |
| `git commit --amend` | commit | Modificar el último commit (mensaje o contenido) |
| `git diff` | diff | Diferencias sin staged |
| `git diff --staged` | diff | Diferencias en staging |
| `git restore <file>` | restore | Descartar cambios locales en archivo |
| `git rm <file>` | rm | Eliminar archivo y stagiar la eliminación |

---

## 3. Branching

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `git branch` | branch | Listar ramas locales |
| `git branch <name>` | branch | Crear rama nueva |
| `git branch -d <name>` | branch | Eliminar rama (seguro) |
| `git branch -D <name>` | branch | Forzar eliminación de rama |
| `git branch -m <old> <new>` | branch | Renombrar rama |
| `git switch <name>` | switch | Cambiar a otra rama |
| `git switch -c <name>` | switch | Crear y cambiar a nueva rama |
| `git checkout <name>` | checkout | Cambiar a otra rama (clásico) |
| `git checkout -b <name>` | checkout | Crear y cambiar (clásico) |
| `git merge <name>` | merge | Fusionar rama a la actual |
| `git merge --no-ff <name>` | merge | Fusionar sin fast-forward |

---

## 4. Historial

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `git log` | log | Historial completo de commits |
| `git log --oneline` | log | Historial compacto (1 línea x commit) |
| `git log --oneline --graph --decorate` | log | Vista con árbol y referencias |
| `git log -p` | log | Log con diff de cada commit |
| `git log --stat` | log | Log con archivos modificados |
| `git log --author="<name>"` | log | Filtrar por autor |
| `git show <hash>` | show | Ver cambios de un commit específico |
| `git diff <hash>..<hash>` | diff | Comparar dos commits |
| `git blame <file>` | blame | Quién cambió cada línea |
| `git shortlog -sn` | shortlog | Resumen de commits por autor |

---

## 5. Deshacer — Corregir errores

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `git reset <file>` | reset | Sacar archivo del staging (sin perder cambios) |
| `git reset HEAD~1` | reset | Deshacer último commit (cambios quedan sin staged) |
| `git reset --soft HEAD~1` | reset | Deshacer commit, cambios quedan staged |
| `git reset --hard HEAD~1` | reset | Deshacer commit + descartar cambios |
| `git revert <hash>` | revert | Crear commit que deshace otro |
| `git stash push -m "<msg>"` | stash | Guardar cambios temporales |
| `git stash list` | stash | Listar stashes guardados |
| `git stash pop` | stash | Recuperar stash y eliminarlo |
| `git stash apply` | stash | Recuperar stash sin eliminarlo |
| `git stash drop` | stash | Eliminar stash específico |
| `git clean -n` | clean | Vista previa de archivos a eliminar |
| `git clean -f` | clean | Eliminar archivos no trackeados |
| `git reflog` | reflog | Historial de movimientos de HEAD |

---

## 6. GitHub CLI — PRs, Issues, Code Review

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `gh auth login` | auth | Autenticarse en GitHub |
| `gh auth status` | auth | Ver estado de autenticación |
| `gh repo create` | repo | Crear repositorio en GitHub |
| `gh repo fork` | repo | Forkear repositorio |
| `gh issue create` | issue | Crear issue |
| `gh issue list` | issue | Listar issues abiertos |
| `gh issue view <n>` | issue | Ver issue en terminal |
| `gh issue close <n>` | issue | Cerrar issue |
| `gh pr create` | pr | Crear PR desde la rama actual |
| `gh pr list` | pr | Listar PRs abiertos |
| `gh pr view <n>` | pr | Ver PR en terminal |
| `gh pr checkout <n>` | pr | Checkout local de un PR |
| `gh pr review <n>` | pr | Aprobar/solicitar cambios en PR |
| `gh pr merge <n>` | pr | Mergear PR |
| `gh pr close <n>` | pr | Cerrar PR sin mergear |

---

## 7. Avanzado — Rebase, Cherry-pick, Config

| Comando | Acción | Descripción |
|---------|--------|-------------|
| `git rebase <branch>` | rebase | Rebase sobre otra rama |
| `git rebase -i HEAD~N` | rebase | Rebase interactivo (squash, edit, reword) |
| `git rebase --continue` | rebase | Continuar rebase tras resolver conflicto |
| `git rebase --abort` | rebase | Cancelar rebase |
| `git cherry-pick <hash>` | cherry-pick | Aplicar commit específico |
| `git tag` | tag | Listar tags |
| `git tag -a <v> -m "<msg>"` | tag | Crear tag anotado |
| `git push --tags` | push | Subir tags al remoto |
| `git config --global user.name "<n>"` | config | Configurar nombre |
| `git config --global user.email "<e>"` | config | Configurar email |
| `git config --global core.editor <cmd>` | config | Editor por defecto |
| `git config --list` | config | Ver toda la configuración |
| `git config --global alias.<n> <cmd>` | config | Crear alias personalizado |

---

## A. Quick Start — Primeros pasos

```bash
git init           # Iniciar repo
git add .          # Staging de todo
git commit -m "msg" # Commit inicial
git remote add origin <url>  # Conectar remoto
git push -u origin main      # Subir código
```

---

## B. Troubleshooting — Problemas comunes

| Problema | Solución |
|----------|----------|
| Hice `commit` y me faltó un archivo | `git add <file>` → `git commit --amend` |
| Commiteé en la rama equivocada | `git reset HEAD~1` → `git switch <rama>` → `git cherry-pick` |
| Quiero deshacer un commit que ya pusheé | `git revert <hash>` (no usar `reset` en commits públicos) |
| Conflictos en merge/rebase | Resolver archivos → `git add` → `git merge --continue` o `git rebase --continue` |
| Perdí cambios con `reset --hard` | `git reflog` → buscar el hash anterior → `git reset --hard <hash>` |
| `git push` rechazado | `git pull --rebase` primero (traer cambios y aplicar encima) |
| Trabajo a medias y necesito cambiar de rama | `git stash push -m "WIP"` → `git switch <rama>` → después `git stash pop` |

---

## C. Conceptos — Áreas de Git

```text
Working Tree    →    Staging (Index)    →    Local Repo    →    Remote Repo
(archivos)           (git add)               (git commit)        (git push)
```

- **HEAD**: puntero al commit actual (la rama donde estás parado)
- **Working Tree**: tus archivos en disco (modificados, no trackeados)
- **Staging**: área intermedia donde preparás qué va en el próximo commit
- **Local Repo**: commits que ya están en tu `.git` pero no en GitHub
- **Remote Repo**: GitHub (u otro servidor)

---

## D. Notas

- Los comandos de esta guía son los que un dev profesional usa en el día a día.
- Para explorar opciones de cualquier comando: `git <cmd> --help`.
- Para una referencia completa: `git help --all`.
- GitHub CLI (`gh`) requiere autenticación inicial: `gh auth login`.
- `gh pr create` asume que ya tenés una rama con commits para pushear.
- Para commits públicos (ya pusheados): siempre usar `revert`, nunca `reset`.
