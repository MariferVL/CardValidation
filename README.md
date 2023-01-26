
<div id="volver"></div>

<br/>
<div align="center">

<h1 align="center"><b>Proyecto Card Validation <br/>
 Laboratoria</b></h1>
 <br/>
  
<img src="https://user-images.githubusercontent.com/99364311/214476067-d093f1d2-8bcd-4e7a-a9b0-30b787203bd3.png" alt="Logo" width="220px">
<br/>
 <br/>
 <br/>

<b>Autora</b>
<br/>
[María-Fernanda Villalobos](https://github.com/MariferVL)

<br/>

  <p align="center">
       </summary>
    <br/>
    <br/>
    <a href="https://github.com/MariferVL/CardValidation-Part2" target="_blank"><strong>Acceso a Documentos »</strong></a>
    <br/>
     <a href="https://marifervl.github.io/CardValidation-Part2/src/" target="_blank"><strong>Acceso a Despliegue »</strong></a>
    <br/>

  </p>
</div>
<br/>
 <br/>

<details>
  <summary>Indice</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#lenguaje-de-programación">Lenguaje de programación </a></li>
      </ul>
    </li>
    <li><a href="#objetivos-de-aprendizaje-cumplidos">Objetivos de Aprendizaje Cumplidos</a></li>
    <li><a href="#producto">Producto</a></li>
    <li><a href="#video-demo">Video Demo</a></li>
    <li><a href="#referencias">Referencias</a></li>
  </ol>
</details>
 <br/>

## Acerca del Proyecto

<summary> Con el fin de aumentar los conocimientos en <b>Javascripts</b>, <b>DOM</b> y <b>UX</b> se realizó este proyecto. Así se creó una plataforma que permite ingresar los datos de una tarjeta bancaria y chequea si los datos ingresados son válidos o no. Además, el mensaje informativo entregado muestra la marca financiera de dicha tarjeta bancaria.


</summary>

### Lenguaje de programación

- [Javascript](https://www.javascript.com/)

### Framework

- [Bootstrap](https://getbootstrap.com/)

<p align="left"><a href="#volver">Volver</a></p>
 <br/>

## Objetivos de Aprendizaje Cumplidos

  <summary>Durante la estructuración y creación de este proyecto logré<b> adquirir conocimientos</b>  en las siguientes temáticas:</summary>
    <details>   
    <br/>
     <summary>1. CSS</summary>
      <ul>
        <li>
        - [x] Uso de selectores de CSS
        </li>
        <li>
        - [x] Modelo de caja (box model): borde, margen, padding
        </li>
      </ul>
    </details>

   <details>
     <summary>2. Web APIs</summary>
     <ul>
      <li>
        - [x] Uso de selectores del DOM
      </li>
      <li>
        - [x] Manejo de eventos del DOM (listeners, propagación, delegación)
      </li>
      <li>
        - [x] Manipulación dinámica del DOM
      </li>
    </ul>
  </details>

  <details>
     <summary>3. JavaScript</summary>
      <ul>
        <li>
          - [x] Tipos de datos primitivos
        </li>
        <li>
          - [x] Strings (cadenas de caracteres)
        </li>
        <li>
          - [x] Variables (declaración, asignación, ámbito)
        </li>
        <li>
          - [x] Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
        </li>
        <li>
          - [x] Uso de bucles/ciclos (while, for, for..of)
        </li>
        <li>
          - [x] Funciones (params, args, return)
        </li>
        <li>
          - [x] Pruebas unitarias (unit tests)
        </li>
        <li>
          - [x] Módulos de ECMAScript (ES Modules)
        </li>
        <li>
          - [x] Uso de linter (ESLINT)
        </li>
        <li>
          - [x] Uso de identificadores descriptivos (Nomenclatura y Semántica)
          </li>
      </ul>
  </details>

  <details>
     <summary>4. Control de Versiones (Git y GitHub)</summary>
      <ul>
        <li>
          - [x] Git: Instalación y configuración
        </li>
        <li>
          - [x] Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
        </li>
        <li>
          - [x] GitHub: Creación de cuenta y repos, configuración de llaves SSH
        </li>
        <li>
          - [x] GitHub: Despliegue con GitHub Pages
        </li>
      </ul> 
  </details>

  <details>
     <summary>5. Centrado en el usuario</summary>
      <ul>
        <li>
            - [x] Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro
        </li>
      </ul> 
  </details>

  <details>
     <summary>6. Diseño de producto</summary>
      <ul>
        <li>
          - [x] Crear prototipos de alta fidelidad que incluyan interacciones
        </li>
        <li>
          - [x] Seguir los principios básicos de diseño visual
        </li>
      </ul>  
  </details>
  
  <br/>
  <br/>
  <br/>

## Proyecto

<details>
  <summary><b>Hito 1</b></summary>
  <ul>
    <li>Permitir <b>insertar</b> el <b>número de la tarjeta</b> que se quiere validar en un campo de texto vacío.</li>
    <li><b>Evitar</b> que puedan escribir caracteres que <b>no sean numéricos</b> (dígitos 0-9).  </li>
    <li><b>Impedir</b> que se intente validar si es que el <b>campo está vacío</b>.  </li>
    <li><b>Comunicar</b> a la usuaria si se trata una <b>taerjeta válida o no</b>.</li>
    <li> <b>Ocultar</b> todos los <b>dígitos</b> del número de tarjeta con <b>exepción</b> de los últimos 4 caracteres. </li>
    <li><b>Pruebas unitarias</b> de los métodos de `validator` (`isValid` y `maskify`).</li>
    <li>Código de proyecto <b>subido</b> a repo en GitHub e interfaz <b>"desplegada"</b>.</li>  
    <li>Un <b>README</b> con definición del producto.</li>
  </ul>
</details>

<div align="center">
  <img height="211" alt="interfaz Hito 1" src="https://user-images.githubusercontent.com/99364311/214477747-4e1e2121-456b-4045-bb35-4d5107551960.png">
  <img height="211" alt="codigo Hito 1" src="https://user-images.githubusercontent.com/99364311/214477690-384f6b63-6f69-4d48-8d25-923a43f64c4f.png">

</div>

<br/>

<details>
  <summary><b>Hito Opcional</b></summary>
  <ul>
    <li>Mostrar la <b>franquicia</b> de tarjeta.</li>
  </ul>
</details>

<div align="center">
  <img height="211" alt="franquicia Valida" src="https://user-images.githubusercontent.com/99364311/214482214-80acb138-0769-407b-8b63-8ec6febf00ec.png">
  <img height="211" alt="franquicia Invalida" src="https://user-images.githubusercontent.com/99364311/214482369-76ce82ac-c1f1-4172-b89c-5a39a697c22c.png">

</div>
<br/>
<br/>
<p align="left"><a href="#volver">Volver</a></p>
<br/>


## Producto
  <summary><b>Consideraciones</b>:</summary>
  <ul>
    <li><b>UX/UI</b>: 
      <ul>
        <li> El valor del atributo <b>tipo</b> en el elemento <b>input</b> fue escogida en para facilitar el uso de la plataforma por parte del usuario. Se optó por tipo <b>text</b> para evitar posibles errores causados por el cambio por flecha en el tipo number.
        </li>  
        <li> Toda la interfaz fue creada en pro de los principios de diseño visual. Desde la elección de los colores hasta el tamaño de los inputs y botones se estableció para hacer que el programa fuese lo más intuitivo posible.
        </li>
      </ul> 
    <li><b>Usuarios</b>: 
      <ul>
        <li> La plataforma como tal puede ser usada en cualquier sitio web que incluya un <b>proceso de compra</b>.
        </li>
        <li> El diseño de la plataforma es neutral, con un apoyo visual de contexto bancario, que tiene la intención de generar confianza en el usuario.
        </li>
      </ul>    
    <li><b>Objetivos del Usuario</b>
       <ul>
        <li> Poder corroborar que su tarjeta bancaria está <b>vigente</b> antes de realizar el pago.
        </li>
         <li> Realizar una compra con <b>tranquilidad</b>.
        </li>
          <li><b>Escoger</b> la tarjeta bancaria que más se acomode a sus requerimientos/necesidades.
        </li>
      </ul>    
    </li>
    <li><b>Resolución de problemas</b>:
       <ul>
        <li> La invalidez de la tarjeta podría explicar una <b>incorrecta inserción</b> de los datos o que la tarjeta está <b>vencida</b>.
        </li>
         <li> El enmascaramiento de los números permite mantener la <b>privacidad</b> del usuario.
        </li>
        <li> La visibilidad de la marca financiera permite al usuario <b>reconfirmar</b> su eleccipon en pro de los beneficios que desee.
        </li>
      </ul>      
    </li>
  </ul>

## Video Demo


https://user-images.githubusercontent.com/99364311/214485979-e4656591-9b92-48d1-8959-d27aad651ed7.mp4


<br/>

## Referencias

- [StackOverflow](https://stackoverflow.com/)
- [MDN WebDocs](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com/)
- [Programiz](https://www.programiz.com/)
- [Geeks for Geeks](https://www.geeksforgeeks.org/)



<p align="left"><a href="#volver">Volver</a></p>
