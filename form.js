const textInputs = document.querySelectorAll('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const radios = document.querySelectorAll('input[type="radio"]');
const radioOption = document.querySelectorAll(".radio-option");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const errorMsg = document.querySelectorAll(".errorMsg");
const submitBtn = document.querySelector(".submitForm");

// Highlight selected radio option immediately
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    radioOption.forEach((option) => {
      const input = option.querySelector('input[type="radio"]');
      option.classList.toggle("selected", input.checked);
    });
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Validate text inputs
  textInputs.forEach((el, i) => {
    if (el.value === "") {
      el.classList.add("red");
      errorMsg[i].style.display = "block";
    } else {
      el.classList.remove("red");
      errorMsg[i].style.display = "none";
    }
  });

  // Validate email input
  if (emailInput.value.trim() === "") {
    emailInput.classList.add("red");
    errorMsg[2].style.display = "block";
  } else {
    emailInput.classList.remove("red");
    errorMsg[2].style.display = "none";
  }

  // Validate radio
  const isRadioChecked = Array.from(radios).some((radio) => radio.checked);
  if (!isRadioChecked) {
    errorMsg[3].style.display = "block";
    radioOption.forEach((option) => option.classList.remove("selected"));
  } else {
    errorMsg[3].style.display = "none";
    radioOption.forEach((option) => {
      const input = option.querySelector('input[type="radio"]');
      option.classList.toggle("selected", input.checked);
    });
  }

  // Validate message
  if (message.value.trim() === "") {
    message.classList.add("red");
    errorMsg[4].style.display = "block";
  } else {
    message.classList.remove("red");
    errorMsg[4].style.display = "none";
  }

  // Validate checkbox
  if (!checkbox.checked) {
    errorMsg[5].style.display = "block";
  } else {
    errorMsg[5].style.display = "none";
  }
});
