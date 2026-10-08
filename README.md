# Proyecto GitFlow - Despliegue DAW

Proyecto colaborativo realizado para practicar Git, GitFlow, GitHub, GitHub Pages y el trabajo en equipo mediante Pull Requests.

## Proyecto

**CanguPet** es una página web dedicada al cuidado de mascotas a domicilio. El proyecto ofrece información sobre los servicios de cuidado, artículos, opiniones, contacto, creación de cuenta y presentación de la empresa.

## Integrantes

- Cristina Fernández — [@CristinaFR8](https://github.com/CristinaFR8)
- Astrid Molina — [@molinaastrid833-spec](https://github.com/molinaastrid833-spec)
- Abdullah Riaz — [@abdullah1253-hub](https://github.com/abdullah1253-hub)

## Estructura del proyecto

- `index.html`: página de inicio.
- `conocenos.html`: página Conócenos.
- `servicio.html`: página de servicios.
- `contact.html`: página de contacto.
- `articulo.html`: página de artículos.
- `opiniones.html`: página de opiniones.
- `cuenta.html`: página de creación de cuenta.
- `estilos.css`: hoja de estilos común.
- `imagenes/`: imágenes y recursos gráficos del proyecto.
- `script.js`: JavaScript general del proyecto, si está presente.
- `servicios.js`: JavaScript relacionado con los servicios, si está presente.
- `opiniones.js`: JavaScript relacionado con las opiniones, si está presente.
- `README.md`: documentación del proyecto.
- `.gitignore`: archivos excluidos del control de versiones.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

## Organización del proyecto

El proyecto utiliza GitFlow para organizar el desarrollo mediante diferentes tipos de ramas:

- `main`: contiene la versión estable del proyecto y la versión publicada.
- `develop`: rama de integración donde se incorporan las funcionalidades terminadas.
- `feature/*`: ramas para desarrollar nuevas funcionalidades, creadas a partir de `develop`.
- `release/*`: ramas para preparar una nueva versión antes de integrarla en `main` y `develop`.
- `hotfix/*`: ramas para corregir errores de una versión publicada, creadas a partir de `main`.

## Flujo de trabajo

Las nuevas funcionalidades se desarrollan en ramas `feature/*` creadas a partir de `develop`.

Cuando una funcionalidad está terminada, se crea una Pull Request hacia `develop` para que otro integrante del equipo pueda revisar los cambios.

Las versiones se preparan mediante ramas `release/*` y se integran en `main` y `develop` mediante Pull Requests.

Las correcciones de versiones publicadas se desarrollan en ramas `hotfix/*` creadas a partir de `main` y se integran en `main` y `develop` mediante Pull Requests.

Los cambios se revisan antes de su integración para favorecer la colaboración y evitar modificaciones directas en las ramas principales.

## Despliegue

El proyecto se publica mediante GitHub Pages desde la rama `main`.

**Web publicada:**
https://cristinafr8.github.io/Proyecto-GitFlow-DespliegueDAW/

**Repositorio:**
https://github.com/CristinaFR8/Proyecto-GitFlow-DespliegueDAW

## Versiones

### v1.0.0 — Primera versión

Primera versión estable publicada de CanguPet.

- Creación de la estructura inicial de la web.
- Incorporación de las páginas principales.
- Desarrollo inicial de los estilos y la navegación.
- Publicación mediante GitHub Pages.

**Tag:** `v1.0.0`

### v2.0.0 — Segunda versión

Segunda versión publicada de CanguPet con mejoras visuales e interactivas.

- Rediseño e integración de botones de retorno al inicio.
- Implementación del banner superior de ofertas y avisos interactivo.
- Incorporación de etiquetas flotantes (*badges*) para destacar servicios.
- Incorporación de un botón flotante de contacto o asistencia directa.
- Creación de la vista e interactividad para la sección de opiniones (`opiniones.html`).

**Tag:** `v2.0.0`

### v2.0.1 — Corrección final

Actualización de mantenimiento de `v2.0.0`, destinada a corregir la versión mostrada en los pies de página y mantener la documentación alineada con la publicación final.

- Corrección de la versión del footer en las siete páginas HTML.
- Actualización de la documentación del proyecto.
- Integración de la corrección mediante el flujo de hotfix.
- Comprobación de la web publicada y de la navegación.

**Tag previsto:** `v2.0.1`.

Una vez integrada la corrección en `main`, creado el tag y comprobado el despliegue, esta sección reflejará la versión final publicada.

## Incidencias y correcciones

Durante el desarrollo se realizaron correcciones y ajustes mediante ramas y Pull Requests.

### Primera versión

- Corrección de la estructura HTML de `index.html`.
- Corrección del enlace hacia la página de contacto.
- Inclusión de la versión en el pie de página.

### Segunda versión

- Resolución de conflictos en la hoja de estilos compartida `estilos.css`.
- Corrección de rutas de navegación en el menú.
- Ajuste del posicionamiento CSS de las etiquetas (*badges*) para evitar que se solaparan con los títulos.

### Corrección final

- Actualización de la versión mostrada en los pies de página.
- Preparación de una rama de hotfix desde `main` para corregir la versión publicada.
- Revisión de la coherencia entre los archivos HTML, el README y el tag de Git.
- Verificación final del despliegue mediante GitHub Pages.

## Kanban

La planificación y el seguimiento de las tareas del proyecto se realizan mediante un tablero Kanban de GitHub Projects.

**Tablero Kanban:**
https://github.com/users/CristinaFR8/projects/1/views/1

## GitHub

**Repositorio público:**
https://github.com/CristinaFR8/Proyecto-GitFlow-DespliegueDAW

## Licencia

Proyecto académico desarrollado como práctica de trabajo colaborativo con Git, GitHub, GitFlow y GitHub Pages.