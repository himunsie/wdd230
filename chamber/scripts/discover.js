
const numVisits = window.localStorage.getItem('lastvisit');
if(numVisits === undefined) {
    numVisits = new Date(Data.now());
}
const lastvisit = Date.parse(numVisits);
const FACTOR = 1000 * 60 * 60 * 24;


let daysbetween = Date.now() - lastvisit;
let numberOfDays = daysbetween / FACTOR;

window.localStorage.setItem('lastvisit', new Date(Date.now()));

const daysSinceVisit = Math.floor(numberOfDays);
    if(daysSinceVisit >= 1) {
        document.getElementById('visits').textContent = `${daysSinceVisit} day(s) ago`;
    }
    else {
        document.getElementById('visits').textContent = `0 day(s) ago`;
    }
