import createHome from "./pages/home";
import createAbout from "./pages/about";
import createMenu from "./pages/menu";
import './styles/style.css';

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

function clearContent() {
    const mainContent = document.querySelector('#content');
    mainContent.textContent = '';
};

function setActiveTab(button) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        if (button !== this) {
          button.classList.remove("active");
        }
    });
    button.classList.add("active");
}

homeBtn.addEventListener('click', (e)=> {
    clearContent();
    createHome();
    setActiveTab(e.target);
});

menuBtn.addEventListener('click', (e)=> {
    clearContent();
    createMenu();
    setActiveTab(e.target);
})

aboutBtn.addEventListener('click', (e)=> {
    clearContent();
    createAbout();
    setActiveTab(e.target);
})

const header = document.querySelector('header');
const restaurantName = document.createElement('div');
restaurantName.id = 'restaurantName';
restaurantName.textContent = "THE TASTY WOK";
header.appendChild(restaurantName);

createHome();
setActiveTab(homeBtn);