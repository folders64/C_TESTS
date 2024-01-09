// URLs
const urls = [
    'pages/links.html',
    'https://example.com/page2',
    'https://example.com/page3',
    'https://example.com/page4',
    'https://example.com/page5',
    'https://example.com/page6',
    'https://example.com/page7'
];

// Check viewport width
var mql = window.matchMedia('(max-width: 600px)');

// if screen is small, dont run link functionality
if (mql.matches) {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`line${i}`).classList.add('hide-on-mobile');
        document.getElementById(`text${i}`).classList.add('hide-on-mobile');
    }
} else {
    runScript();
}

function runScript() {
    for (let i = 1; i <= 6; i++) {
        const ellipseHitbox = document.getElementById(`ellipse${i}-hitbox`);
        const text = document.getElementById(`text${i}`);
        const line = document.getElementById(`line${i}`);

        text.style.visibility = 'hidden';
        line.style.visibility = 'hidden';

        ellipseHitbox.addEventListener('mouseover', () => {
            text.style.visibility = 'visible';
            line.style.visibility = 'visible';
        });

        ellipseHitbox.addEventListener('mouseout', () => {
            text.style.visibility = 'hidden';
            line.style.visibility = 'hidden';
        });

        ellipseHitbox.addEventListener('click', () => {
            window.location.href = urls[i - 1];
        });
    }
}