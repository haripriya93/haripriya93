document.getElementById('sort-date').addEventListener('change', sortEvents);
document.getElementById('sort-time').addEventListener('change', sortEvents);

function sortEvents() {
    const dateSort = document.getElementById('sort-date').value;
    const timeSort = document.getElementById('sort-time').value;
}