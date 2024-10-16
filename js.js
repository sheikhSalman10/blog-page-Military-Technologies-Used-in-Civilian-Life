document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById('searchBar');
    const techItems = document.querySelectorAll('.tech-item');

    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value.toLowerCase();

        techItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});
