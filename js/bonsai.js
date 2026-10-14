(function () {
    'use strict';

    // Bonsai tree display (non-blocking, guarded)
    const mql = window.matchMedia('(max-width: 600px)');
    if (mql.matches) {
        // Small screens: do nothing
        return;
    }

    const output = document.getElementById('output');
    if (!output) {
        // Nothing to render into
        return;
    }

    const rows = 13;
    const cols = 18;
    let grid = [];
    let branches = 0;
    const maxBranches = 1024;
    let t = 50;

    function init() {
        grid = [];
        for (let row = 0; row < rows; row++) {
            grid.push(Array(cols).fill(' '));
        }
    }

    function getString() {
        let str = '';
        for (let row = 0; row < rows; row++) {
            str += grid[row].join('') + '\n';
        }
        return str;
    }

    function show() {
        const str = getString().split('\n');
        output.innerHTML = str.join('<br>');
    }

    function bonsai() {
        init();
        grow();
        show();
    }

    bonsai();

    function grow() {
        const start = Math.floor(cols / 2);
        let x = start;
        let y = rows - 4;
        let life = 10;

        setTimeout(() => step(x, y, life), 400);
    }

    function nextTimeT() {
        t += 2;
        return t;
    }

    function nextTime() {
        return 1 + Math.floor(nextTimeT() / 5);
    }

    function step(x, y, life) {
        if (life < 1) return;

        const dy = (rand(0, 10) > 2) ? -1 : 0;
        const dx = rand(-4, 4);

        if (branches < maxBranches) {
            if (life % 10 === 0 || rand(0, 30) < 3 || life < 5) {
                branches++;
                setTimeout(() => step(x, y, life - 1), t + rand(1, 6));
            }
        }

        x += dx;
        y += dy;

        let char = (dx > 0) ? '/' : '\\';
        if (dx === 0) char = '|';
        if (dy === 0) char = '~';
        if (life === 1) char = '&';

        // bounds: x -> cols, y -> rows
        if (x < 0 || x > cols - 1 || y < 0 || y > rows - 1) return;

        grid[y][x] = char;
        show();

        if (life > 0) {
            setTimeout(() => step(x, y, life - 1), t + rand(1, 11));
        }
    }

    // Standard inclusive rand(min,max)
    function rand(min, max) {
        const low = Math.min(min, max);
        const high = Math.max(min, max);
        return Math.floor(low + Math.random() * (high - low + 1));
    }

    const text = '.________.\n|+       |\n|      + |\n|  +     |\n\\________/';
    const startX = Math.floor((cols - Math.max(...text.split('\n').map(line => line.length))) / 2); // center text
    const startY = rows - 5; // bottom of tree

    const lines = text.split('\n');
    for (let j = 0; j < lines.length; j++) {
        for (let i = 0; i < lines[j].length; i++) {
            const gy = startY + j;
            const gx = startX + i;
            if (gy >= 0 && gy < rows && gx >= 0 && gx < cols) {
                grid[gy][gx] = lines[j][i];
            }
        }
    }

    show();
})();
