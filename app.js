const priceList = document.getElementById('price');
const mobileNav = document.getElementById('mobile-nav');
const menuIcon = document.getElementById('menu-icon');

function displayPriceList() {
    priceList.style.display = "flex"
}

function peaceMenuIcon() {
    menuIcon.style.display = "none";
}

function exitPriceList() {
    priceList.style.display = "none";
}

function returnHome() {
    window.location.href = 'index.html';
}

function displayMobileNav() {
    mobileNav.style.display = "flex";
}

//animation time :-)

//Header 
const navOne = document.querySelector('#one');
const navTwo = document.querySelector('#two');
const navThree = document.querySelectorAll('#three');
const navFour = document.querySelectorAll('#four');
const diligentLogo = document.querySelector('#five');

//home content
const pageContent = document.querySelector('.main-content');


const tl = new TimelineMax();

tl.fromTo(diligentLogo, .8, { opacity: 0, y: -60 }, { opacity: 1, y: 0 }, "+=.5")
    .fromTo(navOne, .8, { opacity: 0, y: -60 }, { opacity: 1, y: 0 })
    .fromTo(navTwo, .8, { opacity: 0, y: -60 }, { opacity: 1, y: 0 }, "-=.8")
    .fromTo(navThree, .8, { opacity: 0, y: -60 }, { opacity: 1, y: 0 }, "-=.8")
    .fromTo(navFour, .8, { opacity: 0, y: -60 }, { opacity: 1, y: 0 }, "-=.8")
    .fromTo(pageContent, .8, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })

//about content

const aboutContent = document.querySelector('.about-container');


const tl2 = new TimelineMax();

tl2.fromTo(aboutContent, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })