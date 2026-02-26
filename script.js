(function () {
  // Mark JS available — enables scroll animations
  document.documentElement.classList.add("js-ready");

  // ── DATA ──────────────────────────────────────────
  var skills = [
    {
      name: "Laravel / PHP",
      level: 95,
      cat: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "MySQL / PostgreSQL",
      level: 88,
      cat: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "API RESTFUL",
      level: 90,
      cat: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    {
      name: "Redis / Queues",
      level: 80,
      cat: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      name: "BOOTSTRAP 5",
      level: 82,
      cat: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      cat: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Vue.js",
      level: 72,
      cat: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "JavaScript / Blade",
      level: 85,
      cat: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Architecture MVC",
      level: 92,
      cat: "Expertise",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Tests Unitaires",
      level: 80,
      cat: "Expertise",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpunit/phpunit-plain.svg",
    },
    {
      name: "SEO Technique",
      level: 78,
      cat: "Expertise",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
    {
      name: "Gestion Agile",
      level: 85,
      cat: "Expertise",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
  ];

  var softSkills = [
    {
      title: "Gestion du Temps",
      desc: "Maîtrise des techniques de priorisation pour livrer dans les délais.",
      tags: ["Time-blocking", "Pomodoro", "Prioritization"],
      icon: '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    },
    {
      title: "Méthode Agile/Scrum",
      desc: "Expérience en sprints, daily standups, rétrospectives et gestion de backlog.",
      tags: ["Scrum", "Kanban", "Sprint Planning"],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      title: "Notion",
      desc: "Documentation, wikis d'équipe, bases de données liées et workflows.",
      tags: ["Docs", "Wiki", "Templates"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    },
    {
      title: "Trello",
      desc: "Suivi visuel Kanban, assignations et automatisation Power-Ups.",
      tags: ["Kanban", "Power-Ups", "Checklists"],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    },
    {
      title: "Dynalist",
      desc: "Organisation hiérarchique d'idées et notes pour la planification de projets complexes.",
      tags: ["Outlining", "Notes", "Task lists"],
      icon: '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="3" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="3" cy="18" r="1.5" fill="currentColor" stroke="none"/></svg>',
    },
    {
      title: "Communication",
      desc: "Communication claire avec les clients et équipes, rédaction de specs.",
      tags: ["Slack", "Documentation", "Client Relations"],
      icon: '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    },
  ];

  var projects = [
    {
      id: "nyama-bantou-001",
      title: "Nyama By Le-Bantou",
      desc: "Système de gestion de restaurant avec commande en ligne et suivi de livraison en temps réel",
      tags: ["Laravel", "PHP", "Bootstrap 5", "MySQL", "AJAX", "PWA", "SEO"],
      role: "Développeur Principal",
      main: true,
      link: "https://www.nyamabylebantou.com",
      img: "images/nyama1.webp",
    },
    {
      id: "proges-market-002",
      title: "PROGES MARKET",
      desc: "Plateforme e-commerce complète avec gestion avancée des produits et intégration de paiement sécurisé",
      tags: [
        "Laravel",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "MySQL",
        "JQuery",
      ],
      role: "Développeur Junior",
      main: true,
      link: "https://www.progesmarket.com",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "go-na-go-003",
      title: "Go-Na-Go",
      desc: "Plateforme de réservation de voyages avec disponibilité en temps réel et gestion des réservations",
      tags: ["Laravel", "Vue.js", "WebSocket", "Redis", "GPS"],
      role: "Lead Dev & Chef d'Équipe",
      main: true,
      link: "https://www.go-na-go.com",
      img: "images/gonago.webp",
    },
    {
      id: "le-bantou-004",
      title: "Le Bantou SARL",
      desc: "Plateforme digitale de la marque Le Bantou, vitrine de l'univers de la marque avec gestion de contenu, catalogue produits et présence en ligne optimisée.",
      tags: ["Laravel", "Blade", "MySQL", "SEO", "CMS"],
      role: "Développeur",
      main: false,
      link: "https://www.le-bantou.com",
      img: "images/b-sarl.webp",
    },
    {
      id: "bantou-invest-007",
      title: "Bantou Investment",
      desc: "Site vitrine de Bantou Investment, une plateforme présentant les services d’investissement et de conseil financier du groupe.",
      tags: ["Laravel", "HTML5", "CSS3", "JavaScript", "MySQL", "Finance"],
      role: "Développeur",
      main: false,
      link: "https://www.bantou-investment.com",
      img: "images/b-invest.webp",
    },

    {
      id: "bantou-swag-006",
      title: "Bantou Swag",
      desc: "Bantou Swag est une plateforme e-commerce dédiée à la vente de vêtements et accessoires inspirés de la culture africaine et du style “Afro-streetwear” ",
      tags: ["Laravel", "HTML5", "CSS3", "JavaScript", "MySQL", "E-commerce"],
      role: "Développeur",
      main: false,
      link: "https://www.bantou-swag.com",
      img: "images/b-swag.webp",
    },
    {
      id: "le-bantou-roup-005",
      title: "Bantou Group",
      desc: "Site web corporate de Le Bantou Group, incluant l’intégration front-end, SEO optimisé, l’optimisation de l’interface utilisateur et la mise en ligne de la plateforme.",
      tags: ["Laravel", "Blade", "JavaScript", "MySQL", "SEO", "CMS"],
      role: "Développeur",
      main: false,
      link: "https://le-bantou-group.com/",
      img: "images/b-group.webp",
    },
  ];

  var experiences = [
    {
      role: "Développeur Web Junior",
      company: "PROGES SARL",
      period: "2022 — 2023",
      desc: "Participation à l’analyse fonctionnelle et technique des besoins internes et clients. Participation a la Conception et au développement d’applications web sur mesure, en respectant les standards de qualité, de performance et de sécurité. Collaboration avec l’équipe technique pour l’intégration des interfaces utilisateurs et l’optimisation des bases de données.",
      techs: ["Laravel", "Bootstrap 5", "MySQL", "AJAX", "JQuery"],
    },
    {
      role: "Développeur Web Intermediare",
      company: "LE-BANTOU SARL",
      period: "2024 — 2026",
      desc: "Analyse, conception et développement de solutions digitales adaptées aux besoins stratégiques de l’entreprise.Maintenance évolutive et corrective des applications existantes afin d’assurer leur performance et leur stabilité. Encadrement et coordination d’une équipe de développeurs, avec répartition des tâches, suivi des livrables et respect des délais Participation aux décisions techniques et à l’architecture des projets.",
      techs: [
        "Laravel",
        "PHP",
        "PWA",
        "Tailwind CSS",
        "MySQL",
        "Git",
        "Github",
      ],
    },
  ];

  var techStack = [
    {
      name: "Laravel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    // {
    //   name: "React",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    // },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    // {
    //   name: "TypeScript",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    // },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    // {
    //   name: "PostgreSQL",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    // },
    // {
    //   name: "Redis",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    // },
    // {
    //   name: "Docker",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    // },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    // {
    //   name: "Linux",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    // },
    // {
    //   name: "GraphQL",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    // },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    // {
    //   name: "Node.js",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    // },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Trello",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    },
    // {
    //   name: "Nginx",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    // },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Composer",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
    },
    // {
    //   name: "Jira",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    // },
  ];

  // ── RENDER SKILLS ─────────────────────────────────
  var cats = ["Backend", "Frontend", "Expertise"];
  var skillsGrid = document.getElementById("skills-grid");
  cats.forEach(function (cat, ci) {
    var catSkills = skills.filter(function (s) {
      return s.cat === cat;
    });
    var col = document.createElement("div");
    col.className = "reveal";
    col.style.transitionDelay = ci * 0.1 + "s";
    var html =
      '<div class="skill-category-header"><div class="skill-bar-accent"></div><span class="skill-category-name">' +
      cat +
      "</span></div><div>";
    catSkills.forEach(function (s) {
      html +=
        '<div class="skill-item"><div class="skill-info"><div class="skill-name-wrap"><span class="skill-icon"><img src="' +
        s.logo +
        '" alt="' +
        s.name +
        '" loading="lazy"/></span><span class="skill-name">' +
        s.name +
        '</span></div><span class="skill-level">' +
        s.level +
        '%</span></div><div class="skill-track"><div class="skill-fill" data-level="' +
        s.level +
        '"></div></div></div>';
    });
    html += "</div>";
    col.innerHTML = html;
    skillsGrid.appendChild(col);
  });

  // ── RENDER SOFT SKILLS ────────────────────────────
  var softRow = document.getElementById("soft-skills-row");
  softSkills.forEach(function (s, i) {
    var card = document.createElement("div");
    card.className = "soft-card reveal";
    card.style.transitionDelay = i * 0.08 + "s";
    var iconHtml = s.logo
      ? '<img src="' +
        s.logo +
        '" style="width:1.6rem;height:1.6rem;object-fit:contain" alt="' +
        s.title +
        '" loading="lazy"/>'
      : s.icon;
    var tagsHtml = s.tags
      .map(function (t) {
        return '<span class="soft-card-tag">' + t + "</span>";
      })
      .join("");
    card.innerHTML =
      '<div class="soft-card-icon">' +
      iconHtml +
      '</div><div class="soft-card-title">' +
      s.title +
      '</div><div class="soft-card-desc">' +
      s.desc +
      '</div><div class="soft-card-tags">' +
      tagsHtml +
      "</div>";
    softRow.appendChild(card);
  });

  // ── RENDER PROJECTS ───────────────────────────────
  var grid = document.getElementById("projects-grid");
  projects.forEach(function (p, i) {
    var wrap = document.createElement("div");
    wrap.className = "reveal";
    wrap.style.transitionDelay = i * 0.1 + "s";
    var mainBadge = p.main
      ? '<span class="badge badge-animated" style="font-size:.65rem;padding:.15rem .6rem;margin-bottom:0">Projet Phare</span>'
      : "";
    var tagsHtml = p.tags
      .map(function (t) {
        return '<span class="project-tag">' + t + "</span>";
      })
      .join("");
    wrap.innerHTML =
      '<div class="project-card">' +
      '<div class="project-card-overlay"></div>' +
      '<div class="project-card-glow"></div>' +
      '<div class="project-img-wrap">' +
      '<img src="' +
      p.img +
      '" alt="' +
      p.title +
      '" class="project-img" loading="lazy"/>' +
      '<div class="project-img-overlay"></div>' +
      '<div class="project-badges">' +
      mainBadge +
      '<span class="badge badge-accent" style="font-size:.6rem;padding:.15rem .6rem;margin-top:.3rem">' +
      p.role +
      "</span></div>" +
      "</div>" +
      '<div class="project-body">' +
      '<div class="project-line-indicator"><div class="project-line"></div><span class="project-status">En ligne</span></div>' +
      '<h3 class="project-title">' +
      p.title +
      "</h3>" +
      '<p class="project-desc">' +
      p.desc +
      "</p>" +
      '<div class="project-tags">' +
      tagsHtml +
      "</div>" +
      '<div class="project-footer">' +
      '<div class="project-id"><svg style="width:.75rem;height:.75rem;stroke:currentColor;fill:none;stroke-width:2" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>ID: ' +
      p.id.slice(0, 8) +
      "</div>" +
      '<a href="' +
      p.link +
      '" target="_blank" rel="noopener" class="project-btn">Explorer<svg style="width:.8rem;height:.8rem;stroke:currentColor;fill:none;stroke-width:2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>' +
      "</div>" +
      "</div>" +
      "</div>";
    grid.appendChild(wrap);
  });

  // ── RENDER TIMELINE ───────────────────────────────
  var timeline = document.getElementById("timeline");
  experiences.forEach(function (exp, i) {
    var item = document.createElement("div");
    item.className = "timeline-item reveal";
    item.style.transitionDelay = i * 0.1 + "s";
    var techsHtml = exp.techs
      .map(function (t) {
        return '<span class="timeline-tech">#' + t + "</span>";
      })
      .join("");
    item.innerHTML =
      '<div class="timeline-meta"><span class="timeline-period">' +
      exp.period +
      '</span><h4 class="timeline-role">' +
      exp.role +
      '</h4><p class="timeline-company">' +
      exp.company +
      "</p></div>" +
      '<div class="timeline-dot"></div><div class="timeline-mobile-dot"></div>' +
      '<div class="timeline-content"><div class="timeline-card"><p class="timeline-desc">' +
      exp.desc +
      '</p><div class="timeline-techs">' +
      techsHtml +
      "</div></div></div>";
    timeline.appendChild(item);
  });

  // ── RENDER TECH MARQUEE ───────────────────────────
  var marquee = document.getElementById("tech-marquee");
  var allTechs = techStack.concat(techStack); // double for seamless loop
  allTechs.forEach(function (t) {
    var chip = document.createElement("div");
    chip.className = "tech-chip";
    chip.innerHTML =
      '<img src="' +
      t.logo +
      '" alt="' +
      t.name +
      '" loading="lazy" onerror="this.style.opacity=.2"/><span class="tech-chip-name">' +
      t.name +
      "</span>";
    marquee.appendChild(chip);
  });

  // ── SCROLL: HEADER ────────────────────────────────
  var header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  // ── INTERSECTION OBSERVER (reveal) ────────────────
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.querySelectorAll(".skill-fill").forEach(function (bar) {
            bar.style.width = bar.dataset.level + "%";
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  // ── MOBILE MENU ───────────────────────────────────
  window.toggleMobile = function () {
    const menu = document.getElementById("mobile-menu");
    const btn = document.getElementById("hamburger");
    const isOpen = menu.classList.toggle("open");
    btn.classList.toggle("open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  window.closeMobile = function () {
    document.getElementById("mobile-menu").classList.remove("open");
    document.getElementById("hamburger").classList.remove("open");
    document.body.style.overflow = "";
  }; // ── RESPONSIVE NAV ────────────────────────────────
  function handleResize() {
    var links = document.querySelector(".nav-links");
    var cta = document.getElementById("navCta");
    if (window.innerWidth >= 768) {
      if (links) links.style.display = "flex";
      if (cta) cta.style.display = "";
      closeMobile();
    } else {
      if (links) links.style.display = "none";
      if (cta) cta.style.display = "none";
    }
  }
  window.addEventListener("resize", handleResize);
  handleResize();

  // ── CONTACT FORM → WhatsApp ──────────────────────────
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("fname").value.trim();
      var email = document.getElementById("femail").value.trim();
      var subject = document.getElementById("fsubject").value.trim();
      var message = document.getElementById("fmessage").value.trim();
      var ok = true;

      function setErr(id, msg) {
        var el = document.getElementById(id);
        el.textContent = msg;
        if (msg) ok = false;
      }

      setErr(
        "name-err",
        name.length < 2 ? "Le nom est requis (min. 2 caractères)" : "",
      );
      setErr(
        "email-err",
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Email invalide" : "",
      );
      setErr(
        "subject-err",
        subject.length < 5 ? "Le sujet est requis (min. 5 caractères)" : "",
      );
      setErr(
        "message-err",
        message.length < 10 ? "Message trop court (min. 10 caractères)" : "",
      );

      if (!ok) return;

      // Construction du message WhatsApp professionnel
      var wa_message =
        `Bonjour Maxime,\n\n` +
        `Je vous contacte via votre portfolio.\n\n` +
        `👤 *Nom :* ${name}\n` +
        `📧 *Email :* ${email}\n` +
        `📌 *Sujet :* ${subject}\n\n` +
        `💬 *Message :*\n${message}\n\n` +
        `---\n` +
        `_Message envoyé depuis kouam-maxime-portfolio_`;

      var encoded = encodeURIComponent(wa_message);
      var waUrl = `https://wa.me/237695457968?text=${encoded}`;

      // Reset + toast + redirection
      e.target.reset();

      var toast = document.getElementById("toast");
      toast.classList.add("show");
      setTimeout(function () {
        toast.classList.remove("show");
      }, 4000);

      // Ouvre WhatsApp après un court délai (laisse le toast s'afficher)
      setTimeout(function () {
        window.open(waUrl, "_blank");
      }, 800);
    });
})();

// Mettre l'année actuelle
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

function initViewCounter() {
  const API = "https://counterapi.dev/api/kouam-maxime-portfolio/views/hit";

  fetch(API)
    .then((r) => r.json())
    .then((data) => {
      const value = data?.count ?? data?.value ?? null;
      if (value !== null) {
        document.getElementById("views-count").textContent =
          Number(value).toLocaleString("fr-FR");
        document.getElementById("views-badge").style.display = "inline-flex";
      }
    })
    .catch(() => {});
}
// https://counterapi.dev/api/kouam-maxime-portfolio/views/hit

// ---- DARK MODE ----
const themeToggle = document.getElementById("themeToggle");
const iconSun = themeToggle.querySelector(".icon-sun");
const iconMoon = themeToggle.querySelector(".icon-moon");

function applyTheme(dark) {
  document.body.classList.toggle("darkmode", dark);
  iconSun.style.display = dark ? "none" : "block";
  iconMoon.style.display = dark ? "block" : "none";
}

// Préférence système ou sauvegardée
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved === "dark" || (!saved && prefersDark));

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("darkmode");
  applyTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ---- CODE TYPING ANIMATION ----
const codeLines = [
  {
    text: '<span style="color:#ff7b72">class</span> <span style="color:#79c0ff">KouamMaxime</span> <span style="color:#ff7b72">extends</span> <span style="color:#79c0ff">Developer</span>',
  },
  { text: "{" },
  { text: "" },
  {
    text: '  <span style="color:#8b949e">// Développeur Full-Stack · Yaoundé, Cameroun</span>',
  },
  { text: "" },
  {
    text: '  <span style="color:#ff7b72">protected</span> <span style="color:#ff7b72">array</span> <span style="color:#ffa657">$stack</span> = [',
  },
  {
    text: `    <span style="color:#a5d6ff">'Laravel'</span>, <span style="color:#a5d6ff">'PHP'</span>, <span style="color:#a5d6ff">'Vue.js'</span>,`,
  },
  {
    text: `    <span style="color:#a5d6ff">'MySQL'</span>, <span style="color:#a5d6ff">'REST API'</span>,`,
  },
  { text: "  ];" },
  { text: "" },
  {
    text: '  <span style="color:#ff7b72">public function</span> <span style="color:#d2a8ff">getExperience</span>(): <span style="color:#79c0ff">string</span>',
  },
  { text: "  {" },
  {
    text: '    <span style="color:#ff7b72">return</span> <span style="color:#a5d6ff">\'3+ ans · 15+ projets livrés\'</span>;',
  },
  { text: "  }" },
  { text: "" },
  {
    text: '  <span style="color:#ff7b72">public function</span> <span style="color:#d2a8ff">isAvailable</span>(): <span style="color:#79c0ff">bool</span>',
  },
  { text: "  {" },
  {
    text: '    <span style="color:#ff7b72">return</span> <span style="color:#79c0ff">true</span>; <span style="color:#8b949e">// Open to work 🚀</span>',
  },
  { text: "  }" },
  { text: "" },
  { text: "}" },
];
function initCodeTyping() {
  const pre = document.getElementById("codeBlock");
  if (!pre) return;

  let lineIndex = 0;
  let charIndex = 0;
  let displayedLines = [];
  const plain = (html) => html.replace(/<[^>]+>/g, "");

  function typeLine() {
    if (lineIndex >= codeLines.length) {
      // Pause puis reset
      setTimeout(() => {
        displayedLines = [];
        lineIndex = 0;
        charIndex = 0;
        pre.innerHTML = "";
        setTimeout(typeLine, 600);
      }, 3500);
      return;
    }

    const line = codeLines[lineIndex];
    const plainText = plain(line.text);

    if (charIndex <= plainText.length) {
      // Reconstitue le HTML avec le bon nombre de caractères visibles
      const visibleChars = charIndex;
      let count = 0;
      let result = "";
      let inTag = false;
      let tagBuf = "";

      for (let i = 0; i < line.text.length; i++) {
        const ch = line.text[i];
        if (ch === "<") {
          inTag = true;
          tagBuf = "<";
          continue;
        }
        if (inTag) {
          tagBuf += ch;
          if (ch === ">") {
            inTag = false;
            result += tagBuf;
            tagBuf = "";
          }
          continue;
        }
        if (count < visibleChars) {
          result += ch;
          count++;
        } else break;
      }

      displayedLines[lineIndex] = result;
      pre.innerHTML = displayedLines.join("\n");
      charIndex++;
      setTimeout(typeLine, charIndex === 1 ? 80 : 22);
    } else {
      displayedLines[lineIndex] = line.text;
      pre.innerHTML = displayedLines.join("\n");
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 60);
    }
  }

  // Démarre après un léger délai
  setTimeout(typeLine, 800);
}

// Dans votre DOMContentLoaded, ajoutez :
initCodeTyping();
