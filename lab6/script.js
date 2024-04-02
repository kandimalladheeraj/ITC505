document.addEventListener("DOMContentLoaded", function () {
  const inputNumber = document.getElementById("inputNumber");
  const calculateButton = document.getElementById("calculateButton");
  const resultElement = document.getElementById("result");

  calculateButton.addEventListener("click", () => {
    const number = parseInt(inputNumber.value);

    if (isNaN(number) || number <= 1) {
      resultElement.textContent = "Please enter a valid number greater than 1.";
    } else if (isPrime(number)) {
      resultElement.textContent = `${number} is a prime number.`;
    } else {
      resultElement.textContent = `${number} is not a prime number.`;
    }
  });

  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
});

// Open the contact popup
function openContactPopup() {
  var popup = document.getElementById("contactPopup");
  popup.style.display = "block";
}

// Close the contact popup
function closeContactPopup() {
  var popup = document.getElementById("contactPopup");
  popup.style.display = "none";
}

// Close the popup when the 'x' is clicked
var closeBtn = document.getElementById("closePopup");
closeBtn.addEventListener("click", closeContactPopup);

// Close the popup when the background is clicked
window.onclick = function(event) {
  var popup = document.getElementById("contactPopup");
  if (event.target === popup) {
    closeContactPopup();
  }
};
