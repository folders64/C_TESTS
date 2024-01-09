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

function adjustLayout() {
    var page = document.querySelector('.page2');
    if (window.innerWidth >= 768) { // adjust this value as needed
        page.style.display = 'grid';
        page.style.gridTemplateColumns = 'repeat(2, 1fr)';
        page.style.gridTemplateRows = 'repeat(3, 1fr)';
        page.style.gap = '20px'; // adjust this value as needed
    } else {
        page.style.display = 'flex';
        page.style.justifyContent = 'center';
        page.style.alignItems = 'center';
    }
}

window.addEventListener('resize', adjustLayout);

window.addEventListener('resize', resizeSVGs);

function resizeSVGs() {
    var width, height;
    if (window.innerWidth < 500) {
        width = 200;
        height = 75;
    } else if (window.innerWidth < 800) {
        width = 300;
        height = 112.5;
    } else {
        width = 400;
        height = 150;
    }

    document.getElementById('el5').setAttribute('width', width);
    document.getElementById('el5').setAttribute('height', height);
    document.getElementById('el6').setAttribute('width', width);
    document.getElementById('el6').setAttribute('height', height);
}

// Call resizeSVGs on page load to set initial sizes
resizeSVGs();
adjustLayout();
