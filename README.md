
# Proyecto GitFlow - Despliegue DAW

Proyecto colaborativo realizado para practicar Git, GitFlow, GitHub, GitHub Pages y el trabajo en equipo mediante Pull Requests.

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

Cuando una funcionalidad está terminada, se crea una Pull Request hacia `develop`, donde otro integrante del equipo revisa los cambios.

Las versiones preparadas mediante `release/*` se incorporan a `main` y `develop`.

Las correcciones urgentes mediante `hotfix/*` se incorporan a `main` y `develop`.

## Despliegue

El proyecto se publica mediante GitHub Pages.

La rama `main` contiene la versión estable que se utiliza para el despliegue.

## Estructura inicial

El proyecto contiene inicialmente:

* `index.html`
* `estilos.css`
* `README.md`
* `.gitignore`
