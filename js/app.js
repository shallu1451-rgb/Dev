/* ===================================================================
   DEV TOUR AND TRAVELS - INTERACTIVE APPLICATION LOGIC
   - Package Data Repository
   - Dynamic Filtering by Duration, Inclusions, and Search
   - Real-time Sorting (Price, Duration, Popularity)
   - Interactive Itinerary Details Modal
   - Instant Booking Enquiry Modal with WhatsApp Dispatch
   - FAQ Accordion & Mobile Navigation
   =================================================================== */

// Complete Tour Packages Database
const TOURS_DATA = [
  {
    id: "pkg-1",
    title: "Mumbai City Highlights & Bollywood Glamour Tour",
    category: "mumbai",
    durationDays: 3,
    durationNights: 2,
    durationLabel: "02 Nights / 03 Days",
    originalPrice: 13500,
    price: 9499,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Best Seller",
    badgeType: "bestseller",
    placesCovered: "Gateway of India » Marine Drive » CST » Film City » Bandra Bandstand",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Hotel", "Breakfast & Dinner", "Sightseeing", "Transport"],
    amenities: ["Wifi", "Breakfast", "Plasma TV", "Restaurant"],
    overview: "Experience the ultimate soul of the Maximum City! From British colonial architectural marvels to the glitz of Bollywood Film City and sunset walks along Queen's Necklace at Marine Drive.",
    itinerary: [
      { day: 1, title: "Colonial South Mumbai & Gateway of India", desc: "Arrival in Mumbai, check-in to your premium hotel. Afternoon visit to Gateway of India, heritage walk around Colaba, Rajabai Clock Tower, CST Terminus, and evening sunset stroll at Marine Drive." },
      { day: 2, title: "Elephanta Caves & Bollywood Studio Tour", desc: "Morning ferry ride to UNESCO World Heritage Elephanta Caves. Post-lunch guided walkthrough of Mumbai Bollywood Studio/Film City, visiting live sets and celebrity bungalows in Bandra." },
      { day: 3, title: "Siddhivinayak Temple & Departure", desc: "Morning blessings at Siddhivinayak Temple, street shopping at Linking Road or Crawford Market, tasting authentic Mumbai Pav Bhaji & Vada Pav before drop at Mumbai Airport/Railway Station." }
    ],
    inclusionsList: [
      "2 Nights accommodation in 3★ / 4★ hotel with daily breakfast & dinner",
      "Private AC Sedan/SUV for all transfers and city sightseeing",
      "Elephanta Caves ferry tickets & toy train ride",
      "Toll taxes, parking fees, driver allowances & fuel charges",
      "Dedicated Dev Tour and Travels 24/7 destination support"
    ],
    exclusionsList: [
      "Airfare / Train tickets to and from Mumbai",
      "Camera fees and personal shopping expenses",
      "Any monument entry charges not specified in inclusions"
    ]
  },
  {
    id: "pkg-2",
    title: "2 Days Express Mumbai Heritage & Marine Drive Tour",
    category: "mumbai",
    durationDays: 2,
    durationNights: 1,
    durationLabel: "01 Night / 02 Days",
    originalPrice: 9900,
    price: 6999,
    rating: 4.8,
    reviewsCount: 88,
    badge: "Weekend Special",
    badgeType: "regular",
    placesCovered: "Gateway of India » Elephanta Caves » Marine Drive » Chowpatty",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Hotel", "Breakfast & Dinner", "Sightseeing", "Transport"],
    amenities: ["Wifi", "Breakfast", "Plasma TV"],
    overview: "A crisp, curated weekend getaway designed for short stays. Covers South Mumbai's top historical landmarks, sea breeze promenades, and mouthwatering coastal cuisine.",
    itinerary: [
      { day: 1, title: "Historic Heritage & Queen's Necklace", desc: "Pickup from CST / Mumbai Airport. Tour of Gateway of India, Prince of Wales Museum, Mani Bhavan (Gandhi Museum), concluding with sunset and street food at Girgaum Chowpatty." },
      { day: 2, title: "Elephanta Rock Temples & Departure", desc: "Scenic boat ride from Apollo Bunder to Elephanta Caves island. Exploration of rock-cut Shiva sculptures. Afternoon drop-off for outbound journey." }
    ],
    inclusionsList: [
      "1 Night stay in comfortable boutique city hotel",
      "Daily breakfast & complimentary welcome drink",
      "Full sightseeing in AC cab with experienced chauffeur",
      "All interstate tolls, fuel and parking fees"
    ],
    exclusionsList: [
      "Any meals other than specified",
      "Monument entrance fees"
    ]
  },
  {
    id: "pkg-3",
    title: "Mumbai, Shirdi Sai Darshan & Trimbakeshwar Yatra",
    category: "pilgrimage",
    durationDays: 5,
    durationNights: 4,
    durationLabel: "04 Nights / 05 Days",
    originalPrice: 22000,
    price: 16800,
    rating: 4.95,
    reviewsCount: 215,
    badge: "Pilgrimage Favorite",
    badgeType: "bestseller",
    placesCovered: "Mumbai » Shirdi » Shani Shingnapur » Trimbakeshwar » Nashik",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Hotel", "Breakfast & Dinner", "Sightseeing", "Transport"],
    amenities: ["Wifi", "Breakfast", "Restaurant", "Accessibiliy"],
    overview: "Seek divine blessings at holy Sai Baba Samadhi Mandir in Shirdi, Lord Shiva Jyotirlinga in Trimbakeshwar, and Shani Shingnapur, with seamless comfort and VIP Darshan assistance.",
    itinerary: [
      { day: 1, title: "Mumbai Arrival & Drive to Shirdi", desc: "Warm welcome in Mumbai. Scenic drive via Kasara Ghats to Shirdi (240 km). Evening Aarti at Sai Baba Samadhi Mandir." },
      { day: 2, title: "Shirdi Darshan & Shani Shingnapur Excursion", desc: "Early morning Kakad Aarti / Darshan. Drive to Shani Shingnapur holy village where houses have no doors. Return to Shirdi." },
      { day: 3, title: "Shirdi to Nashik - Panchavati & Trimbakeshwar", desc: "Drive to Nashik. Visit sacred Trimbakeshwar Jyotirlinga, Sita Gufa, Kapaleshwar Temple, and Godavari river banks at Ramkund." },
      { day: 4, title: "Nashik to Mumbai & Siddhivinayak", desc: "Morning visit to Sula Vineyards or Muktidham temple, then scenic drive back to Mumbai. Visit Siddhivinayak Temple." },
      { day: 5, title: "Mumbai Sightseeing & Departure", desc: "Short tour of Gateway of India and Marine Drive followed by scheduled departure." }
    ],
    inclusionsList: [
      "4 Nights accommodation (2N Shirdi, 1N Nashik, 1N Mumbai)",
      "Daily Buffet Breakfast and Dinner at hotel",
      "Chauffeured AC Innova/Crysta throughout the circuit",
      "Special assistance for Shirdi VIP Darshan pass registration",
      "All driver charges, toll and interstate permits"
    ],
    exclusionsList: [
      "Special Pooja / VIP Pass direct Temple counter fees",
      "Lunch and personal expenditures"
    ]
  },
  {
    id: "pkg-4",
    title: "Mumbai & Lonavala Khandala Scenic Hill Escape",
    category: "nature",
    durationDays: 4,
    durationNights: 3,
    durationLabel: "03 Nights / 04 Days",
    originalPrice: 18500,
    price: 13999,
    rating: 4.85,
    reviewsCount: 110,
    badge: "Trending Getaway",
    badgeType: "regular",
    placesCovered: "Mumbai » Lonavala » Khandala » Karla Caves » Bhushi Dam",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Hotel", "Breakfast & Dinner", "Sightseeing", "Transport"],
    amenities: ["Wifi", "Breakfast", "Pool", "Restaurant"],
    overview: "Escape into the lush Sahyadri Western Ghats. Cascading waterfalls, ancient 2nd century BCE Buddhist rock caves, misty cliffs, and authentic Chikki tasting.",
    itinerary: [
      { day: 1, title: "Mumbai Sights & Drive to Lonavala", desc: "Morning sights in Mumbai, afternoon scenic drive over Mumbai-Pune Expressway to the hill station of Lonavala. Check-in to cliff-side resort." },
      { day: 2, title: "Lonavala & Khandala Sightseeing", desc: "Visit Tiger's Leap, Bhushi Dam waterfalls, Lion's Point, sunset viewpoint and Khandala valley." },
      { day: 3, title: "Karla Caves & Wax Museum", desc: "Explore ancient Karla & Bhaja rock-cut Buddhist caves, visit celebrity Wax Museum, evening leisure for shopping." },
      { day: 4, title: "Return to Mumbai & Departure", desc: "Scenic downhill drive back to Mumbai. Transfer to Airport/Station." }
    ],
    inclusionsList: [
      "3 Nights deluxe hotel stay (1N Mumbai, 2N Lonavala)",
      "Buffet Breakfast and Dinner daily",
      "Private AC vehicle for all transfers & excursions",
      "Toll charges on expressway and parking"
    ],
    exclusionsList: [
      "Water sports and adventure park rides",
      "Personal tips and phone calls"
    ]
  },
  {
    id: "pkg-5",
    title: "Mumbai to Goa Sun & Sand Coastal Odyssey",
    category: "beach",
    durationDays: 7,
    durationNights: 6,
    durationLabel: "06 Nights / 07 Days",
    originalPrice: 35000,
    price: 25999,
    rating: 4.9,
    reviewsCount: 175,
    badge: "Luxury Escape",
    badgeType: "luxury",
    placesCovered: "Mumbai » Alibaug » Ratnagiri Coastal Drive » North Goa » South Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Hotel", "Breakfast & Dinner", "Sightseeing", "Transport", "Air Tickets"],
    amenities: ["Wifi", "Breakfast", "Pool", "Beach", "Restaurant"],
    overview: "The most sought-after coastal trail of India! Start with Mumbai's vibrant energy, then soak in tropical Goan beaches, Portuguese architecture, sunset cruises, and beach shacks.",
    itinerary: [
      { day: 1, title: "Mumbai Arrival & City Exploration", desc: "Check-in at Mumbai. Sunset along Marine Drive, Colaba, and Gateway of India." },
      { day: 2, title: "Mumbai City Tour", desc: "Elephanta Caves, Siddhivinayak, Bandra Fort, Juhu Beach." },
      { day: 3, title: "Flight from Mumbai to Goa", desc: "Short flight to Goa (included). Check-in at North Goa luxury resort near Calangute/Baga. Relax at beach." },
      { day: 4, title: "North Goa Beaches & Fort Aguada", desc: "Visit Fort Aguada lighthouse, Anjuna beach, Vagator, and vibrant night markets." },
      { day: 5, title: "South Goa Heritage & Mandovi River Cruise", desc: "Basilica of Bom Jesus, Se Cathedral, Mangueshi temple, Miramar beach, and sunset catamaran cruise on Mandovi." },
      { day: 6, title: "Day at Leisure & Water Sports", desc: "Optional parasailing, jet skiing, banana rides, or Ayurvedic spa rejuvenation." },
      { day: 7, title: "Goa Departure", desc: "Transfer to Goa Airport for return journey." }
    ],
    inclusionsList: [
      "Domestic flight ticket Mumbai to Goa included",
      "6 Nights luxury resort accommodation (2N Mumbai, 4N Goa)",
      "Daily breakfast & dinner",
      "All transfers & sightseeing in AC private vehicle",
      "Mandovi River Cruise ticket"
    ],
    exclusionsList: [
      "Water sports tickets (paid on site)",
      "Beverages and club entrance tickets"
    ]
  },
  {
    id: "pkg-6",
    title: "Golden Triangle with Mumbai Express Tour",
    category: "heritage",
    durationDays: 8,
    durationNights: 7,
    durationLabel: "07 Nights / 08 Days",
    originalPrice: 42000,
    price: 31999,
    rating: 4.92,
    reviewsCount: 160,
    badge: "Heritage Classic",
    badgeType: "bestseller",
    placesCovered: "Delhi » Agra (Taj Mahal) » Jaipur (Pink City) » Mumbai",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Hotel", "Breakfast & Dinner", "Sightseeing", "Transport", "Air Tickets"],
    amenities: ["Wifi", "Breakfast", "Plasma TV", "Restaurant", "Fitness Center"],
    overview: "India's greatest historical circuit combined with the glamour of Mumbai. Witness the white marble wonder of Taj Mahal, forts of Rajasthan, monuments of Delhi, and Mumbai's sea front.",
    itinerary: [
      { day: 1, title: "Delhi Arrival & Sights", desc: "Welcome to Delhi. Visit India Gate, Qutub Minar, drive past President House." },
      { day: 2, title: "Delhi to Agra - Sunset at Taj", desc: "Expressway drive to Agra. Visit Agra Fort and sunset view of Taj Mahal from Mehtab Bagh." },
      { day: 3, title: "Sunrise at Taj Mahal & Drive to Jaipur", desc: "Breathtaking sunrise tour of Taj Mahal. Drive to Jaipur via Fatehpur Sikri ghost city." },
      { day: 4, title: "Jaipur Sightseeing", desc: "Amber Fort elephant/jeep ride, City Palace, Jantar Mantar, and Hawa Mahal photoshoot." },
      { day: 5, title: "Flight Jaipur to Mumbai", desc: "Flight to Mumbai. Check-in and evening walk at Marine Drive." },
      { day: 6, title: "Mumbai Historical Sites", desc: "Gateway of India, Elephanta Caves, Victoria Terminus, Colaba." },
      { day: 7, title: "Mumbai Cultural & Bollywood Tour", desc: "Siddhivinayak temple, Dhobi Ghat, Bandra Bandstand, Juhu." },
      { day: 8, title: "Departure from Mumbai", desc: "Transfer to Chhatrapati Shivaji Maharaj International Airport." }
    ],
    inclusionsList: [
      "Domestic air ticket Jaipur to Mumbai",
      "7 Nights 4★ hotel accommodation",
      "Daily breakfast & royal dinners",
      "Dedicated English/Hindi speaking guides at Taj Mahal & Amber Fort",
      "Chauffeured vehicle throughout"
    ],
    exclusionsList: [
      "International flights",
      "Monument entrance fees (optional fast-track passes)"
    ]
  },
  {
    id: "pkg-7",
    title: "Ashtavinayak 8 Ganesha Darshan from Mumbai",
    category: "pilgrimage",
    durationDays: 3,
    durationNights: 2,
    durationLabel: "02 Nights / 03 Days",
    originalPrice: 15500,
    price: 11200,
    rating: 4.96,
    reviewsCount: 310,
    badge: "Sacred Pilgrimage",
    badgeType: "regular",
    placesCovered: "Morgaon » Siddhatek » Theur » Lenyadri » Ozar » Pali » Mahad",
    image: "https://images.unsplash.com/photo-1542456459-ae5984b1f3f6?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Hotel", "Breakfast & Dinner", "Sightseeing", "Transport"],
    amenities: ["Wifi", "Breakfast", "Restaurant"],
    overview: "Complete the sacred Ashtavinayak Yatra covering all eight revered swayambhu (self-manifested) Ganpati temples in Maharashtra with comfortable vehicle and hotel stays.",
    itinerary: [
      { day: 1, title: "Mumbai to Varadvinayak (Mahad) & Ballaleshwar (Pali)", desc: "Departure from Mumbai. Darshan at Mahad and Pali temples, proceed towards Pune." },
      { day: 2, title: "Theur, Siddhatek & Morgaon Ganpati", desc: "Visit Chintamani (Theur), Siddhivinayak (Siddhatek), and Mayureshwar (Morgaon)." },
      { day: 3, title: "Lenyadri, Ozar & Mahaganpati (Ranjangaon)", desc: "Climb steps to Lenyadri hill caves temple, visit Vighnahar (Ozar), Mahaganpati (Ranjangaon), return to Mumbai." }
    ],
    inclusionsList: [
      "2 Nights hotel stay in Pune / Junnar circuit",
      "Pure vegetarian breakfast & dinner included",
      "AC Vehicle dedicated for the entire Ashtavinayak circuit",
      "All toll, parking, driver Bhatta"
    ],
    exclusionsList: [
      "Pooja thali and dakshina",
      "Doli / Porter charges at Lenyadri steps"
    ]
  },
  {
    id: "pkg-8",
    title: "Royal Rajasthan Grand Expedition from Mumbai",
    category: "heritage",
    durationDays: 7,
    durationNights: 6,
    durationLabel: "06 Nights / 07 Days",
    originalPrice: 38000,
    price: 28499,
    rating: 4.88,
    reviewsCount: 130,
    badge: "Royal Heritage",
    badgeType: "luxury",
    placesCovered: "Mumbai » Udaipur (Lake City) » Jodhpur » Pushkar » Jaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Hotel", "Breakfast & Dinner", "Sightseeing", "Transport", "Air Tickets"],
    amenities: ["Wifi", "Breakfast", "Pool", "Restaurant", "Fitness Center"],
    overview: "Royal palaces, majestic hilltop forts, camel rides and romantic boat rides on Lake Pichola. Direct flight package originating from Mumbai.",
    itinerary: [
      { day: 1, title: "Mumbai Flight to Udaipur", desc: "Arrival in Udaipur, City Palace tour and sunset boat ride on Lake Pichola." },
      { day: 2, title: "Udaipur Forts & Gardens", desc: "Saheliyon Ki Bari, Jagdish temple, vintage car museum." },
      { day: 3, title: "Udaipur to Jodhpur via Ranakpur", desc: "Visit stunning marble Jain temples of Ranakpur on way to the Blue City Jodhpur." },
      { day: 4, title: "Jodhpur to Jaipur via Pushkar", desc: "Mehrangarh Fort, Jaswant Thada, Holy Brahma Temple in Pushkar, drive to Jaipur." },
      { day: 5, title: "Jaipur City Tour", desc: "Amber Fort, Hawa Mahal, Jal Mahal, local handicraft bazaars." },
      { day: 6, title: "Cultural Village Chokhi Dhani", desc: "Explore Nahargarh Fort, authentic Rajasthani cultural dinner at Chokhi Dhani." },
      { day: 7, title: "Flight back to Mumbai", desc: "Fly back from Jaipur to Mumbai with royal memories." }
    ],
    inclusionsList: [
      "Domestic flights Mumbai - Udaipur & Jaipur - Mumbai",
      "6 Nights stay in heritage 4★ palaces and luxury hotels",
      "Buffet breakfast and dinner",
      "Private AC Chauffeur sedan/SUV for entire Rajasthan leg"
    ],
    exclusionsList: [
      "Monuments audio guides and entry passes",
      "Personal shopping"
    ]
  }
];

// App State
let currentFilteredTours = [...TOURS_DATA];
let selectedDuration = "all";
let selectedInclusions = [];
let searchQuery = "";
let currentSort = "popular";

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  initUI();
  renderPackages(currentFilteredTours);
});

function initUI() {
  // Duration Filter Buttons
  const durationBtns = document.querySelectorAll(".duration-pill-btn");
  durationBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      durationBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedDuration = btn.dataset.duration;
      applyFilters();
    });
  });

  // Inclusion Checkboxes
  const incCheckboxes = document.querySelectorAll(".inc-filter-checkbox");
  incCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      selectedInclusions = Array.from(incCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
      applyFilters();
    });
  });

  // Search Inputs
  const searchInputHero = document.getElementById("heroSearchInput");
  const heroSearchBtn = document.getElementById("heroSearchBtn");
  const durationSelectHero = document.getElementById("heroDurationSelect");

  if (heroSearchBtn && searchInputHero) {
    heroSearchBtn.addEventListener("click", () => {
      searchQuery = searchInputHero.value.trim().toLowerCase();
      if (durationSelectHero && durationSelectHero.value !== "all") {
        selectedDuration = durationSelectHero.value;
        // sync pills
        durationBtns.forEach(b => {
          b.classList.toggle("active", b.dataset.duration === selectedDuration);
        });
      }
      applyFilters();
      scrollToCatalog();
    });

    searchInputHero.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        heroSearchBtn.click();
      }
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById("sortPackagesSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      applySorting();
      renderPackages(currentFilteredTours);
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById("btnResetFilters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      selectedDuration = "all";
      selectedInclusions = [];
      searchQuery = "";
      if (searchInputHero) searchInputHero.value = "";
      if (durationSelectHero) durationSelectHero.value = "all";
      
      durationBtns.forEach(b => {
        b.classList.toggle("active", b.dataset.duration === "all");
      });
      incCheckboxes.forEach(c => c.checked = false);
      
      applyFilters();
    });
  }

  // Toggle Overview "More..." Button
  const toggleMoreBtn = document.getElementById("toggleMoreOverview");
  const expandableInfo = document.getElementById("expandableOverviewBox");
  if (toggleMoreBtn && expandableInfo) {
    toggleMoreBtn.addEventListener("click", () => {
      const isExpanded = expandableInfo.classList.toggle("active");
      toggleMoreBtn.innerHTML = isExpanded 
        ? `Read Less <i class="fa fa-angle-up"></i>` 
        : `Read More Information <i class="fa fa-angle-down"></i>`;
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question-btn");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(fi => fi.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById("mobileToggleBtn");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const drawerOverlay = document.getElementById("mobileDrawerOverlay");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");

  if (mobileToggle && mobileDrawer && drawerOverlay) {
    const openDrawer = () => {
      mobileDrawer.classList.add("open");
      drawerOverlay.classList.add("active");
    };
    const closeDrawer = () => {
      mobileDrawer.classList.remove("open");
      drawerOverlay.classList.remove("active");
    };

    mobileToggle.addEventListener("click", openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
    drawerOverlay.addEventListener("click", closeDrawer);
  }

  // Modals close triggers
  const modalBackdrops = document.querySelectorAll(".modal-backdrop");
  modalBackdrops.forEach(mb => {
    mb.addEventListener("click", (e) => {
      if (e.target === mb) closeModal(mb.id);
    });
  });

  // Booking Form Submission
  const bookingForm = document.getElementById("bookingEnquiryForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleBookingSubmit);
  }
}

// Filter Logic
function applyFilters() {
  currentFilteredTours = TOURS_DATA.filter(pkg => {
    // 1. Duration filter
    if (selectedDuration !== "all") {
      const days = pkg.durationDays;
      if (selectedDuration === "1-3" && (days < 1 || days > 3)) return false;
      if (selectedDuration === "4-6" && (days < 4 || days > 6)) return false;
      if (selectedDuration === "7-9" && (days < 7 || days > 9)) return false;
      if (selectedDuration === "10+" && days < 10) return false;
    }

    // 2. Inclusion filter
    if (selectedInclusions.length > 0) {
      const hasAll = selectedInclusions.every(inc => pkg.inclusions.includes(inc));
      if (!hasAll) return false;
    }

    // 3. Search Query
    if (searchQuery) {
      const textToSearch = `${pkg.title} ${pkg.placesCovered} ${pkg.overview}`.toLowerCase();
      if (!textToSearch.includes(searchQuery)) return false;
    }

    return true;
  });

  applySorting();
  renderPackages(currentFilteredTours);
}

// Sorting Logic
function applySorting() {
  if (currentSort === "price-low") {
    currentFilteredTours.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    currentFilteredTours.sort((a, b) => b.price - a.price);
  } else if (currentSort === "duration") {
    currentFilteredTours.sort((a, b) => a.durationDays - b.durationDays);
  } else {
    // Popular
    currentFilteredTours.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
  }
}

// Render Packages Cards
function renderPackages(list) {
  const container = document.getElementById("packagesListContainer");
  const countBadge = document.getElementById("resultsCountBadge");

  if (countBadge) {
    countBadge.innerHTML = `Showing <strong>${list.length}</strong> Mumbai Tour Packages`;
  }

  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="background:#fff; border-radius:16px; padding:48px 24px; text-align:center; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
        <i class="fa fa-compass" style="font-size:3rem; color:#ff9f1c; margin-bottom:14px;"></i>
        <h3 style="font-size:1.4rem; color:#0f172a; margin-bottom:8px;">No packages match your specific filters</h3>
        <p style="color:#64748b; font-size:0.95rem; margin-bottom:20px;">Try clearing some filters or searching for another destination.</p>
        <button class="btn-custom btn-primary-custom" onclick="document.getElementById('btnResetFilters').click()">
          <i class="fa fa-rotate-left"></i> Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(pkg => `
    <article class="package-card" id="${pkg.id}">
      <div class="card-media-wrap">
        <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
        <span class="badge-tag ${pkg.badgeType === 'bestseller' ? 'badge-bestseller' : pkg.badgeType === 'luxury' ? 'badge-luxury' : ''}">
          <i class="fa fa-award"></i> ${pkg.badge}
        </span>
      </div>

      <div class="card-details-wrap">
        <div>
          <div class="card-header-meta">
            <span class="card-duration">
              <i class="fa fa-clock"></i> ${pkg.durationLabel}
            </span>
            <span class="card-rating">
              <i class="fa fa-star"></i> ${pkg.rating} 
              <span style="color:#64748b; font-weight:normal;">(${pkg.reviewsCount} reviews)</span>
            </span>
          </div>

          <h3 class="card-title">
            <a href="javascript:void(0)" onclick="openItineraryModal('${pkg.id}')">${pkg.title}</a>
          </h3>

          <p class="card-routes">
            <strong>Places Covered:</strong> ${formatPlaces(pkg.placesCovered)}
          </p>
        </div>

        <div class="inclusions-icons-flex">
          ${pkg.inclusions.map(inc => `
            <span class="inc-icon-item" title="${inc}">
              <i class="${getInclusionIcon(inc)}"></i> ${inc}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="card-action-wrap">
        <span class="price-box-label">Starting From</span>
        <span class="strike-original-price">₹${pkg.originalPrice.toLocaleString('en-IN')}</span>
        <div class="main-price-figure">₹${pkg.price.toLocaleString('en-IN')}</div>
        <span class="price-sub-note">per person on twin sharing</span>

        <div class="card-action-btns-stack">
          <button class="btn-custom btn-primary-custom" onclick="openItineraryModal('${pkg.id}')">
            <i class="fa fa-file-text"></i> View Details
          </button>
          <button class="btn-custom btn-secondary-custom" onclick="openBookingModal('${pkg.id}')">
            <i class="fa fa-paper-plane"></i> Book / Enquire
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function formatPlaces(placesStr) {
  return placesStr.replace(/»/g, `<span class="route-arrow">»</span>`);
}

function getInclusionIcon(name) {
  switch (name) {
    case "Hotel": return "fa fa-hotel";
    case "Breakfast & Dinner": return "fa fa-utensils";
    case "Sightseeing": return "fa fa-camera";
    case "Transport": return "fa fa-car";
    case "Air Tickets": return "fa fa-plane";
    default: return "fa fa-check-circle";
  }
}

function scrollToCatalog() {
  const el = document.getElementById("packagesCatalogSection");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Modal Functions
function openItineraryModal(pkgId) {
  const pkg = TOURS_DATA.find(p => p.id === pkgId);
  if (!pkg) return;

  const modal = document.getElementById("itineraryDetailModal");
  const modalContent = document.getElementById("itineraryModalContent");

  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
      <div>
        <span class="card-duration" style="margin-bottom:8px;">${pkg.durationLabel}</span>
        <h2 style="font-size:1.5rem; color:#054a68; margin-top:6px;">${pkg.title}</h2>
        <p style="color:#64748b; font-size:0.9rem; margin-top:4px;">
          <strong>Route:</strong> ${formatPlaces(pkg.placesCovered)}
        </p>
      </div>
      <div style="text-align:right; flex-shrink:0;">
        <span style="font-size:0.75rem; color:#64748b; display:block;">Special Offer</span>
        <span style="font-size:1.6rem; font-weight:800; color:#054a68; display:block;">₹${pkg.price.toLocaleString('en-IN')}</span>
        <span style="font-size:0.75rem; color:#64748b;">per person</span>
      </div>
    </div>

    <!-- Modal Tabs -->
    <div class="modal-tabs-header">
      <button class="modal-tab-btn active" onclick="switchModalTab(event, 'tab-itinerary')">Day-Wise Itinerary</button>
      <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-inclusions')">Inclusions & Exclusions</button>
      <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-hotels')">Stay & Policies</button>
    </div>

    <!-- Tab 1: Itinerary -->
    <div id="tab-itinerary" class="modal-tab-pane" style="display:block;">
      <p style="color:#334155; font-size:0.925rem; margin-bottom:20px; line-height:1.6;">${pkg.overview}</p>
      <div class="itinerary-timeline">
        ${pkg.itinerary.map(item => `
          <div class="itinerary-day-box">
            <h5>Day ${item.day}: ${item.title}</h5>
            <p>${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Tab 2: Inclusions -->
    <div id="tab-inclusions" class="modal-tab-pane" style="display:none;">
      <div style="margin-bottom:20px;">
        <h4 style="color:#059669; font-size:1rem; margin-bottom:10px; display:flex; align-items:center; gap:8px;">
          <i class="fa fa-circle-check"></i> Package Inclusions
        </h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:8px;">
          ${pkg.inclusionsList.map(inc => `
            <li style="font-size:0.875rem; color:#334155; display:flex; align-items:flex-start; gap:8px;">
              <i class="fa fa-check" style="color:#059669; margin-top:3px;"></i> ${inc}
            </li>
          `).join('')}
        </ul>
      </div>

      <div>
        <h4 style="color:#e11d48; font-size:1rem; margin-bottom:10px; display:flex; align-items:center; gap:8px;">
          <i class="fa fa-circle-xmark"></i> Package Exclusions
        </h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:8px;">
          ${pkg.exclusionsList.map(exc => `
            <li style="font-size:0.875rem; color:#64748b; display:flex; align-items:flex-start; gap:8px;">
              <i class="fa fa-xmark" style="color:#e11d48; margin-top:3px;"></i> ${exc}
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <!-- Tab 3: Hotels & Policies -->
    <div id="tab-hotels" class="modal-tab-pane" style="display:none;">
      <h4 style="font-size:1rem; color:#054a68; margin-bottom:10px;">Accommodation Standards</h4>
      <p style="font-size:0.875rem; color:#475569; margin-bottom:14px;">
        Stay at hand-picked, hygienically certified 3-Star or 4-Star hotels with sanitized rooms, high-speed Wi-Fi, 24-hour room service, and complimentary buffet breakfast.
      </p>
      <div style="background:#f8fafc; padding:16px; border-radius:10px; border:1px solid #e2e8f0; font-size:0.85rem; color:#64748b; line-height:1.6;">
        <strong style="color:#0f172a; display:block; margin-bottom:6px;">Booking & Cancellation Terms:</strong>
        • 25% advance token payment to confirm your booking.<br>
        • 100% refund on cancellations requested at least 15 days prior to arrival.<br>
        • Flexible date change permitted up to 7 days before departure without cancellation penalty.
      </div>
    </div>

    <div style="margin-top:24px; padding-top:16px; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <button class="btn-custom btn-outline-custom" onclick="closeModal('itineraryDetailModal')">
        Close
      </button>
      <button class="btn-custom btn-secondary-custom" onclick="closeModal('itineraryDetailModal'); openBookingModal('${pkg.id}');">
        <i class="fa fa-paper-plane"></i> Book This Tour (₹${pkg.price.toLocaleString('en-IN')})
      </button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function switchModalTab(evt, tabId) {
  document.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".modal-tab-pane").forEach(p => p.style.display = "none");

  evt.currentTarget.classList.add("active");
  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.style.display = "block";
}

function openBookingModal(pkgId) {
  const modal = document.getElementById("bookingEnquiryModal");
  if (!modal) return;

  const pkgSelect = document.getElementById("enquiryPackageSelect");
  if (pkgSelect && pkgId) {
    pkgSelect.value = pkgId;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Booking form handler
function handleBookingSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const name = form.fullName.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const travelDate = form.travelDate.value;
  const travelers = form.travelers.value;
  const packageId = form.selectedPackage.value;
  const message = form.message.value.trim();

  const selectedPkg = TOURS_DATA.find(p => p.id === packageId);
  const pkgTitle = selectedPkg ? selectedPkg.title : "Custom Tour";

  // Construct WhatsApp dispatch URL for instant contact
  const waText = encodeURIComponent(
    `Hello Dev Tour and Travels! I am interested in booking:\n` +
    `*Package:* ${pkgTitle}\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Email:* ${email}\n` +
    `*Travel Date:* ${travelDate}\n` +
    `*Travelers:* ${travelers}\n` +
    `*Message:* ${message || "Please provide best quotation and itinerary details."}`
  );

  // Show success modal state
  const modalBody = document.getElementById("bookingModalBodyContent");
  if (modalBody) {
    modalBody.innerHTML = `
      <div style="text-align:center; padding:30px 10px;">
        <div style="width:64px; height:64px; background:#e6f7f5; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; color:#00a896; font-size:2rem; margin-bottom:16px;">
          <i class="fa fa-check"></i>
        </div>
        <h3 style="color:#054a68; font-size:1.4rem; margin-bottom:10px;">Thank You, ${name}!</h3>
        <p style="color:#475569; font-size:0.95rem; line-height:1.6; margin-bottom:20px;">
          Your inquiry for <strong>${pkgTitle}</strong> has been received.<br>
          Our senior Mumbai travel consultant will connect with you via call / WhatsApp within 15 minutes.
        </p>
        <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
          <a href="https://wa.me/919910049132?text=${waText}" target="_blank" class="btn-custom" style="background:#25d366; color:#fff;">
            <i class="fa-brands fa-whatsapp"></i> Chat Now on WhatsApp
          </a>
          <button class="btn-custom btn-primary-custom" onclick="closeModal('bookingEnquiryModal'); location.reload();">
            Done
          </button>
        </div>
      </div>
    `;
  }
}
