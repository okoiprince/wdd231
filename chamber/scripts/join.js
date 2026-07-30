// Timestamp
document.getElementById("timestamp").value = new Date().toLocaleString();

// Modal Elements
const npModal = document.getElementById("npModal");
const bronzeModal = document.getElementById("bronzeModal");
const silverModal = document.getElementById("silverModal");
const goldModal = document.getElementById("goldModal");

// Open Modals
document.getElementById("npBtn").addEventListener("click", () => {
    npModal.showModal();
});

document.getElementById("bronzeBtn").addEventListener("click", () => {
    bronzeModal.showModal();
});

document.getElementById("silverBtn").addEventListener("click", () => {
    silverModal.showModal();
});

document.getElementById("goldBtn").addEventListener("click", () => {
    goldModal.showModal();
});

// Close Modals
document.getElementById("closeNp").addEventListener("click", () => {
    npModal.close();
});

document.getElementById("closeBronze").addEventListener("click", () => {
    bronzeModal.close();
});

document.getElementById("closeSilver").addEventListener("click", () => {
    silverModal.close();
});

document.getElementById("closeGold").addEventListener("click", () => {
    goldModal.close();
});

// Extract Form Parameters
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