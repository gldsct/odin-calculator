let calculationInput = document.querySelector("#calculation-input");
let calculationInputButton = document.querySelector(".calculation-input-button");

calculationInputButton.addEventListener("click", (event) => {
    let calculationInputElements = calculationInput.value.split(" ");
    console.log(calculationInputElements);
});