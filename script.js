document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.background = "#ff6600";
      header.style.color = "white";
    } else {
      header.style.background = "white";
      header.style.color = "#333";
    }
  });

  document.querySelector(".btn").addEventListener("click", () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  });
});
// Comment Form
document.getElementById("commentForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = this.querySelector("input").value;
  const comment = this.querySelector("textarea").value;

  const commentDiv = document.getElementById("commentSection");
  const newComment = document.createElement("div");
  newComment.classList.add("comment-card");
  newComment.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;

  commentDiv.appendChild(newComment);
  this.reset();
});
// Scroll Animation for Features
const featureCards = document.querySelectorAll('.feature-card');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  featureCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // For first load
// Header Scroll Effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
