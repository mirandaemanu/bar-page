import { createAbout } from "./about";
import createHome from "./home";
import { createMenu } from "./menu";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Daffodils";
    header.appendChild(headerTitle);

    const navMenu = createNavMenu();
    header.appendChild(navMenu);

    document.body.prepend(header);
}

function createNavMenu() {
    const navMenu = document.createElement('ul');
    navMenu.classList.add('nav-menu');

    const homeLink = document.createElement('a');
    const homeNav = document.createElement('li');
    homeLink.textContent = "Home";
    homeNav.appendChild(homeLink);
    navMenu.appendChild(homeNav);

    homeNav.addEventListener('click', () => {
    createHome();
    })
    

    const menuLink = document.createElement('a');
    const menuNav = document.createElement('li');
    menuLink.textContent = "Menu";
    menuNav.appendChild(menuLink);
    navMenu.appendChild(menuNav);

    menuNav.addEventListener('click', () => createMenu());

    const aboutLink = document.createElement('a');
    const aboutNav = document.createElement('li');
    aboutLink.textContent = "About";
    aboutNav.appendChild(aboutLink);
    navMenu.appendChild(aboutNav);

    aboutNav.addEventListener('click', () => createAbout());

    return navMenu;
}

function createContentArea() {
    const container = document.querySelector('.container');

    const contentArea = document.createElement('div');
    contentArea.classList.add('content');

    container.appendChild(contentArea);
    
}

function resetContentArea() {
    const contentArea = document.querySelector('.content');
    contentArea.remove();
}

export {
    createHeader,
    createContentArea,
    resetContentArea
}