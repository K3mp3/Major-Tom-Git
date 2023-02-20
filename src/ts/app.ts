export function init() {
    console.log("Starting things up");

    let header = document.createElement("h2");
    header.innerHTML = "Welcome to the awesome site";

    document.body.appendChild(header);
}