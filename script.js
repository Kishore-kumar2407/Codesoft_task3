const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let operator = "";
let firstValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value >= "0" && value <= "9" || value === ".") {
      currentInput += value;
      display.innerText = currentInput;
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (currentInput === "") return;
      firstValue = currentInput;
      operator = value;
      currentInput = "";
    }
  });
});

document.getElementById("equals").addEventListener("click", () => {
  if (currentInput === "" || firstValue === "" || operator === "") return;

  const a = parseFloat(firstValue);
  const b = parseFloat(currentInput);
  let result = 0;

  if (operator === "+") result = a + b;
  else if (operator === "-") result = a - b;
  else if (operator === "*") result = a * b;
  else if (operator === "/") result = b === 0 ? "Error" : a / b;

  display.innerText = result;
  currentInput = result.toString();
  firstValue = "";
  operator = "";
});

document.getElementById("clear").addEventListener("click", () => {
  currentInput = "";
  firstValue = "";
  operator = "";
  display.innerText = "0";
});