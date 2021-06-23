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
const fermer = document.getElementById("btn-close");
const message = document.getElementById("message");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.classList.remove("sectionFormClose");
  fermer.style.visibility = "hidden";
  message.style.visibility = "hidden";
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

  if ( firstName.value.length < 2) {
    firstName.style.border = "2px solid red";
    document.getElementById("firstNameError").textContent = "Veuillez entrer 2 caractères minimum";
    error = true;
  } else {
    firstName.style.border = "none";
    document.getElementById("firstNameError").textContent = "";
  }

  if ( lastName.value.length < 2) {
    lastName.style.border =  "2px solid red";
    document.getElementById("lastNameError").textContent = "Veuillez entrer 2 caractères minimum";
    error = true;
  } else {
    lastName.style.border = "none";
    document.getElementById("lastNameError").textContent = "";
  }

  if ( !email.value.match(emailRegex)) {
    email.style.border =  "2px solid red";
    document.getElementById("emailError").textContent = "Veuillez entrer un email valide";
    error = true;
  } else {
    email.style.border = "none";
    document.getElementById("emailError").textContent = "";
  }

  if ( !birthday.value.match(birthdayRegex)) {
    birthday.style.border =  "2px solid red";
    document.getElementById("birthdateError").textContent = "Veuillez entrer une date valide";
    error = true;
  } else {
    birthdate.style.border = "none";
    document.getElementById("birthdateError").textContent = "";
  }

  if (!Number(quantity.value >=0 ) || !Number(quantity.value <= 99)|| quantity.value == "") {
    quantity.style.border = "2px solid red";
    document.getElementById("quantityError").textContent = "Veuillez entrer un chiffre entre 0 et 99";
    error = true;
  } else {
    quantity.style.border = "none";
    document.getElementById("quantityError").textContent = "";
  }

  if (!conditions.checked) {
    conditions.style.border =  "2px solid red";
    document.getElementById("checkboxError").textContent = "Veuillez cochez la case";
    error = true;
  } 

  if (!error) {
    document.getElementById("sectionForm").className= "sectionFormClose";
    document.getElementById("btn-close").className= "btn-close-visible";
    fermer.style.visibility = "visible";
    document.getElementById("message").className= "message-thx";
    message.style.visibility = "visible";
  }

});
