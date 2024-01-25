import logo_pasta from "./img/logo_pasta.jpg";

const home = () => {
  let sec = document.createElement("section");
  let logo = document.createElement("img");
  let welcome = document.createElement("h3");
  let description = document.createElement("p");
  let sticker = document.createElement("span");

  logo.src = `${logo_pasta}`;
  welcome.textContent = "Welcome to Sapore Italiano";
  description.textContent =
    "Welcome to 'Sapore Italiano' a culinary oasis where the art of pasta takes center stage, immerse yourself in a journey through Italy's rich and diverse pasta traditions. Located in Bogota Colombia, 'Restauran' combines rustic charm with contemporary elegance to create a warm and inviting atmosphere for lovers of Italian cuisine.";

  sec.setAttribute("id", "pageCenter");
  sec.appendChild(logo);
  sec.appendChild(welcome);
  sec.appendChild(description);

  return sec;
};

export default home;
