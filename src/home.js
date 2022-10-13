const home = () => {
    const content = document.querySelector("#content");
    
    const homeHeader = document.createElement("div");
    homeHeader.classList.add("home-header");
    homeHeader.innerHTML = "Stingray Beachhouse Bar & Grill";
    content.appendChild(homeHeader);

    const homeDescription = document.createElement("div");
    homeDescription.classList.add("home-description");
    homeDescription.innerHTML = "Your destination for excellent local cuisine and beach favorites";
    content.appendChild(homeDescription);

    const homeHours = document.createElement("div");
    homeHours.classList.add("home-hours");
    homeHours.innerHTML = `<div class="hours">Hours:</div><p>Sat-Sun: 10:00 AM - 10:00 PM</p><p>Mon-Fri: 8:00 AM - 8:00 PM</p>`;
    content.appendChild(homeHours);
};

export { home };