// Cache + create menu elements
const item1 = document.createElement("div");
const item1img = document.createElement("div");
const item1hea = document.createElement("h3");
const item1des = document.createElement("p");

const item2 = document.createElement("div");
const item2img = document.createElement("div");
const item2hea = document.createElement("h3");
const item2des = document.createElement("p");

const item3 = document.createElement("div");
const item3img = document.createElement("div");
const item3hea = document.createElement("h3");
const item3des = document.createElement("p");

const item4 = document.createElement("div");
const item4img = document.createElement("div");
const item4hea = document.createElement("h3");
const item4des = document.createElement("p");

const item5 = document.createElement("div");
const item5img = document.createElement("div");
const item5hea = document.createElement("h3");
const item5des = document.createElement("p");

const item6 = document.createElement("div");
const item6img = document.createElement("div");
const item6hea = document.createElement("h3");
const item6des = document.createElement("p");

const item7 = document.createElement("div");
const item7img = document.createElement("div");
const item7hea = document.createElement("h3");
const item7des = document.createElement("p");

const item8 = document.createElement("div");
const item8img = document.createElement("div");
const item8hea = document.createElement("h3");
const item8des = document.createElement("p");
const item9 = document.createElement("div");

const item9img = document.createElement("div");
const item9hea = document.createElement("h3");
const item9des = document.createElement("p");

const item10 = document.createElement("div");
const item10img = document.createElement("div");
const item10hea = document.createElement("h3");
const item10des = document.createElement("p");

function addMenuContent() {
    const tab = document.querySelector(".tab");
    tab.classList.add("Menu");

    // Populate menu items
    item1des.textContent = "Buns, beef patty, tomato, lettuce, cheese";
    item1hea.textContent = "Single";
    item1img.classList.add("img1");

    item2des.textContent = "Buns, beef patty, tomato, bacon, Cheese";
    item2hea.textContent = "Bacon";
    item2img.classList.add("img2");

    item3des.textContent = "Buns, x2 veg patty, tomato, lettuce, cheese";
    item3hea.textContent = "Vegan";
    item3img.classList.add("img3");

    item4des.textContent = "Buns, x2 beef patty, tomato, lettuce, x2 cheese";
    item4hea.textContent = "Double";
    item4img.classList.add("img4");

    item5des.textContent = "Whole wheat buns, organic beef patty, tomato, lettuce, guacamole";
    item5hea.textContent = "Health";
    item5img.classList.add("img5");

    item6des.textContent = "toasted white bread, tomato, lettuce, guacamole, cheese";
    item6hea.textContent = "Toasted Sandwich";
    item6img.classList.add("img6");

    item7des.textContent = "White sub, tomato, cucumber, lettuce, meatballs";
    item7hea.textContent = "Meatball Sub";
    item7img.classList.add("img7");

    item8des.textContent = "Portuguese bun, tomato, cheese, lettuce, chicken strips";
    item8hea.textContent = "Prego Roll";
    item8img.classList.add("img8");

    item9des.textContent = "White roll, hotdog sausage, salsa";
    item9hea.textContent = "Hotdog";
    item9img.classList.add("img9");

    item10des.textContent = "Bagel, ham, cheese, lettuce, tomato";
    item10hea.textContent = "Bagel";
    item10img.classList.add("img10");

    // Append to each item
    item1.append(item1img, item1hea, item1des);
    item2.append(item2img, item2hea, item2des);
    item3.append(item3img, item3hea, item3des);
    item4.append(item4img, item4hea, item4des);
    item5.append(item5img, item5hea, item5des);
    item6.append(item6img, item6hea, item6des);
    item7.append(item7img, item7hea, item7des);
    item8.append(item8img, item8hea, item8des);
    item9.append(item9img, item9hea, item9des);
    item10.append(item10img, item10hea, item10des);

    // Replace tab content
    const elements = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];
    tab.replaceChildren(...elements);
}

export {
    addMenuContent,
};