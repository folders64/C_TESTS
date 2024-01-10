//page functionality

// Reset scroll position on page reload
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

//var footerElement = document.querySelector('.footer');
/*
var middleElement = document.querySelector('#middle');
var rightElement = document.querySelector('#right');
var bonsai = document.querySelector('#output');

var mql = window.matchMedia('(max-width: 600px)');

function handleViewportChange(e) {
    if (e.matches) {
        //footerElement.style.display = 'none';
        middleElement.style.display = 'none';
        rightElement.style.display = 'none';
        bonsai.style.display = 'none';

    } else {
        //footerElement.style.display = 'block';
        middleElement.style.display = 'block';
        rightElement.style.display = 'block';
        bonsai.style.display = 'block';

    }
}

handleViewportChange(mql);

mql.addListener(handleViewportChange);
*/
/*
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
            }, 100); // 100 milliseconds delay
        }
    });
});
*/
