/* ── MENU DATA MODEL ── */
const menuData = [
  // COFFEE PANEL
  {
    id: "hot-espresso",
    category: "coffee",
    name: "Signature Espresso",
    desc: "Our house blend — notes of dark chocolate, toasted walnut, and a long, sweet finish. Double shot, always.",
    price: 180,
    icon: "coffee",
    badges: [],
    tags: ["popular"]
  },
  {
    id: "hot-latte",
    category: "coffee",
    name: "Latte",
    desc: "Silky microfoam over a ristretto base. Oat, almond, and full-cream milk options. Plain or flavoured.",
    price: 220,
    icon: "milk",
    badges: ["Popular"],
    tags: ["popular"]
  },
  {
    id: "hot-pourover",
    category: "coffee",
    name: "Single Origin Pour-Over",
    desc: "Brewed to order, rotating seasonally. Ask our barista what's on the bar — usually something bright and floral.",
    price: 290,
    icon: "leaf",
    badges: [],
    tags: ["gluten-free"]
  },
  {
    id: "hot-mocha",
    category: "coffee",
    name: "Mocha",
    desc: "Callebaut dark chocolate stirred into espresso, finished with velvety steamed milk. Indulgent but balanced.",
    price: 250,
    icon: "chocolate",
    badges: [],
    tags: []
  },
  {
    id: "hot-cortado",
    category: "coffee",
    name: "Cardamom Cortado",
    desc: "Espresso cut with warm spiced milk — a nod to the neighbourhood. Our best-selling seasonal creation.",
    price: 230,
    icon: "orange",
    badges: ["New"],
    tags: ["new", "spicy"]
  },
  {
    id: "hot-flatwhite",
    category: "coffee",
    name: "Flat White",
    desc: "Ristretto-based with a higher espresso-to-milk ratio for those who like their coffee to mean business.",
    price: 200,
    icon: "sparkles",
    badges: [],
    tags: ["popular"]
  },

  // FOOD PANEL
  {
    id: "food-croissant",
    category: "food",
    name: "Almond Croissant",
    desc: "Twice-baked with house-made almond cream and topped with toasted flaked almonds. Ready by 8am.",
    price: 180,
    icon: "croissant",
    badges: ["Bestseller"],
    tags: ["popular"]
  },
  {
    id: "food-toast",
    category: "food",
    name: "Avocado Toast",
    desc: "Smashed avo on sourdough with chilli flakes, lime zest, and a soft poached egg on request.",
    price: 320,
    icon: "toast",
    badges: [],
    tags: ["vegan", "gluten-free"]
  },
  {
    id: "food-oats",
    category: "food",
    name: "Overnight Oats",
    desc: "Slow-steeped with coconut milk, topped with fresh seasonal fruit and a honeycomb drizzle.",
    price: 260,
    icon: "oats",
    badges: [],
    tags: ["vegan", "gluten-free"]
  },
  {
    id: "food-toastie",
    category: "food",
    name: "Cheese Toastie",
    desc: "Gruyère and cheddar blend in sourdough, pressed low and slow. Add caramelised onion for ₹40.",
    price: 280,
    icon: "cheese",
    badges: [],
    tags: ["popular"]
  },
  {
    id: "food-bread",
    category: "food",
    name: "Banana Bread",
    desc: "Vegan, moist, walnut-studded. Served warm with a side of cashew butter.",
    price: 160,
    icon: "bread",
    badges: ["V"],
    tags: ["vegan"]
  },
  {
    id: "food-florentine",
    category: "food",
    name: "Egg Florentine",
    desc: "Poached eggs on wilted spinach and toasted muffin with a light hollandaise. Weekend brunch staple.",
    price: 380,
    icon: "egg",
    badges: [],
    tags: ["spicy"]
  },

  // COLD PANEL
  {
    id: "cold-brew",
    category: "cold",
    name: "Cold Brew",
    desc: "Steeped for 20 hours in cold water. Smooth, low-acid, and dangerously drinkable. Straight or with oat milk.",
    price: 240,
    icon: "ice",
    badges: ["Popular"],
    tags: ["popular", "vegan", "gluten-free"]
  },
  {
    id: "cold-latte",
    category: "cold",
    name: "Iced Latte",
    desc: "Double ristretto over house-made vanilla syrup and your choice of milk. Served over large-format ice.",
    price: 230,
    icon: "milk",
    badges: [],
    tags: []
  },
  {
    id: "cold-lemon",
    category: "cold",
    name: "Sparkling Lemon Espresso",
    desc: "Espresso shot over chilled sparkling water with fresh lemon peel. Surprisingly refreshing.",
    price: 210,
    icon: "orange",
    badges: ["New"],
    tags: ["new", "gluten-free"]
  },
  {
    id: "cold-matcha",
    category: "cold",
    name: "Iced Matcha Latte",
    desc: "Ceremonial grade matcha shaken with oat milk and a touch of agave. Vivid, earthy, smooth.",
    price: 270,
    icon: "leaf",
    badges: [],
    tags: ["vegan", "gluten-free"]
  },
  {
    id: "cold-lemonade",
    category: "cold",
    name: "Rose Lemonade",
    desc: "House-pressed lemon juice with rose water, mint, and soda. Caffeine-free and utterly refreshing.",
    price: 190,
    icon: "sparkles",
    badges: [],
    tags: ["vegan", "gluten-free"]
  },
  {
    id: "cold-tea",
    category: "cold",
    name: "Peach Iced Tea",
    desc: "Brewed Darjeeling with real peach purée and a sprig of fresh thyme. Our summer ritual.",
    price: 180,
    icon: "ice",
    badges: [],
    tags: ["vegan", "gluten-free"]
  }
];

/* ── SVG ICONS MAPPING ── */
const icons = {
  coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
  milk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 21 2c-2.48 4-3 5.5-4.1 11.2A7 7 0 0 1 11 20z"></path><path d="M9 22v-6"></path></svg>`,
  chocolate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="9" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="15"></line></svg>`,
  orange: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20M2 12h20M12 12l7.07-7.07M4.93 4.93l14.14 14.14M12 12L4.93 19.07"></path></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.3-6.3l-.7.7M6.7 17.3l-.7.7m12.6 0l-.7-.7M6.7 6.7l-.7-.7"></path><circle cx="12" cy="12" r="4"></circle></svg>`,
  croissant: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 16c2.5 0 5-1.5 7-4 3 2.5 5.5 4 7 4a3.5 3.5 0 0 0 3-5.5C18.5 9 17 6.5 15 4c-.5 2.5-2 5-4.5 7C8 8.5 5.5 7 3 5a3.5 3.5 0 0 0-1 11z"></path></svg>`,
  toast: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3h10a4 4 0 0 1 4 4v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4z"></path><path d="M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"></path></svg>`,
  oats: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18A9 9 0 0 1 3 12z"></path><path d="M22 12A10 10 0 0 1 2 12h20z"></path><circle cx="12" cy="7" r="1"></circle><circle cx="8" cy="8" r="1"></circle><circle cx="16" cy="8" r="1"></circle></svg>`,
  cheese: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18L18 3H6L3 21z"></path><circle cx="9" cy="11" r="1.5"></circle><circle cx="14" cy="9" r="1"></circle><circle cx="15" cy="15" r="1.5"></circle></svg>`,
  bread: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"></path><path d="M3 8h18M3 14h18"></path></svg>`,
  egg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><circle cx="12" cy="12" r="4" fill="var(--latte)"></circle></svg>`,
  ice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><path d="M17 14v7M14 17h7"></path></svg>`,
};

/* ── REVIEWS DATA ── */
let reviewsData = [
  {
    id: "rev-1",
    author: "Priya Nair",
    date: "June 1, 2026",
    rating: 5,
    text: "The Cardamom Cortado is a absolute revelation! Nandhu's Cafe has been my weekday morning sanctuary for over three years. Warm atmosphere, premium service."
  },
  {
    id: "rev-2",
    author: "Keith D'Souza",
    date: "May 28, 2026",
    rating: 5,
    text: "Hands down the best sourdough cheese toasties in Bengaluru. The coffee is exceptionally roasted, smooth, low acidity, just pure velvet."
  },
  {
    id: "rev-3",
    author: "Ananya Hegde",
    date: "May 25, 2026",
    rating: 5,
    text: "The barista team is incredibly knowledgeable. Watching them brew single-origin beans over the Hario V60 is like watching science and art collide."
  }
];

/* ── STATE VARIABLES ── */
let tray = [];
let activeCategory = "coffee";
let activeDietaryFilter = "all";
let searchQuery = "";
let currentReviewIndex = 0;
let roastFinderStep = 1;
let roastFinderChoices = { 1: null, 2: null, 3: null };

/* ── DOM SELECTORS ── */
// Navigation & Theme
const mainNavbar = document.getElementById("mainNavbar");
const themeToggle = document.getElementById("themeToggle");
const trayToggle = document.getElementById("trayToggle");
const trayBadge = document.getElementById("trayBadge");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinksContainer = document.querySelector(".nav-container");

// Stats Counters
const statYears = document.getElementById("statYears");
const statPartners = document.getElementById("statPartners");
const statItems = document.getElementById("statItems");

// Menu
const menuSearchInput = document.getElementById("menuSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const dietaryFilters = document.getElementById("dietaryFilters");
const menuTabs = document.getElementById("menuTabs");
const gridCoffee = document.getElementById("grid-coffee");
const gridFood = document.getElementById("grid-food");
const gridCold = document.getElementById("grid-cold");

// Quiz / Roast Finder
const quizCard = document.getElementById("quizCard");
const quizProgressLine = document.getElementById("quizProgressLine");
const quizStep1 = document.getElementById("quizStep1");
const quizStep2 = document.getElementById("quizStep2");
const quizStep3 = document.getElementById("quizStep3");
const quizResultStep = document.getElementById("quizResultStep");
const recTitle = document.getElementById("recTitle");
const recDesc = document.getElementById("recDesc");
const recRoast = document.getElementById("recRoast");
const recIntensity = document.getElementById("recIntensity");
const virtualBrewBtn = document.getElementById("virtualBrewBtn");
const addRecToTrayBtn = document.getElementById("addRecToTrayBtn");
const restartQuizBtn = document.getElementById("restartQuizBtn");

// Virtual Brew Modal
const brewModal = document.getElementById("brewModal");
const brewModalBean = document.getElementById("brewModalBean");
const closeBrewModalBtn = document.getElementById("closeBrewModalBtn");
const brewStatusText = document.getElementById("brewStatusText");
const carafeLiquid = document.getElementById("carafeLiquid");
const waterStream = document.getElementById("waterStream");
const drippingLiquid = document.getElementById("drippingLiquid");
const kettlePourAnim = document.querySelector(".kettle-pour-anim");
const brewSuccessMsg = document.getElementById("brewSuccessMsg");
const dismissBrewModalBtn = document.getElementById("dismissBrewModalBtn");

// Testimonials Carousel
const carouselTrack = document.getElementById("carouselTrack");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselIndicators = document.getElementById("carouselIndicators");

// Add Review Form
const addReviewForm = document.getElementById("addReviewForm");
const reviewName = document.getElementById("reviewName");
const reviewComments = document.getElementById("reviewComments");
const beanRatingSelector = document.getElementById("beanRatingSelector");
const reviewRatingVal = document.getElementById("reviewRatingVal");

// Tray Sidebar
const traySidebar = document.getElementById("traySidebar");
const trayBackdrop = document.getElementById("trayBackdrop");
const closeTrayBtn = document.getElementById("closeTrayBtn");
const trayEmptyState = document.getElementById("trayEmptyState");
const trayActiveContent = document.getElementById("trayActiveContent");
const trayItemsList = document.getElementById("trayItemsList");
const trayCountText = document.getElementById("trayCountText");
const traySubtotal = document.getElementById("traySubtotal");
const trayTax = document.getElementById("trayTax");
const trayTotal = document.getElementById("trayTotal");
const trayExploreMenuBtn = document.getElementById("trayExploreMenuBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

// Mock Checkout Overlay
const checkoutOverlay = document.getElementById("checkoutOverlay");
const checkoutCoffeeStream = document.getElementById("checkoutCoffeeStream");
const mugLiquidFill = document.getElementById("mugLiquidFill");
const checkoutStepTitle = document.getElementById("checkoutStepTitle");
const checkoutStepDesc = document.getElementById("checkoutStepDesc");
const checkoutReceiptCard = document.getElementById("checkoutReceiptCard");
const receiptDate = document.getElementById("receiptDate");
const receiptItemsList = document.getElementById("receiptItemsList");
const receiptSubtotal = document.getElementById("receiptSubtotal");
const receiptTax = document.getElementById("receiptTax");
const receiptTotal = document.getElementById("receiptTotal");
const closeCheckoutOverlayBtn = document.getElementById("closeCheckoutOverlayBtn");

/* ── INITIALIZATION ── */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme Toggler
  initTheme();

  // 2. Render Menu Items
  renderMenu();

  // 3. Render Testimonials
  renderReviews();

  // 4. Initialize Scroll Listeners & Intersection Observers
  initScrollEffects();

  // 5. Initialize Roast Matcher Question clicks
  initRoastFinder();

  // 6. Setup Local Storage for Tray
  loadTrayFromLocalStorage();
});

/* ── THEME MANAGER ── */
function initTheme() {
  const savedTheme = localStorage.getItem("brew-co-theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", nextTheme);
    localStorage.setItem("brew-co-theme", nextTheme);
  });
}

/* ── SCROLL EFFECTS & STAT COUNTER ANIMATIONS ── */
function initScrollEffects() {
  // Navigation scrolling height change & Scroll indicator
  const scrollProgress = document.getElementById("scrollProgress");
  
  window.addEventListener("scroll", () => {
    // Height & Shadow navbar change
    if (window.scrollY > 50) {
      mainNavbar.classList.add("nav-scrolled");
    } else {
      mainNavbar.classList.remove("nav-scrolled");
    }

    // Scroll progress bar
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      const scrollPercent = (window.scrollY / totalScroll) * 100;
      scrollProgress.style.width = scrollPercent + "%";
    }

    // Scroll-link active section highlighting
    highlightActiveNavSection();
  });

  // Mobile menu trigger
  mobileMenuBtn.addEventListener("click", () => {
    const isActive = navLinksContainer.classList.toggle("active");
    document.body.classList.toggle("mobile-menu-active", isActive);
  });

  // Close mobile menu on navlink click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("active");
      document.body.classList.remove("mobile-menu-active");
    });
  });

  // Intersection Observer for scroll reveal animations
  const revealElements = document.querySelectorAll("section, .stat-card, .menu-item, .quiz-card");
  revealElements.forEach(el => el.classList.add("reveal-on-scroll"));

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        
        // If entry is the About section, trigger count animations
        if (entry.target.id === "about") {
          animateStats();
        }
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => scrollObserver.observe(el));
}

// Stats count-up animation
let statsAnimated = false;
function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;

  animateNumber(statYears, 11, 2000, "+");
  animateNumber(statPartners, 6, 2000, "");
  animateNumber(statItems, 48, 2000, "");
}

function animateNumber(element, finalVal, duration, suffix = "") {
  let start = 0;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // EaseOutQuad
    const easedProgress = progress * (2 - progress);
    const currentVal = Math.floor(easedProgress * finalVal);
    
    element.textContent = currentVal + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = finalVal + suffix;
    }
  }

  requestAnimationFrame(updateCount);
}

// Highlight navbar links dynamically
function highlightActiveNavSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  let currentSecId = "home";
  
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    const secHeight = sec.offsetHeight;
    if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
      currentSecId = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSecId) {
      link.classList.add("active");
    }
  });
}

/* ── MENU RENDERER & INTERACTIVE SEARCH/FILTERS ── */
function renderMenu() {
  const coffeeItems = menuData.filter(item => item.category === "coffee");
  const foodItems = menuData.filter(item => item.category === "food");
  const coldItems = menuData.filter(item => item.category === "cold");

  renderGrid(gridCoffee, coffeeItems);
  renderGrid(gridFood, foodItems);
  renderGrid(gridCold, coldItems);

  // Tab button switching
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      
      document.querySelectorAll(".menu-panel").forEach(p => p.classList.remove("active"));
      activeCategory = btn.dataset.panel;
      document.getElementById("panel-" + activeCategory).classList.add("active");
      
      // Clear filters on tab change to prevent confusion
      resetFilters();
    });
  });

  // Search input handler
  menuSearchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    clearSearchBtn.style.display = searchQuery ? "block" : "none";
    filterAndDisplayMenu();
  });

  // Clear search click
  clearSearchBtn.addEventListener("click", () => {
    menuSearchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    filterAndDisplayMenu();
  });

  // Dietary filter buttons
  const dietBtns = document.querySelectorAll(".dietary-btn");
  dietBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      dietBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDietaryFilter = btn.dataset.filter;
      filterAndDisplayMenu();
    });
  });
}

function resetFilters() {
  menuSearchInput.value = "";
  searchQuery = "";
  clearSearchBtn.style.display = "none";
  activeDietaryFilter = "all";
  
  document.querySelectorAll(".dietary-btn").forEach(b => b.classList.remove("active"));
  document.querySelector('.dietary-btn[data-filter="all"]').classList.add("active");

  filterAndDisplayMenu();
}

function filterAndDisplayMenu() {
  const filtered = menuData.filter(item => {
    // 1. Filter by category (active tab)
    const matchesCategory = item.category === activeCategory;
    
    // 2. Filter by search query
    const matchesSearch = item.name.toLowerCase().includes(searchQuery) || 
                          item.desc.toLowerCase().includes(searchQuery);
    
    // 3. Filter by dietary tags
    let matchesDietary = true;
    if (activeDietaryFilter !== "all") {
      matchesDietary = item.tags.includes(activeDietaryFilter);
    }

    return matchesCategory && matchesSearch && matchesDietary;
  });

  const activeGrid = document.getElementById("grid-" + activeCategory);
  renderGrid(activeGrid, filtered);
}

function renderGrid(gridElement, items) {
  gridElement.innerHTML = "";

  if (items.length === 0) {
    gridElement.innerHTML = `
      <div class="menu-empty-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <p>No delicious items match your current filters. Try searching for something else!</p>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item";
    
    // Badges HTML
    let badgesHTML = "";
    item.badges.forEach(badge => {
      badgesHTML += `<span class="item-badge ${badge === 'New' ? 'badge-new' : ''}">${badge}</span>`;
    });

    card.innerHTML = `
      <div class="item-header">
        <div class="item-icon-wrapper">
          ${icons[item.icon] || icons.coffee}
        </div>
        <div class="item-badges-wrapper">
          ${badgesHTML}
        </div>
      </div>
      <div>
        <h3 class="item-name">${item.name}</h3>
        <p class="item-desc">${item.desc}</p>
      </div>
      <div class="item-footer">
        <span class="item-price">₹${item.price}</span>
        <button class="add-item-btn" onclick="addToTray('${item.id}')">
          <span>Add +</span>
        </button>
      </div>
    `;
    gridElement.appendChild(card);
  });
}

/* ── ORDER TRAY (CART) STATE MANAGEMENT ── */
window.addToTray = function(itemId) {
  const item = menuData.find(i => i.id === itemId);
  if (!item) return;

  // Check if item already exists in tray WITH DEFAULT OPTIONS
  const existingIndex = tray.findIndex(i => 
    i.id === itemId && 
    i.options.milk === "Whole Milk" && 
    i.options.sweetness === "Normal" &&
    i.options.extras.length === 0
  );

  if (existingIndex > -1) {
    // Increment quantity
    tray[existingIndex].quantity += 1;
  } else {
    // Push new item copy
    tray.push({
      trayId: Date.now() + Math.random().toString(36).substr(2, 5), // unique identifier in cart
      id: item.id,
      name: item.name,
      basePrice: item.price,
      price: item.price,
      quantity: 1,
      options: {
        milk: "Whole Milk",
        sweetness: "Normal",
        extras: []
      }
    });
  }

  saveTrayToLocalStorage();
  updateTrayUI();
  
  // Highlight Badge & open Tray sidebar
  trayToggle.classList.add("pulse");
  setTimeout(() => trayToggle.classList.remove("pulse"), 500);

  openTray();
};

function updateTrayUI() {
  const count = tray.reduce((acc, item) => acc + item.quantity, 0);
  trayBadge.textContent = count;
  trayCountText.textContent = count;

  if (count === 0) {
    trayEmptyState.classList.remove("hidden");
    trayActiveContent.classList.remove("active");
  } else {
    trayEmptyState.classList.add("hidden");
    trayActiveContent.classList.add("active");

    trayItemsList.innerHTML = "";
    let subtotal = 0;

    tray.forEach(item => {
      // Calculate customized item price
      let calculatedItemPrice = item.basePrice;
      if (item.options.milk === "Oat Milk") calculatedItemPrice += 30;
      if (item.options.milk === "Almond Milk") calculatedItemPrice += 40;
      
      item.options.extras.forEach(extra => {
        if (extra === "Extra Shot") calculatedItemPrice += 40;
        if (extra === "Caramel Drizzle") calculatedItemPrice += 20;
      });

      // Update final item total
      item.price = calculatedItemPrice * item.quantity;
      subtotal += item.price;

      // Card item
      const itemRow = document.createElement("div");
      itemRow.className = "tray-item";
      
      // Modifiers display logic
      const isDrinks = menuData.find(i => i.id === item.id).category !== "food";

      itemRow.innerHTML = `
        <div class="tray-item-details">
          <div class="tray-item-row1">
            <h4 class="tray-item-name">${item.name}</h4>
            <button class="tray-item-remove" onclick="removeFromTray('${item.trayId}')">Remove</button>
          </div>
          
          ${isDrinks ? `
          <div class="tray-item-options">
            <!-- Milk selection -->
            <button class="tray-item-opt-btn" onclick="toggleMilk('${item.trayId}')">
              🥛 ${item.options.milk}
            </button>
            
            <!-- Sweetness Selection -->
            <button class="tray-item-opt-btn" onclick="toggleSweetness('${item.trayId}')">
              🍬 Sweetness: ${item.options.sweetness}
            </button>
            
            <!-- Extra shot toggle -->
            <button class="tray-item-opt-btn ${item.options.extras.includes('Extra Shot') ? 'active-mod' : ''}" onclick="toggleExtra('${item.trayId}', 'Extra Shot')">
              ⚡ +Extra Shot (+₹40)
            </button>
          </div>
          ` : `
          <div class="tray-item-options">
            <span class="custom-food-tag">🧁 Bakery item baked fresh daily</span>
          </div>
          `}

          <div class="tray-item-row2">
            <div class="quantity-controls">
              <button class="quantity-btn" onclick="adjustQty('${item.trayId}', -1)">&minus;</button>
              <span class="quantity-val">${item.quantity}</span>
              <button class="quantity-btn" onclick="adjustQty('${item.trayId}', 1)">&plus;</button>
            </div>
            <span class="tray-item-price">₹${item.price}</span>
          </div>
        </div>
      `;
      trayItemsList.appendChild(itemRow);
    });

    // GST/Tax calculations
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + tax;

    traySubtotal.textContent = `₹${subtotal}.00`;
    trayTax.textContent = `₹${tax}.00`;
    trayTotal.textContent = `₹${total}.00`;
  }
}

// Modifiers Toggling Functionality
window.toggleMilk = function(trayId) {
  const item = tray.find(i => i.trayId === trayId);
  if (!item) return;

  const milks = ["Whole Milk", "Oat Milk", "Almond Milk"];
  const currentIdx = milks.indexOf(item.options.milk);
  const nextIdx = (currentIdx + 1) % milks.length;
  item.options.milk = milks[nextIdx];

  saveTrayToLocalStorage();
  updateTrayUI();
};

window.toggleSweetness = function(trayId) {
  const item = tray.find(i => i.trayId === trayId);
  if (!item) return;

  const sweetLevels = ["None", "Half", "Normal", "Extra"];
  const currentIdx = sweetLevels.indexOf(item.options.sweetness);
  const nextIdx = (currentIdx + 1) % sweetLevels.length;
  item.options.sweetness = sweetLevels[nextIdx];

  saveTrayToLocalStorage();
  updateTrayUI();
};

window.toggleExtra = function(trayId, extraName) {
  const item = tray.find(i => i.trayId === trayId);
  if (!item) return;

  const idx = item.options.extras.indexOf(extraName);
  if (idx > -1) {
    item.options.extras.splice(idx, 1);
  } else {
    item.options.extras.push(extraName);
  }

  saveTrayToLocalStorage();
  updateTrayUI();
};

window.removeFromTray = function(trayId) {
  tray = tray.filter(item => item.trayId !== trayId);
  saveTrayToLocalStorage();
  updateTrayUI();
};

window.adjustQty = function(trayId, delta) {
  const item = tray.find(i => i.trayId === trayId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromTray(trayId);
  } else {
    saveTrayToLocalStorage();
    updateTrayUI();
  }
};

/* ── SIDEBAR DRAWER TOGGLER ── */
function openTray() {
  traySidebar.classList.add("active");
  trayBackdrop.classList.add("active");
  document.body.style.overflow = "hidden"; // disable scroll
  traySidebar.setAttribute("aria-hidden", "false");
}

function closeTray() {
  traySidebar.classList.remove("active");
  trayBackdrop.classList.remove("active");
  document.body.style.overflow = ""; // enable scroll
  traySidebar.setAttribute("aria-hidden", "true");
}

trayToggle.addEventListener("click", openTray);
closeTrayBtn.addEventListener("click", closeTray);
trayBackdrop.addEventListener("click", closeTray);
trayExploreMenuBtn.addEventListener("click", closeTray);

function saveTrayToLocalStorage() {
  localStorage.setItem("brew-co-tray", JSON.stringify(tray));
}

function loadTrayFromLocalStorage() {
  const saved = localStorage.getItem("brew-co-tray");
  if (saved) {
    try {
      tray = JSON.parse(saved);
      updateTrayUI();
    } catch(e) {
      tray = [];
    }
  }
}

/* ── ROAST FINDER WIDGET LOGIC ── */
function initRoastFinder() {
  const options = document.querySelectorAll(".quiz-opt");
  
  options.forEach(opt => {
    opt.addEventListener("click", () => {
      const step = parseInt(opt.closest(".quiz-step").dataset.step);
      const choice = opt.dataset.val;
      
      roastFinderChoices[step] = choice;
      
      if (step < 3) {
        goToQuizStep(step + 1);
      } else {
        calculateRoastRecommendation();
      }
    });
  });

  restartQuizBtn.addEventListener("click", resetQuiz);
}

function goToQuizStep(step) {
  roastFinderStep = step;
  
  // Update progress bar
  quizProgressLine.style.width = (step / 3 * 100) + "%";

  // Hide all steps, show current
  document.querySelectorAll(".quiz-step").forEach(el => el.classList.remove("active"));
  document.getElementById("quizStep" + step).classList.add("active");
}

function resetQuiz() {
  roastFinderChoices = { 1: null, 2: null, 3: null };
  goToQuizStep(1);
}

function calculateRoastRecommendation() {
  // Recommendations mapping logic
  const choice1 = roastFinderChoices[1];
  const choice2 = roastFinderChoices[2];
  const choice3 = roastFinderChoices[3];

  let title = "Signature Espresso Blend";
  let desc = "Our house blend combining roasted beans from Brazil and Colombia. Notes of rich dark chocolate, roasted hazelnut, and brown sugar. Perfect for milk pairings or a clean double shot.";
  let roast = "Medium-Dark Roast";
  let intensity = "4/5";
  let itemId = "hot-espresso";

  if (choice2 === "D") {
    // Decaf preference
    title = "Decaf Colombian Sugarcane";
    desc = "Naturally decaffeinated using sugarcane process. Retains rich caramel, green apple, and smooth almond butter tones. A guilt-free warm indulgence.";
    roast = "Medium Roast";
    intensity = "3/5";
    itemId = "hot-espresso"; // fallback to espresso for mock checkout
  } else {
    // Count choice frequency
    const tallies = { A: 0, B: 0, C: 0, D: 0 };
    tallies[choice1]++;
    tallies[choice2]++;
    tallies[choice3]++;

    if (tallies.B >= 2 || (tallies.B === 1 && choice1 === "B")) {
      title = "Ethiopian Sidamo Single Origin";
      desc = "A light roast with a brilliant floral aroma, crisp notes of lemon zest, wild honey, and a tea-like body. Brewed meticulously as a pour-over.";
      roast = "Light Roast";
      intensity = "3/5";
      itemId = "hot-pourover";
    } else if (tallies.C >= 2 || (tallies.C === 1 && choice1 === "C")) {
      title = "Sumatran Mandheling Single Origin";
      desc = "A rustic medium-dark roast with a deep herbal complexity, earthy cedar wood, and low-acid chocolate tones. Best enjoyed via a full-immersion French Press.";
      roast = "Dark Roast";
      intensity = "5/5";
      itemId = "hot-pourover"; // fallback
    }
  }

  // Set recommendation card values
  recTitle.textContent = title;
  recDesc.textContent = desc;
  recRoast.textContent = roast;
  recIntensity.textContent = intensity;

  // Add click listener to virtual brew button
  virtualBrewBtn.onclick = () => startVirtualBrewing(title, itemId);
  
  // Add recommendation to tray button
  addRecToTrayBtn.onclick = () => {
    addToTray(itemId);
    resetQuiz();
  };

  // Show result step
  quizProgressLine.style.width = "100%";
  document.querySelectorAll(".quiz-step").forEach(el => el.classList.remove("active"));
  quizResultStep.classList.add("active");
}

/* ── VIRTUAL BREWING ANIMATION MODAL ── */
function startVirtualBrewing(beanName, itemId) {
  brewModalBean.textContent = beanName;
  
  // Set initial states
  brewSuccessMsg.style.display = "none";
  brewStatusText.style.display = "block";
  carafeLiquid.style.height = "0%";
  kettlePourAnim.classList.add("pouring");
  drippingLiquid.classList.add("dripping");
  
  brewModal.classList.add("active");
  brewModal.setAttribute("aria-hidden", "false");

  // Step-by-step brewing animation text changes & liquid fills
  let steps = [
    { text: "Warming water to 94°C...", delay: 0 },
    { text: "Blooming the coffee grounds...", delay: 1500 },
    { text: "Pouring hot water slow & steady...", delay: 3000 },
    { text: "Extracting rich coffee oils...", delay: 5000 },
    { text: "Dripping liquid gold...", delay: 7000 },
    { text: "Brew complete! Serving...", delay: 9000 }
  ];

  // Animate the carafe filling up
  let fillInterval = setInterval(() => {
    let currentHeight = parseFloat(carafeLiquid.style.height) || 0;
    if (currentHeight < 80) {
      carafeLiquid.style.height = (currentHeight + 1.2) + "%";
    }
  }, 150);

  steps.forEach(step => {
    setTimeout(() => {
      if (brewModal.classList.contains("active")) {
        brewStatusText.textContent = step.text;
      }
    }, step.delay);
  });

  // Success complete display
  setTimeout(() => {
    clearInterval(fillInterval);
    if (!brewModal.classList.contains("active")) return;
    
    kettlePourAnim.classList.remove("pouring");
    drippingLiquid.classList.remove("dripping");
    brewStatusText.style.display = "none";
    brewSuccessMsg.style.display = "block";

    dismissBrewModalBtn.onclick = () => {
      addToTray(itemId);
      closeBrewModal();
      resetQuiz();
    };
  }, 10000);
}

function closeBrewModal() {
  brewModal.classList.remove("active");
  brewModal.setAttribute("aria-hidden", "true");
}

closeBrewModalBtn.addEventListener("click", closeBrewModal);

/* ── MOCK CHECKOUT ESREPSO MACHINE ANIMATION ── */
checkoutBtn.addEventListener("click", () => {
  // Close the tray sidebar
  closeTray();
  
  // Show checkout overlay
  checkoutOverlay.style.display = "flex";
  checkoutOverlay.setAttribute("aria-hidden", "false");
  
  // Reset overlay animations
  checkoutReceiptCard.style.display = "none";
  checkoutCoffeeStream.classList.remove("pouring-shot");
  mugLiquidFill.classList.remove("filling");
  checkoutStepTitle.textContent = "Heating group head...";
  checkoutStepDesc.textContent = "Bringing boiler water to target extraction temperature.";

  // Phase 1: Pre-infusion
  setTimeout(() => {
    checkoutStepTitle.textContent = "Tamping fresh grounds...";
    checkoutStepDesc.textContent = "Pressing 18g of signature house beans at 30lbs pressure.";
  }, 1500);

  // Phase 2: Pulling Espresso
  setTimeout(() => {
    checkoutStepTitle.textContent = "Pulling espresso shot...";
    checkoutStepDesc.textContent = "Extracting sweet crema at 9 bars of pressure.";
    checkoutCoffeeStream.classList.add("pouring-shot");
    mugLiquidFill.classList.add("filling");
  }, 3500);

  // Phase 3: Finishing and printing receipt
  setTimeout(() => {
    checkoutCoffeeStream.classList.remove("pouring-shot");
    checkoutStepTitle.textContent = "Steaming microfoam milk...";
    checkoutStepDesc.textContent = "Aerating milk to silky, velvety perfection.";
  }, 7500);

  setTimeout(() => {
    checkoutStepTitle.textContent = "Creating Latte Art...";
    checkoutStepDesc.textContent = "Pouring a detailed rosetta leaf to complete the cup.";
  }, 9500);

  // Final Phase: Print Receipt
  setTimeout(() => {
    checkoutStepTitle.textContent = "Order Complete!";
    checkoutStepDesc.textContent = "Your digital receipt has been printed below.";
    
    printPaidReceipt();
  }, 11500);
});

function printPaidReceipt() {
  // Set date
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  receiptDate.textContent = dateStr;

  // Append items
  receiptItemsList.innerHTML = "";
  let subtotal = 0;

  tray.forEach(item => {
    const itemTotal = item.price;
    subtotal += itemTotal;

    // Modifiers list
    let modsText = "";
    if (item.options.milk !== "Whole Milk") modsText += `🥛 ${item.options.milk}`;
    if (item.options.sweetness !== "Normal") modsText += (modsText ? ", " : "") + `🍬 ${item.options.sweetness}`;
    item.options.extras.forEach(ext => {
      modsText += (modsText ? ", " : "") + `⚡ ${ext}`;
    });

    const itemLine = document.createElement("div");
    itemLine.className = "receipt-item-group";
    itemLine.innerHTML = `
      <div class="receipt-item-line">
        <span>${item.quantity}x ${item.name}</span>
        <span>₹${itemTotal}.00</span>
      </div>
      ${modsText ? `<div class="receipt-item-options-label">${modsText}</div>` : ""}
    `;
    receiptItemsList.appendChild(itemLine);
  });

  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  receiptSubtotal.textContent = `₹${subtotal}.00`;
  receiptTax.textContent = `₹${tax}.00`;
  receiptTotal.textContent = `₹${total}.00`;

  // Display receipt
  checkoutReceiptCard.style.display = "flex";

  // Reset tray cart
  tray = [];
  saveTrayToLocalStorage();
  updateTrayUI();
}

closeCheckoutOverlayBtn.addEventListener("click", () => {
  checkoutOverlay.style.display = "none";
  checkoutOverlay.setAttribute("aria-hidden", "true");
});

/* ── REVIEWS / TESTIMONIALS SLIDER & FORM ── */
function renderReviews() {
  carouselTrack.innerHTML = "";
  carouselIndicators.innerHTML = "";

  reviewsData.forEach((rev, idx) => {
    // Create Slide
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    
    // Star beans rating
    let beansHTML = "";
    for (let i = 0; i < rev.rating; i++) {
      beansHTML += `<svg class="bean-svg" viewBox="0 0 24 24"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 4.5c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm.5 11c0-.83-.67-1.5-1.5-1.5S8.5 16.67 8.5 17.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-5-5c0-.83-.67-1.5-1.5-1.5S5.5 11.67 5.5 12.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm10 0c0-.83-.67-1.5-1.5-1.5S14.5 11.67 14.5 12.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z"/></svg>`;
    }

    slide.innerHTML = `
      <p class="review-text-quote">"${rev.text}"</p>
      <div class="review-author-row">
        <div class="author-info">
          <span class="author-name">${rev.author}</span>
          <span class="author-date">${rev.date}</span>
        </div>
        <div class="review-rating-beans">
          ${beansHTML}
        </div>
      </div>
    `;
    carouselTrack.appendChild(slide);

    // Create Dot indicator
    const dot = document.createElement("button");
    dot.className = `carousel-dot ${idx === currentReviewIndex ? 'active' : ''}`;
    dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
    dot.addEventListener("click", () => {
      goToReviewSlide(idx);
    });
    carouselIndicators.appendChild(dot);
  });

  goToReviewSlide(currentReviewIndex);
}

function goToReviewSlide(index) {
  if (index < 0) index = reviewsData.length - 1;
  if (index >= reviewsData.length) index = 0;
  
  currentReviewIndex = index;

  // Move slide track
  carouselTrack.style.transform = `translateX(-${index * 100}%)`;

  // Update dots
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}

carouselPrev.addEventListener("click", () => goToReviewSlide(currentReviewIndex - 1));
carouselNext.addEventListener("click", () => goToReviewSlide(currentReviewIndex + 1));

// Star/Bean rating selection listener
const ratingBtns = document.querySelectorAll(".bean-rate-btn");
ratingBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const rating = parseInt(btn.dataset.rating);
    reviewRatingVal.value = rating;
    
    // Highlight up to selected star
    ratingBtns.forEach(b => {
      const bRating = parseInt(b.dataset.rating);
      b.classList.toggle("active", bRating <= rating);
    });
  });
});

// Submit review form handler
addReviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameVal = reviewName.value.trim();
  const commentVal = reviewComments.value.trim();
  const ratingNum = parseInt(reviewRatingVal.value);

  // Validate
  if (!nameVal || !commentVal) return;

  const now = new Date();
  const dateString = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  // Append new review
  reviewsData.push({
    id: "rev-" + Date.now(),
    author: nameVal,
    date: dateString,
    rating: ratingNum,
    text: commentVal
  });

  // Re-render
  renderReviews();

  // Reset form
  reviewName.value = "";
  reviewComments.value = "";
  reviewRatingVal.value = "5";
  ratingBtns.forEach(b => b.classList.add("active")); // reset to 5 stars

  // Animate slide transition to the newly created slide
  goToReviewSlide(reviewsData.length - 1);
});
