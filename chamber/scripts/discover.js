const visit = document.querySelector("#visits");

let visitMessage = "1st visit to this page.";

let todayDate = new Date();

let lastVisitString = window.localStorage.getItem("last-visit");
if (lastVisitString != null){
    let lastVisitDate = new Date(lastVisitString);
    let dateDifference = Math.floor((todayDate.getTime() - lastVisitDate.getTime()) / (24 * 60 * 1000));
    visitMessage = `${dateDifference} day(s) ago`
}

visit.textContent = visitMessage
window.localStorage.setItem("last-visit", todayDate.toString());