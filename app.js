// TOGGLE ALL MICROSOFT SUBMENU //
const subMenu = document.querySelector('.all__microsoft__inner');
const allMicrosoft = document.querySelector('.all__microsoft');


allMicrosoft.addEventListener('click', toggleSubmenu, false)

function toggleSubmenu() {
  subMenu.classList.toggle('submenu-toggle');
};

// BURGER //
const nav = document.querySelector('nav');
const burger = document.querySelector('.hamburger');

burger.addEventListener('click', showNav)

function showNav() {
  nav.classList.toggle('toggle');
  burger.classList.toggle("animate");
}
// ==================================

// MAINNAV SUBMENU //
const navSubs = document.querySelectorAll('.for__mobile');
const arrows = document.querySelectorAll('.change__arrow');

for (let navSub of navSubs) {
  if (navSub.querySelector('.for__mobile__inner')) {
    navSub.addEventListener('click', mainNavSub, false);
  }
}

function mainNavSub(e) {
  e.preventDefault();

  if (this.classList.contains('show-submenu')) {
    this.classList.remove('show-submenu');
    // this.querySelector('.arrow').innerHTML = '<i class="fas fa-angle-down"></i>';
  } 
  else if (mainNav.querySelector('.show-submenu')) {
    mainNav.querySelector('.show-submenu').classList.remove('show-submenu');
    // this.querySelector('.arrow').innerHTML = '<i class="fas fa-angle-down"></i>';
    this.classList.add("show-submenu");
    // this.querySelector('.arrow').innerHTML = '<i class="fas fa-angle-up"></i>';
  }
  else {
    this.classList.add('show-submenu');
    // this.querySelector('.arrow').innerHTML = '<i class="fas fa-angle-up"></i>';
  }

}

const mainNav = document.querySelector('.main__nav');

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = mainNav.contains(e.target);

  console.log(isClickInside);
  if (!isClickInside && mainNav.querySelector(".show-submenu")) {
    mainNav.querySelector(".show-submenu").classList.remove("show-submenu");
    // this.querySelector('.arrow').innerHTML = '<i class="fas fa-angle-down"></i>';
  }
}

/* Event Listeners */
document.addEventListener("click", closeSubmenu, false);