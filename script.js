function submitButton() {

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");

  const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // clear previous errors
  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  confirmPasswordError.innerText = "";

  // ---------- NAME ----------
  if (name === "" || name.length < 4) {
    nameError.innerText = "Valid name is required";
    return;
  }

  // ---------- EMAIL ----------
  if (email === "") {
    emailError.innerText = "Email is required";
    return;
  }

  if (!emailRegex.test(email)) {
    emailError.innerText = "Email is incorrect";
    return;
  }

  // ---------- PASSWORD ----------
  if (password === "") {
    passwordError.innerText = "Password is required";
    return;
  }

  if (password.length < 8) {
    passwordError.innerText = "Password must be at least 8 characters";
    return;
  }

  if (confirmPassword === "") {
    confirmPasswordError.innerText = "Please confirm your password";
    return;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.innerText = "Passwords do not match";
    return;
  }

  alert("Form submitted successfully!");
}

const form = document.getElementById("registerForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  submitButton();
});
