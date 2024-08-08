// ----------Navbar for every page Close----------

let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function(){
    menus.classList.add("active");
})

closeBtn.addEventListener("click", function(){
    menus.classList.remove("active");
})


//Parallax effect start (index page)
const ParallaxIndex = document.querySelector('#showcase');
window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    ParallaxIndex.style.backgroundPositionY = offset * 0.6 + "px";
});
//Parallax effect close (index page)

//Parallax effect start (contact page)
const ParallaxContact = document.querySelector('#contact_showcase');
window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    ParallaxContact.style.backgroundPositionY = offset * 0.6 + "px";
});
//Parallax effect close (contact page)

//Parallax effect start (menu page)
const ParallaxMenu = document.querySelector('#menu_showcase');
window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    ParallaxMenu.style.backgroundPositionY = offset * 0.6 + "px";
});
//Parallax effect close (menu page)


// -------Swiper JS Code Start------
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// -------Swiper JS Code Close------













