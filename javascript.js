function add(firstOperand, secondOperand) {
    return Number(firstOperand) + Number(secondOperand);
}

function subtract(firstOperand, secondOperand) {
    return Number(firstOperand) - Number(secondOperand);
}

function multiply(firstOperand, secondOperand) {
    return Number(firstOperand) * Number(secondOperand);
}

function divide(firstOperand, secondOperand) {
    return Number(firstOperand) / Number(secondOperand);
}

let calculationInput = document.querySelector("#calculation-input");
let calculationInputButton = document.querySelector(".calculation-input-button");

calculationInputButton.addEventListener("click", (event) => {
    let calculationInputElements = calculationInput.value.split(" ");
    switch (calculationInputElements[1]) {
        case "+":
            console.log(add(calculationInputElements[0], calculationInputElements[2]));
            break;
        case "-":
            console.log(subtract(calculationInputElements[0], calculationInputElements[2]));
            break;
        case "*":
            console.log(multiply(calculationInputElements[0], calculationInputElements[2]));
            break;
        case "/":
            console.log(divide(calculationInputElements[0], calculationInputElements[2]));
            break;
    }
});