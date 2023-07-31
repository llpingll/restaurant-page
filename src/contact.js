// Cache
const tabP1 = document.createElement("p");
const tabP2 = document.createElement("p");
const tabImg = document.createElement("div");


function addContactContent() {
    const tab = document.querySelector(".tab");
    tab.classList.add("Contact");

    tabP1.textContent = "📞 567 891 0111";
    tabP2.textContent = "🏠 6th St, Los Angeles, CA 90036, United States";
    tabImg.classList.add("location");

    const elements = [tabP1, tabP2, tabImg];
    tab.replaceChildren(...elements);
}

export {
    addContactContent,
};