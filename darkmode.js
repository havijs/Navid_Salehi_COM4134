const darkmode = () => {
    const darkmodeButton = document.getElementById('darkmode-btn');
    const body = document.getElementsByTagName('body')[0];
    if(darkmodeButton.dataset['dark'] === 'false') {
        body.style.backgroundColor = '#404040';
        body.style.color = 'white';
        darkmodeButton.dataset['dark'] = 'true';
        darkmodeButton.innerText = 'Light Mode';
    }
    else if(darkmodeButton.dataset['dark'] === 'true') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        darkmodeButton.dataset['dark'] = 'false';
        darkmodeButton.innerText = 'Dark Mode';
    }
}
