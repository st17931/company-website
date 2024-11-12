document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Please fill out all fields.");
            } else if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
            } else {
                alert("Message sent successfully!");
                contactForm.reset();
            }
        });
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
