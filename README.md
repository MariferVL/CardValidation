
<div id="volver"></div>

<br/>
<div align="center">

<h1 align="center"><b>Proyecto Card Validation <br/>
 Laboratoria</b></h1>
 <br/>
  
<img src="https://user-images.githubusercontent.com/99364311/214476067-d093f1d2-8bcd-4e7a-a9b0-30b787203bd3.png" alt="Logo" width="110px" height="110px">

<b>Autora</b>
<br/>
[María-Fernanda Villalobos](https://github.com/MariferVL)

<br/>

  <p align="center">
       </summary>
    <br/>
    <a href="https://github.com/MariferVL/CardValidation-Part2" target="_blank"><strong>Acceso a Documentos »</strong></a>
    <br/>
     <a href="https://marifervl.github.io/CardValidation-Part2/src/" target="_blank"><strong>Acceso a Despliegue »</strong></a>
    <br/>

  </p>
</div>
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

<summary> 


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
          - [x] Strings (cadenas de caracteres)
          - [x] Variables (declaración, asignación, ámbito)
          - [x] Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
          - [x] Uso de bucles/ciclos (while, for, for..of)
          - [x] Funciones (params, args, return)
          - [x] Pruebas unitarias (unit tests)
          - [x] Módulos de ECMAScript (ES Modules)
          - [x] Uso de linter (ESLINT)
          - [x] Uso de identificadores descriptivos (Nomenclatura y Semántica)
          </li>
      </ul>
  </details>

  <details>
     <summary>4. Control de Versiones (Git y GitHub)</summary>
      <ul>
        <li>
          - [x] Git: Instalación y configuración
          - [x] Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
          - [x] GitHub: Creación de cuenta y repos, configuración de llaves SSH
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
  <img height="220" alt="interfaz Hito 1" src="https://user-images.githubusercontent.com/99364311/214477747-4e1e2121-456b-4045-bb35-4d5107551960.png">
  <img height="220" alt="codigo Hito 1" src="https://user-images.githubusercontent.com/99364311/214477690-384f6b63-6f69-4d48-8d25-923a43f64c4f.png">

</div>

<br/>

<details>
  <summary><b>Hito Opcional</b></summary>
  <ul>
    <li>Mostrar la <b>franquicia</b> de tarjeta.</li>
  </ul>
</details>

<div align="center">
  <img height="220" alt="franquicia Valida" src="https://user-images.githubusercontent.com/99364311/214482214-80acb138-0769-407b-8b63-8ec6febf00ec.png">
  <img height="220" alt="franquicia Invalida" src="https://user-images.githubusercontent.com/99364311/214482369-76ce82ac-c1f1-4172-b89c-5a39a697c22c.png">

</div>
<br/>
<br/>
<p align="left"><a href="#volver">Volver</a></p>
<br/>


## Producto
  <summary><b>Hito 1</b></summary>
  <ul>
    <li><b>UX/UI</b>:  "cómo pensaste en los usuarios + proceso para definir producto final" </li>
    <li><b></b> "principales usuarios de producto"</li>
    <li><b></b>  "objetivos de estos usuarios en relación con tu producto"</li>
    <li><b></b> "Cómo crees que está resolviendo sus problemas"</li>
  </ul>

## Video Demo

https://user-images.githubusercontent.com/99364311/208135177-795d5c58-2de1-4a78-87f0-fa1f2673b495.mp4

<br/>

## Referencias

- [StackOverflow](https://stackoverflow.com/)
- [MDN WebDocs](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com/)
- [Programiz](https://www.programiz.com/)
- [Geeks for Geeks](https://www.geeksforgeeks.org/)



<p align="left"><a href="#volver">Volver</a></p>
