import { getInfoLinks, getParkData, parkInfoLinks } from "./parkService.mjs";
import { parkInfoTemplate, mediaCardTemplate, footerTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import "../css/style.css";
import "../css/home.css";

const parkData = getParkData();

function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>`;
}

function setParkInfo(data) {
    const infoEl = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);

    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfo(parkInfoLinks);

}

init();