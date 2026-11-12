//for roles animation
// const roles = [
//     "QA Tester",
//     "UI/UX Designer",
//     "Front-end Developer",
//     "Project Lead"
// ];

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




//for project modal and carousel
let projectImages = [];
let currentImageIndex = 0;

function openProjectModal(title, company, role, images) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalCompany").innerText = company;
    document.getElementById("modalRole").innerText = role;

    //store all project images
    projectImages = images.split(",").map(img => img.trim());
    currentImageIndex = 0;

    updateCarousel();

    document.getElementById("projectModal").classList.remove("hidden");
}

function updateCarousel() {
    document.getElementById("modalImage").src = projectImages[currentImageIndex];

    //update image counter
    document.getElementById("imageCounter").innerText =
        `${currentImageIndex + 1} / ${projectImages.length}`;

    //hide buttons and counter if only one image
    const hasMultipleImages = projectImages.length > 1;

    document.getElementById("prevImage").classList.toggle("hidden", !hasMultipleImages);
    document.getElementById("nextImage").classList.toggle("hidden", !hasMultipleImages);
    document.getElementById("imageCounter").classList.toggle("hidden", !hasMultipleImages);
}

//next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % projectImages.length;
    updateCarousel();
}

//previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
    updateCarousel();
}

//carousel button events
document.getElementById("nextImage").addEventListener("click", nextImage);
document.getElementById("prevImage").addEventListener("click", prevImage);


//close modal
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


//project card click events
document.querySelectorAll(".project-card").forEach((btn) => {
    btn.addEventListener("click", () => {
        const title = btn.getAttribute("data-title");
        const company = btn.getAttribute("data-company");
        const role = btn.getAttribute("data-role");
        const images = btn.getAttribute("data-images");

        openProjectModal(title, company, role, images);
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