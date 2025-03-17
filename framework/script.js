document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".services div, .portfolio div, .pricing div");

    function revealOnScroll() {
        let scrollY = window.pageYOffset;
        elements.forEach(el => {
            if (el.offsetTop < scrollY + window.innerHeight - 100) {
                el.classList.add("fade-in");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

/* Custom CSS */
document.head.insertAdjacentHTML(
    "beforeend",
    `<style>
        .fade-in {
            opacity: 1;
            transform: translateY(20px);
            transition: all 5s ease-in-out;
        }
        .fade-in.visible {
            opacity: 0;
            transform: translateY(0);
        }
    </style>`
);
