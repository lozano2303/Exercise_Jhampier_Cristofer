document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.category-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            sections.forEach(section => section.classList.remove('active'));
            navLinks.forEach(link => link.classList.remove('active'));
            
            document.querySelector(targetId).classList.add('active');
            this.classList.add('active');
        });
    });
});
