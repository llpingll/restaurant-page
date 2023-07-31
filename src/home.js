export default function addHomeContent() {
    // Cache
    const tab = document.querySelector(".tab");
    const tabP1 = document.createElement("p");
    const tabP2 = document.createElement("p");
    const chef = document.createElement("div");

    tab.classList.add("Home");
    tabP1.textContent = "Best burgers in town!";
    tabP2.textContent = "Order in store or online!";
    chef.classList.add("chef");

    const elements = [tabP1, chef, tabP2];
    tab.replaceChildren(...elements);
}