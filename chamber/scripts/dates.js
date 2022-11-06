/* let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	document.getElementById("visits").textContent = numVisits;
} else {
	document.getElementById("visits").textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);  */

// last modified timpstamp
document.getElementById("timestamp").textContent = document.lastModified;
//document.getElementById("visits").textContent = 0;

// current year
let year = new Date().getFullYear()
document.getElementById("currentyear").textContent = year;


const datefield = document.querySelector(".date");
// for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

// long, medium, short options ... try them

datefield.innerHTML = `${fulldate}`;



// display banner only on monday or tuesday

const banner = document.querySelector(".banner")
const day = new Date().getDay();

if (day == 1 || day == 2) { 	
	banner.style.display = "block";
}
else {
	banner.style.display = "none";
}


