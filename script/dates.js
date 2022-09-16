const d = new Date();

// last modified timpstamp
document.getElementById("timestamp").textContent = document.lastModified;

// current year
let year = new Date().getFullYear()
document.getElementById("currentyear").textContent = year;