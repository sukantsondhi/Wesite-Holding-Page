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

    let doctitle = document.title;
    window.addEventListener('blur', () => {
        document.title = 'Come back! 😕';
    });
    window.addEventListener('focus', () => {
        document.title = doctitle;
    });

    emailjs.init("Jrem436IVM0Uz4OjF"); // Replace with your EmailJS user ID

    const contactForm = document.getElementById("contact-form");
    if (contactForm) { 
      contactForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const message = document.getElementById("message").value;
          const templateParams = {
              from_name: name,
              from_email: email,
              message: message,
          };
          emailjs.send("service_t8korpm", "template_ixcj7xi", templateParams)
              .then(
                  function() {
                      event.target.reset();
                      alert("Message sent");
                  },
                  function(error) {
                      alert("Failed to send message: " + JSON.stringify(error));
                  }
              );
      });
    }

    // Footer scroll behavior: show footer only when scrolled to the bottom.
    const footer = document.querySelector('footer');
    function checkFooterVisibility() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5 || document.body.offsetHeight <= window.innerHeight) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility();
});
