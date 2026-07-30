const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("#nav-links");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    menuBtn.innerHTML = nav.classList.contains("open")
        ? "✖"
        : "&#9776;";
});


const timestamp = document.querySelector("#timestamp");

timestamp.value = new Date().toISOString();
