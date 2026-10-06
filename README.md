# Proyecto GitFlow - Despliegue DAW

Proyecto colaborativo realizado para practicar Git, GitFlow, GitHub, GitHub Pages y el trabajo en equipo mediante Pull Requests.

## Proyecto

**CanguPet** es una página web dedicada al cuidado de mascotas a domicilio. El proyecto ofrece información sobre los servicios de cuidado, artículos, contacto, creación de cuenta y presentación de la empresa.

## Integrantes

* Cristina Fernández
* Astrid Molina
* Abdullah Riaz

## Tecnologías

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* GitHub Pages

## Organización del proyecto

El proyecto utiliza GitFlow para organizar el desarrollo mediante diferentes tipos de ramas:

* `main`: contiene la versión estable del proyecto y la versión publicada.
* `develop`: rama de integración donde se incorporan las funcionalidades terminadas.
* `feature/*`: ramas utilizadas para desarrollar nuevas funcionalidades.
* `release/*`: ramas utilizadas para preparar una nueva versión del proyecto.
* `hotfix/*`: ramas utilizadas para realizar correcciones urgentes sobre la versión publicada.

## Flujo de trabajo

Las nuevas funcionalidades se desarrollan en ramas `feature/*` creadas a partir de `develop`.

Cuando una funcionalidad está terminada, se crea una Pull Request hacia `develop`, donde otro integrante del equipo revisa y aprueba los cambios.

Las versiones preparadas mediante `release/*` se incorporan a `main` y `develop` mediante Pull Requests.

Las correcciones urgentes mediante `hotfix/*` se incorporan a `main` y `develop` mediante Pull Requests.

## Estructura del proyecto

Actualmente el proyecto contiene:

* `index.html` — Página de inicio.
* `conocenos.html` — Página Conócenos.
* `servicio.html` — Página de servicios.
* `contact.html` — Página de contacto.
* `articulo.html` — Página de artículos.
* `cuenta.html` — Página de creación de cuenta.
* `estilos.css` — Hoja de estilos común.
* `imagenes/` — Imágenes y recursos gráficos del proyecto.
* `scrip.js` — JavaScript del proyecto.
* `servicios.js` — JavaScript relacionado con los servicios.
* `README.md` — Documentación del proyecto.
* `.gitignore` — Archivos excluidos del control de versiones.

## Despliegue

El proyecto se publica mediante GitHub Pages desde la rama `main`.

**Web publicada:**  
[CanguPet en GitHub Pages](https://cristinafr8.github.io/Proyecto-GitFlow-DespliegueDAW/?utm_source=chatgpt.com)

## Versiones

### v1.0.0

Primera versión estable publicada de CanguPet.

Incluye las páginas y funcionalidades completadas durante la primera sesión de desarrollo y publicadas mediante GitHub Pages.

**Tag:** `v1.0.0`

## Incidencias y correcciones

Durante el desarrollo se realizaron correcciones y ajustes mediante ramas y Pull Requests.

Entre las correcciones realizadas para la primera versión se encuentran:

* Corrección de la estructura HTML de `index.html`.
* Corrección del enlace hacia la página de contacto.
* Inclusión de la versión `v1.0.0` en el pie de página.

## Kanban

La planificación y seguimiento de las tareas del proyecto se realiza mediante un tablero Kanban de GitHub Projects.

**Tablero Kanban:**  
[Tablero Kanban de GitHub Projects](https://github.com/users/CristinaFR8/projects/1/views/1?utm_source=chatgpt.com)

## GitHub

**Repositorio:**  
[Repositorio de CanguPet en GitHub](https://github.com/CristinaFR8/Proyecto-GitFlow-DespliegueDAW?utm_source=chatgpt.com)