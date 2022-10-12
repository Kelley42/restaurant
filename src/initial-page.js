const nav = () => {
    const header = document.querySelector("#header");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const homeTab = document.createElement("button");
    homeTab.classList.add("home-tab");
    homeTab.innerHTML = "Home";
    navbar.appendChild(homeTab);

    const menuTab = document.createElement("button");
    menuTab.classList.add("menu-tab");
    menuTab.innerHTML = "Menu";
    navbar.appendChild(menuTab);

    const contactTab = document.createElement("button");
    contactTab.classList.add("contact-tab");
    contactTab.innerHTML = "Contact";
    navbar.appendChild(contactTab);

    header.appendChild(navbar);
};

export { nav };

