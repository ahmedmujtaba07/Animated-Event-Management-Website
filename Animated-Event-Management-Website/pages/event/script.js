const eventData = [
  {
    id: 1,
    title: "Summer Music Fest",
    cat: "music",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800",
    desc: "A massive outdoor concert featuring top electronic and rock names across three stages.",
  },
  {
    id: 2,
    title: "Modern Art Expo",
    cat: "art",
    img: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=800",
    desc: "Experience the journey of digital transformation through the eyes of local and global sculptors.",
  },
  {
    id: 3,
    title: "Tech Summit 2024",
    cat: "tech",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
    desc: "Connecting global visionaries to discuss AI, blockchain, and the future of human interaction.",
  },
  {
    id: 4,
    title: "City Marathon",
    cat: "sports",
    img: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=800",
    desc: "Join 5,000 runners across historic landmarks in our annual charity run and community walk.",
  },
  {
    id: 5,
    title: "Jazz Night",
    cat: "music",
    img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800",
    desc: "A relaxing evening of smooth sounds, artisanal food stalls, and local vineyard selections.",
  },
  {
    id: 6,
    title: "AI Workshop",
    cat: "tech",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    desc: "Hands-on coding experience building neural networks with the latest industrial AI tools.",
  },
  {
    id: 7,
    title: "Game Finals",
    cat: "sports",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800",
    desc: "Experience the adrenaline as the local legends battle for the championship trophy.",
  },
  {
    id: 8,
    title: "Photo Walk",
    cat: "art",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800",
    desc: "Capture the hidden architecture and soul of the city in this expert-guided street tour.",
  },
  {
    id: 9,
    title: "Rock Anthem",
    cat: "music",
    img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=800",
    desc: "A high-energy tribute to the legends of rock with live pyrotechnics and classic hits.",
  },
  {
    id: 10,
    title: "Code Camp",
    cat: "tech",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    desc: "Learn fullstack fundamentals in an intensive 48-hour challenge for aspiring developers.",
  },
];

const heroData = [
  {
    type: "video",
    src: "https://assets.mixkit.co/videos/preview/mixkit-concert-crowd-with-lights-out-4130-large.mp4",
    title: "Feel the Energy",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1600",
    title: "Create Memories",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600",
    title: "Discover Life",
  },
];

const container = document.getElementById("event-container");
const searchInput = document.getElementById("search-input");
const categorySelect = document.getElementById("category-select");
const categoryFilters = document.querySelectorAll(".pill");

// 1. Render Hero
function initHero() {
  const hero = document.getElementById("hero-slider");
  hero.innerHTML = heroData
    .map(
      (item, i) => `
        <div class="slide ${i === 0 ? "active" : ""}" ${item.type === "image" ? `style="background-image:url(${item.src})"` : ""}>
            ${item.type === "video" ? `<video autoplay muted loop playsinline class="hero-video"><source src="${item.src}" type="video/mp4"></video>` : ""}
            <div class="hero-overlay"></div>
            <div class="hero-content"><h1>${item.title}</h1></div>
        </div>
    `,
    )
    .join("");
}

// 2. Render Events
function renderEvents(list) {
  if (list.length === 0) {
    container.innerHTML = `<h2 class="section-title">Popular Events</h2><p style="text-align:center; padding: 50px;">No events match your criteria.</p>`;
    return;
  }
  container.innerHTML = `
        <h2 class="section-title">Popular Events</h2>
        <div class="event-grid">
            ${list
              .map(
                (e) => `
                <div class="event-card">
                    <img src="${e.img}" class="c-img" alt="${e.title}">
                    <div class="c-title"><h3>${e.title}</h3></div>
                    <div class="c-desc"><p>${e.desc}</p></div>
                    <div class="c-actions">
                        <div class="heart-icon"><i class="far fa-heart"></i></div>
                        <a href="#" class="learn-more">Details →</a>
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
    `;
}

// 3. Filter Logic
function updateDisplay() {
  const term = searchInput.value.toLowerCase();
  const activeCat = document.querySelector(".pill.active").dataset.cat;

  const filtered = eventData.filter((e) => {
    const matchesSearch = e.title.toLowerCase().includes(term);
    const matchesCat = activeCat === "all" || e.cat === activeCat;
    return matchesSearch && matchesCat;
  });
  renderEvents(filtered);
}

// Listeners
searchInput.addEventListener("input", updateDisplay);

categoryFilters.forEach((pill) => {
  pill.addEventListener("click", () => {
    categoryFilters.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    categorySelect.value = pill.dataset.cat;
    updateDisplay();
  });
});

categorySelect.addEventListener("change", (e) => {
  const val = e.target.value;
  document.querySelector(`.pill[data-cat="${val}"]`).click();
});

// Slider Logic
let currentSlide = 0;
function autoSlide() {
  const slides = document.querySelectorAll(".slide");
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Theme
document.getElementById("theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Init
initHero();
renderEvents(eventData);
setInterval(autoSlide, 5000);
