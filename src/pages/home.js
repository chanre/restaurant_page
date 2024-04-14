function createHome() {
    const content = document.querySelector('#content');

    const food = document.createElement('img');
    food.src = '../src/imgs/mapotofu.jpg';
    food.alt = 'Mapo Tofu';

    const tagline = document.createElement('h1');
    tagline.textContent = 'Welcome to the Tasty Wok!';
    
    const description = document.createElement('p');
    description.textContent = 'The very best Chinese food in the GTA!';

    content.appendChild(tagline);
    content.appendChild(food);
    content.appendChild(description);

}

export default createHome;