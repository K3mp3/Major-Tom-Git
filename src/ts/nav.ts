import gsap from "gsap";

export function init() {
    const hamburgerMenu = document.querySelector(".hamburger-menu") as HTMLButtonElement;
    const middleSpanElement = document.querySelector(".middle-span-element") as HTMLSpanElement;
    console.log(hamburgerMenu);
    console.log(middleSpanElement);

    window.addEventListener("mouseover", moveSpanElement);
}

function moveSpanElement() {
    
}