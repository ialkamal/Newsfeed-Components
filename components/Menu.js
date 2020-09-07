// This is the data we will be using, study it but don't change anything, yet.
import gsap from "gsap";

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(menu) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const menuUl = document.createElement("ul");

  menu.forEach((menuItem) => {
    let item = document.createElement("li");
    item.textContent = menuItem;
    menuUl.appendChild(item);
  });

  menuDiv.appendChild(menuUl);

  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    //menuDiv.classList.toggle("menu--open");
    menuDiv.offsetLeft === 0
      ? gsap.to(menuDiv, { duration: 0.5, left: -350 })
      : gsap.to(menuDiv, { duration: 0.5, left: 0 });
  });

  let mouseOverMenu = false;

  menuDiv.addEventListener("mouseenter", () => {
    mouseOverMenu = true;
  });

  menuDiv.addEventListener("mouseleave", () => {
    mouseOverMenu = false;
  });

  window.addEventListener("click", () => {
    //menuDiv.classList.toggle("menu--open");
    if (menuDiv.offsetLeft === 0 && mouseOverMenu === false) {
      // eslint-disable-next-line no-undef
      gsap.to(menuDiv, { duration: 0.5, left: -350 });
    }
  });

  return menuDiv;
}

document.querySelector(".header").prepend(menuMaker(menuItems));
