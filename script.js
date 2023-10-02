
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        themeToggle.innerText = "Light Mode";
        body.style.backgroundColor = "black"
    } else {
        body.classList.add("dark-mode");
        themeToggle.innerText = "Dark Mode";
        body.style.backgroundColor = "white"
    }
});

