const baseURL = "https://developer.nps.gov/api/v1/";
const outputList = document.getElementById("outputList");

async function getJson(endpoint) {
    const apiKey = "Yu2LUk0OvpGbUyFAoLItPeeEcKfamcjfwFCr2WmQ";
    const url = baseURL + endpoint;
    
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey
        }
    }
    
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    return data;
}

function listTemplate(item) {
    return '<li><a href="${item.url}">${item.fullName}</a> ${item.states}</li>'
}

async function renderClimbingList() {
    const endpoint = "activities/parks?q=climbing"
    const listElement = document.getElementById("outputList")
    const data = await getJson(endpoint)
    const parks = data.data
    const listHtml = parks.map(listTemplate).join("")
    listElement.innerHTML = listHtml;
}

renderClimbingList()
