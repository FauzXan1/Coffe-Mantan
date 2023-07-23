// toggle class active
const navbarnav = document.querySelector(".navbar-nav");

// ketika di klik
document.querySelector("#menu-cart").onclick = () => {
    navbarnav.classList.toggle("active");
};

//klik di mana saja untuk menghilangkan side bar
const menu = document.querySelector('#menu-cart');
document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove("active");
    }
});