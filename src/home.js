import { resetContentArea, createContentArea } from "./basic";

function createHome() {
    resetContentArea();
    createContentArea();

    const contentArea = document.querySelector('.content');

    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = "Classic and Signature Cocktails";
    contentArea.appendChild(firstParagraph);

    const img = document.createElement('div');
    img.classList.add('content-img');
    contentArea.appendChild(img);

    const lastParagraph = document.createElement('p');
    lastParagraph.textContent = "Come pay us a visit!";
    contentArea.appendChild(lastParagraph);


}

export default createHome;

