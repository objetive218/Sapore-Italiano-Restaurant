import "./styles/menu.css";
import putanesca from "./img/puttanesa.jpg";

export default function menu() {
  let center = document.createElement("div");

  function createContent(title, img, ingredients) {
    let box = document.createElement("div");

    let productName = document.createElement("h3");
    let productImage = document.createElement("img");
    let productIngredients = document.createElement("p");
    productName.textContent = title;
    productImage.src = img;
    productIngredients.textContent = ingredients;

    box.appendChild(productName);
    box.appendChild(productImage);
    box.appendChild(productIngredients);

    return box;
  }

  center.appendChild(
    createContent(
      "Spaghetti puttanesca",
      `${putanesca}`,
      "Cook up this classic sauce in one pan, then toss with spaghetti for a simple midweek meal. It's budget-friendly too, making it a great meal for the family"
    )
  );
  center.appendChild(
    createContent(
      "One-pot tomato orzo",
      "./img/tomato_orzo.jpg",
      "Perfect for a family midweek dinner. Finish with fresh parsley and plenty of parmesan"
    )
  );
  center.appendChild(
    createContent(
      "Chicken pasta bake",
      "./img/chicken_pasta.jpg",
      "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad"
    )
  );
  center.appendChild(
    createContent(
      "Spaghetti bolognese",
      "./img/bolognese.jpg",
      "The spaghetti Bolognese sauce was absolutely delicious and flavor a true Italian classic with a meaty"
    )
  );
  center.appendChild(
    createContent(
      "Classic Italian lasagne",
      "./img/lasagne.jpg",
      "Authentic Italian lasagne recipe, with a creamy béchamel sauce and classic defined layers. Everyone's favourite family meal"
    )
  );
  center.appendChild(
    createContent(
      "Beef stroganoff",
      "./img/stroganoff.jpg",
      "Classic beef stroganoff with steak and mushrooms for a tasty midweek meal. Garnish with parsley and serve with pappardelle pasta or rice."
    )
  );
  center.setAttribute("id", "boxMenu");
  return center;
}
