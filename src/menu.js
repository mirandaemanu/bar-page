import { createContentArea, resetContentArea } from "./basic";

function createMenu() {
    resetContentArea();
    createContentArea();

    const contentArea = document.querySelector('.content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const firstDrink = createMenuItem(
        'Negroni', 
        'Gim, Campari, Vermute tinto e laranja', 
        'https://www.liquor.com/thmb/KPTRXSVO7vyx7O2fPyNkLh9JQPo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mezcal-negroni-1500x1500-primary-6f6c472050a949c8a55aa07e1b5a2d1b.jpg'  
        );

    const secondDrink = createMenuItem(
        'Whisky Sour',
        'Whisky, suco de limão, angostura, clara pasteurizada e xarope simples', 
        'https://www.liquor.com/thmb/Oa3KjaP_udh0TYQO9ckm0dPS5PA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-sour-1500x1500-hero-c9df509bb1d141f1a8424051c3d78445.jpg'
    );

    const thirdDrink = createMenuItem(
        'Espresso Martini',
        'Vodka, licor de café e café espresso', 
        'https://static01.nyt.com/images/2023/08/25/multimedia/LH-espresso-martini-wplg/LH-espresso-martini-wplg-mediumSquareAt3X.jpg'
    );

    const fourthDrink = createMenuItem(
        'Caipirinha', 
        'Cachaça, açucar e limão', 
        'https://www.esquinamineira.com.br/wp-content/uploads/2021/05/caipirinha-de-limao-tradicional-1200x900.jpg'
    )
    
        menuContainer.appendChild(firstDrink);
        menuContainer.appendChild(secondDrink);
        menuContainer.appendChild(thirdDrink);
        menuContainer.appendChild(fourthDrink);
        contentArea.appendChild(menuContainer);


}

function createMenuItem(name, recipe, imgURL) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemImg = document.createElement('img');
    itemImg.src = imgURL;
    itemImg.classList.add('item-img');

    const itemName = document.createElement('p');
    itemName.textContent = name;
    itemName.classList.add('item-name');

    const itemRecipe = document.createElement('p');
    itemRecipe.textContent = recipe;
    itemRecipe.classList.add('item-recipe');

    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemRecipe);

    return menuItem;

    
}


export {
    createMenu
}