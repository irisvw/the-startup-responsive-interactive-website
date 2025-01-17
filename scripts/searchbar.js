searchButton = document.querySelector('.search');
searchBar = document.querySelector("input[type='search']");

searchButton.addEventListener('click', toggleSearchbar);

function toggleSearchbar() {
    searchBar.classList.toggle('collapsed');
}