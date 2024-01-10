document.addEventListener('DOMContentLoaded', function() {
    // Проверяваме дали събитието вече се е случило в последните 10 минути
    var lastEventTime = localStorage.getItem('lastEventTime');
    var currentTime = new Date().getTime();

    if (!lastEventTime || (currentTime - lastEventTime > 10 * 60 * 1000)) {
        // Събитието не се е случвало в последните 10 минути

        setTimeout(function() {
            var loaderModal = document.getElementById('loader');
            var loaderScreen = document.getElementById('loader-screen');
            loaderModal.classList.add('loader-view-active');
            loaderScreen.classList.add('loader-screen-view-active');

            // Записваме времето на последното събитие в локалното хранилище
            localStorage.setItem('lastEventTime', new Date().getTime());
        }, 1);

        setTimeout(function() {
            var loaderModal = document.getElementById('loader');
            var loaderScreen = document.getElementById('loader-screen');

            loaderModal.classList.remove('loader-view-active');
            loaderModal.classList.add('loader-view-not-active');

            loaderScreen.classList.remove('loader-screen-view-active');
            loaderScreen.classList.add('loader-screen-view-not-active');
        }, 6000);
    } else {
        // Събитието се е случило в последните 10 минути, пропускаме изпълнението
    }
});

