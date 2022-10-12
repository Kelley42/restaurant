const contact = () => {
    const content = document.querySelector("#content");
    
    const header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = "Contact Header";
    content.appendChild(header);

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = "contact info";
    content.appendChild(description);
};

export { contact };