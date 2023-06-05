export default function createTemplate() {
    // Cache
    const content = document.querySelector("#content");
    // Header
    const header = document.createElement("header");
    const heading = document.createElement("h2");
    const nav = document.createElement("nav");
    // Main
    const main = document.createElement("main");
    const tab = document.createElement("div");
    const tabP1 = document.createElement("p");
    const tabP2 = document.createElement("p");
    const chef = document.createElement("div");
    const byP = document.createElement("p");
    const byA1 = document.createElement("a");
    const byA2 = document.createElement("a");
    // Footer
    const footer = document.createElement("footer");
    const footerP = document.createElement("p");
    const footerA = document.createElement("a");
    const footerI = document.createElement("i");


    // Build header
    heading.textContent = "BurgerPalace";

    const btnText = ["Home", "Menu", "Contact"];
    btnText.forEach(element => {
        const btn = document.createElement("button");
        btn.textContent = element;
        nav.appendChild(btn);
    });

    header.appendChild(heading);
    header.appendChild(nav);
    content.appendChild(header);


    // Build main
    tabP1.textContent = "Best burgers in town!";
    tabP2.textContent = "Order in store or online!";
    chef.classList.add("chef");
    tab.classList.add("tab");

    tab.appendChild(tabP1);
    tab.appendChild(chef);
    tab.appendChild(tabP2);
    main.appendChild(tab);
    content.appendChild(main);


    // Build background img photo credit
    byA1.href = "https://unsplash.com/@1ncreased?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"; // Link needs to be resolved
    byA1.textContent = "Lidye";
    byA2.href = "https://unsplash.com/photos/1Shk_PkNkNw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    byA2.textContent = "Unsplash";
    byP.id = "photoBy";
    byP.textContent += "Photo by ";
    byP.appendChild(byA1);
    byP.textContent += " on ";
    byP.appendChild(byA2);
    content.appendChild(byP);


    // Build footer
    footerA.href = "https://github.com/llpingll";
    footerA.target = "_blank";
    footerI.classList.add("fa-brands");
    footerI.classList.add("fa-github");
    footerP.textContent = `||Ping|| @ ${new Date().getFullYear()}`;
    footer.classList.add("footer");

    footerA.appendChild(footerI);
    footerP.appendChild(footerA);
    footer.appendChild(footerP);
    content.appendChild(footer);
}