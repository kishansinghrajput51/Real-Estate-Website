document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.querySelector('.search-input');

    searchButton.addEventListener('click', function() {
        searchInput.classList.toggle('show');
        if (searchInput.classList.contains('show')) {
            searchInput.focus();
        }
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});

