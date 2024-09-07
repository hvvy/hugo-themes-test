document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        if (query) {
            fetch(`/search.json?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    searchResults.innerHTML = data.results.map(result => `<li><a href="${result.url}">${result.title}</a></li>`).join('');
                });
        } else {
            searchResults.innerHTML = '';
        }
    });
});

