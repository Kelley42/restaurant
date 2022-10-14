const contact = () => {
    const content = document.querySelector("#content");
    content.classList.add("contact-content");
    
    const contactHeader = document.createElement("div");
    contactHeader.classList.add("contact-header");
    contactHeader.innerHTML = "Contact Us";
    content.appendChild(contactHeader);

    const contactPhone = document.createElement("div");
    contactPhone.classList.add("contact-phone");
    contactPhone.innerHTML = "(123) 456-7890";
    content.appendChild(contactPhone);

    const contactAddress = document.createElement("div");
    contactAddress.classList.add("contact-address");
    contactAddress.innerHTML = "4242 Beach Blvd.";
    content.appendChild(contactAddress);

    const contactEmail = document.createElement("div");
    contactEmail.classList.add("contact-email");
    contactEmail.innerHTML = "stingray_beachhouse_bar@some_email.com";
    content.appendChild(contactEmail);
};

export { contact };