//Mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");
const navbarItems = document.querySelectorAll(".navbar-item");

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})

navbarItems.forEach(navbarItem => {
    navbarItem.addEventListener('click', () => {
        if (navbarMenu.classList.contains('is-active')) {
            navbarMenu.classList.remove('is-active');
        }
    })
})

//Toggle theme
const htmlElement = document.querySelector("html");
const toggleThemeBtn = document.querySelector(".toggle-theme-btn");
const iconTheme = document.querySelector(".toggle-theme-btn i");

toggleThemeBtn.addEventListener('click', () => {
    htmlElement.classList.toggle("theme-light");
    iconTheme.classList.toggle("fa-moon");
})


//Form validation
const inputs = document.querySelectorAll(".input-max-length");
const textarea = document.querySelector(".textarea");
const contactFormButton = document.querySelector(".contact-form-button");
const nameInput = document.querySelectorAll(".name-input");
const emailInput = document.querySelectorAll(".email-input");
const subjectInput = document.querySelectorAll(".subject-input");

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.length > 50) {
            input.value = input.value.slice(0, 50);
        }
    })
})

textarea.addEventListener('input', () => {
    if (textarea.value.length > 300) {
        textarea.value = textarea.value.slice(0, 300);
    }
})