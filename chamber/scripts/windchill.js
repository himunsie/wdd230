let temp = 55;
let wSpeed = 5;

let wc = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16))+ (0.4275 * temp * Math.pow(wSpeed, 0.16)));
let windChill= Math.round(wc);
document.querySelector(".windchill").innerHTML =  windChill;
document.querySelector(".degrees").innerHTML =  temp;
document.querySelector(".windspeed").innerHTML = wSpeed;

if (temp >=50 && wSpeed < 3) {
    document.querySelector(".windchill").innerHTML = "N/A";
}



