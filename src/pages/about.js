import location from '../imgs/location.png';

function createAbout() {
    const content = document.querySelector('#content');
    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '\u{260E} 123-456-7890';
    const location = document.createElement('p');
    location.textContent = '\u{1F3E1} 123 Fake Street, Fake City, FS, FC';
    const maps = document.createElement('img');
    maps.classList.add('location');
    maps.src = location;
    maps.alt = 'Restaurant Location';

    mainContainer.appendChild(phoneNumber);
    mainContainer.appendChild(location);
    mainContainer.appendChild(maps);
    content.appendChild(mainContainer);
}

export default createAbout;