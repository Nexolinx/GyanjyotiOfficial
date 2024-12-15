document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });

        card.addEventListener('click', () => {
            const gameName = card.getAttribute('data-game');
            console.log(`${gameName} card clicked!`);
            // You can add more functionality here, like opening a modal or redirecting
        });
    });

    // Add a subtle parallax effect to the header
    document.addEventListener('mousemove', (e) => {
        const header = document.querySelector('.header09 h1');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        header.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
});

