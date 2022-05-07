
// feedback-form-state

// import throttle = require("lodash.throttle");
let throttle = require('lodash.throttle');


const form = document.querySelector(".feedback-form");
// const email = document.querySelector()
console.dir(form.elements.email.value);

function getValue(e) {
    
const feedbackFormState = {
    email: e.currentTarget.elements.email.value,
    message: e.currentTarget.elements.message.value,
}
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));

};

function hasStorageData() {
const storageData = JSON.parse(localStorage.getItem("feedback-form-state"));
if(storageData) {
    form.elements.email.value = storageData.email;
    form.elements.message.value = storageData.message;
}};

function submitForm(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    form.elements.email.value = "";
    form.elements.message.value = "";
    localStorage.removeItem("feedback-form-state");
    
}

document.addEventListener("DOMContentLoaded", hasStorageData);

form.addEventListener("input", throttle(getValue, 500));

form.addEventListener("submit", submitForm);