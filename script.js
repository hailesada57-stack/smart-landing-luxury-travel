
function smoothScroll(target) {
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}


const experiences = [
  { 
    id: "dubai", 
    title: "Dubai: The Royal Atlantis", 
    nights: "7 Nights / All Inclusive", 
    price: "$8,400", 
    img:    "https://www.nz.kayak.com/rimg/himg/ba/8b/09/ice-302708-ec9c2c-017159.jpg?width=836&height=607&crop=true", 
    tag: "Trending" 
  },
  { 
    id: "maldives", 
    title: "Maldives: Baa Atoll Reserve", 
    nights: "5 Nights / Private Villa", 
    price: "$12,500", 
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&fit=crop&auto=format&ixlib=rb-4.0.3", 
    tag: "Exclusive" 
  },
  { 
    id: "zermatt", 
    title: "Zermatt: The Omni Chalet", 
    nights: "Weekend / Ski-in Access", 
    price: "$4,200", 
    img: "https://www.ultimateluxurychalets.com/blog/wp-content/uploads/2024/05/Zermatt.jpg"
  },
  { 
    id: "tokyo", 
    title: "Tokyo: Aman Tokyo Suite", 
    nights: "4 Nights / City View", 
    price: "$9,800", 
   img: "https://irp.cdn-website.com/7e91d51f/dms3rep/multi/The+Aman+Tokyo.png",
    tag: "New" 
  },
  { 
    id: "santorini", 
    title: "Santorini: Canaves Oia", 
    nights: "6 Nights / Caldera View", 
    price: "$11,200", 
     img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&fit=crop&auto=format&ixlib=rb-4.0.3"
  },
 { 
  id: "bora", 
  title: "Bora Bora: Four Seasons Overwater", 
  nights: "7 Nights / Lagoon Villa", 
  price: "$18,500", 
  img: "https://www.tahiti.com/images1/gallery/Four-Seasons-Resort-Bora-Bora-Aerial3-2000x1200_29556.jpg", 
  tag: "Exclusive" 
},
  { 
    id: "paris", 
    title: "Paris: Ritz Suite", 
    nights: "5 Nights / Eiffel View", 
    price: "$10,900", 
   img: "https://images.squarespace-cdn.com/content/v1/63d83cafb5d75a62ec607e07/e0e3e1d4-a26e-4bae-a7c1-25ecbd89a491/The+Best+Hotels+in+Paris+with+an+Eiffel+Tower+View+-+Ho%CC%82tel+Regina+Louvre.jpg"
  },
  { 
    id: "safari", 
    title: "Serengeti: Singita Lodge", 
    nights: "4 Nights / Private Safari", 
    price: "$15,300", 
    img: "https://www.go2africa.com/wp-content/uploads/2017/08/Main-areas-andBeyond-Serengeti-Under-Canvas-2.jpg",
    tag: "Adventure" 
  },
  { 
  id: "nyc", 
  title: "New York: The Mark Penthouse",
  nights: "3 Nights / Skyline View",
  price: "$7,600",
  img: "https://markhotel-production.s3.amazonaws.com/app/uploads/2015/04/1402-Living.jpg",
},
];


if (document.getElementById("experiences-grid")) {
  const grid = document.getElementById("experiences-grid");
  const loadBtn = document.getElementById("load-more-btn");
  const dialog = document.getElementById("experience-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogContent = document.getElementById("dialog-content");
  const closeBtn = document.querySelector(".close-dialog");

  let visibleCount = 6;
  const loadStep = 3;

  function renderCards() {
    grid.innerHTML = "";

    experiences.slice(0, visibleCount).forEach(item => {
      const card = document.createElement("article");
      card.className = "card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `View details for ${item.title}`);

      card.innerHTML = `
        <div class="card-image">
          <img src="${item.img}" alt="${item.title} luxury experience" loading="lazy">
          ${item.tag ? `<span class="tag">${item.tag}</span>` : ""}
        </div>
        <div class="card-content">
          <h3>${item.title}</h3>
          <p>${item.nights}</p>
          <p class="price">${item.price}</p>
        </div>
      `;

      card.addEventListener("click", () => showExperience(item));
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showExperience(item);
        }
      });

      grid.appendChild(card);
    });

    loadBtn.style.display = visibleCount >= experiences.length ? "none" : "inline-block";
  }

  function showExperience(item) {
    dialogTitle.textContent = item.title;
    dialogContent.innerHTML = `
      <img src="${item.img}" alt="${item.title}" style="width:100%; border-radius:12px; margin-bottom:1.5rem;">
      <p><strong>Duration:</strong> ${item.nights}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p>This exclusive curated experience includes private aviation transfers, personalized concierge, and access to the finest amenities.</p>
    `;
    dialog.showModal();
  }

  loadBtn.addEventListener("click", () => {
    visibleCount += loadStep;
    renderCards();
  });

  closeBtn.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", e => {
    if (e.target === dialog) dialog.close();
  });

 
  renderCards();
}


const form = document.getElementById("inquiry-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    let isValid = true;
    form.querySelectorAll("[required]").forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = "#c0392b";  // Red for error
      } else {
        field.style.borderColor = "#ddd";
      }
    });

    if (isValid) {
      alert("Thank you! Your inquiry has been sent. (Demo – no real send)");
      form.reset();
    } else {
      alert("Please fill in all required fields.");
    }
  });
}