// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navUl.classList.toggle('active');
});