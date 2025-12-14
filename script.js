// NAVBAR SCROLL
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if(window.scrollY > 80){
    navbar.classList.add("scrolled");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
    navbar.classList.remove("scrolled");
  }
});

// MOBILE MENU
const toggle = document.getElementById("menuToggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", ()=> links.classList.toggle("show") );

// FAQ TOGGLE
document.querySelectorAll(".faq-item").forEach(faq => {
  faq.querySelector(".faq-question").addEventListener("click", () => {
    const answer = faq.querySelector(".faq-answer");
    const toggleIcon = faq.querySelector(".faq-toggle");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    toggleIcon.textContent = toggleIcon.textContent === "+" ? "-" : "+";
  });
});

// FADE-IN ANIMATION ON SCROLL
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // fade in/out continuously
    }
  });
}, appearOptions);
faders.forEach(fader=> appearOnScroll.observe(fader));
// FADE-IN FOR SECTIONS AND IMAGES
const fadeElements = document.querySelectorAll(".fade-in, img");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.15 });

fadeElements.forEach(el => observer.observe(el));
