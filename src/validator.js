//TODO: src/validator.js: implementar objeto validator ==> 2 metodos:
// validator.isValid(creditCardNumber)==> retornar boolean si es válida
//TODO: src/index.js: escuchar eventos del DOM, llamar validator.isValid() y validator.maskify() y actualizar resultado en UI
//TODO: test/validator.spec.js tests de ejemplo e implementar tests para validator.isValid() y validator.maskify().
// Insertar número de tarjeta a validar (texto) en un campo de texto vacío.
//   Evitar escribir caracteres  no  numéricos (dígitos 0-9).
//  Campo vacío no se valida ==> campo requerido 
//  Comunicar a  usuaria si es taerjeta válida o no.
// validator.maskify(creditCardNumber) ==> retornar string reemplazando todos los N° por # excepto los 4 últimos.
// TODO:  metódos de validator (isValid y maskify) deben tener cobertura con pruebas unitarias. ¿???
// TODO:  proyecto subido a  repo e interfaz "desplegada".
//  Mostrar la franquicia de tarjeta
// TODO: Requisitos cumplidos ==> posibilidad pedir sesión de Project Feedback con unx coach.


// Test Data: 4137894711755904

const dangerDiv = document.getElementById("danger");
const successDiv = document.getElementById("success");

const replacement = document.getElementById("toRemove");

// Create new h3 and p elements
const tittleBox = document.createElement("h3");
const msgBox = document.createElement("p");

let result;
let description;
let cardDigits;

// Send validation msg to document
function validate() {
  //Get card number from user
  const cardNumber = document.getElementById("cardnumber").value
  const valid = isValid(cardNumber)
  const cardBrand = getCardBrand(cardDigits[0]);


  if (valid) {
    //Show success in div#success
    successDiv.appendChild(tittleBox);
    successDiv.appendChild(msgBox);
    document.getElementById("success").style.display = "inline";
    replacement.replaceWith(successDiv);

    result = "Tarjeta " + cardBrand + "\n" + maskify(cardNumber)  + "\n Válida";
    description = "Operación exitosa. La información bancaria ingresada es correcta.";
  }
  else {
    // Show error message in div#danger
    dangerDiv.appendChild(tittleBox);
    dangerDiv.appendChild(msgBox);
    document.getElementById("danger").style.display = "inline";
    replacement.replaceWith(dangerDiv);

    result = "Tarjeta " + cardBrand + "\n Inválida.";
    description = "Debe ingresar nuevamente la información de su tarjeta.";
  }
  tittleBox.classList.add("alert-heading");

  // Give h1 and p content
  const h3Content = document.createTextNode(result);
  const pContent = document.createTextNode(description);

  tittleBox.appendChild(h3Content);
  msgBox.appendChild(pContent);

}

// Validate card number using Luhn's algorithm
function isValid(creditCardNumber) {
  let valid = false;

  // Validate if card number is integer
  if (Number.isInteger(Number(creditCardNumber))) {
    // Split input
    cardDigits = creditCardNumber.split('');

    // const reversedCardDigits = cardDigits.reverse();

    // console.log("Paso2 -Numero invertido: ", reversedCardDigits);
    const stringToNum = cardDigits.map(function (str) {
      // using map() to convert array of strings to numbers
      return parseInt(str);
    });

    // Double value of every 2nd digit
    for (let index = 0; index < stringToNum.length; index += 2) {
      const doubleNum = Number(stringToNum[index]) * 2;
      stringToNum[index] = doubleNum;

      // Check each doubleNum if is greater than 9
      if (doubleNum > 9) {

        // Add the digits in doubleNum
        const digitsSum = sumDigits(doubleNum);
        stringToNum[index] = digitsSum;


      }
    }

    // Calculate the sum using forEach
    let sumCardDigits = 0;
    stringToNum.forEach(x => { sumCardDigits += x; });

    // Check if the sum of all digits is 0
    if (sumCardDigits % 10 === 0) {
      valid = true;
    }

  } else {
    alert("En 'Número de Tarjeta' debes ingresar sólo dígitos.")
  }

  return valid
}

// Fuction to sum digits in a number
function sumDigits(n) {
  return (--n % 9) + 1;
}

// Function to get card financial institutuion (Visa, Mastercard or American Express)
function getCardBrand(firstNumber) {
  let brand;
  switch (firstNumber) {
    case "3":
      brand = "American Express";
      break;
    case "4":
      brand = "Visa";
      break;
    case "5":
      brand = "Mastercard";
      break;

    default:
      brand = "";
      break;
  }
  return brand;
}

//replace all digits with # except the last 4.
function maskify(creditCardNumber) {
  const listNumbers = creditCardNumber.split("");
  listNumbers.forEach((element, index) => {for (let i = 0; i < listNumbers.length - 4; i++) listNumbers[i] = "#"; });
  const maskedNum = listNumbers.join("");

  //return string
  return maskedNum;
}

// const validator = {
//   validate, isValid, sumDigits, getCardBrand, maskify,
//   dangerDiv, successDiv, replacement, tittleBox,
//   msgBox, result, description, cardDigits
// };




// export default validator;






