// Modal Elements
const businessModal = document.getElementById("businessModal");
const bannerModal = document.getElementById("bannerModal");
const graphicModal = document.getElementById("graphicModal");
const eventModal = document.getElementById("eventModal");

// Open Modals
document.getElementById("bpBtn").addEventListener("click", () => {
    businessModal.showModal();
});

document.getElementById("bannerBtn").addEventListener("click", () => {
    bannerModal.showModal();
});

document.getElementById("graphicBtn").addEventListener("click", () => {
    graphicModal.showModal();
});

document.getElementById("eventBtn").addEventListener("click", () => {
    eventModal.showModal();
});

// Close Modals
document.getElementById("closeBusiness").addEventListener("click", () => {
    businessModal.close();
});

document.getElementById("closeBanner").addEventListener("click", () => {
    bannerModal.close();
});

document.getElementById("closeGraphic").addEventListener("click", () => {
    graphicModal.close();
});

document.getElementById("closeEvent").addEventListener("click", () => {
    eventModal.close();
});