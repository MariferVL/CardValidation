import elements from './validator.js';

let result;
let description;


const dangerDiv = document.getElementById("danger");
const successDiv = document.getElementById("success");

const replacement = document.getElementById("toRemove");

// Create new h3 and p elements
const tittleBox = document.createElement("h3");
const msgBox = document.createElement("p");

document.getElementById("validate").addEventListener("click", validate, false);

// Send validation msg to document
function validate() {
  //Get card number from user
  const cardNumber = document.getElementById("cardnumber").value
  const valid = elements.isValid(cardNumber)
  const cardBrand = elements.getCardBrand(cardNumber);
  console.log("Marca: " + cardBrand);


  if (valid) {
    //Show success in div#success
    successDiv.appendChild(tittleBox);
    successDiv.appendChild(msgBox);
    document.getElementById("success").style.display = "inline";
    replacement.replaceWith(successDiv);

    result = "Tarjeta " + cardBrand + "\n" + elements.maskify(cardNumber) + "\n Válida";
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


