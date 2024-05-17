import Validator from './validation.js'

Validator({
    form: "#form-1",
    errorSelector: ".form-message",
    formGroupSelector: ".form-group",
    rules: [
        Validator.isRequired(".email"),
        Validator.isEmail(".email"),

        Validator.isRequired(".password"),
        Validator.isMinLength(".password", 6),
    ],
    onSubmit: (data) => {
        console.log(data)
    }
})

Validator({
    form: "#form-2",
    errorSelector: ".form-message",
    formGroupSelector: ".form-group",
    rules: [
        Validator.isRequired(".fullname"),

        Validator.isRequired(".email"),
        Validator.isEmail(".email"),

        Validator.isRequired(".password"),
        Validator.isMinLength(".password", 6),
    ],
    onSubmit: (data) => {
        console.log(data)
    }
})

// DOM

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
