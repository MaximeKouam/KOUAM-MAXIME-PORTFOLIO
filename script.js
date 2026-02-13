// ===== LOADER =====
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").classList.add("hidden");
  }, 2000);
});

function updateGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById("greeting");

  if (hour < 12) {
    greetingElement.textContent = "Bonjour";
  } else if (hour < 18) {
    greetingElement.textContent = "Salut";
  } else {
    greetingElement.textContent = "Bonsoir";
  }
}

updateGreeting();

// ===== CUSTOM CURSOR =====
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

let mouseX = 0,
  mouseY = 0;
let followerX = 0,
  followerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.15;
  followerY += (mouseY - followerY) * 0.15;

  cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;

  requestAnimationFrame(animateFollower);
}

animateFollower();

// Cursor hover effect
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursorFollower.style.transform = "translate(-50%, -50%) scale(1.5)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursorFollower.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

// ===== PARTICLES =====
const particlesContainer = document.querySelector(".particles");
for (let i = 0; i < 35; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.width = Math.random() * 6 + 3 + "px";
  particle.style.height = particle.style.width;
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 12 + "s";
  particle.style.animationDuration = Math.random() * 20 + 20 + "s";
  particlesContainer.appendChild(particle);
}

// ===== NAVBAR SCROLL =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// ===== SCROLL INDICATOR =====
const scrollIndicator = document.querySelector(".scroll-indicator");
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollIndicator.style.width = scrollPercent + "%";
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -80px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all animated elements
document
  .querySelectorAll(
    ".section-header, .skill-card, .project-card, .stat-card, .contact-item",
  )
  .forEach((el) => {
    observer.observe(el);
  });

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== LANG TOGGLE =====
const langToggle = document.getElementById("lang-toggle");
const langSpan = langToggle.querySelector("span");
let isFrench = true;

langToggle.addEventListener("click", () => {
  isFrench = !isFrench;
  langSpan.textContent = isFrench ? "FR" : "EN";
});

// ===== PARALLAX EFFECT =====
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(
    ".hero-visual, .code-window",
  );

  parallaxElements.forEach((el) => {
    const speed = 0.3;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===== 3D TILT EFFECT ON CARDS =====
document
  .querySelectorAll(".skill-card, .project-card, .stat-card")
  .forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });


// Mettre l'année actuelle
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();
