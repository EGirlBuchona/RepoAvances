document.addEventListener("DOMContentLoaded", function() {
    console.log("Freelance Hotline Miami - Página cargada");

    const searchInput = document.getElementById("search");
    if (searchInput) {
        const projectGallery = document.getElementById("projectGallery");
        const projects = projectGallery.getElementsByTagName("a");

        searchInput.addEventListener("keyup", function() {
            const filter = searchInput.value.toLowerCase();
            for (let i = 0; i < projects.length; i++) {
                const title = projects[i].getAttribute("data-title").toLowerCase();
                if (title.includes(filter)) {
                    projects[i].style.display = "";
                } else {
                    projects[i].style.display = "none";
                }
            }
        });
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const serviceID = "TU_SERVICE_ID"; // Reemplaza TU_SERVICE_ID con tu Service ID de EmailJS
            const templateID = "TU_TEMPLATE_ID"; // Reemplaza TU_TEMPLATE_ID con tu Template ID de EmailJS

            emailjs.sendForm(serviceID, templateID, this)
                .then(function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Mensaje enviado con éxito.");
                    contactForm.reset();
                }, function(error) {
                    console.error("FAILED...", error);
                    alert("Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.");
                });
        });
    }
});
