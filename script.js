document.addEventListener('DOMContentLoaded', () => {
    // Create the circular cursor element
    const cursor = document.createElement('div');
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    cursor.style.position = 'absolute';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '1000';
    cursor.style.transition = 'transform 0.1s ease';
    document.body.appendChild(cursor);

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });

    // Hide the default cursor
    document.body.style.cursor = 'none';
});