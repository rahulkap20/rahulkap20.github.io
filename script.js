document.addEventListener("DOMContentLoaded", () => {
  // Set the current year
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Back to Top button functionality
  const backToTopButton = document.getElementById("backToTop");

  const scrollFunction = () => {
    if (window.scrollY > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  window.addEventListener("scroll", scrollFunction);

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scrolling for navbar links
  const smoothScroll = (target) => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const targetPosition =
      document.querySelector(target).offsetTop - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      smoothScroll(target);
    });
  });

  // Close navbar on small screens when a link is clicked
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
      }
    });
  });
});
