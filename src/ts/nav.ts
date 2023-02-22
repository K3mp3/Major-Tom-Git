import gsap from "gsap";

const hamburgerMenu = document.querySelector(".hamburger-menu") as HTMLButtonElement;
const middleSpanElement = document.querySelector(".middle-span-element") as HTMLSpanElement;

export function init() {
    console.log(hamburgerMenu);
    console.log(middleSpanElement);

    hamburgerMenu.addEventListener("mouseover", moveSpanElementForward);
    hamburgerMenu.addEventListener("mouseleave", moveSpanElementBackward);
}

function moveSpanElementForward() {
    gsap.to(middleSpanElement, {x: 6});
    console.log("hej");
}

function moveSpanElementBackward() {
    gsap.to(middleSpanElement, {x: 0});
}