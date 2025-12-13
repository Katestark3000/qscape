const html = document.documentElement;

document.getElementById("theme-toggle").addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
});

// восстановление темы
if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
}


const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');


burger.addEventListener('click', (e) => {
    e.stopPropagation(); 
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (
        mobileMenu.classList.contains('active') &&
        !mobileMenu.contains(e.target) &&
        !burger.contains(e.target)
    ) {
        mobileMenu.classList.remove('active');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".catalog-open-btn");
    const modal = document.querySelector(".cataloge-modal");
    const overlay = document.querySelector(".cataloge-modal-overlay");
    const closeBtn = document.querySelector(".cataloge-close");

    function openModal() {
        modal.style.display = "flex";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "";
    }

    openBtn?.addEventListener("click", openModal);
    closeBtn?.addEventListener("click", closeModal);
    overlay?.addEventListener("click", closeModal);
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".gallery-track");
    const btnLeft = document.querySelector(".gallery-btn.left");
    const btnRight = document.querySelector(".gallery-btn.right");

    btnRight.addEventListener("click", () => {
        track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
    });

    btnLeft.addEventListener("click", () => {
        track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
    });
});

