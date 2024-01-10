
function revealEllipses() {
    const ellipses = [];

    // Collect the first 6 ellipses
    for (let i = 1; i <= 6; i++) {
        const ellipse = document.getElementById(`ellipse${i}`);
        if (ellipse) {
            ellipses.push(ellipse);
        }
    }

    ellipses.forEach((ellipse, index) => {
        // Set initial styles
        ellipse.style.opacity = '0';
        ellipse.style.transition = `opacity 0.5s ease ${index * 0.1}s`; // Adjust the delay as needed

        // Use setTimeout to apply opacity change after a short delay
        setTimeout(() => {
            ellipse.style.opacity = '1';
        }, 50); // Adjust the delay as needed
    });
}

// Call the revealEllipses function when the window has finished loading
window.addEventListener('load', revealEllipses);


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
    if (window.innerWidth >= 768) {
        page.style.display = 'grid';
        page.style.gridTemplateColumns = 'repeat(2, 1fr)';
        page.style.gridTemplateRows = 'repeat(3, 1fr)';
        page.style.gap = '20px';
        page.style.alignItems = 'initial'; // Reset align-items
    } else if (window.innerWidth >= 768) {
        page.style.display = 'flex';
        page.style.justifyContent = 'center';
        page.style.alignItems = 'center';
        page.style.margin = '0'; // Reset margin
    } else {
        page.style.display = 'block';
        page.style.textAlign = 'center';
        page.style.gap = '20px'; // Add margin to create space between elements
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

    document.getElementById('ellipse1').setAttribute('width', width);
    document.getElementById('ellipse2').setAttribute('height', height);
    document.getElementById('ellipse3').setAttribute('width', width);
    document.getElementById('ellipse4').setAttribute('height', height);
    document.getElementById('ellipse5').setAttribute('height', height);
    document.getElementById('ellipse6').setAttribute('height', height);
}

// Call resizeSVGs on page load to set initial sizes
resizeSVGs();
adjustLayout();
