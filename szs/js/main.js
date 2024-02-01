// wait for document to load
window.addEventListener('load', () => {

    // Get the main element and append children
    const osiab = document.getElementById('osiab');
    osiab.appendChild(document.createElement('div')).id = 'topBar';
})