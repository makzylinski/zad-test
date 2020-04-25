const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submitButton');
const agreementCheckbox = document.getElementById('checkbox');

nameInput.addEventListener('keyup', () => {
    const regex = new RegExp(/^[a-zA-z]+$/);
    if(regex.test(nameInput.value) && nameInput.value.length >= 2) {
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
    } else {
        nameInput.classList.remove('valid');
        nameInput.classList.add('invalid');
    }

    checkValid();
})

surnameInput.addEventListener('keyup', () => {
    const regex = new RegExp(/^[a-zA-z]+$/);
    if(regex.test(surnameInput.value) && surnameInput.value.length >= 2) {
        surnameInput.classList.remove('invalid');
        surnameInput.classList.add('valid');
    } else {
        surnameInput.classList.remove('valid');
        surnameInput.classList.add('invalid');
    }

    checkValid();
})

emailInput.addEventListener('keyup', () => {
    const regex = new RegExp(/^[^@]+@[^\.]+\..+$/);
    if(regex.test(emailInput.value) && emailInput.value.length >= 2) {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
    }

    checkValid();
})

messageInput.addEventListener('change', () => {
    if(messageInput.value.length > 0) {
        messageInput.classList.remove('invalid');
        messageInput.classList.add('valid');
    } else {
        messageInput.classList.remove('valid');
        messageInput.classList.add('invalid');
    }

    checkValid();
})

agreementCheckbox.addEventListener('change', () => {
    checkValid();
})

const checkValid = () => {
    const validInputs = document.querySelectorAll('.valid');
    console.log(validInputs.length);

    if(validInputs.length === 4 && agreementCheckbox.checked) {
        submitButton.disabled = false;
    }
}
