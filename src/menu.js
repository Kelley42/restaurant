const menu = () => {
    const content = document.querySelector("#content");
    content.classList.add("menu-content");

    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");
    menuHeader.innerHTML = "Menu";
    content.appendChild(menuHeader);

    const menuDescription = document.createElement("div");
    menuDescription.classList.add("menu-description");
    menuDescription.innerHTML = "Try one of our mouth-watering meals.";
    content.appendChild(menuDescription);

    let menuItems = [
        ["Classic Hot Dog", 2, "All-beef hot dog in a potato bun topped with ketchup and melted cheese"],
        ["Classic Cheeseburger", 2, "Hamburger cooked to perfection topped with cheddar cheese on a sweet roll bun and a spear pickle on the side"],
        ["Cheese Fries", 4, "Crispy crinkle-cut fries loaded with cheddar cheese and bacon and served with creamy ranch"],
        ["Chicken Caesar Salad", 5, "Fresh salad tossed with grilled chicken breast strips, parmesan cheese, and creamy Caesar dressing"]
    ];

    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");
    menuItemsContainer.appendChild(showMenu(menuItems));
    content.appendChild(menuItemsContainer);
};

function showMenu(menuItems) {
    const fullMenu = document.createElement("div");
    fullMenu.classList.add("full-menu");

    for (const item in menuItems) {
        const foodItem = document.createElement("div");
        foodItem.classList.add("item");

        const food = document.createElement("h2");
        food.classList.add("food");
        food.innerHTML = menuItems[item][0];
    
        const price = document.createElement("p");
        price.classList.add("price");
        price.innerHTML = `$${menuItems[item][1]}.00`;
    
        const foodDescription = document.createElement("p");
        foodDescription.classList.add("food-description");
        foodDescription.innerHTML = menuItems[item][2];

        foodItem.append(food, price, foodDescription);
        fullMenu.appendChild(foodItem);
    }
    return fullMenu;
};

export { menu };