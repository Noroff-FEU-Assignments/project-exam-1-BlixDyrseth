const form = document.querySelector("#contactform");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const fromValidated = document.querySelector("#validateForm");
const formButton = document.querySelector("#formButton");

const inputs = [fullName, subject, email, message];

let isFormValid = false;
let isValidationOn = false;

function validateForm() {

    if(checkLenght(fullName.value, 5) === true) {
        fullNameError.style.display = "none";
        isFormValid = true;
    } else {
        fullNameError.style.display = "block";
        isFormValid = false;
    }

    if(checkLenght(subject.value, 15) === true) {
        subjectError.style.display = "none";
        isFormValid = true;
    } else {
        subjectError.style.display = "block";
        isFormValid = false;
    }

    if(checkLenght(message.value, 25) === true) {
        messageError.style.display = "none";
        isFormValid = true;
    } else {
        messageError.style.display = "block";
        isFormValid = false;
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
        isFormValid = true;
    } else {
        emailError.style.display = "block";
        isFormValid = false;
    }  

    console.log("denne funka da")
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isFormValid === true) {
        form.reset();
        fromValidated.innerHTML += `<div class="validated">Message sendt!</div>`;
    }
    console.log(isFormValid);
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
    validateForm();
});
});


function checkLenght(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


