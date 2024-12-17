// Add event listener to monitor scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    // Check if the scroll position exceeds 50px
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});