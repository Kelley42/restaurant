const contact = () => {
    const content = document.querySelector("#content");
    
    const header = document.createElement("div");
    header.classList.add("header");
    header.style.width = "200px";
    header.style.height = "200px";
    header.innerHTML = "Contact Header";
    content.appendChild(header);

    const description = document.createElement("div");
    description.classList.add("description");
    description.style.width = "400px";
    description.style.height = "400px";
    description.innerHTML = "contact info";
    content.appendChild(description);
};

export { contact };