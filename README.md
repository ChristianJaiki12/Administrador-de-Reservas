#  Administrador de Reservas

##  Parque de diversiones "Fantastic world"

![](https://i.postimg.cc/SNmWPPz3/Logo.gif)

##### Tabla de contenido:
- [Proyecto](#Proyecto)
- [Diseño en términos generales](#Diseño-en-términos-generales)
- [Estructura y diseño Desktop](#Estructura-y-diseño-Desktop)
- [Estructura y diseño Modal emergente](#Estructura-y-diseño-Modal-emergente)
- [Estructura y diseño Móvil](#Estructura-y-diseño-Móvil)
- [Desarrollo según tecnologías utilizadas](#Desarrollo-según-tecnologías-utilizadas)
- [Pilas](#Pilas)
- [Miembros del grupo](#Miembros-del-grupo)
- [Como instalar este proyecto](#Como-instalar-este-proyecto)
- [Metodología](#Metodología)
## Proyecto

<p>Este es un proyecto de reserva de parque de diversiones. Permite a los usuarios realizar reservas, seleccionar la cantidad de adultos y niños, elegir las atracciones a visitar, ingresar la fecha y la hora de la reserva, y guardar los datos en una tabla de reservas
</p>

## Diseño en términos generales

<p>
El diseño de la página de reservas se presenta como una pagina web para realizar reservas en el parque de atracciones. A continuación se describe el diseño de la página en términos generales:
</p>

#### 1- Header:
<ul><li>En la parte superior de la página se encuentra el encabezado que contiene el logotipo del parque de atracciones y la navegación principal.</li></ul>

#### 2- Sección de Reservas (Section.table-formn):
<ul><li>Esta sección está diseñada para permitir a los usuarios realizar una reserva en el parque de diversiones</li>
<li>Contiene un formulario donde los usuarios pueden ingresar su información personal, como el nombre, email, cantidad de adultos y niños, fecha, hora y la atracción que desean visitar.</li>
<li>Al final del formulario, hay un botón "Agregar a tabla de reservas" que guarda la reserva ingresada en una tabla debajo.</li></ul>

#### 3- Tabla de Reservas (Section.Tables .tableContainer):
<ul><li>Esta sección muestra una tabla que representa las reservas realizadas por los usuarios.</li>
<li>Inicialmente, la tabla está vacía, pero a medida que los usuarios agregan reservas utilizando el botón "Agregar a tabla de reservas", se agregan filas dinámicamente a la tabla para mostrar las reservas realizadas.</li></ul>

#### 4- Tabla de Pago (Section.Tables .tableContainertwo):
<ul><li>Esta sección muestra una tabla que representa el resumen del pago.
La tabla tiene columnas para mostrar el precio de los adultos, el precio de los niños y el subtotal de la reserva.
Al final de la tabla, se muestra el total a pagar.</li></ul>

#### 5- Botones de Limpieza y Pago (Section.Button-cleanOrPay):
<ul> <li>Esta sección contiene dos botones: "Limpiar Reserva" y "Pagar".</li>
<li>El botón "Limpiar Reserva" permite borrar todas las reservas realizadas y reiniciar la tabla de reservas y el resumen de pago.</li>
<li>El botón "Pagar" muestra un modal emergente donde se ofrecen opciones de pago, como tarjeta de crédito y Bizum.</li></ul>

#### 6- Pie de página (Footer):
<ul><li>En la parte inferior de la página, se encuentra el pie de página.
</li>
<li>El pie de página muestra información de derechos de autor y enlaces a páginas adicionales, como "Términos y condiciones", "Política de privacidad" y "Preguntas frecuentes".
</li></ul>

###### Estructura y diseño Desktop
:computer:

<p float="left">
  <img src="https://i.postimg.cc/9FNrvSyQ/estructura-desktop.png" alt="" width="350px" />
  <img src="https://i.postimg.cc/fTjRgDGQ/dise-o-desktop.png" alt="" width="350px" /> 
</p>

###### Estructura y diseño Modal emergente
:desktop_computer:

<p float="left">
  <img src="https://i.postimg.cc/gcwNZ94v/Estructura-modal-emerg.png" alt="" width="250px" />
  
  <img src="https://i.postimg.cc/bwyN74PD/dise-o-modal-emergente.png" alt="" width="250px" /> 
</p>

###### Estructura y diseño Móvil
:iphone:

<p float="left">
  <img src="https://i.postimg.cc/ZqGFPnwp/estructura-movil.png" alt="" width="150px" />
  
  <img src="https://i.postimg.cc/sfmkDLzF/Dise-o-movil.png" alt="" width="150px" /> 
</p>


## Desarrollo según tecnologías utilizadas

#### HTML
<p>Aquí se encuentran elementos como encabezados, enlaces, formularios y tablas. Algunos elementos importantes incluyen:</p>

<ul><li> Un encabezado (header) que contiene un logotipo, un menú de navegación y un enlace para contactar mediante WhatsApp.</li>
<li> Una sección (section) que muestra un formulario para realizar una reserva. El formulario incluye campos como el nombre del representante, el correo electrónico, la cantidad de adultos y niños, la fecha y hora de la reserva, entre otros.</li>
<li> Otra sección que muestra dos tablas: una tabla de reservas (<table class="table-two">) que muestra las reservas realizadas, y una tabla de pago (table class="table-three") que muestra el subtotal y el total a pagar.</li>
<li> Una sección final que contiene botones para limpiar la reserva y realizar el pago, y un modal emergente para seleccionar el método de pago.</li></ul>
 
#### CSS
<p>Aquí se aplican estilos a los elementos HTML, como colores de fondo, tipografías, márgenes y dimensiones. Algunas características importantes del CSS incluyen:</p>
  
- Estilos para el encabezado (header), como su posición fija en la parte superior de la página y su apariencia cuando se desplaza hacia abajo (header.abajo).
- Estilos para el formulario de reserva y las tablas, como colores de fondo, bordes y espaciado.
- Estilos para los botones y el modal emergente de pago.
  
#### JavaScript
Aquí se definen las funciones que se utilizan en respuesta a eventos, como el cálculo del subtotal, la guardado de la reserva y la limpieza de las tablas. Algunas características importantes del JavaScript incluyen:

- Funciones para calcular el subtotal de la reserva en función de la cantidad de adultos y niños.
- Una función para guardar la reserva en la tabla de reservas.
- Una función para limpiar las tablas de reservas y pago.
- Funciones para mostrar y ocultar el modal emergente de pago.
 
<p>En general, este proyecto de página web permite a los usuarios realizar reservas en un parque de diversiones y realizar el pago utilizando diferentes métodos. El código proporcionado implementa la interfaz de usuario y la lógica básica necesaria para hacerlo funcionar.</p>

## Pilas
:wrench:

#### Tecnologías:
<p float="left">
  <img src="https://i.postimg.cc/Ss8w8q2R/html5.jpg" alt="" width="50px" />
  
  <img src="https://i.postimg.cc/rpd6V5qS/css.png" alt="" width="40px" /> 
  
  <img src="https://i.postimg.cc/3wzsdWwz/javascript.png" alt="" width="50px" />
</p>

#### Herramientas:

<p float="left">
  <img src="https://i.postimg.cc/8PJNP8wF/figma-vector-logo.png" alt="" width="70px" />
  
  <img src="https://i.postimg.cc/FH0v3jMN/Git-logo-svg.png" alt="" width="70px" /> 
  
  <img src="https://i.postimg.cc/VLx1J7HK/github.png" alt="" width="70px" />
  
  <img src="https://i.postimg.cc/X7363DvF/trello.png" alt="" width="70px" />
  
  <img src="https://i.postimg.cc/KYF2N1bL/visualstudio-code-ar21.png" alt="" width="70px" />
</p>

## Miembros del grupo

- Christian Jaiki https://github.com/ChristianJaiki12 /Scrum Master
- Celia Prieto  https://github.com/CeliaGilPrieto / Desarrolladora

## Como instalar este proyecto

<ol>
<li>Abre la terminal en tu ordenador.</li>
<li>Navega hasta el directorio donde deseas clonar el repositorio utilizando el comando cd directorio . Por ejemplo, si deseas clonarlo en el directorio "Documentos", puedes escribir cd Documentos.</li>
<li>Ahora estás en el directorio adecuado. Puedes proceder a clonar el repositorio ejecutando el siguiente comando:
git clone https://github.com/ChristianJaiki12/Administrador-de-Reservas.git
Esto creará una copia local del repositorio en tu ordenador.</li>
<li>Una vez que se complete la descarga, puedes ingresar al directorio del repositorio utilizando el comando cd Administrador-de-Reservas.

Ahora tienes el repositorio clonado en tu ordenador y puedes acceder a todos los archivos y directorios del proyecto.</li>
</ol>

## Metodología

<ul>
<li>Metodologia agil con scrum</li>
<li>Programacion en pareja: Se utilizó un solo ordenador para probar los codigos y generar mayor alcance y aporte en la lógica</li>
<li>Diseño y estructura en pareja: Donde cada uno con su ordenador realizó el diseño y estructura de la pagina</li>
<li>Creación de ramas: Se utilizo 2 ramas para gestionar el flujo de trabajo:

- Master (o main): Esta rama contiene el código estable y en producción.
- Develop: Esta rama es donde se integran todas las características y se realizan las pruebas previas a la producción.</li>
<li>Revisión y resolución de conflictos: Durante el proceso se sugerieron comentarios y cambios.</li>
<li>Liberación: Cuando se ha alcanzado un conjunto de características significativas o se ha completado una versión estable, se realizan las pruebas finales y se solucionan los últimos problemas antes de fusionar los cambios en la rama master (o main).</li>
</ul>

<p>
¡Disfruta de tu experiencia de reserva en nuestro parque de diversiones "Fantastic World!
</p>

