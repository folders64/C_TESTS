(function () {
    'use strict';

    // Ensure help logo ellipses are hidden on load
    window.addEventListener('load', () => {
        const helpLogoEllipses = document.querySelectorAll('.logo .el');
        helpLogoEllipses.forEach(el => {
            if (el && el.style) el.style.opacity = 0;
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const mainLogoEllipses = Array.from(document.querySelectorAll('.logo .ellipse'));
        const helpLogoEllipses = Array.from(document.querySelectorAll('.logo .el'));
        const lines = Array.from(document.querySelectorAll('.logo .line'));
        const texts = Array.from(document.querySelectorAll('.logo .svgtext'));
        const hitboxes = Array.from(document.querySelectorAll('.logo .ellipse-hitbox'));

        function handleScroll(event) {
            const deltaY = event && typeof event.deltaY === 'number' ? event.deltaY : 0;
            const scrollDirection = deltaY > 0 ? 'down' : 'up';

            // Animate main logo ellipses + associated elements in sequence
            mainLogoEllipses.forEach((ellipse, index) => {
                const line = lines[index];
                const text = texts[index];
                const hitbox = hitboxes[index];
                const fn = () => {
                    if (!ellipse) return;
                    if (scrollDirection === 'down') {
                        ellipse.classList.add('hidden');
                        if (line) line.classList.add('hidden');
                        if (text) text.classList.add('hidden');
                        if (hitbox) hitbox.classList.add('hidden');
                    } else {
                        ellipse.classList.remove('hidden');
                        if (line) line.classList.remove('hidden');
                        if (text) text.classList.remove('hidden');
                        if (hitbox) hitbox.classList.remove('hidden');
                    }
                };
                setTimeout(fn, index * 100);
            });

            // Help/logo ellipses have reversed show/hide behavior
            helpLogoEllipses.forEach((el, index) => {
                if (!el) return;
                setTimeout(() => {
                    if (scrollDirection === 'down') {
                        el.style.opacity = '1';
                        el.classList.remove('hidden');
                    } else {
                        el.style.opacity = '0';
                        el.classList.add('hidden');
                    }
                }, index * 20);
            });
        }

        // Use passive listener for wheel for performance; behavior preserved
        window.addEventListener('wheel', handleScroll, { passive: true });
    });
})();
