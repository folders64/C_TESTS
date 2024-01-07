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

//URLs
const urls = [
    'https://example.com/page1',
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


// Bonsai tree
// inspired by https://p.teknik.io/Raw/EWWzQ
// and https://www.reddit.com/r/unixporn/comments/amdt7m/2bwm_cat/

var output = document.getElementById("output");
var rows = 13;
var cols = 18;
var grid;
var branches = 0;
var maxBranches = 1024;
var t = 50;

function init() {
    grid = [];
    for (var row = 0; row < rows; row++) {
        grid.push(Array(cols).fill(" "));
    }
}

function show() {
    var str = getString().split('\n');
    output.innerHTML = str.join('<br>');
}

function getString() {
    var str = "";
    for (var row = 0; row < rows; row++) {
        str += grid[row].join("") + "\n";
    }
    return str;
}

function bonsai() {
    init();
    grow();
    show();
}

bonsai();

function grow() {
    var start = Math.floor(cols / 2);

    var x = start;
    var y = rows - 4;
    var life = 10;

    setTimeout(function () { step(x, y, life); }, 400);
}

function nextTimeT() {
    t += 2;
    return t;
}

function nextTime() {
    return 1 + Math.floor(nextTimeT() / 5);
}

function step(x, y, life) {
    if (life < 1) {
        return;
    }

    var dy = (rand(0, 10) > 2) ? -1 : 0;
    var dx = rand(-4, 4);

    if (branches < maxBranches) {
        if (life % 10 === 0 || rand(0, 30) < 3 || life < 5) {
            branches++;
            setTimeout(function () { step(x, y, life - 1); }, t + rand(1, 6));
        }
    }

    x += dx;
    y += dy;

    var char = (dx > 0) ? "/" : "\\";
    if (dx === 0) { char = "|"; }
    if (dy === 0) { char = "~"; }
    if (life === 1) { char = "&"; }
    if (x < 0 || x > rows - 1 || y < 0) { return; }
    grid[y][x] = char;
    show();
    if (life > 0) {
        setTimeout(function () { step(x, y, life - 1); }, t + rand(1, 11));
    }
}

function rand(min, max) {
    return Math.floor(min + Math.random() * (Math.abs(min) + max));
}

var text = ".________.\n|+       |\n|      + |\n|  +     |\n\\________/";
var startX = Math.floor((cols - Math.max(...text.split('\n').map(line => line.length))) / 2); // center text
var startY = rows - 5; // bottom of tree

var lines = text.split('\n');
for (var j = 0; j < lines.length; j++) {
    for (var i = 0; i < lines[j].length; i++) {
        grid[startY + j][startX + i] = lines[j][i];
    }
}

show();

