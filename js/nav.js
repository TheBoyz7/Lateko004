document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navCategoriesContainer = document.querySelector('.nav-categories-container');
    const menuIconFa = document.getElementById('fa-bars');
    const overlay = document.querySelector('.overlay');

    menuIconFa.addEventListener('click', () => {
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


function showText() {
    const imageContent = document.querySelector('.image-content');
    if (imageContent) {
        imageContent.style.opacity = '1';
        imageContent.style.transform = 'translateY(0)';
    }
}

function hideText() {
    const imageContent = document.querySelector('.image-content');
    if (imageContent) {
        imageContent.style.opacity = '0';
        imageContent.style.transform = 'translateY(20px)';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item);

        const images = JSON.parse(item.getAttribute('data-images'));
        const period = parseInt(item.getAttribute('data-period'));
        let currentImageIndex = 0;
        
        const imageContainer = item.querySelector('.image-container img');

        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imageContainer.src = images[currentImageIndex];
            imageContainer.style.animation = 'none';
            setTimeout(() => imageContainer.style.animation = '', 10);
        }, period);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item);

        const images = JSON.parse(item.getAttribute('data-images'));
        const period = parseInt(item.getAttribute('data-period'));
        let currentImageIndex = 0;
        
        const imageContainer = item.querySelector('.image-container img');

        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imageContainer.src = images[currentImageIndex];
            imageContainer.style.animation = 'none';
            setTimeout(() => imageContainer.style.animation = '', 10);
        }, period);
    });
});
