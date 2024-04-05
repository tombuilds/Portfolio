function toggleMenu () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 0.5s ease";
        section.style.transform = "translateY(50px)";
        observer.observe(section);
    });

    // Add Contact section to sections NodeList
    const contactSection = document.getElementById("contact");
    sections.push(contactSection);

    // Observe the Contact section
    contactSection.style.opacity = 0;
    contactSection.style.transition = "opacity 0.5s ease";
    contactSection.style.transform = "translateY(50px)";
    observer.observe(contactSection);
});
