document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navCategoriesContainer = document.querySelector('.nav-categories-container');
    const menuIconFa = document.querySelector('.menu-icon .fa');
    const overlay = document.querySelector('.overlay');

    menuIcon.addEventListener('click', () => {
        navCategoriesContainer.classList.toggle('show');
        overlay.classList.toggle('show');

        if (menuIconFa.classList.contains('fa-bars')) {
            menuIconFa.classList.remove('fa-bars');
            menuIconFa.classList.add('fa-times');
            menuIconFa.classList.add('active');
        } else {
            menuIconFa.classList.remove('fa-times');
            menuIconFa.classList.add('fa-bars');
            menuIconFa.classList.add('active');
        }
    });

    overlay.addEventListener('click', () => {
        navCategoriesContainer.classList.remove('show');
        overlay.classList.remove('show');
        menuIconFa.classList.remove('fa-times');
        menuIconFa.classList.add('fa-bars');
        menuIconFa.classList.add('active');
    });

    navCategoriesContainer.addEventListener('transitionend', () => {
        menuIconFa.classList.remove('active');
    });
});
