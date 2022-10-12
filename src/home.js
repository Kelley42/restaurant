const home = () => {
    const content = document.querySelector("#content");
    
    const header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = "My Restaurant";
    content.appendChild(header);

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = "awesome description";
    content.appendChild(description);
};

export { home };