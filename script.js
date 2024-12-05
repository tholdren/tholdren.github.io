document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');

    // Update cursor position on mouse move
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');

    interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
});
