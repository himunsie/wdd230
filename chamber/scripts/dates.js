

// last modified timpstamp
document.getElementById("timestamp").textContent = document.lastModified;

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

