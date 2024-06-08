document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

document.getElementById("backToTop").addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".navbar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Back to Top button
  const backToTopButton = document.getElementById("backToTop");

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function smoothScroll(target) {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const targetPosition =
      document.querySelector(target).offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }

  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target);
    });
  });

  const backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll("body");
    });
  }
});
