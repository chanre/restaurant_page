function createAbout() {
    const content = document.querySelector('#content');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '123-456-7890';
    const location = document.createElement('p');
    location.textContent = '123 Fake Street, Fake City, FS, FC';

    content.appendChild(phoneNumber);
    content.appendChild(location);
}

export default createAbout;