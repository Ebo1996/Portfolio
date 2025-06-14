var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software engineer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});



function animateProject(element) {
  document.querySelectorAll(".project-item").forEach((item) => {
    if (item !== element) {
      item.classList.remove("animated", "zoomed");
    }
  });

  element.classList.toggle("animated");
  element.classList.toggle("zoomed");

  if (element.classList.contains("animated")) {
    setTimeout(() => {
      element.classList.remove("animated", "zoomed");
    }, 3000);
  }
}

document.querySelectorAll(".project-item").forEach((item) => {
  item.addEventListener("touchstart", function () {
    this.classList.add("hover-effect");
  });

  item.addEventListener("touchend", function () {
    setTimeout(() => {
      this.classList.remove("hover-effect");
    }, 500);
  });
});
