//page functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const middleElement = document.getElementById('middle');
    const originalText = middleElement.textContent;

    //middleElement.style.cursor = 'pointer';

    middleElement.addEventListener('mouseover', () => {
        middleElement.innerHTML = 'Ctrl+U or Cmd+Option+U to view source of this page';
    });

    middleElement.addEventListener('mouseout', (event) => {
        if (event.relatedTarget !== middleElement.querySelector('a')) {
            setTimeout(() => {
                middleElement.textContent = originalText;
            }, 100); // 200 milliseconds delay
        }
    });
});