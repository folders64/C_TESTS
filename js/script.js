(function () {
    'use strict';

    // Reset scroll position on page reload
    window.addEventListener('beforeunload', () => {
        try {
            window.scrollTo(0, 0);
        } catch (e) {
            // ignore in restrictive environments
        }
    });

    // The rest of the old code was commented out. Keeping this file minimal and resilient.
})();
