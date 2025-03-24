function mainMenuHandler(ev) {
    let target = ev.target;
    
    // make sure 'target' refers to button itself
    if(target.tagName !== "BUTTON") {
        target = target.closest("button");
    }

    const nav = document.querySelector(".global-nav");
    nav.classList.toggle("show");

    // update aria-expanded correctly
    const isOpen = nav.classList.contains("show");
    target.setAttribute("aria-expanded", isOpen);

    // console.log("toggle");
}

function subMenuHandler(ev) {
    // find the closest li ancestor, then the submenu inside of that li and toggle the show class
    ev.currentTarget.closest("li").querySelector(".global-nav__submenu").classList.toggle("show");
    // toggle the rotate class on the button icon that was clicked
    ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
}

export default function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    const subMenuToggles = document.querySelectorAll(".global-nav__split-button__toggle");
    // when the main menu button is clicked:
    menuButton.addEventListener("click", mainMenuHandler);
    subMenuToggles.forEach((toggle) => {
        // for each submenu toggle
        toggle.addEventListener("click", subMenuHandler);
    });
}