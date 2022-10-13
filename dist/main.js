(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("home-header"),t.innerHTML="Stingray Beachhouse Bar & Grill",e.appendChild(t);const n=document.createElement("div");n.classList.add("home-description"),n.innerHTML="Your destination for excellent local cuisine and beach favorites",e.appendChild(n);const d=document.createElement("div");d.classList.add("home-hours"),d.innerHTML='<div class="hours">Hours:</div><p>Sat-Sun: 10:00 AM - 10:00 PM</p><p>Mon-Fri: 8:00 AM - 8:00 PM</p>',e.appendChild(d)};(()=>{const e=document.querySelector("#header"),t=document.createElement("div");t.classList.add("navbar");const n=document.createElement("button");n.classList.add("home-tab"),n.innerHTML="Home",t.appendChild(n);const d=document.createElement("button");d.classList.add("menu-tab"),d.innerHTML="Menu",t.appendChild(d);const c=document.createElement("button");c.classList.add("contact-tab"),c.innerHTML="Contact",t.appendChild(c),e.appendChild(t)})(),e(),document.querySelector(".menu-tab").addEventListener("click",(()=>{content.innerHTML="",(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menu-header"),t.innerHTML="Menu",e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-description"),n.innerHTML="Try one of our mouth-watering meals.",e.appendChild(n);const d=document.createElement("div");d.classList.add("menu-items-container"),d.appendChild(function(e){const t=document.createElement("div");t.classList.add("full-menu");for(const n in e){const d=document.createElement("div");d.classList.add("item");const c=document.createElement("h2");c.classList.add("food"),c.innerHTML=e[n][0];const a=document.createElement("p");a.classList.add("price"),a.innerHTML=e[n][1];const s=document.createElement("p");s.classList.add("food-description"),s.innerHTML=e[n][2],d.append(c,a,s),t.appendChild(d)}return t}([["Classic Hot Dog",2,"All-beef hot dog in a potato bun topped with ketchup and melted cheese"],["Classic Cheeseburger",2,"Hamburger cooked to perfection topped with cheddar cheese on a sweet roll bun and a spear pickle on the side"],["Cheese Fries",4,"Crispy crinkle-cut fries loaded with cheddar cheese and bacon and served with creamy ranch"],["Chicken Caesar Salad",5,"Fresh salad tossed with grilled chicken breast strips, parmesan cheese, and creamy Caesar dressing"]])),e.appendChild(d)})()})),document.querySelector(".home-tab").addEventListener("click",(()=>{content.innerHTML="",e()})),document.querySelector(".contact-tab").addEventListener("click",(()=>{content.innerHTML="",(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contact-header"),t.innerHTML="Contact Us",e.appendChild(header);const n=document.createElement("div");n.classList.add("contact-phone"),n.innerHTML="(123) 456-7890",e.appendChild(n);const d=document.createElement("div");d.classList.add("contact-address"),d.innerHTML="4242 Beach Blvd.",e.appendChild(d);const c=document.createElement("div");c.classList.add("contact-email"),c.innerHTML="stingray_beachhouse_bar@some_email.com",e.appendChild(c)})()}))})();