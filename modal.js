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
const btnClose = document.getElementById("btn-close");
const message = document.getElementById("message");
const inputForm = document.querySelectorAll("text-control");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.classList.remove("sectionFormClose");
  btnClose.style.visibility = "hidden";
  message.style.visibility = "hidden";
} 

// Close modal event

function closeModal () {            // ferme le modal
  modalbg.style.display = "none";
}

// Close modal form

close.addEventListener("click", closeModal);

// Close modal message

btnClose.addEventListener("click", closeModal);


// Validation

function addError(label, message) {
  document.getElementById(label).style.border = "2px solid red";
  document.getElementById(`${label}Error`).textContent = message;
}

function removeError (label) {
  document.getElementById(label).style.border = "none";
  document.getElementById(`${label}Error`).textContent = "";
}

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      input.innerText = "Ce champ est requis";
    } 
  });
}


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
    addError("first", "Veuillez entrer 2 caractères minimum");
    error = true;
  } else {
    removeError("first");
  }

  if ( lastName.value.length < 2) {
    addError("last", "Veuillez entrer 2 caractères minimum");
    error = true;
  } else {
    removeError("last");
    error = true;
  }

  if ( !email.value.match(emailRegex)) {
    addError("email", "Veuillez entrer un email valide");
    error = true;
  } else {
    removeError("email");
  }

  if ( !birthday.value.match(birthdayRegex)) {
    addError("birthdate", "Veuillez entrer une date valide");
    error = true;
  } else {
    removeError("birthdate");
  }

  if (!Number(quantity.value >=0 ) || !Number(quantity.value <= 99)|| quantity.value === "") {
    addError("quantity", "Veuillez entrer un chiffre entre 0 et 99");
    error = true;
  } else {
    removeError("quantity");
  }

  if (!conditions.checked) {
    addError("checkbox1", "Veuillez cochez la case");
    error = true;
  } else {
    removeError("checkbox1");
  }

  if (!error) {
    document.getElementById("sectionForm").className= "sectionFormClose";
    document.getElementById("btn-close").className= "btn-close-visible";
    btnClose.style.visibility = "visible";
    document.getElementById("message").className= "message-thx";
    message.style.visibility = "visible";
  }

});
