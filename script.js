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