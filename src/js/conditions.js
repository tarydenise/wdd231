import "../css/style.css";
import "../css/conditions.css";
import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { activitiesTemplate, alertTemplate, visitorCenterTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("afterbeing", html.join(""));
}

function setVisitorCenters(visitorCenters) {
    const centersContainer = document.querySelector(".visitor ul");
    const html = visitorCenters.map(visitorCenterTemplate);
    centersContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
    const activitiesContainer = document.querySelector(".activities ul");
    const html = activitiesTemplate(activities);
    activitiesContainer.insertAdjacentHTML("afterbegin", html);
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