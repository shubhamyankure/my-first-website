import React, { useMemo, useState } from "react";
import "./App.css";

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

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function imagePath(fileName) {
  return `${import.meta.env.BASE_URL}images/${encodeURIComponent(fileName)}`;
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

function filterProducts(productList, selectedCategory, searchTerm, sortBy) {
  const query = searchTerm.trim().toLowerCase();

  const filtered = productList.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const text = `${product.title} ${product.description} ${product.category} ${product.features.join(" ")}`.toLowerCase();
    const matchesSearch = !query || text.includes(query);
    return matchesCategory && matchesSearch;
  });

  return [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating || b.reviews - a.reviews;
    return a.price - b.price;
  });
}

function getCartItemCount(cart) {
  return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
}

function getCartSubtotal(cart, productList) {
  return Object.entries(cart).reduce((total, [productId, quantity]) => {
    const product = productList.find((item) => item.id === productId);
    return product ? total + product.price * quantity : total;
  }, 0);
}

function getSimpleProjects(productList, limit = 4) {
  return [...productList].sort((a, b) => a.price - b.price).slice(0, limit);
}

function getSearchScore(product, searchTerm) {
  const query = searchTerm.trim().toLowerCase();
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

function getRelevantProjects(productList, searchTerm, selectedCategory, limit = 4) {
  const query = searchTerm.trim().toLowerCase();
  const categoryFiltered = selectedCategory === "All" ? productList : productList.filter((product) => product.category === selectedCategory);

  if (!query) {
    return getSimpleProjects(categoryFiltered.length ? categoryFiltered : productList, limit);
  }

  return productList
    .map((product) => ({ product, score: getSearchScore(product, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.product.price - b.product.price)
    .map((item) => item.product)
    .slice(0, limit);
}

function getSearchRecommendations(productList, searchTerm, limit = 6) {
  const query = searchTerm.trim().toLowerCase();

  if (!query) return popularSearches.slice(0, limit);

  return Array.from(
    new Set(
      productList
        .map((product) => ({ label: product.title, score: getSearchScore(product, query) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((item) => item.label)
    )
  ).slice(0, limit);
}

function getProjectInfo(product) {
  return {
    project: `${product.title} is a ready-to-use electronics project package for students, makers, and final year demonstrations. The package includes working project files, circuit guidance, documentation, and ordering support.`,
    synopsis: `This synopsis explains the aim, objective, proposed system, working principle, applications, and expected output of ${product.title}. It is prepared so the project can be understood quickly before development or submission.`,
    report: `The report includes introduction, block diagram explanation, component list, circuit description, software logic, implementation steps, result analysis, advantages, applications, conclusion, and future scope for ${product.title}.`,
    support: "Project support includes help with setup, code explanation, circuit connection guidance, report understanding, and WhatsApp assistance after order confirmation."
  };
}

function getOrderMessage(cart, productList) {
  const cartProducts = productList.filter((product) => cart[product.id]);
  const orderId = `CN${Date.now()}`;
  const itemLines = cartProducts
    .map((product) => `${product.title} x ${cart[product.id]} - ${formatCurrency(product.price * cart[product.id])}`)
    .join("\n");

  return `Hello CircuitNest,

I want to order this project.

Order ID:
${orderId}

Project Details:
${itemLines}

Total:
${formatCurrency(getCartSubtotal(cart, productList))}`;
}

function getWhatsAppUrl(cart, productList) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(getOrderMessage(cart, productList))}`;
}

function handleImageError(event, fallbackImage) {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  image.src = fallbackImage;
}

function ProjectInfoModal({ product, onClose, onBuyNow }) {
  const info = getProjectInfo(product);
  const sections = [
    ["1", "Project", info.project],
    ["2", "Synopsis", info.synopsis],
    ["3", "Report", info.report],
    ["4", "Project Support", info.support]
  ];

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <div className="modalHeader">
          <div>
            <p className="eyebrow">Project Information</p>
            <h2>{product.title}</h2>
            <p className="modalPrice">{formatCurrency(product.price)}</p>
          </div>
          <button className="iconButton" onClick={onClose} aria-label="Close project information">×</button>
        </div>

        <div className="infoGrid">
          {sections.map(([number, title, content]) => (
            <div className="infoBlock" key={title}>
              <div className="infoTitle">
                <span>{number}</span>
                <h3>{title}</h3>
              </div>
              <p>{content}</p>
            </div>
          ))}
        </div>

        <div className="modalActions">
          <button className="button green" onClick={() => onBuyNow(product.id)}>Order on WhatsApp</button>
          <button className="button dark" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, quantity, onAdd, onRemove, onBuyNow, onViewInfo }) {
  return (
    <article className="productCard">
      <div className="imageWrap">
        <img
          src={product.image}
          alt={product.title}
          onError={(event) => handleImageError(event, product.fallbackImage)}
        />
        <div className="imageShade" />
        <span className="categoryPill">{product.category}</span>
        <span className={`badge ${product.badge.toLowerCase().replaceAll(" ", "-")}`}>{product.badge}</span>
      </div>

      <div className="cardBody">
        <div className="rating">★ {product.rating} <span>({product.reviews})</span></div>
        <h3>{product.icon} {product.title}</h3>
        <p>{product.description}</p>

        <div className="chips">
          {product.features.map((feature) => <span key={`${product.id}-${feature}`}>{feature}</span>)}
        </div>

        <div className="metaGrid">
          <div>
            <small>Delivery</small>
            <strong>{product.delivery}</strong>
          </div>
          <div>
            <small>Available</small>
            <strong>{product.stock} slots</strong>
          </div>
        </div>

        <div className="priceRow">
          <strong>{formatCurrency(product.price)}</strong>
          <span>{formatCurrency(product.oldPrice)}</span>
        </div>

        <button className="button gray full" onClick={() => onViewInfo(product)}>Project Info</button>

        <div className="cardActions">
          {quantity > 0 ? (
            <div className="qty">
              <button onClick={() => onRemove(product.id)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => onAdd(product.id)}>+</button>
            </div>
          ) : (
            <button className="button blue" onClick={() => onAdd(product.id)}>Add to Cart</button>
          )}
          <button className="button green" onClick={() => onBuyNow(product.id)}>Buy Now</button>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price-low");
  const [cart, setCart] = useState({});
  const [notice, setNotice] = useState("");
  const [selectedInfoProduct, setSelectedInfoProduct] = useState(null);

  const filteredProducts = useMemo(
    () => filterProducts(products, selectedCategory, searchTerm, sortBy),
    [selectedCategory, searchTerm, sortBy]
  );

  const searchRecommendations = useMemo(() => getSearchRecommendations(products, searchTerm, 6), [searchTerm]);
  const relevantProjects = useMemo(() => getRelevantProjects(products, searchTerm, selectedCategory, 4), [searchTerm, selectedCategory]);
  const simpleProjects = getSimpleProjects(products, 4);
  const cartItemCount = getCartItemCount(cart);
  const cartSubtotal = getCartSubtotal(cart, products);
  const cartProducts = products.filter((product) => cart[product.id]);

  function addToCart(productId) {
    setCart((currentCart) => ({
      ...currentCart,
      [productId]: (currentCart[productId] || 0) + 1
    }));
    setNotice("Project added to cart.");
  }

  function removeFromCart(productId) {
    setCart((currentCart) => {
      const currentQuantity = currentCart[productId] || 0;
      if (currentQuantity <= 1) {
        const nextCart = { ...currentCart };
        delete nextCart[productId];
        return nextCart;
      }
      return { ...currentCart, [productId]: currentQuantity - 1 };
    });
  }

  function buyNow(productId) {
    window.open(getWhatsAppUrl({ [productId]: 1 }, products), "_blank");
  }

  function checkout() {
    if (cartItemCount === 0) {
      setNotice("Your cart is empty.");
      return;
    }
    window.open(getWhatsAppUrl(cart, products), "_blank");
  }

  function scrollToProjects() {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main>
      <header className="header">
        <div className="brand">
          <div className="brandIcon">⚙️</div>
          <div>
            <h1>CircuitNest</h1>
            <p>Electronics Projects Store</p>
          </div>
        </div>

        <div className="desktopTag">Source code, report, circuit diagram and support</div>

        <label className="headerSearch">
          <span>Search projects</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onFocus={scrollToProjects}
            placeholder="Search projects..."
          />
        </label>

        <button className="cartButton">🛒 {cartItemCount}</button>
      </header>

      {notice && (
        <div className="notice">
          <span>{notice}</span>
          <button onClick={() => setNotice("")}>×</button>
        </div>
      )}

      <section className="hero">
        <div className="heroText">
          <span className="heroPill">Final year and demo-ready project bundles</span>
          <h2>Electronics Projects Store</h2>
          <p>Buy electronics projects with source code, report, circuit diagram and support.</p>

          <div className="heroActions">
            <button className="button blue" onClick={scrollToProjects}>Shop Projects</button>
            <button className="button green" onClick={() => buyNow("automatic-street-light")}>Order Simple Project</button>
          </div>

          <div className="heroSearch">
            <h3>Search your project</h3>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onFocus={scrollToProjects}
              placeholder="Search Robot, IoT, AI, Solar, Security..."
            />
            <div className="recommendationChips">
              {popularSearches.slice(0, 5).map((recommendation) => (
                <button
                  key={recommendation}
                  onClick={() => {
                    setSearchTerm(recommendation);
                    scrollToProjects();
                  }}
                >
                  {recommendation}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="featured">
          <img
            src={getProjectImage("Automatic Street Light")}
            alt="Automatic Street Light"
            onError={(event) => handleImageError(event, getProjectFallbackImage("Automatic Street Light"))}
          />
          <div>
            <p className="eyebrow">Featured project</p>
            <h3>Automatic Street Light</h3>
            <p>Complete package with project files, circuit diagram, documentation, and support.</p>
            <div className="featuredBottom">
              <strong>₹6200</strong>
              <button className="button green" onClick={() => buyNow("automatic-street-light")}>Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="simpleSection">
        <div className="sectionTitle">
          <div>
            <p className="eyebrow greenText">Simple projects first</p>
            <h2>Best Simple Projects to Start</h2>
          </div>
          <p>These are lower-cost, beginner-friendly projects placed on top so visitors can choose quickly.</p>
        </div>

        <div className="simpleGrid">
          {simpleProjects.map((project) => (
            <button className="simpleCard" key={project.id} onClick={() => setSelectedInfoProduct(project)}>
              <img src={project.image} alt={project.title} onError={(event) => handleImageError(event, project.fallbackImage)} />
              <span>Simple Pick</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <strong>{formatCurrency(project.price)}</strong>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="benefits">
        <div><b>📦 Complete files</b><p>Source code, report, and circuit diagram included</p></div>
        <div><b>✅ Project support</b><p>Help available after purchase</p></div>
        <div><b>💬 WhatsApp order</b><p>Order directly with generated project details</p></div>
      </section>

      <section id="projects-section" className="shopLayout">
        <div>
          <div className="shopHeader">
            <div>
              <p className="eyebrow">CircuitNest Projects</p>
              <h2>Available Project Packages</h2>
            </div>
            <div className="controls">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search projects..."
              />
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="price-low">Simple projects first</option>
                <option value="rating">Top rated</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </div>
          </div>

          <div className="recommendBox">
            <div className="sectionTitle small">
              <div>
                <p className="eyebrow greenText">Search recommendations</p>
                <h3>{searchTerm.trim() ? `Relevant projects for "${searchTerm.trim()}"` : "Try popular searches"}</h3>
              </div>
              <p>Click a suggestion to instantly filter matching projects.</p>
            </div>

            <div className="recommendationChips">
              {searchRecommendations.map((recommendation) => (
                <button key={recommendation} onClick={() => setSearchTerm(recommendation)}>{recommendation}</button>
              ))}
            </div>

            <div className="relevantGrid">
              {relevantProjects.map((project) => (
                <button key={project.id} className="relevantCard" onClick={() => setSelectedInfoProduct(project)}>
                  <img src={project.image} alt={project.title} onError={(event) => handleImageError(event, project.fallbackImage)} />
                  <div>
                    <h4>{project.title}</h4>
                    <strong>{formatCurrency(project.price)}</strong>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="productGrid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={cart[product.id] || 0}
                  onAdd={addToCart}
                  onRemove={removeFromCart}
                  onBuyNow={buyNow}
                  onViewInfo={setSelectedInfoProduct}
                />
              ))}
            </div>
          ) : (
            <div className="emptyState">
              <h3>No projects found</h3>
              <p>Try a different category, search keyword, or sort option.</p>
            </div>
          )}
        </div>

        <aside className="cartPanel">
          <div className="cartTop">
            <p>Your cart</p>
            <h2>Order Summary</h2>
          </div>

          <div className="cartBody">
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <div className="cartItem" key={product.id}>
                  <div>
                    <strong>{product.title}</strong>
                    <p>{cart[product.id]} × {formatCurrency(product.price)}</p>
                  </div>
                  <b>{formatCurrency(cart[product.id] * product.price)}</b>
                </div>
              ))
            ) : (
              <div className="emptyCart">🛒<p>Your cart is empty</p></div>
            )}

            <div className="totalRows">
              <div><span>Items</span><span>{cartItemCount}</span></div>
              <div><span>Support</span><span>Included</span></div>
              <div className="total"><span>Total</span><span>{formatCurrency(cartSubtotal)}</span></div>
            </div>

            <button className="button green full" disabled={cartItemCount === 0} onClick={checkout}>Order on WhatsApp</button>
          </div>
        </aside>
      </section>

      {selectedInfoProduct && (
        <ProjectInfoModal product={selectedInfoProduct} onClose={() => setSelectedInfoProduct(null)} onBuyNow={buyNow} />
      )}
    </main>
  );
}