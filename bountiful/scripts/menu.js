/* const menubutton = document.querySelector('.ham');
const mainnav = document.querySelector('.topnav')

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')}; */
function toggleMenu () {
    document.getElementById("topnav").classList.toggle("open");
    document.getElementById("menubutton").classList.toggle("open");
   
    
}
const hamMenu = document.getElementById("menubutton");
hamMenu.onclick = toggleMenu;