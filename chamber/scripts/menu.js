
function toggleMenu () {
    document.getElementById("topnav").classList.toggle("open");
    document.getElementById("menubutton").classList.toggle("open");
   
    
}
const hamMenu = document.getElementById("menubutton");
hamMenu.onclick = toggleMenu;