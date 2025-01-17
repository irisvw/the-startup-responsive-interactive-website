searchButton = document.querySelector('.search');
searchBar = document.querySelector("input[type='search']");

searchButton.addEventListener('click', toggleSearchbar);

function toggleSearchbar() {
    if (searchBar.classList.contains('collapsed')) {
        searchBar.classList.remove('collapsed');
        searchBar.focus();
    } else {
        searchBar.classList.add('collapsed');
    }
}s