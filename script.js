const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    const clickedInside = siteNav.contains(event.target) || navToggle.contains(event.target);
    if (!clickedInside) {
      siteNav.classList.remove("open");
    }
  });
}
