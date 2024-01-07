//URLs
const urls = [
    'pages/links.html',
    'https://example.com/page2',
    'https://example.com/page3',
    'https://example.com/page4',
    'https://example.com/page5',
    'https://example.com/page6',
    'https://example.com/page7'
];

for (let i = 1; i <= 6; i++) {
    const ellipseHitbox = document.getElementById(`ellipse${i}-hitbox`);
    const text = document.getElementById(`text${i}`);
    const line = document.getElementById(`line${i}`);
    //const circle = document.getElementById(`circle${i}`);

    //circle.style.fill = 'none'; // Change this line
    text.style.visibility = 'hidden';
    line.style.visibility = 'hidden';

    ellipseHitbox.addEventListener('mouseover', () => {
        text.style.visibility = 'visible';
        line.style.visibility = 'visible';
        //circle.style.fill = 'white'; // And this line

    });

    ellipseHitbox.addEventListener('mouseout', () => {
        text.style.visibility = 'hidden';
        line.style.visibility = 'hidden';
        //circle.style.fill = 'none'; // And this line

    });

    ellipseHitbox.addEventListener('click', () => {
        window.location.href = urls[i - 1];
    });
}