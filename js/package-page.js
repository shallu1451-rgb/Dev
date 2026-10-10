/* ===================================================================
   DEV TOUR AND TRAVELS - INDIVIDUAL PACKAGE PAGE JAVASCRIPT
   Handles:
   - Mobile Drawer Navigation
   - Dedicated Package Booking Inquiry with WhatsApp Dispatch
   - FAQ Accordion
   - Smooth Scroll to Booking Form
   =================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Drawer Toggle
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

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question-btn");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(fi => fi.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    }
  });

  // Dedicated Package Booking Form Handler
  const pkgForm = document.getElementById("packageBookingForm");
  if (pkgForm) {
    pkgForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const pkgTitle = form.dataset.pkgTitle || document.title;
      const name = form.fullName.value.trim();
      const phone = form.phone.value.trim();
      const email = form.email.value.trim();
      const travelDate = form.travelDate.value;
      const travelers = form.travelers.value;
      const hotelCategory = form.hotelCategory ? form.hotelCategory.value : "Standard";
      const message = form.message ? form.message.value.trim() : "";

      // Construct WhatsApp dispatch text
      const waText = encodeURIComponent(
        `Hello Dev Tour and Travels! I want to book this package:\n` +
        `*Package:* ${pkgTitle}\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Email:* ${email}\n` +
        `*Date:* ${travelDate}\n` +
        `*Travelers:* ${travelers}\n` +
        `*Hotel:* ${hotelCategory}\n` +
        `*Message:* ${message || "Please provide final quotation and availability."}`
      );

      // Render success message inside sidebar container
      const container = document.getElementById("packageBookingCardBody");
      if (container) {
        container.innerHTML = `
          <div style="text-align:center; padding:24px 8px;">
            <div style="width:60px; height:60px; background:#e6f7f5; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; color:#00a896; font-size:1.8rem; margin-bottom:14px;">
              <i class="fa fa-check"></i>
            </div>
            <h4 style="color:#054a68; font-size:1.25rem; margin-bottom:8px;">Booking Inquiry Sent!</h4>
            <p style="color:#475569; font-size:0.875rem; line-height:1.6; margin-bottom:20px;">
              Thank you, <strong>${name}</strong>. Our Mumbai travel manager will review your dates (<strong>${travelDate}</strong>) and contact you within 15 minutes.
            </p>
            <div style="display:flex; flex-direction:column; gap:10px;">
              <a href="https://wa.me/919910049132?text=${waText}" target="_blank" class="btn-custom" style="background:#25d366; color:#fff; width:100%;">
                <i class="fa-brands fa-whatsapp"></i> Chat Now on WhatsApp
              </a>
              <button class="btn-custom btn-outline-custom" onclick="location.reload()" style="width:100%;">
                Submit Another Request
              </button>
            </div>
          </div>
        `;
      }
    });
  }
});

// Smooth scroll to booking form helper
function scrollToBookingForm() {
  const formCard = document.getElementById("packageBookingSidebar");
  if (formCard) {
    formCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
