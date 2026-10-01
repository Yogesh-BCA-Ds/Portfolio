const themeToggle = document.getElementById("themeToggle");


// ==========================================
// THEME
// ==========================================

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "☀";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    themeToggle.textContent =
        isLight ? "☀" : "☾";


    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

});


// ==========================================
// NAVBAR
// ==========================================

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 15) {

        navbar.style.borderBottomColor =
            "var(--border)";

    } else {

        navbar.style.borderBottomColor =
            "transparent";

    }

});
