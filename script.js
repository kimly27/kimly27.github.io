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


//scroll to top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

//show/hide button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
});

//scroll to top on click
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


//intersection observer for fade-in effect
const fadeEls = document.querySelectorAll('.fade-in-element');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target); //trigger only once
        }
    });
}, {
    threshold: 0.1 //10% of the section visible
});

fadeEls.forEach(el => observer.observe(el));