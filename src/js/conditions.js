import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate } from "./templates.mjs";
import { activitiesTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import "../css/style.css";
import "../css/conditions.css";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(visitorCenters) {
    const centersContainer = document.querySelector(".visitor-services > details > ul");
    centersContainer.innerHTML = "";
    const html = visitorCenters.map(visitorCenterTemplate);
    centersContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setActivities(activities) {
    const activitiesContainer = document.querySelector(".activities > details > ul");
    activitiesContainer.innerHTML = "";
    const html = activities.map(activitiesTemplate).join("");
    activitiesContainer.insertAdjacentHTML("beforeend", html);
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);
    
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
}

init();