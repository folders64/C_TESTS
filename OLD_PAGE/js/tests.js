document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        const animatedSpan = document.getElementById('animatedSpan');
        animateText(animatedSpan);
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const animatedSpan = document.getElementById('animatedSpan');
    animateText(animatedSpan);
});

function animateText(animatedSpan) {
    let animationInProgress = false;

    animatedSpan.addEventListener('animationstart', () => {
        if (!animationInProgress) {
            animationInProgress = true;
            const spanWidth = animatedSpan.offsetWidth;
            const screenWidth = window.innerWidth;

            // Set the initial position
            animatedSpan.style.transform = 'translateX(0)';

            // Start animation
            animatedSpan.animate(
                [{ transform: 'translateX(0)' }, { transform: `translateX(${screenWidth - spanWidth - 10}px)` }],
                {
                    duration: 5000, // Adjust the duration as needed
                    easing: 'linear',
                    fill: 'forwards'
                }
            ).onfinish = () => {
                animationInProgress = false;
            };
        }
    });
}