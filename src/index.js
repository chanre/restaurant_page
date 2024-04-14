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

homeBtn.addEventListener('click', ()=> {
    console.log('hello home');
    clearContent();
    createHome();
});

menuBtn.addEventListener('click', ()=> {
    clearContent();
    createMenu();
})

aboutBtn.addEventListener('click', ()=> {
    console.log('hello about');
    clearContent();
    createAbout();
})

createHome();