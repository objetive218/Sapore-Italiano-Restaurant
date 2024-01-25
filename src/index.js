import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import footer from "./footer";

const allPage = document.querySelector("#content");
const main = document.createElement("main");
// home creation
const navBar = (name) => {
  let header = document.createElement("header");
  header.setAttribute("id", "navegation");
  let nameRes = document.createElement("h1");
  nameRes.textContent = name;
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  ul.setAttribute("id", "menuItems");
  let context = "Home";
  // fuction to add
  function menuMove(e) {
    if (e.target.textContent === context) {
      ("");
    } else {
      switch (e.target.textContent) {
        case "Home":
          main.innerHTML = "";
          main.appendChild(home());
          context = String(e.target.textContent);
          break;
        case "Menu":
          main.innerHTML = "";
          main.appendChild(menu());
          context = String(e.target.textContent);
          break;
        case "Contact Us":
          main.innerHTML = "";
          main.appendChild(contact());
          context = String(e.target.textContent);
          break;
        default:
          break;
      }
    }
  }

  function createNav(menuName) {
    let li = document.createElement("li");
    li.textContent = menuName;
    li.addEventListener("click", (e) => {
      removeClass();
      e.target.classList.add("active");
      menuMove(e);
      console.log(e.target.textContent);
    });

    return li;
  }
  nameRes.addEventListener("click", (e) => {
    main.innerHTML = "";
    removeClass();
    main.appendChild(home());
  });

  let removeClass = function () {
    let menuItems = document.querySelectorAll("li");
    console.log(menuItems);
    for (let i = 0; i < menuItems.length; i++) {
      const element = menuItems[i];
      element.classList.remove("active");
    }
  };

  ul.appendChild(createNav("Home"));
  ul.appendChild(createNav("Menu"));
  ul.appendChild(createNav("Contact Us"));
  header.appendChild(nameRes);
  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
};

allPage.appendChild(navBar("Sapore Italiano"));
allPage.appendChild(main);
main.appendChild(home());
allPage.appendChild(footer());
