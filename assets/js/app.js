// Toggle theme
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", toggleTheme);
})
function toggleTheme() {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}

// Open navbar for mobile
const navIcon = document.querySelector('#nav-icon');
const navbar = document.querySelector('#navbar');
const cartIcon = document.querySelector('#cart-icon');
const cartBoxMenu = document.querySelector('#cart-box-menu');
const closeNavIcons = document.querySelectorAll('.close-nav');
const overlay = document.querySelector('#overlay');

navIcon.addEventListener('click', openNavBar);
cartIcon.addEventListener('click', openNavBar);

function openNavBar(event) {
    event.currentTarget.nextElementSibling.classList.remove('opacity-0', 'invisible');
    event.currentTarget.nextElementSibling.classList.add('w-64');
    overlay.classList.remove('opacity-0', 'invisible');
    overlay.classList.add('opacity-100', 'visible');
}

// Close navbar of mobile
overlay.addEventListener('click', closeNavbar);
closeNavIcons.forEach(item => {
    item.addEventListener('click', closeNavbar);
})
function closeNavbar(event) {
    if(event.currentTarget.className.includes('close-nav') === true) {
        event.currentTarget.parentElement.parentElement.classList.remove('w-64');
        event.currentTarget.parentElement.parentElement.classList.add('opacity-0', 'invisible');
        overlay.classList.remove('opacity-100', 'visible');
        overlay.classList.add('opacity-0', 'invisible');
    }else {
        closeNavIcons.forEach(item => {
            if (item.parentElement.parentElement.className.includes('w-64') === true) {
                item.parentElement.parentElement.classList.remove('w-64');
                item.parentElement.parentElement.classList.add('opacity-0', 'invisible');
            }
        })
        overlay.classList.remove('opacity-100', 'visible');
        overlay.classList.add('opacity-0', 'invisible');
    }
}

// Open submenu of navbar in mobile
const hasSubMenu = document.querySelector('#has-sub-menu');
const arrowDownSubMenu = document.querySelector('#arrow-down-icon');
arrowDownSubMenu.addEventListener('click', openSubMenu);
function openSubMenu(event) {
    event.currentTarget.parentElement.parentElement.classList.toggle('text-orange-300');
    hasSubMenu.classList.toggle('open-submenu');
}

// Open navbar of cart box
function openCartBoxMenu () {
    // close navbar
    navbar.classList.remove('w-64');
    navbar.classList.add('opacity-0', 'invisible');

    // open cart box menu
    cartBoxMenu.classList.remove('opacity-0', 'invisible');
    cartBoxMenu.classList.add('w-64');

}