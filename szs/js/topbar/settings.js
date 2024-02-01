// wait for document to load
window.addEventListener('load', () => {

    // Get the settings elements and add icon to sdiv
    const sdiv = document.getElementById('tb-settings');
    const spanel = document.getElementById('tb-sp');
    sdiv.innerHTML = `<i class="ri-settings-3-line"></i>`;

    // Add click event listener for sdiv and spanel
    document.addEventListener('click', (e) => {
        // if sdiv is the clicked element and spanel is hidden, execute the following
        if (sdiv.contains(e.target) && spanel.style.display === 'none') {
            // change icon, add settings-open class to sdiv, and make spanel visible
            sdiv.innerHTML = `<i class="ri-settings-3-fill"></i>`
            sdiv.classList.add('settings-open');
            spanel.style.display = 'block';
        }
        // if sdiv is the clicked element and spanel is visible, execute the following
        else if (sdiv.contains(e.target) && spanel.style.display === 'block') {
            // change icon, remove settings-open class from sdiv, and make spanel hidden
            sdiv.innerHTML = `<i class="ri-settings-3-line"></i>`
            sdiv.classList.remove('settings-open');
            spanel.style.display = 'none';
        }
        // if sdiv is not the clicked element and spanel is hidden, execute the following
        else if (!sdiv.contains(e.target) && spanel.style.display === 'none') {
            // do nothing
            return;
        }
        // if sdiv is not the clicked element and spanel is visible, execute the following
        else if (!sdiv.contains(e.target) && spanel.style.display === 'block') {
            // change icon, remove settings-open class from sdiv, and make spanel hidden
            sdiv.innerHTML = `<i class="ri-settings-3-line"></i>`
            sdiv.classList.remove('settings-open');
            spanel.style.display = 'none';
        }
    });
})