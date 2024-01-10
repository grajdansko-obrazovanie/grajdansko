// Check if the user has already accepted cookies
var hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');

if (!hasAcceptedCookies) {
    // If not, wait for 3 seconds and show the cookie modal
    setTimeout(function() {
        var cookieModal = document.getElementById('cookiemodal');
        var bigCookieModal = document.getElementById('CookiePopup');
        cookieModal.classList.add('cookie-view-active');
        bigCookieModal.classList.add('BigCookieModal');
    }, 20000);
}

// Function to be called when the "Allow" button is clicked
function allowButtonClick() {
    var cookieModal = document.getElementById('cookiemodal');
    var bigCookieModal = document.getElementById('CookiePopup');

    // Remove the class ".cookie-view-active"
    cookieModal.classList.remove('cookie-view-active');
    bigCookieModal.classList.remove('BigCookieModal');

    // Set a flag in localStorage to indicate that the user has accepted cookies
    localStorage.setItem('hasAcceptedCookies', true);
}