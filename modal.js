function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBottom = document.querySelectorAll(".bbottom");
const formData = document.querySelectorAll(".formData");
const close = document.getElementById("close");
const form = document.getElementById("sectionForm");
const fermer = document.getElementById("btn-fermer");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.classList.remove("sectionFormClose");

} 

// Close modal event

function closeModal () {            // ferme le modal
  modalbg.style.display = "none";
}

// Close modal form

close.addEventListener("click", closeModal);

// Close modal message

fermer.addEventListener("click", closeModal);


// Validation


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const emailRegex = (/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/);
  const birthdayRegex = (/^\d{4}\-\d{1,2}\-\d{1,2}$/);
  const birthday = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const conditions = document.getElementById("checkbox1");
  let error = false;

  if ( firstName.value.trim() < 2) {
    firstName.style.border = "2px solid red";
    document.getElementById("firstNameError").textContent = "Veuillez entrer 2 caractères minimum";
    error = true;
  } else {
    firstName.style.border = "2px solid green";
    document.getElementById("firstNameError").textContent = "";
  }

  if ( lastName.value.trim() < 2) {
    lastName.style.border =  "2px solid red";
    document.getElementById("lastNameError").textContent = "Veuillez entrer 2 caractères minimum";
    error = true;
  }

  if ( !email.value.match(emailRegex)) {
    email.style.border =  "2px solid red";
    document.getElementById("emailError").textContent = "Veuillez entrer un email valide";
    error = true;
  }

  if ( !birthday.value.match(birthdayRegex)) {
    birthday.style.border =  "2px solid red";
    document.getElementById("birthdateError").textContent = "Veuillez entrer une date valide";
    error = true;
  }

  if (!Number(quantity.value >=0 ) || !Number(quantity.value <= 99)) {
    quantity.style.border = "2px solid red";
    document.getElementById("quantityError").textContent = "Veuillez entrer un chiffre entre 0 et 99";
    error = true;
  }

  if (!conditions.checked) {
    conditions.style.border =  "2px solid red";
    document.getElementById("checkboxError").textContent = "Veuillez cochez la case";
    error = true;
  }

  if (!error) {
    document.getElementById("sectionForm").className= "sectionFormClose";
    document.getElementById("btn-fermer").className= "btn-fermer-visible";
    document.getElementById("message").className= "message-thx";
  }

});
