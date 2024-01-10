/* not needed anymore
const header = document.querySelector('.header');
//store scroll position and timeout ID
let isScrolling;
let scrollTimeout;

//scroll events
function headerScroll() {
    // clear timeout
    clearTimeout(scrollTimeout);

    // hide header when scrolling down
    header.classList.add('hidden');

    // show header after 1000 milliseconds of no scrolling
    scrollTimeout = setTimeout(() => {
        header.classList.remove('hidden');
    }, 50);

}
window.addEventListener('scroll', headerScroll);
*/


window.addEventListener('load', (event) => {
    let helpLogoEllipses = document.querySelectorAll('.logo .el');
    helpLogoEllipses.forEach(function (el) {
        el.style.opacity = 0;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let mainLogoEllipses = document.querySelectorAll('.logo .ellipse');
    let helpLogoEllipses = document.querySelectorAll('.logo .el');
    let lines = document.querySelectorAll('.logo .line');
    let texts = document.querySelectorAll('.logo .svgtext');
    let hitboxes = document.querySelectorAll('.logo .ellipse-hitbox');

    function handleScroll(event) {
        const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

        const scrollY = window.scrollY || document.documentElement.scrollTop;

        console.log("Scroll Direction:", scrollDirection);
        console.log("ScrollY:", scrollY);

        // triggeroffset
        const triggerOffset = 100;

        mainLogoEllipses.forEach(function (ellipse, index) {
            const ellipseOffset = ellipse.getBoundingClientRect().top + scrollY;

            if (scrollDirection === 'down') {
                // hide
                setTimeout(() => {
                    ellipse.classList.add('hidden');
                    lines[index].classList.add('hidden');
                    texts[index].classList.add('hidden');
                    hitboxes[index].classList.add('hidden');
                }, index * 100); // delay
            } else if (scrollDirection === 'up') {
                // show
                setTimeout(() => {
                    ellipse.classList.remove('hidden');
                    lines[index].classList.remove('hidden');
                    texts[index].classList.remove('hidden');
                    hitboxes[index].classList.remove('hidden');
                }, index * 100); // delay
            }
        });


        helpLogoEllipses.forEach(function (el, index) {
            const elOffset = el.getBoundingClientRect().top + scrollY;

            if (scrollDirection === 'up') { // reversed
                // hide
                setTimeout(() => {
                    el.style.opacity = 0;
                    el.classList.add('hidden');
                }, index * 20); // delay
            } else if (scrollDirection === 'down') {
                // show
                setTimeout(() => {
                    el.style.opacity = 1;
                    el.classList.remove('hidden');
                }, index * 20); // delay
            }
        });
    }

    window.addEventListener("wheel", handleScroll);
});