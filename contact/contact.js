const contactForm = document.getElementById("contact-form");

function alpha(){

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const contact = document.getElementById("number");

    console.log("this is", this);

    if (name.value.trim() === "" || email.value.trim() === "" || subject.value.trim() === "" || message.value.trim() === "" || contact.value.trim() === "") {
        alert("Please fill out all fields.");
    } else {



        const serviceID = "service_uf0h6k4"; // Replace with your service ID
        const templateID = "template_jpbourm"; // Replace with your template ID

        emailjs.send(serviceID, templateID, {
            to_name: 'Softnet Solutions',
            from_name: name.value.trim(),
            message: `Subject:-${subject.value.trim()} Message:-${message.value.trim()} Phone No:-${contact.value.trim()} Email ID:-${email.value.trim()}`,
        })
            .then(response => {
                console.log('Email sent successfully!', response.status, response.text);
                name.value = "";
                email.value = "";
                subject.value = "";
                message.value = "";
                contact.value = "";
                alert("Thanks for filling out the form, We will get back to you as soon as possible")
            })
            .catch(error => {
                console.error('Error sending email:', error);
            });



    }
});

}

alpha();

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}