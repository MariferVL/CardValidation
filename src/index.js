import elements from './validator.js';


// src/index.js: escuchar eventos del DOM, llamar validator.isValid() y validator.maskify() y actualizar resultado en UI


document.getElementById("validate").addEventListener("click", elements.validate, false);


console.log(elements);
