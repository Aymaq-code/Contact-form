const textInputs = document.querySelectorAll('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const radios = document.querySelectorAll('input[type="radio"]');
const radioOption = document.querySelectorAll(".radio-option");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const errorMsg = document.querySelectorAll(".errorMsg");
const successMsg = document.querySelector(".successMsg");
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

  let isValid = true; // We assume everything is valid first

  // Validate text inputs (First name, Last name)
  textInputs.forEach((el, i) => {
    if (el.value.trim() === "") {
      el.classList.add("red");
      errorMsg[i].style.display = "block";
      isValid = false;
    } else {
      el.classList.remove("red");
      errorMsg[i].style.display = "none";
    }
  });

  // Validate email input
  if (emailInput.value.trim() === "") {
    emailInput.classList.add("red");
    errorMsg[2].style.display = "block";
    isValid = false;
  } else {
    emailInput.classList.remove("red");
    errorMsg[2].style.display = "none";
  }

  // Validate radio
  const isRadioChecked = Array.from(radios).some((radio) => radio.checked);
  if (!isRadioChecked) {
    errorMsg[3].style.display = "block";
    radioOption.forEach((option) => option.classList.remove("selected"));
    isValid = false;
  } else {
    errorMsg[3].style.display = "none";
    radioOption.forEach((option) => {
      const input = option.querySelector('input[type="radio"]');
      option.classList.toggle("selected", input.checked);
    });
  }

  // Validate message textarea
  if (message.value.trim() === "") {
    message.classList.add("red");
    errorMsg[4].style.display = "block";
    isValid = false;
  } else {
    message.classList.remove("red");
    errorMsg[4].style.display = "none";
  }

  // Validate checkbox
  if (!checkbox.checked) {
    errorMsg[5].style.display = "block";
    isValid = false;
  } else {
    errorMsg[5].style.display = "none";
  }

  //  Show success message if all fields are valid
  if (isValid) {
    successMsg.style.display = "block";
  } else {
    successMsg.style.display = "none";
  }
});
