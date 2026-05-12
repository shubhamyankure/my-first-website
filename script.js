const whatsappPhone = "918956919539";

const uploadedImageFiles = {
  "Smart Greenhouse Automation": "Smart Greenhouse Automation.avif",
  "IoT Home Automation": "IoT Home Automation.avif",
  "Smart Energy Meter": "Smart Energy Meter.avif",
  "Automatic Street Light": "Automatic Street Light.avif",
  "Weather Monitoring System": "Weather Monitoring System.avif",
  "RFID Attendance System": "RFID Attendance System.avif",
  "Fingerprint Door Lock": "Fingerprint Door Lock.avif",
  "Smart Parking System": "Smart Parking System.avif",
  "Digital Notice Board": "Digital Notice Board.blob",
  "Voice Controlled Appliances": "Voice Controlled Appliances.avif",
  "Smart Dustbin": "Smart Dustbin.avif",
  "GSM Home Security System": "GSM Home Security System.avif",
  "Bluetooth Control Robotic Car": "Bluetooth control Robotic Car.avif",
  "Wi-Fi Surveillance Robot": "Wi-Fi Surveillance Robot.avif",
  "LoRa Communication System": "LoRa Communication System.png",
  "GPS Vehicle Tracking": "GPS Vehicle Tracking.avif",
  "Obstacle Avoiding Robot": "Obstacle Avoiding Robot.avif",
  "Line Follower Robot": "Line Follower Robot.avif",
  "Fire Fighting Robot": "Fire Fighting Robot.avif",
  "Smart Solar Inverter": "Smart Solar Inverter.jpg",
  "Wireless Power Transfer": "Wireless Power Transfer.jpg",
  "Automatic Battery Charger": "Automatic Battery Charger.jpg",
  "AI Face Recognition Attendance": "AI Face Recognition Attendance.jpg",
  "Smart Traffic Management": "Smart Traffic Management.jpg",
  "AI Garbage Classification": "AI Garbage Classification.jpg",
  "Driver Drowsiness Detection": "Driver Drowsiness Detection.jpg",
  "Health Monitoring System": "Health Monitoring System.jpg"
};

const projectCatalog = [
  ["Smart Greenhouse Automation", 8000],
  ["IoT Home Automation", 7000],
  ["Smart Energy Meter", 8500],
  ["Automatic Street Light", 6200],
  ["Weather Monitoring System", 7500],
  ["RFID Attendance System", 7200],
  ["Fingerprint Door Lock", 8500],
  ["Smart Parking System", 8000],
  ["Digital Notice Board", 9000],
  ["Voice Controlled Appliances", 7500],
  ["Smart Dustbin", 6800],
  ["GSM Home Security System", 9000],
  ["Bluetooth Control Robotic Car", 8500],
  ["Wi-Fi Surveillance Robot", 11000],
  ["LoRa Communication System", 10000],
  ["GPS Vehicle Tracking", 10000],
  ["Obstacle Avoiding Robot", 8000],
  ["Line Follower Robot", 7500],
  ["Fire Fighting Robot", 10000],
  ["Human Following Robot", 9500],
  ["Solar Power Monitoring System", 10000],
  ["Smart Solar Inverter", 15000],
  ["Wireless Power Transfer", 8500],
  ["Automatic Battery Charger", 7000],
  ["AI Face Recognition Attendance", 17000],
  ["Smart Traffic Management", 9000],
  ["AI Garbage Classification", 20000],
  ["Driver Drowsiness Detection", 17000],
  ["Health Monitoring System", 8500]
];

const popularSearches = ["Robot", "IoT", "AI", "Solar", "Security", "Automation"];

let selectedCategory = "All";
let searchTerm = "";
let sortBy = "price-low";
let cart = {};
let selectedInfoProduct = null;

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function imagePath(fileName) {
  return `images/${fileName}`;
}

function getProjectFallbackImage(title) {
  const lower = title.toLowerCase();

  if (lower.includes("greenhouse")) return "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80";
  if (lower.includes("robot")) return "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80";
  if (lower.includes("solar") || lower.includes("power") || lower.includes("energy") || lower.includes("battery")) return "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80";
  if (lower.includes("traffic") || lower.includes("street") || lower.includes("parking") || lower.includes("vehicle")) return "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1000&q=80";
  if (lower.includes("weather")) return "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1000&q=80";
  if (lower.includes("notice") || lower.includes("face") || lower.includes("surveillance")) return "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1000&q=80";
  if (lower.includes("rfid") || lower.includes("fingerprint") || lower.includes("security")) return "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80";
  if (lower.includes("dustbin") || lower.includes("garbage")) return "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80";

  return "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80";
}

function getProjectImage(title) {
  const fileName = uploadedImageFiles[title];
  return fileName ? imagePath(fileName) : getProjectFallbackImage(title);
}

function getProjectCategory(title) {
  const lower = title.toLowerCase();

  if (lower.includes("robot")) return "Robotics Projects";
  if (lower.includes("ai") || lower.includes("face") || lower.includes("drowsiness")) return "AI Projects";
  if (lower.includes("solar") || lower.includes("power") || lower.includes("battery") || lower.includes("energy")) return "Energy Projects";
  if (lower.includes("rfid") || lower.includes("fingerprint") || lower.includes("security")) return "Security Projects";
  if (lower.includes("monitoring") || lower.includes("weather") || lower.includes("health")) return "Monitoring Projects";
  if (lower.includes("iot") || lower.includes("wi-fi") || lower.includes("lora") || lower.includes("gsm") || lower.includes("gps") || lower.includes("bluetooth")) return "IoT Projects";
  if (lower.includes("notice")) return "Display Projects";
  if (lower.includes("parking") || lower.includes("traffic") || lower.includes("dustbin") || lower.includes("garbage")) return "Smart Systems";

  return "Automation Projects";
}

function getProjectBadge(price, index) {
  if (price >= 15000) return "Premium";
  if (price >= 10000) return "Advanced";
  if (price <= 7000) return "Budget Pick";
  if (index % 5 === 0) return "Popular";
  if (index % 3 === 0) return "Smart System";
  return "Best Seller";
}

function getProjectIcon(title) {
  const lower = title.toLowerCase();
  if (lower.includes("robot") || lower.includes("ai") || lower.includes("iot")) return "🤖";
  if (lower.includes("security") || lower.includes("lock") || lower.includes("attendance")) return "🔐";
  if (lower.includes("solar") || lower.includes("power") || lower.includes("energy")) return "⚡";
  if (lower.includes("health")) return "❤️";
  if (lower.includes("notice")) return "📺";
  return "🔧";
}

const products = projectCatalog.map(([title, price], index) => ({
  id: slugify(title),
  title,
  category: getProjectCategory(title),
  badge: getProjectBadge(price, index),
  icon: getProjectIcon(title),
  image: getProjectImage(title),
  fallbackImage: getProjectFallbackImage(title),
  description: `${title} project package with source code, report, circuit diagram, working explanation, and support.`,
  features: ["Source code", "Report", "Circuit diagram", "Support"],
  price,
  oldPrice: price + 1000,
  rating: index === 0 ? 4.9 : Number((4.5 + ((index % 5) * 0.08)).toFixed(1)),
  reviews: index === 0 ? 164 : 90 + index * 4,
  stock: 6 + (index % 9),
  delivery: price >= 10000 ? "Premium project package" : "Complete project package"
}));

const categories = [
  "All",
  "IoT Projects",
  "Automation Projects",
  "Energy Projects",
  "Smart Systems",
  "Monitoring Projects",
  "Security Projects",
  "Robotics Projects",
  "AI Projects",
  "Display Projects"
];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function handleImageError(event, fallbackImage) {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  image.src = fallbackImage;
}

function filterProducts(productList) {
  const query = searchTerm.trim().toLowerCase();

  const filtered = productList.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const text = `${product.title} ${product.description} ${product.category} ${product.features.join(" ")}`.toLowerCase();
    return matchesCategory && (!query || text.includes(query));
  });

  return [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating || b.reviews - a.reviews;
    return a.price - b.price;
  });
}

function getSimpleProjects(limit = 4) {
  return [...products].sort((a, b) => a.price - b.price).slice(0, limit);
}

function getSearchScore(product, term) {
  const query = term.trim().toLowerCase();
  if (!query) return 0;

  const words = query.split(" ").filter(Boolean);
  const title = product.title.toLowerCase();
  const category = product.category.toLowerCase();
  const description = product.description.toLowerCase();
  const features = product.features.join(" ").toLowerCase();

  let score = 0;
  if (title === query) score += 20;
  if (title.includes(query)) score += 12;
  if (category.includes(query)) score += 7;
  if (features.includes(query)) score += 5;
  if (description.includes(query)) score += 3;

  words.forEach((word) => {
    if (title.includes(word)) score += 4;
    if (category.includes(word)) score += 3;
    if (features.includes(word)) score += 2;
    if (description.includes(word)) score += 1;
  });

  return score;
}

function getRelevantProjects(limit = 4) {
  const query = searchTerm.trim().toLowerCase();
  const categoryFiltered = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

  if (!query) return [...categoryFiltered].sort((a, b) => a.price - b.price).slice(0, limit);

  return products
    .map((product) => ({ product, score: getSearchScore(product, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.product.price - b.product.price)
    .map((item) => item.product)
    .slice(0, limit);
}

function getSearchRecommendations(limit = 6) {
  const query = searchTerm.trim().toLowerCase();

  if (!query) return popularSearches.slice(0, limit);

  return Array.from(
    new Set(
      products
        .map((product) => ({ label: product.title, score: getSearchScore(product, query) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((item) => item.label)
    )
  ).slice(0, limit);
}

function getCartItemCount() {
  return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
}

function getCartSubtotal() {
  return Object.entries(cart).reduce((total, [productId, quantity]) => {
    const product = products.find((item) => item.id === productId);
    return product ? total + product.price * quantity : total;
  }, 0);
}

function getProjectInfo(product) {
  return {
    project: `${product.title} is a ready-to-use electronics project package for students, makers, and final year demonstrations. The package includes working project files, circuit guidance, documentation, and ordering support.`,
    synopsis: `This synopsis explains the aim, objective, proposed system, working principle, applications, and expected output of ${product.title}. It is prepared so the project can be understood quickly before development or submission.`,
    report: `The report includes introduction, block diagram explanation, component list, circuit description, software logic, implementation steps, result analysis, advantages, applications, conclusion, and future scope for ${product.title}.`,
    support: "Project support includes help with setup, code explanation, circuit connection guidance, report understanding, and WhatsApp assistance after order confirmation."
  };
}

function getOrderMessage(orderCart) {
  const cartProducts = products.filter((product) => orderCart[product.id]);
  const orderId = `CN${Date.now()}`;
  const itemLines = cartProducts
    .map((product) => `${product.title} x ${orderCart[product.id]} - ${formatCurrency(product.price * orderCart[product.id])}`)
    .join("\n");

  const total = cartProducts.reduce((sum, product) => sum + product.price * orderCart[product.id], 0);

  return `Hello CircuitNest,

I want to order this project.

Order ID:
${orderId}

Project Details:
${itemLines}

Total:
${formatCurrency(total)}`;
}

function getWhatsAppUrl(orderCart) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(getOrderMessage(orderCart))}`;
}

function showNotice(message) {
  document.getElementById("noticeText").textContent = message;
  document.getElementById("notice").classList.remove("hidden");
}

function hideNotice() {
  document.getElementById("notice").classList.add("hidden");
}

function scrollToProjects() {
  document.getElementById("projects-section").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setSearch(value, shouldScroll = false) {
  searchTerm = value;
  document.getElementById("headerSearch").value = value;
  document.getElementById("heroSearch").value = value;
  document.getElementById("mainSearch").value = value;
  render();
  if (shouldScroll) scrollToProjects();
}

function addToCart(productId) {
  cart[productId] = (cart[productId] || 0) + 1;
  showNotice("Project added to cart.");
  render();
}

function removeFromCart(productId) {
  if (!cart[productId]) return;
  cart[productId] -= 1;
  if (cart[productId] <= 0) delete cart[productId];
  render();
}

function buyNow(productId) {
  window.open(getWhatsAppUrl({ [productId]: 1 }), "_blank");
}

function checkout() {
  if (getCartItemCount() === 0) {
    showNotice("Your cart is empty.");
    return;
  }
  window.open(getWhatsAppUrl(cart), "_blank");
}

function openProjectInfo(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  selectedInfoProduct = product;
  const info = getProjectInfo(product);
  const sections = [
    ["1", "Project", info.project],
    ["2", "Synopsis", info.synopsis],
    ["3", "Report", info.report],
    ["4", "Project Support", info.support]
  ];

  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalPrice").textContent = formatCurrency(product.price);
  document.getElementById("modalInfoGrid").innerHTML = sections.map(([number, title, content]) => `
    <div class="infoBlock">
      <div class="infoTitle">
        <span>${number}</span>
        <h3>${title}</h3>
      </div>
      <p>${content}</p>
    </div>
  `).join("");

  document.getElementById("modalOverlay").classList.remove("hidden");
}

function closeProjectInfo() {
  selectedInfoProduct = null;
  document.getElementById("modalOverlay").classList.add("hidden");
}

function renderImage(product, className = "") {
  return `<img class="${className}" src="${product.image}" alt="${product.title}" onerror="handleImageError(event, '${product.fallbackImage}')">`;
}

function renderSimpleProjects() {
  document.getElementById("simpleGrid").innerHTML = getSimpleProjects(4).map((project) => `
    <button class="simpleCard" type="button" onclick="openProjectInfo('${project.id}')">
      ${renderImage(project)}
      <span>Simple Pick</span>
      <div>
        <h3>${project.title}</h3>
        <p>${project.category}</p>
        <strong>${formatCurrency(project.price)}</strong>
      </div>
    </button>
  `).join("");
}

function renderCategories() {
  document.getElementById("categories").innerHTML = categories.map((category) => `
    <button type="button" class="${selectedCategory === category ? "active" : ""}" onclick="selectCategory('${category}')">${category}</button>
  `).join("");
}

function selectCategory(category) {
  selectedCategory = category;
  render();
}

function renderRecommendations() {
  document.getElementById("recommendTitle").textContent = searchTerm.trim()
    ? `Relevant projects for "${searchTerm.trim()}"`
    : "Try popular searches";

  const chips = getSearchRecommendations(6);
  document.getElementById("searchChips").innerHTML = chips.map((chip) => `
    <button type="button" onclick="setSearch('${chip.replaceAll("'", "\\'")}')">${chip}</button>
  `).join("");

  document.getElementById("heroSearchChips").innerHTML = popularSearches.slice(0, 5).map((chip) => `
    <button type="button" onclick="setSearch('${chip}', true)">${chip}</button>
  `).join("");

  document.getElementById("relevantGrid").innerHTML = getRelevantProjects(4).map((project) => `
    <button class="relevantCard" type="button" onclick="openProjectInfo('${project.id}')">
      ${renderImage(project)}
      <div>
        <h4>${project.title}</h4>
        <strong>${formatCurrency(project.price)}</strong>
      </div>
    </button>
  `).join("");
}

function renderProducts() {
  const filteredProducts = filterProducts(products);
  const productGrid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");

  emptyState.classList.toggle("hidden", filteredProducts.length > 0);

  productGrid.innerHTML = filteredProducts.map((product) => {
    const quantity = cart[product.id] || 0;
    const cartControl = quantity > 0
      ? `<div class="qty">
          <button type="button" onclick="removeFromCart('${product.id}')">-</button>
          <span>${quantity}</span>
          <button type="button" onclick="addToCart('${product.id}')">+</button>
        </div>`
      : `<button class="button blue" type="button" onclick="addToCart('${product.id}')">Add to Cart</button>`;

    return `
      <article class="productCard">
        <div class="imageWrap">
          ${renderImage(product)}
          <div class="imageShade"></div>
          <span class="categoryPill">${product.category}</span>
          <span class="badge">${product.badge}</span>
        </div>

        <div class="cardBody">
          <div class="rating">★ ${product.rating} <span>(${product.reviews})</span></div>
          <h3>${product.icon} ${product.title}</h3>
          <p>${product.description}</p>

          <div class="chips">
            ${product.features.map((feature) => `<span>${feature}</span>`).join("")}
          </div>

          <div class="metaGrid">
            <div>
              <small>Delivery</small>
              <strong>${product.delivery}</strong>
            </div>
            <div>
              <small>Available</small>
              <strong>${product.stock} slots</strong>
            </div>
          </div>

          <div class="priceRow">
            <strong>${formatCurrency(product.price)}</strong>
            <span>${formatCurrency(product.oldPrice)}</span>
          </div>

          <button class="button gray full" type="button" onclick="openProjectInfo('${product.id}')">Project Info</button>

          <div class="cardActions">
            ${cartControl}
            <button class="button green" type="button" onclick="buyNow('${product.id}')">Buy Now</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderCart() {
  const cartItemCount = getCartItemCount();
  const cartSubtotal = getCartSubtotal();
  const cartProducts = products.filter((product) => cart[product.id]);

  document.getElementById("cartCount").textContent = cartItemCount;
  document.getElementById("cartCountTop").textContent = cartItemCount;
  document.getElementById("cartTotal").textContent = formatCurrency(cartSubtotal);
  document.getElementById("checkoutBtn").disabled = cartItemCount === 0;
  document.getElementById("emptyCart").classList.toggle("hidden", cartProducts.length > 0);

  document.getElementById("cartItems").innerHTML = cartProducts.map((product) => `
    <div class="cartItem">
      <div>
        <strong>${product.title}</strong>
        <p>${cart[product.id]} × ${formatCurrency(product.price)}</p>
      </div>
      <b>${formatCurrency(cart[product.id] * product.price)}</b>
    </div>
  `).join("");
}

function render() {
  renderSimpleProjects();
  renderCategories();
  renderRecommendations();
  renderProducts();
  renderCart();
}

function setupEvents() {
  document.getElementById("featuredImage").src = getProjectImage("Automatic Street Light");
  document.getElementById("featuredImage").onerror = (event) => handleImageError(event, getProjectFallbackImage("Automatic Street Light"));

  ["headerSearch", "heroSearch", "mainSearch"].forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("input", (event) => setSearch(event.target.value));
    input.addEventListener("focus", () => {
      if (id !== "mainSearch") scrollToProjects();
    });
  });

  document.getElementById("sortSelect").addEventListener("change", (event) => {
    sortBy = event.target.value;
    render();
  });

  document.getElementById("shopProjectsBtn").addEventListener("click", scrollToProjects);
  document.getElementById("orderSimpleBtn").addEventListener("click", () => buyNow("automatic-street-light"));
  document.getElementById("featuredBuyBtn").addEventListener("click", () => buyNow("automatic-street-light"));
  document.getElementById("checkoutBtn").addEventListener("click", checkout);
  document.getElementById("closeNotice").addEventListener("click", hideNotice);
  document.getElementById("closeModal").addEventListener("click", closeProjectInfo);
  document.getElementById("modalCloseBtn").addEventListener("click", closeProjectInfo);
  document.getElementById("modalOrderBtn").addEventListener("click", () => {
    if (selectedInfoProduct) buyNow(selectedInfoProduct.id);
  });

  document.getElementById("modalOverlay").addEventListener("click", (event) => {
    if (event.target.id === "modalOverlay") closeProjectInfo();
  });
}

window.handleImageError = handleImageError;
window.openProjectInfo = openProjectInfo;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.buyNow = buyNow;
window.selectCategory = selectCategory;
window.setSearch = setSearch;

setupEvents();
render();
