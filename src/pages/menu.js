function createMenu() {
    const content = document.querySelector('#content');

    const mainMenu = document.createElement('div');
    mainMenu.id = 'mainMenu';
    content.appendChild(mainMenu);

    const appetizers = document.createElement('div');
    appetizers.classList.add('menuSection');
    mainMenu.append(createTitle('APPETIZERS'), appetizers);
    const springRolls = createMenuItem('Spring Rolls (4)', '$7.99', 'Deep Fried Spring Rolls (Pork and Shrimp)');
    const tofu = createMenuItem('Spicy Fried Tofu (2)', '$4.99', 'Deep fried tofu with hot chili sauce, spicy');
    const scallionPancake = createMenuItem('Scallion Pancake', '$6.99', 'Thin pancake made with vegetable oil & thinly sliced scallions');
    const squid = createMenuItem('Salty & Spicy Squid', '$8.99', 'Deep fried squid fried in a hot chili sauce, spicy');
    appetizers.append(springRolls, tofu, scallionPancake, squid);

    const soup = document.createElement('div');
    soup.classList.add('menuSection');
    mainMenu.append(createTitle('SOUPS'), soup);
    const sourSoup = createMenuItem('Hot & Sour Soup', '$4.99', 'Spicy and tangy soup with mushrooms, tofu, bamboo shoots and chicken');
    const eggSoup = createMenuItem('Egg Drop Soup', '$3.99', 'Soup with eggs in chicken broth');
    const sharkFinSoup = createMenuItem('Shark Fin Soup', '$5.99', 'Shark fin with chicken broth and pork');
    const winterMelonSoup = createMenuItem('Winter Melon Soup', '$4.99', 'Winter melon with pork broth, green onions and mushrooms');
    soup.append(sourSoup, eggSoup, sharkFinSoup, winterMelonSoup);

    const entrees = document.createElement('div');
    entrees.classList.add('menuSection');
    mainMenu.append(createTitle('ENTREES'), entrees);
    const friedRice = createMenuItem('Fried Rice', '$14.99', 'Stir fried rice with Chinese broccoli, shrimp and chicken');
    const chowMein = createMenuItem('Cantonese Chow Mein', '$14.99', 'Pan fried crispy egg noodles with chicken and veggies')
    const mapoTofu = createMenuItem('Mapo Tofu', '$12.99', 'Spicy tofu with ground pork and chili mix served on white rice')
    const kungPao = createMenuItem('Kung Pao Chicken', '$13.99', 'Chicken with hot peppers and peanuts with white rice');
    entrees.append(friedRice, chowMein, mapoTofu, kungPao);

    const drinks = document.createElement('div');
    drinks.classList.add('menuSection');
    mainMenu.append(createTitle('DRINKS'), drinks);
    const pop =  createMenuItem('Pop', '$1.99', 'Coke, Sprite, Coke Zero, Fanta');
    const lemonTea = createMenuItem('Lemon Tea', '$2.99', 'Lemon tea served hot or cold');
    const lemonHoney = createMenuItem('Lemon Honey', '$2.99', 'Lemon drink with sweet syrup served hot or cold');
    const arizona = createMenuItem('Arizona', '$1.49', 'Iced tea');
    drinks.append(pop, lemonTea, lemonHoney, arizona);
}

function createMenuItem(name, price, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');

    const menuItemName = document.createElement('div');
    menuItemName.classList.add('name');
    menuItemName.textContent = name;

    const menuItemPrice = document.createElement('div');
    menuItemPrice.classList.add('price');
    menuItemPrice.textContent = price;

    const menuItemDescription = document.createElement('div');
    menuItemDescription.classList.add('description');
    menuItemDescription.textContent = description;

    menuTitle.appendChild(menuItemName);
    menuTitle.appendChild(menuItemPrice);
    menuItem.appendChild(menuTitle);
    menuItem.appendChild(menuItemDescription);

    return menuItem;
}

function createTitle(title) {
    const sectionTitle = document.createElement('div');
    sectionTitle.textContent = (title);
    sectionTitle.classList.add('sectionTitle');
    return sectionTitle;
}

export default createMenu;