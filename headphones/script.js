// Select elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle 'active' class on click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
