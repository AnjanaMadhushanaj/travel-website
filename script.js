document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Enhanced Form Handling
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple visual feedback
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = 'Sending...';

            setTimeout(() => {
                alert('Thank you! Your inquiry has been received.');
                form.reset();
                btn.disabled = false;
                btn.textContent = originalText;
            }, 1000);
        });
    }
});