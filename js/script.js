const slides = document.querySelector(".slides");
const navs = document.querySelector(".mouse");

navs.addEventListener("mouseover", mouseOver);
navs.addEventListener("mouseout", mouseOut);

function mouseOver(){
    slides.style.visibility = "hidden";
};

function mouseOut(){
    slides.style.visibility = "visible";
};
