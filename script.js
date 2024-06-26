document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      const linkUrl = new URL(this.href);
      const currentPageUrl = new URL(window.location.href);
      if (
        linkUrl.origin === currentPageUrl.origin &&
        linkUrl.pathname === currentPageUrl.pathname
      ) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
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
