let buttonProducten = document.querySelector('.button-producten');
let subnavProducten = document.querySelector('.subnav-producten');

let buttonSituatie = document.querySelector('.button-situatie');
let subnavSituatie = document.querySelector('.subnav-situatie');

let buttonApp = document.querySelector('.button-app');
let subnavApp = document.querySelector('.subnav-app');

buttonProducten.addEventListener('click', () => {
    subnavProducten.classList.toggle('collapsed');

    if (!subnavApp.classList.contains('collapsed')) { subnavApp.classList.add('collapsed'); }
    if (!subnavSituatie.classList.contains('collapsed')) { subnavSituatie.classList.add('collapsed'); }
});

buttonSituatie.addEventListener('click', () => {
    subnavSituatie.classList.toggle('collapsed');

    if (!subnavApp.classList.contains('collapsed')) { subnavApp.classList.add('collapsed'); }
    if (!subnavProducten.classList.contains('collapsed')) { subnavProducten.classList.add('collapsed'); }
});

buttonApp.addEventListener('click', () => {
    subnavApp.classList.toggle('collapsed');

    if (!subnavProducten.classList.contains('collapsed')) { subnavProducten.classList.add('collapsed'); }
    if (!subnavSituatie.classList.contains('collapsed')) { subnavSituatie.classList.add('collapsed'); }
});

// check which button has been clicked.