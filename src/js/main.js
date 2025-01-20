import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { parkInfoTemplate, mediaCardTemplate, footerTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

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

setParkIntro(parkData);
setParkInfo(parkInfoLinks);
setHeaderFooter(parkData);