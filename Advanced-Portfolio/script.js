/* =========================
   ENABLE JAVASCRIPT MODE
========================= */

document.documentElement.classList.add("js");


/* =========================
   NAVIGATION
========================= */

const navigationLinks =
    document.querySelectorAll("nav a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            event.preventDefault();


            const targetSection =
                document.querySelector(targetId);


            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const pageSections =
    document.querySelectorAll("main section");


function updateActiveNavigation() {

    let currentSection = "";


    pageSections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        if (
            window.scrollY >=
            sectionTop - 200
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

window.addEventListener(
    "load",
    updateActiveNavigation
);


/* =========================
   SECTION REVEAL
========================= */

const revealSections =
    document.querySelectorAll(
        "main section"
    );


const sectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show-section"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealSections.forEach(
    function (section) {

        sectionObserver.observe(
            section
        );

    }
);


/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton =
    document.getElementById(
        "theme-toggle"
    );


const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

    themeButton.textContent = "🌙";

} else {

    themeButton.textContent = "☀️";

}


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light-mode"
        );


        const isLightMode =
            document.body.classList.contains(
                "light-mode"
            );


        if (isLightMode) {

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        } else {

            themeButton.textContent = "☀️";

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        }

    }
);


/* =========================
   FOOTER YEAR
========================= */

const yearElement =
    document.getElementById(
        "current-year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById(
        "back-to-top"
    );


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);