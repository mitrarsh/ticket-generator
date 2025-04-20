const form = document.querySelector("#form-page");
const ticket = document.querySelector("#ticket-page");
const name = document.querySelector("#name");
const email = document.querySelector("#email-address");
const username = document.querySelector("#username-address");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function isEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();

  let hasError = false;

  // Reset errors
  const formError = document.querySelector("#formError").parentElement;
  formError.style.display = "none";
  document.querySelector(".email-error").style.display = "none";

  [name, email, username].forEach(input => input.classList.remove("incorrect"));

  if (nameValue === "" || emailValue === "" || usernameValue === "") {
    formError.style.display = "block";
    [name, email, username].forEach(input => {
      if (input.value.trim() === "") input.classList.add("incorrect");
    });
    hasError = true;
  }

  if (emailValue !== "" && !isEmail(emailValue)) {
    document.querySelector(".email-error").style.display = "block";
    email.classList.add("incorrect");
    hasError = true;
  }

  if (!hasError) {
    generateTicket(nameValue, emailValue, usernameValue);
  }
}

function generateTicket(name, email, username) {
  const ticketName = document.querySelectorAll(".ticket--fullname");
  const ticketEmail = document.querySelectorAll(".ticket--email");
  const ticketUsername = document.querySelectorAll(".ticket--username");

  ticketName.forEach(element => {
    element.textContent = name;
  });
  ticketEmail.forEach(element => {
    element.textContent = email;
  });
  ticketUsername.forEach(element => {
    element.textContent = username;
  });

  form.style.display = "none";
  ticket.style.display = "block";
}
