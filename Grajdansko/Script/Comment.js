document.addEventListener('DOMContentLoaded', function () {
    loadComments();
});

function loadComments() {
    const commentsList = document.getElementById('comments-list');
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

    commentsList.innerHTML = '';

    savedComments.forEach(comment => {
        createCommentElement(comment);
    });
}

function addComment() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (validateInputs(name, email, message)) {
        const comment = {
            name: name,
            email: email,
            message: message,
            liked: false,
            favorite: false
        };

        saveComment(comment);
        createCommentElement(comment);

        // Clear input fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}

function validateInputs(name, email, message) {
    if (!name || !email || !message) {
        alert('Моля, попълнете всички полета.');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Моля, въведете валиден имейл адрес.');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function saveComment(comment) {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.unshift(comment);
    localStorage.setItem('comments', JSON.stringify(savedComments));
}

function createCommentElement(comment) {
    const commentsList = document.getElementById('comments-list');

    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    const imgElement = document.createElement('img');
    imgElement.src = 'default-avatar.png'; // Замени това с пътя към твоята default профилна снимка
    imgElement.alt = 'Profile Picture';
    commentElement.appendChild(imgElement);

    const commentTextElement = document.createElement('div');
    commentTextElement.classList.add('comment-text');
    commentTextElement.innerHTML = `<strong>${comment.name}</strong>: ${comment.message}`;
    commentElement.appendChild(commentTextElement);

    const commentActionsElement = document.createElement('div');
    commentActionsElement.classList.add('comment-actions');

    const likeButton = createIcon('thumb_up', comment.liked ? '#ff66b2' : '#ffb3d9');
    likeButton.addEventListener('click', () => toggleLike(comment, likeButton));
    commentActionsElement.appendChild(likeButton);

    const favoriteButton = createIcon('favorite', comment.favorite ? '#ff9900' : '#ffcc00');
    favoriteButton.addEventListener('click', () => toggleFavorite(comment, favoriteButton));
    commentActionsElement.appendChild(favoriteButton);

    const deleteButton = createIcon('delete', '#e74c3c');
    deleteButton.addEventListener('click', () => deleteComment(comment, commentElement));
    commentActionsElement.appendChild(deleteButton);

    commentElement.appendChild(commentActionsElement);

    commentsList.appendChild(commentElement);
}

function createIcon(iconClass, color) {
    const icon = document.createElement('i');
    icon.classList.add('material-icons');
    icon.style.color = color;
    icon.textContent = iconClass;
    return icon;
}

function toggleLike(comment, icon) {
    comment.liked = !comment.liked;
    saveComment(comment);
    loadComments();
}

function toggleFavorite(comment, icon) {
    comment.favorite = !comment.favorite;
    saveComment(comment);
    loadComments();
}

function deleteComment(comment, commentElement) {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    const updatedComments = savedComments.filter(savedComment => savedComment !== comment);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    commentElement.remove();
}
