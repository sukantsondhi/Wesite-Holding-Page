document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
});

let doctitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Come back! 😕';
})
window.addEventListener('focus', () => {
    document.title = doctitle;
})

document.addEventListener('mousemove', function(e) {
    const logo = document.querySelector('.logo');
    const rect = logo.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const maxTilt = 15; // Maximum tilt angle

    const tiltX = (y / rect.height) * maxTilt; // Correct tiltX
    const tiltY = -(x / rect.width) * maxTilt; // Invert tiltY

    logo.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

document.addEventListener('mouseleave', function() {
    const logo = document.querySelector('.logo');
    logo.style.transform = 'rotateX(0) rotateY(0)';
});
