const formInputs = document.querySelectorAll('#name, #email, #phone, #message');

formInputs.forEach(input => {
    input.addEventListener('input', function () {
        validateField(input);
    });
});

function validateField(input) {
    const errorMessageId = input.id + 'Error';
    const errorMessageElement = document.getElementById(errorMessageId);

    if (input.value.trim() === '') {
        errorMessageElement.innerText = 'Please enter ' + input.placeholder.toLowerCase() + '.';
        input.classList.remove('valid');
        input.classList.add('error');
    } else {
        errorMessageElement.innerText = '';
        input.classList.remove('error');
        input.classList.add('valid');
    }

    const fieldName = document.getElementById('name');
    if (fieldName.classList.contains('error')) {
        fieldName.style.border = '2px solid red';
        fieldName.style.transform = 'scale(1)';
        fieldName.style.outline = 'none';
        fieldName.style.boxShadow = '1px 1px 5px red';
        fieldName.style.backgroundColor = '#fde5e5';
    } else {
        fieldName.style.border = '2px solid green';
        fieldName.style.transform = 'none';
        fieldName.style.backgroundColor = '#e9ffe9';
        fieldName.style.boxShadow = '1px 1px 2px green'
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const fieldEmail = document.getElementById('email')
    if (fieldEmail.classList.contains('error')) {
        fieldEmail.style.border = '2px solid red';
        fieldEmail.style.transform = 'scale(1)';
        fieldEmail.style.outline = 'none';
        fieldEmail.style.boxShadow = '1px 1px 5px red';
        fieldEmail.style.backgroundColor = '#fde5e5';
    } else {

        if (input.id === 'email' && !validRegex.test(input.value)) {
            errorMessageElement.innerText = 'Please enter a valid email address *.';
            fieldEmail.style.border = '2px solid red';
            fieldEmail.style.transform = 'scale(1)';
            fieldEmail.style.outline = 'none';
            fieldEmail.style.boxShadow = '1px 1px 5px red';
            fieldEmail.style.backgroundColor = '#fde5e5';
        } else {
            fieldEmail.style.border = '2px solid green';
            fieldEmail.style.transform = 'none';
            fieldEmail.style.backgroundColor = '#e9ffe9';
            fieldEmail.style.boxShadow = '1px 1px 2px green'
        }
    }


    var phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const fieldPhone = document.getElementById('phone');
    if (fieldPhone.classList.contains('error')) {
        fieldPhone.style.border = '2px solid red';
        fieldPhone.style.transform = 'scale(1)';
        fieldPhone.style.outline = 'none';
        fieldPhone.style.boxShadow = '1px 1px 5px red';
        fieldPhone.style.backgroundColor = '#fde5e5';
    }
    if (input.id === 'phone' && !phoneno.test(input.value)) {
        errorMessageElement.innerText = 'Please enter a valid phone number *.';
        fieldPhone.style.border = '2px solid red';
        fieldPhone.style.transform = 'scale(1)';
        fieldPhone.style.outline = 'none';
        fieldPhone.style.boxShadow = '1px 1px 5px red';
        fieldPhone.style.backgroundColor = '#fde5e5';
    }
    else {
        fieldPhone.style.border = '2px solid green';
        fieldPhone.style.transform = 'none';
        fieldPhone.style.backgroundColor = '#e9ffe9';
        fieldPhone.style.boxShadow = '1px 1px 2px green'
    }

    const fieldMessage = document.getElementById('message');
    if (fieldMessage.classList.contains('error')) {
        fieldMessage.style.border = '2px solid red';
        fieldMessage.style.transform = 'scale(1)';
        fieldMessage.style.outline = 'none';
        fieldMessage.style.boxShadow = '1px 1px 5px red';
        fieldMessage.style.backgroundColor = '#fde5e5';
    }
    else {
        fieldMessage.style.border = '2px solid green';
        fieldMessage.style.transform = 'none';
        fieldMessage.style.backgroundColor = '#e9ffe9';
        fieldMessage.style.boxShadow = '1px 1px 2px green'
        fieldMessage.style.height = '130px';
    }
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    const formInputs = [name, email, phone, message];
    let isValid = true;

    formInputs.forEach(input => {
        validateField(input);

        if (input.classList.contains('error')) {
            isValid = false;
        }
    });

    if (isValid) {
        openModal();
        // Изчистване на полетата след изпращане на формата
        formInputs.forEach(input => {
            input.value = '';
            input.classList.remove('valid');
            input.style.border = '';
            input.style.transform = '';
            input.style.boxShadow = '';
            input.style.outline = '';
        });
    }
}









const okButton = document.querySelector('.popup button')
const dialog = document.querySelector('.popup')
const bigdialog = document.querySelector('.big-popup')

function openModal() {
    dialog.classList.add('popup-open')
    bigdialog.classList.add('popup-open-form')
}

okButton.addEventListener('click', () => {
    dialog.classList.remove('popup-open')
    bigdialog.classList.remove('popup-open-form')
})