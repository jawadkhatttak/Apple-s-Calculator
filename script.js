const result1 = document.getElementById("Result");

function appendCharacter(char) {
  result1.textContent += char;
}

function clearResult() {
  result1.textContent = "";
}

function deleteLast() {
  result1.textContent = result1.textContent.slice(0, -1);
}

function calculateResult() {
  try {
    result1.textContent = eval(
      result1.textContent.replace("×", "*").replace("÷", "/")
    );
  } catch (error) {
    result1.textContent = "Error";
    setTimeout(clearResult, 2000);
  }
}

document.addEventListener("keydown", (event) => {
  const button = document.querySelector(`button[data-key="${event.key}"]`);
  if (button) {
    button.click();
    button.classList.add("active");
  }
});

document.addEventListener("keyup", (event) => {
  const button = document.querySelector(`button[data-key="${event.key}"]`);
  if (button) {
    button.classList.remove("active");
  }
});

let dark = document.querySelector("input");
document.body.classList.add("darkmode");
dark.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
