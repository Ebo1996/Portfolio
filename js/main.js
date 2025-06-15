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




document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("form-message");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
      showMessage("Please fill in all required fields", "error");
      return;
    }

    if (!validateEmail(email)) {
      showMessage("Please enter a valid email address", "error");
      return;
    }

    // Here you would typically send the form data to a server
    // For this example, we'll just simulate a successful submission
    simulateFormSubmission(name, email, subject, message);
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = "";
    formMessage.classList.add(type);

    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  }

  function simulateFormSubmission(name, email, subject, message) {
    setTimeout(() => {
      showMessage(
        "Thank you for your message! I will get back to you soon.",
        "success"
      );
      contactForm.reset();
    }, 1000);
  }
});