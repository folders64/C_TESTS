const triggerElement = document.getElementById('trigger');
const hiddenLink = document.getElementById('hiddenLink');
const homeLink = document.getElementById('homeLink');

triggerElement.addEventListener('click', function () {
    hiddenLink.classList.toggle('visible');

    triggerElement.textContent = hiddenLink.classList.contains('visible') ? '' : '0123456789';

    homeLink.style.marginLeft = hiddenLink.classList.contains('visible') ? '-10px' : '0';
});

homeLink.addEventListener('click', function () {
    triggerElement.textContent = '0123456789';

    hiddenLink.classList.remove('visible');

    homeLink.style.marginLeft = '10px';
});