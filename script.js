// =============================
// SCRIPT.JS - UPDATED & SAFE VERSION
// =============================

try {
  // =============================
  // LOADING SCREEN
  // =============================
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const progressBar = document.querySelector(".loader-progress-bar");
    const loaderPercent = document.getElementById("loader-percent");
    const loaderCharacters = document.querySelector(".loader-characters");
    const loaderRobot = document.querySelector(".loader-robot");
    const loaderHuman = document.querySelector(".loader-human");
    const loaderWelcomeText = document.querySelector(".loader-welcome-text");
    
    if (loader && progressBar && loaderPercent && loaderCharacters) {
      // Animate progress bar and percentage
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress += 2;
        progressBar.style.width = progress + "%";
        loaderPercent.textContent = progress;
        
        // Start walking animation at 10%
        if (progress === 10) {
          loaderCharacters.classList.add("walking-active");
        }
        
        // Start dancing at 60%
        if (progress === 60) {
          loaderCharacters.classList.remove("walking-active");
          loaderCharacters.classList.add("dancing-active");
          if (loaderWelcomeText) {
            loaderWelcomeText.style.opacity = "1";
            loaderWelcomeText.style.transform = "scale(1)";
          }
        }
        
        if (progress >= 100) {
          clearInterval(progressInterval);
        }
      }, 100); // 5 seconds total (100% / 100ms = 1% per interval)
      
      // Hide loader after 5 seconds
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
      }, 5000);
    }
  });

  // =============================
  // THEME TOGGLE (DARK/LIGHT MODE)
  // =============================
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeToggle) {
      themeToggle.innerHTML = theme === "dark" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
  }

  // =============================
  // HAMBURGER MENU TOGGLE (MOBILE)
  // =============================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }

  // =============================
  // INTERACTIVE ROBOTS IN NAVBAR
  // =============================
  document.querySelectorAll(".nav-robot-link").forEach(link => {
    link.addEventListener("click", function(e) {
      const robot = this.querySelector(".nav-robot");
      if (robot) {
        robot.classList.add("robot-clicked");
        setTimeout(() => {
          robot.classList.remove("robot-clicked");
        }, 300);
      }
    });
  });

  // =============================
  // SMOOTH SCROLL FOR NAVBAR LINKS & CTA BUTTON
  // =============================
  document.querySelectorAll("#nav-links a, .cta-button").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });

  // =============================
  // INTERACTIVE CHARACTERS IN THANK YOU SECTION
  // =============================
  document.querySelectorAll(".interactive-character").forEach(character => {
    character.addEventListener("click", function() {
      const charNum = this.dataset.character;
      this.classList.add("character-clicked");
      
      const randomMessages = [
        "Hi there!",
        "You're awesome!",
        "Great job!",
        "Keep going!",
        "Amazing!",
        "Well done!",
        "Fantastic!",
        "Excellent!"
      ];
      
      const messageEl = this.querySelector(".character-message");
      if (messageEl) {
        const originalText = messageEl.textContent;
        messageEl.textContent = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        messageEl.style.opacity = "1";
        messageEl.style.transform = "translateY(-10px) scale(1.1)";
        
        setTimeout(() => {
          messageEl.style.opacity = "0";
          messageEl.style.transform = "translateY(0) scale(1)";
          setTimeout(() => {
            messageEl.textContent = originalText;
          }, 300);
        }, 1500);
      }
      
      setTimeout(() => {
        this.classList.remove("character-clicked");
      }, 500);
    });
  });

  // =============================
  // TYPING EFFECT FOR HERO TITLE
  // =============================
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const nameText = "Sepnanto Muresta";
  const subtitleTexts = [
    "IT Support Specialist",
    "I can do Backend",
    "I can do Frontend",
    "I can do Full Stack Development"
  ];
  let nameIndex = 0;
  let subtitleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    if (heroTitle && nameIndex < nameText.length) {
      heroTitle.innerHTML += nameText.charAt(nameIndex);
      nameIndex++;
      setTimeout(typeWriter, 130);
    } else if (heroTitle) {
      heroTitle.classList.add("hero-title-animate");
      // Show subtitle wrapper and start typing after name is complete
      setTimeout(() => {
        const heroSubtitleWrapper = document.getElementById("hero-subtitle-wrapper");
        const heroSubtitle = document.getElementById("hero-subtitle");
        if (heroSubtitleWrapper && heroSubtitle) {
          heroSubtitleWrapper.style.display = "flex";
          typeSubtitle();
        }
        // Show description paragraph after name is complete
        const heroDescription = document.getElementById("hero-description");
        if (heroDescription) {
          heroDescription.style.display = "block";
          heroDescription.style.opacity = "0";
          heroDescription.style.animation = "fadeInUp 1s ease forwards";
        }
      }, 1000);
    }
  }

  function typeSubtitle() {
    if (!heroSubtitle) return;
    
    const currentText = subtitleTexts[subtitleIndex];
    
    if (!isDeleting && charIndex < currentText.length) {
      heroSubtitle.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeSubtitle, 100);
    } else if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
        typeSubtitle();
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      heroSubtitle.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeSubtitle, 50);
    } else {
      isDeleting = false;
      subtitleIndex = (subtitleIndex + 1) % subtitleTexts.length;
      charIndex = 0;
      setTimeout(typeSubtitle, 500);
    }
  }

  window.addEventListener("load", () => {
    // Start typing effect after loader finishes (5 seconds + fade out)
    setTimeout(typeWriter, 5500);
  });

  // =============================
  // HERO IMAGE PARALLAX
  // =============================
  const heroImg = document.getElementById("heroImage");
  if (heroImg) {
    document.addEventListener("mousemove", e => {
      const x = (window.innerWidth / 2 - e.pageX) / 30;
      const y = (window.innerHeight / 2 - e.pageY) / 30;
      const scale = 1 + (y / 200);
      heroImg.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    });
  }

  // =============================
  // HERO PARTICLE BACKGROUND
  // =============================
  const canvas = document.getElementById("bgCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let particleCount = window.innerWidth > 768 ? 80 : 40;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.7 + 0.2,
          dx: Math.random() * 0.5 - 0.25,
          opacity: Math.random()
        });
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.speed;
        p.opacity += (Math.random() * 0.02 - 0.01);
        p.opacity = Math.max(0.2, Math.min(1, p.opacity));
        if (p.y > canvas.height) p.y = 0;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        ctx.fillStyle = `rgba(0,168,255,${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    animateParticles();
    window.addEventListener("resize", resizeCanvas);
  }

  // =============================
  // SCROLL REVEAL
  // =============================
  function reveal() {
    document.querySelectorAll(".reveal").forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && !el.classList.contains("active")) {
        setTimeout(() => el.classList.add("active"), index * 150);
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

  // =============================
  // PROGRESS BAR ANIMATION
  // =============================
  function animateProgressBars() {
    document.querySelectorAll('.progress').forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50 && bar.style.width === "0px") {
        const percent = bar.dataset.percent;
        let width = 0;
        const interval = setInterval(() => {
          if (width >= percent) clearInterval(interval);
          bar.style.width = width + '%';
          width++;
        }, 15);
      }
    });
  }

  window.addEventListener("scroll", animateProgressBars);
  animateProgressBars();

  // =============================
  // SKILL STARS ANIMATION (Dark Mode Only)
  // =============================
  const skillCanvas = document.getElementById("skillStars");
  if (skillCanvas) {
    const ctx2 = skillCanvas.getContext("2d");
    let stars = [];
    let starCount = window.innerWidth > 768 ? 120 : 60;
    let isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";

    function checkTheme() {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      isDarkMode = currentTheme === "dark";
      if (!isDarkMode) {
        ctx2.clearRect(0, 0, skillCanvas.width, skillCanvas.height);
      }
    }

    function resizeSkillCanvas() {
      skillCanvas.width = skillCanvas.offsetWidth;
      skillCanvas.height = skillCanvas.offsetHeight;
      if (isDarkMode) {
        initStars();
      }
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * skillCanvas.width,
          y: Math.random() * skillCanvas.height,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 1.5 + 0.2,
          dx: Math.random() * 0.5 - 0.25,
          opacity: Math.random()
        });
      }
    }

    function animateStars() {
      if (!isDarkMode) {
        requestAnimationFrame(animateStars);
        return;
      }
      
      ctx2.clearRect(0, 0, skillCanvas.width, skillCanvas.height);
      stars.forEach(s => {
        s.y += s.speed;
        s.x += s.dx;
        s.opacity += (Math.random() * 0.02 - 0.01);
        s.opacity = Math.max(0.2, Math.min(1, s.opacity));
        if (s.y > skillCanvas.height) s.y = 0;
        if (s.x > skillCanvas.width) s.x = 0;
        if (s.x < 0) s.x = skillCanvas.width;
        ctx2.fillStyle = `rgba(0,168,255,${s.opacity})`;
        ctx2.beginPath();
        ctx2.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx2.fill();
      });
      requestAnimationFrame(animateStars);
    }

    // Watch for theme changes
    const skillThemeObserver = new MutationObserver(checkTheme);
    skillThemeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    resizeSkillCanvas();
    animateStars();
    window.addEventListener("resize", resizeSkillCanvas);
  }

  // =============================
  // FALLING STARS FOR CERTS & CONTACT
  // =============================
  function initFallingStars(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const canvas = document.createElement('canvas');
    canvas.classList.add('falling-stars');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    section.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars = [];
    let starCount = window.innerWidth > 768 ? 60 : 30;

    function resizeFallingCanvas() {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
      initFallingStarsParticles();
    }

    function initFallingStarsParticles() {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 1 + 0.5,
          dx: Math.random() * 0.3 - 0.15,
          opacity: Math.random()
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.y += s.speed;
        s.x += s.dx;
        s.opacity += (Math.random() * 0.02 - 0.01);
        s.opacity = Math.max(0.2, Math.min(1, s.opacity));
        if (s.y > canvas.height) s.y = 0;
        if (s.x > canvas.width) s.x = 0;
        if (s.x < 0) s.x = canvas.width;
        ctx.fillStyle = `rgba(0,168,255,${s.opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    resizeFallingCanvas();
    animate();
    window.addEventListener('resize', resizeFallingCanvas);
  }

  // Only init falling stars in dark mode
  function initFallingStarsIfDark() {
    const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDarkMode) {
      initFallingStars('certs-section');
      initFallingStars('contact-section');
    }
  }
  
  initFallingStarsIfDark();
  
  // Watch for theme changes
  const themeObserver = new MutationObserver(() => {
    const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";
    const existingCanvases = document.querySelectorAll('.falling-stars');
    existingCanvases.forEach(canvas => canvas.remove());
    if (isDarkMode) {
      initFallingStars('certs-section');
      initFallingStars('contact-section');
    }
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // =============================
  // GLOBAL FALLING & SHOOTING STARS (Dark Mode Only)
  // =============================
  (function initGlobalStars() {
    const canvas = document.getElementById("globalStars");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let shooting = [];
    let w, h;
    let isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";

    function checkTheme() {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      isDarkMode = currentTheme === "dark";
      if (!isDarkMode) {
        ctx.clearRect(0, 0, w, h);
      }
    }

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      if (isDarkMode) {
        stars = Array.from({ length: w > 768 ? 140 : 80 }).map(() => ({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.6 + 0.2,
          opacity: Math.random() * 0.6 + 0.2,
        }));
      }
    }

    function spawnShootingStar() {
      if (!isDarkMode) return;
      const yStart = Math.random() * h * 0.4;
      shooting.push({
        x: Math.random() * w,
        y: yStart,
        len: Math.random() * 120 + 80,
        speed: Math.random() * 6 + 4,
        life: 0,
        maxLife: 60,
      });
    }

    function draw() {
      if (!isDarkMode) {
        requestAnimationFrame(draw);
        return;
      }
      
      ctx.clearRect(0, 0, w, h);

      // Falling stars
      stars.forEach(s => {
        s.y += s.speed;
        if (s.y > h) s.y = 0;
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Shooting stars
      shooting = shooting.filter(s => s.life < s.maxLife);
      shooting.forEach(s => {
        s.x += s.speed;
        s.y += s.speed * 0.3;
        s.life += 1;
        ctx.strokeStyle = `rgba(0,168,255,${1 - s.life / s.maxLife})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.len, s.y - s.len * 0.3);
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    }

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    resize();
    draw();
    setInterval(spawnShootingStar, 2400);
    window.addEventListener("resize", resize);
  })();

  // =============================
  // LOCAL FEATURED SLIDER (STATIC IMAGES)
  // =============================
  (function initFeaturedSlider() {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
      const slidesContainer = slider.querySelector(".slides");
      const slides = Array.from(slidesContainer.querySelectorAll(".slide"));
      const dotsContainer = slider.querySelector(".slider-dots");
      const btnPrev = slider.querySelector('[data-dir="prev"]');
      const btnNext = slider.querySelector('[data-dir="next"]');
      let current = 0;
      let timer;

      function buildDots() {
        dotsContainer.innerHTML = "";
        slides.forEach((_, idx) => {
          const dot = document.createElement("div");
          dot.className = "slider-dot";
          dot.addEventListener("click", () => goTo(idx));
          dotsContainer.appendChild(dot);
        });
      }

      function update() {
        slidesContainer.style.transform = `translateX(-${current * 100}%)`;
        slides.forEach((s, i) => s.classList.toggle("active", i === current));
        dotsContainer.querySelectorAll(".slider-dot").forEach((d, i) => d.classList.toggle("active", i === current));
      }

      function goTo(idx) {
        current = (idx + slides.length) % slides.length;
        update();
        restart();
      }

      const next = () => goTo(current + 1);
      const prev = () => goTo(current - 1);

      function restart() {
        clearInterval(timer);
        timer = setInterval(next, 4500);
      }

      buildDots();
      update();
      restart();

      btnPrev?.addEventListener("click", prev);
      btnNext?.addEventListener("click", next);
      slider.addEventListener("mouseenter", () => clearInterval(timer));
      slider.addEventListener("mouseleave", restart);
    });
  })();

  // =============================
  // MODAL POPUP FOR PROJECTS
  // =============================
  const modal = document.getElementById("project-modal");
  const modalImage = document.getElementById("modal-image");
  const modalDots = document.querySelector(".modal-dots");
  const modalClose = document.querySelector(".modal-close");
  const modalNavPrev = document.querySelector(".modal-nav.prev");
  const modalNavNext = document.querySelector(".modal-nav.next");

  const projectData = {
    warunglm: {
      title: "Warung LM - POS & Ordering System",
      description: "Warung LM is a comprehensive Point of Sale (POS) and online ordering system designed specifically for food stalls and small restaurants. The platform features an interactive menu catalog with high-quality food images, detailed pricing, and descriptions for each item. Key features include a seamless shopping cart experience, streamlined checkout process with order summary and total calculation, and integrated payment management system. The dashboard provides real-time order tracking, sales analytics, and inventory management tools for business owners. The system enables customers to browse menus, add items to cart, review orders, and complete transactions digitally, making the ordering process convenient and efficient. Built with modern web technologies, Warung LM offers a user-friendly interface that enhances both customer experience and business operations.",
      images: [
        "assets/projects/warunglm/Dashboard.png",
        "assets/projects/warunglm/menumakanan.png",
        "assets/projects/warunglm/checkout.png",
        "assets/projects/warunglm/pembayaran.png"
      ]
    },
    kiko: {
      title: "Kiko Editing - Editing Services Platform",
      description: "Kiko Editing is a professional web platform designed for editing service businesses. The platform provides a comprehensive solution for managing editing orders, showcasing portfolios, and facilitating client interactions. The system includes a robust order management dashboard where service providers can track order status, manage client communications, and monitor project progress. Clients can easily place orders through a detailed booking form that captures service requirements, preferences, and pricing information. A featured portfolio gallery displays previous work samples, helping potential clients evaluate the quality and style of editing services offered. The platform streamlines the entire workflow from initial inquiry to project completion, making it easier for both service providers and clients to collaborate effectively.",
      images: [
        "assets/projects/kiko_editing/dasboard.png",
        "assets/projects/kiko_editing/pemesanan.png",
        "assets/projects/kiko_editing/portfolio.png"
      ]
    }
  };

  let currentProject = null;
  let currentImageIndex = 0;

  function openModal(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;

    currentProject = projectKey;
    currentImageIndex = 0;
    updateModalImage();
    updateModalDots();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function updateModalImage() {
    if (!currentProject) return;
    const project = projectData[currentProject];
    modalImage.src = project.images[currentImageIndex];
    modalImage.alt = `${project.title} - Image ${currentImageIndex + 1}`;
  }

  function updateModalDots() {
    if (!currentProject) return;
    const project = projectData[currentProject];
    modalDots.innerHTML = "";
    project.images.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = `modal-dot ${index === currentImageIndex ? "active" : ""}`;
      dot.addEventListener("click", () => {
        currentImageIndex = index;
        updateModalImage();
        updateModalDots();
      });
      modalDots.appendChild(dot);
    });
  }

  function nextImage() {
    if (!currentProject) return;
    const project = projectData[currentProject];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updateModalImage();
    updateModalDots();
  }

  function prevImage() {
    if (!currentProject) return;
    const project = projectData[currentProject];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updateModalImage();
    updateModalDots();
  }

  // Event listeners
  document.querySelectorAll(".view-detail-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const projectKey = e.currentTarget.dataset.project;
      openModal(projectKey);
    });
  });

  modalClose?.addEventListener("click", closeModal);
  modalNavPrev?.addEventListener("click", prevImage);
  modalNavNext?.addEventListener("click", nextImage);

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  });

  console.log("Script loaded successfully!");
} catch (error) {
  console.error("Error in script.js:", error);
}
