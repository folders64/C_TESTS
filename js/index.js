(function () {
    'use strict';

    const mql = window.matchMedia('(max-width: 600px)');

    function hideOnMobileElements() {
        for (let i = 1; i <= 6; i++) {
            const lineEl = document.getElementById(`line${i}`);
            const textEl = document.getElementById(`text${i}`);
            if (lineEl) lineEl.classList.add('hide-on-mobile');
            if (textEl) textEl.classList.add('hide-on-mobile');
        }
    }

    function runScript() {
        for (let i = 1; i <= 6; i++) {
            const ellipseHitbox = document.getElementById(`ellipse${i}-hitbox`);
            const text = document.getElementById(`text${i}`);
            const line = document.getElementById(`line${i}`);

            if (!ellipseHitbox) continue;

            if (text) text.style.visibility = 'hidden';
            if (line) line.style.visibility = 'hidden';
            try {
                ellipseHitbox.style.cursor = 'pointer';
            } catch (e) {
                // ignore if not an element supporting style
            }

            ellipseHitbox.addEventListener('mouseover', () => {
                if (text) text.style.visibility = 'visible';
                if (line) line.style.visibility = 'visible';
            });

            ellipseHitbox.addEventListener('mouseout', () => {
                if (text) text.style.visibility = 'hidden';
                if (line) line.style.visibility = 'hidden';
            });

            // keyboard accessibility: Enter / Space should activate the hitbox like a click
            ellipseHitbox.tabIndex = ellipseHitbox.tabIndex || 0;
            ellipseHitbox.setAttribute('role', 'button');
            ellipseHitbox.addEventListener('keydown', (ev) => {
                if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    ellipseHitbox.click();
                }
            });

            ellipseHitbox.addEventListener('click', () => {
                // urls array kept the same length and order to preserve behavior
                const urls = [
                    'pages/links.html',
                    'https://example.com/page2',
                    'https://example.com/page3',
                    'https://example.com/page4',
                    'https://example.com/page5',
                    'https://example.com/page6',
                    'https://example.com/page7'
                ];
                const target = urls[i - 1];
                if (target) window.location.href = target;
            });
        }
    }

    if (mql.matches) {
        // On small screens, hide the decorative elements (preserves original behavior)
        hideOnMobileElements();
    } else {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runScript);
        } else {
            runScript();
        }
    }

    // Keep responsiveness handling up-to-date
    if (typeof mql.addEventListener === 'function') {
        mql.addEventListener('change', (e) => {
            if (e.matches) hideOnMobileElements();
            else runScript();
        });
    } else if (typeof mql.addListener === 'function') {
        // older browsers
        mql.addListener((e) => {
            if (e.matches) hideOnMobileElements();
            else runScript();
        });
    }
})();
