import food from '../imgs/mapoTofu.jpg';

function createHome() {
    const content = document.querySelector('#content');
    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';

    const food = document.createElement('img');
    food.src = food;
    food.alt = 'Mapo Tofu';

    const tagline = document.createElement('h1');
    tagline.textContent = 'Welcome to the Tasty Wok!';
    
    const description = document.createElement('p');
    description.textContent = 'The very best Chinese food in the GTA!';

    mainContainer.appendChild(tagline);
    mainContainer.appendChild(food);
    mainContainer.appendChild(description);
    content.appendChild(mainContainer);
}

export default createHome;