const hamToggleButton = document.querySelector(".ham-checkbtn");
const navbarsm = document.querySelector(".nav");
const navbarLinks = document.querySelectorAll(".navbarLink");
const header = document.querySelector("#header");
hamToggleButton.addEventListener("click", () => {
  header.style.height == "100%"
    ? (header.style.height = "fit-content")
    : (header.style.height = "100%");
  navbarsm.classList.toggle("active");
});

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".navbarLink").forEach((link) => {
      if (link.classList.contains("active")) {
        link.classList.remove("active");
      }
    });
    link.classList.toggle("active");
    navbarsm.classList.remove("active");
  });
});
