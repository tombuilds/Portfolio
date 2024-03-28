// JavaScript for portfolio website

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to project titles
    var projectTitles = document.querySelectorAll('.project h3');
    projectTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var project = this.parentNode;
            var isOpen = project.classList.contains('open');
            // Close all other projects
            var allProjects = document.querySelectorAll('.project');
            allProjects.forEach(function(p) {
                if (p !== project && p.classList.contains('open')) {
                    p.classList.remove('open');
                }
            });
            // Toggle open/close for the clicked project
            project.classList.toggle('open', !isOpen);
        });
    });

    // Add event listeners for project previews
    var projectCards = document.querySelectorAll('.project');
    projectCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            var preview = this.querySelector('.preview');
            if (preview) {
                preview.style.display = 'block';
            }
        });
        card.addEventListener('mouseleave', function() {
            var preview = this.querySelector('.preview');
            if (preview) {
                preview.style.display = 'none';
            }
        });
    });
});
