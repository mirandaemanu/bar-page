import { resetContentArea, createContentArea } from "./basic";

function createAbout() {
    resetContentArea();
    createContentArea();

    const contentArea = document.querySelector('.content');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Welcome to Daffodils, a bar where the art of mixology meets a vibrant and welcoming atmosphere. At Daffodils, we take pride in crafting unique and delightful cocktails that tell a story with every sip. Our talented mixologists are dedicated to providing you with an exceptional experience, whether you're a cocktail enthusiast or a casual imbiber.\nImmerse yourself in the warm and inviting ambiance of Daffodils, where each visit promises a fusion of creativity and taste. Our carefully curated drink menu showcases a diverse range of flavors, from timeless classics to innovative concoctions, ensuring there's something for every palate. \nAt Daffodils, we believe in more than just serving drinks; we aim to create memorable moments. Join us for a journey through the artistry of mixology and let our friendly staff make your time at Daffodils an unforgettable experience. Cheers to great company, exceptional cocktails, and the vibrant spirit of Daffodils!`;
    
   
    contentArea.appendChild(paragraph);
}

export {
    createAbout
}