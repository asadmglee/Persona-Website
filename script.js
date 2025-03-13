// Smooth Scrolling Effect for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover Effect on Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.background = '#ff7e5f';
        card.style.color = 'white';
    });
    card.addEventListener('mouseout', () => {
        card.style.background = 'white';
        card.style.color = 'black';
    });
});

// Welcome Alert
window.onload = function() {
    alert("Welcome to Asad Muhammad's Interactive Website!");
};
