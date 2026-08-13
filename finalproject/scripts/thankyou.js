
// Extract Form Parameters
const params = new URLSearchParams(window.location.search);

document.getElementById("name").textContent =
    params.get("name");

document.getElementById("email").textContent =
    params.get("email");

document.getElementById("phone").textContent =
    params.get("phone");

document.getElementById("service").textContent =
    params.get("service");

document.getElementById("quantity").textContent =
    params.get("quantity");

document.getElementById("timestamp").textContent =
    params.get("timestamp");