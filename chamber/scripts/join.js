document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timestamp").value =
        new Date().toLocaleString();
});

const params = new URLSearchParams(window.location.search);

document.getElementById("firstname").textContent =
params.get("firstname");

document.getElementById("lastname").textContent =
params.get("lastname");

document.getElementById("email").textContent =
params.get("email");

document.getElementById("phone").textContent =
params.get("phone");

document.getElementById("organization").textContent =
params.get("organization");

document.getElementById("timestamp").textContent =
params.get("timestamp");