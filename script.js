document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const aboutSection = document.getElementById("about");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= aboutSection.offsetTop - 150) {
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
    }
  });
});
