
document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");
    var btn_open = document.getElementById("open");
    var btn_reset = document.getElementById("reset");

    setTimeout(function() {
        envelope.classList.add("open");
        envelope.classList.remove("close");
    }, 3000);

    envelope.addEventListener("click", function () {
        openEnvelope();
    });
    btn_open.addEventListener("click", function () {
        openEnvelope();
        validateNewForm();
    });
    btn_reset.addEventListener("click", function () {
        closeEnvelope();
    });

    function openEnvelope() {
        envelope.classList.add("open");
        envelope.classList.remove("close");
    }

    function closeEnvelope() {
        envelope.classList.add("close");
        envelope.classList.remove("open");
    }
});

function togglePopup() {
    var popupContainer = document.getElementById('popup-container');
    var blurBackground = document.getElementById('blur-background');
    popupContainer.style.display = (popupContainer.style.display === 'none' || popupContainer.style.display === '') ? 'block' : 'none';
    blurBackground.style.display = (blurBackground.style.display === 'none' || blurBackground.style.display === '') ? 'block' : 'none';
}

function validateInputName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('NameError');

    const nameRegex = /^[a-zA-Zа-яА-Я\s]{1,15}$/;
    if (!nameRegex.test(nameInput.value)) {
        nameError.innerText = 'Please enter a valid name (up to 15 characters).';
        nameError.style.color = 'red';
        nameInput.style.border = '2px solid red';
        nameInput.style.backgroundColor = '#fde5e5';
        nameInput.style.boxShadow = '1px 1px 5px red';
        nameInput.style.transform = 'scale(1)';
        return false;
    } else {
        nameError.innerText = 'Your name is valid.';
        nameError.style.color = 'green';
        nameInput.style.border = '2px solid green';
        nameInput.style.backgroundColor = '#e9ffe9';
        nameInput.style.boxShadow = '1px 1px 2px green';
        nameInput.style.transform = 'scale(1)';
        return true;
    }
}

function validateInputMessage() {
    const messageInput = document.getElementById('message-input');
    const messageError = document.getElementById('MessageError');

    const messageRegex = /^[a-zA-Zа-яА-Я\s]{20,3000}$/;

    if (!messageRegex.test(messageInput.value)) {
        if (messageInput.value.length < 20) {
            messageError.innerText = 'Message is too short. Please enter at least 20 characters.';
        } else if (messageInput.value.length > 3000) {
            messageError.innerText = 'Message is too long. Please enter no more than 3000 characters.';
        } else {
            messageError.innerText = 'Please enter a valid message.';
        }

        messageError.style.color = 'red';
        messageInput.style.border = '2px solid red';
        messageInput.style.backgroundColor = '#fde5e5';
        messageInput.style.boxShadow = '1px 1px 5px red';
        messageInput.style.transform = 'scale(1)';
        return false;
    } else {
        messageError.innerText = 'Your message is valid.';
        messageError.style.color = 'green';
        messageInput.style.border = '2px solid green';
        messageInput.style.backgroundColor = '#e9ffe9';
        messageInput.style.boxShadow = '1px 1px 2px green';
        messageInput.style.transform = 'scale(1)';
        return true;
    }
}


function validateNewForm() {
    const isValidName = validateInputName();
    const isValidMessage = validateInputMessage();

    // If both name and message are valid, proceed to check Local Storage
    if (isValidName && isValidMessage) {
        sendEmail()
        // Check Local Storage for the last submission timestamp
        const lastSubmissionTimestamp = localStorage.getItem('lastSubmission');



        if (lastSubmissionTimestamp) {
            const twentyFourHoursAgo = new Date().getTime() - 24 * 60 * 60 * 1000;
            const lastSubmissionDate = new Date(lastSubmissionTimestamp).getTime();

            // If last submission was more than 24 hours ago, hide the cloud
            if (lastSubmissionDate < twentyFourHoursAgo) {
                localStorage.removeItem('cloudHidden');
                document.getElementById('cloud').style.display = 'none';

            } else {
                // If last submission was within the last 24 hours, show the cloud
                localStorage.setItem('cloudHidden', 'true');
                document.getElementById('cloud').style.display = 'block';
            }
        } else {
            // If there is no last submission timestamp, show the cloud
            localStorage.setItem('cloudHidden', 'true');
            document.getElementById('cloud').style.display = 'block';
        }

        // Save current submission timestamp
        localStorage.setItem('lastSubmission', new Date().toISOString());

        return true; // Формата е валидна
    }

    return false; // Формата не е валидна
}

// Проверка и показване на облака след 24 часа
const cloudHidden = localStorage.getItem('cloudHidden');

if (cloudHidden === 'true') {
    document.getElementById('cloud').style.display = 'none';
} else {
    document.getElementById('cloud').style.display = 'block';
}


















function validateInputEmail(){
    const emailInput = document.getElementById('emailForm');
    const emailError = document.getElementById('emailError');
    // Валидация на имейл адрес
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.innerText = 'Please enter a valid email address.';
        emailError.style.color = 'red';
        emailInput.style.border = '2px solid red';
        emailInput.style.backgroundColor = '#fde5e5';
        emailInput.style.boxShadow = '1px 1px 5px red';
        emailInput.style.transform = 'scale(1)'
    } else {
        emailError.innerText = 'Your email is valid.';
        emailError.style.color = 'green';
        emailInput.style.border = '2px solid green';
        emailInput.style.backgroundColor = '#e9ffe9';
        emailInput.style.boxShadow = '1px 1px 2px green'
        emailInput.style.transform = 'scale(1)'
    }
}


function validateInputPassword() {
    const passwordInput = document.getElementById('passwordForm');
    const passwordError = document.getElementById('passwordError');
    // Валидация на парола
    const passwordRegex = /^.{6,}$/; // поне 6 символа
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.innerText = 'Password must be at least 6 characters long.';
        passwordError.style.color = 'red';
        passwordInput.style.border = '2px solid red';
        passwordInput.style.backgroundColor = '#fde5e5';
        passwordInput.style.boxShadow = '1px 1px 5px red';
        passwordInput.style.transform = 'scale(1)'
    } else {
        passwordError.innerText = 'Your password is valid.';
        passwordError.style.color = 'green';
        passwordInput.style.border = '2px solid green';
        passwordInput.style.backgroundColor = '#e9ffe9';
        passwordInput.style.boxShadow = '1px 1px 2px green'
        passwordInput.style.transform = 'scale(1)'
    }
}
function validateForm() {
    const emailInput = document.getElementById('emailForm');
    const passwordInput = document.getElementById('passwordForm');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Валидация на имейл адрес
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.innerText = 'Please enter a valid email address.';
        emailError.style.color = 'red';
        emailInput.style.border = '2px solid red';
       emailInput.style.backgroundColor = '#fde5e5';
        emailInput.style.boxShadow = '1px 1px 5px red';
        emailInput.style.transform = 'scale(1)'
    } else {
        emailError.innerText = 'Your email is valid.';
        emailError.style.color = 'green';
        emailInput.style.border = '2px solid green';
        emailInput.style.backgroundColor = '#e9ffe9';
        emailInput.style.boxShadow = '1px 1px 2px green'
        emailInput.style.transform = 'scale(1)'
    }

    // Валидация на парола
    const passwordRegex = /^.{6,}$/; // поне 6 символа
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.innerText = 'Password must be at least 6 characters long.';
        passwordError.style.color = 'red';
        passwordInput.style.border = '2px solid red';
        passwordInput.style.backgroundColor = '#fde5e5';
        passwordInput.style.boxShadow = '1px 1px 5px red';
        passwordInput.style.transform = 'scale(1)'
    } else {
        passwordError.innerText = 'Your password is valid.';
        passwordError.style.color = 'green';
        passwordInput.style.border = '2px solid green';
        passwordInput.style.backgroundColor = '#e9ffe9';
        passwordInput.style.boxShadow = '1px 1px 2px green'
        passwordInput.style.transform = 'scale(1)'
    }
}










document.addEventListener('DOMContentLoaded', function () {
    const bubbleImageElement = document.getElementById('imagebubble');

    function showBubbleWithTimestamp(imagePath, bubbleImageElement) {
        showBubble(imagePath, bubbleImageElement);

        // Save the current time in Local Storage
        localStorage.setItem('lastBubbleTimestamp', new Date().toISOString());
    }

    // Check Local Storage for the last time the bubble was shown
    const lastBubbleTimestamp = localStorage.getItem('lastBubbleTimestamp');

    if (lastBubbleTimestamp) {
        const twentyFourHoursAgo = new Date().getTime() - 24 * 60 * 60 * 1000;
        const lastBubbleDate = new Date(lastBubbleTimestamp).getTime();

        // If the bubble was shown more than 24 hours ago, show it again with a new image
        if (lastBubbleDate < twentyFourHoursAgo) {
            showBubbleWithTimestamp("Image/bubble.png", bubbleImageElement);
        } else {
            // If the bubble was shown less than 24 hours ago, show it again with the default image
            showBubbleWithTimestamp("Image/bubble-new.png", bubbleImageElement);
        }
    } else {
        // If there is no last time the bubble was shown, show it with the default image
        showBubbleWithTimestamp("Image/bubble.png", bubbleImageElement);
    }
});

function showBubble(imagePath, bubbleImageElement) {
    document.getElementById('speech-bubble').classList.add("animation");
    document.getElementById('speech-bubble-container').classList.add("animation-modal");

    // Change the image source to the specified image
    if (bubbleImageElement) {
        bubbleImageElement.src = imagePath;
    }

    // Hide the bubble after 13 seconds
    setTimeout(function () {
        hideBubble(bubbleImageElement);
    }, 13000);
}

function hideBubble(bubbleImageElement) {
    document.getElementById('speech-bubble').classList.remove("animation");
    document.getElementById('speech-bubble-container').classList.remove("animation-modal");

    if (bubbleImageElement) {
        bubbleImageElement.src = "Image/bubble.png";
    }
}

