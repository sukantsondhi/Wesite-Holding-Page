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
