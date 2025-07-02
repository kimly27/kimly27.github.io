//for roles animation
const roles = [
    "QA Tester",
    "UI/UX Designer",
    "Front-end Developer",
    "Project Manager"
];

let index = 0;
const roleEl = document.getElementById("role");

setInterval(() => {
    roleEl.classList.remove("fade-in");
    roleEl.classList.add("fade-out");

    setTimeout(() => {
        index = (index + 1) % roles.length;
        roleEl.innerHTML = roles[index];
        roleEl.classList.remove("fade-out");
        roleEl.classList.add("fade-in");
    }, 500);
}, 3000);



//for project modal
function openProjectModal(title, company, date, imageSrc) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalCompany").innerText = company;
    document.getElementById("modalDate").innerText = date;
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("projectModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("projectModal").classList.add("hidden");
}

//click outside modal to close
window.addEventListener("click", function (e) {
    const modal = document.getElementById("projectModal");
    if (e.target === modal) {
        closeModal();
    }
});

document.querySelectorAll(".project-card").forEach((btn) => {
    btn.addEventListener("click", () => {
        const title = btn.getAttribute("data-title");
        const company = btn.getAttribute("data-company");
        const date = btn.getAttribute("data-date");
        const image = btn.getAttribute("data-image");

        openProjectModal(title, company, date, image);
    });
});

//mobile menu toggle
const toggleBtn = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});