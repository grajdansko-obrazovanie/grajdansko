document.getElementByClassName("menu-toggle-btn").click(function(){
    this.classList.toggle("fa-times");
    document.getElementByClassName("navigation-menu").classList.toggle("active");
});