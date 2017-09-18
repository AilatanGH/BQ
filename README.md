## PRUEBA MAQUETACIÓN PARA BQ

En este repositorio lo he creado para mostrar el trabajo de maquetación basado en un diseño propuesto por BQ para una prueba técnica.

### TECNOLOGÍA
---

#### SASS:
En este caso he usado **SASS** como preprocesador de **CSS**, ya que permite organizar el CSS y hacerlo más modular. Permite crear variados archivos de CSS mediante el formato de **.scss** y luego compilarlos todos en un único css, que será el usando en producción para el sitio web, web-app o proyecto. De esta forma si hay que realizar algún cambio o al tenerlo dividido en componentes, se puede ir directamente al archivo .scss y realizar la modificación o reutilizarlo para otro proyectos. También nos permite trabajar con variables, anidar selectores, hacer referencia al selector padre, mixins…

<pre>.subnav {
  padding: 5px 25px;
  list-style: none;
  background-color: $color-terciary;
  margin: 0;
  li{
    padding: 10px 0;
  }
  li a {
    color: $color-white;
    &:hover {
      color: $color-primary;
    }
  }
}</pre>

#### Flexbox:
Nos permite colocar los elementos de una página para que se comporten de forma que se adapten cuando el diseño de la página debe adaptarse a diferentes tamaños de pantalla y diferentes dispositivos.

#### CSS Grid-area:
Para organizar mejor la maquetación de la página al no tener tantos elementos y poderla dividir en 5 secciones, he preferido utilizar **Grid-area**, de esta forma disponemos de 5 secciones:
* Header
* Sidebar
* Catalogue
* Content
* Footer

#### Javascript:
Para darle algo de interacción a la página, he usado JS para que al hacer click en el botón menú de navegaciónde en la versión mobile, se despliegue el menú hacia abajo mostrando las prestañas, en el menú categorías también al hacer click sobre una categoría este se despliegue hacia abajo y muestre las opciones que hay dentro de esa categoría.

### TEMPLATE
---
He creado una guía de estilo para que resulte más fácil maquetar, ya que se tiene una visión de los componentes y elementos que forman parte de la página y de esta forma copiar el código y utilizarlo directamente sin tener que crearlo, es una forma fácil de agilizar el trabajo, sobretodo si hay varios proyectos que tienen un diseño similiar, ya que permite reutilizar código y estilos.
[Template](https://ailatangh.github.io/BQ/template.html)

### DISEÑO
---
He seguido el diseño que me pasaron, he intentado crear la versión **responsive** pero para poderlo hacer totalmente habría que modificar el diseño y adaptarlo, yo crearía un botón que apareciera en el menú y hacer click se despliegue hacia abajo mostrando las categorías. En este caso he eliminado en la versión responsive las categorias.

También he colocado en primer lugar la ficha del producto con el formulario y después el catálogo, ya que considero que lo más importante cuando navegas con el móvil es tener la información importante a la vista, de esta forma los primero que se ve es el producto y luego las demás opciones, por último el footer.

Otras variaciones que he realizado sobre el diseño propuesto son:

1. Colocar un icono (arrow) que indique al usuario que es un menú desplegable y se puede clicar.
2. Desplazar un poco las opciones del submenú de las categorías, para que quede más claro que son opciones dentro de esa categoría, no es continuidad de las categorías.
3. He alineado la imagen y el formulario con el texto del mismo apartado.
4. He dado un poco más de aire entre el título de footer y la caja.
he redondeado los bordes del botón.
