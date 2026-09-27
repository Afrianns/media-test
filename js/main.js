tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#722C39",
          secondary: "#C6555B",
          light: "#F8F7FB", 
          danger: "#FF0000",
          success: "#76C457",
          accent: "#DB258F",
        },
      },
      fontFamily: {
        heading: ["Cherry Bomb One", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
};

// interaktif

lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("shadow-md");
    navbar.classList.remove("py-4");
    navbar.classList.add("py-2");
  } else {
    navbar.classList.remove("shadow-md");
    navbar.classList.remove("py-2");
    navbar.classList.add("py-4");
  }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu on link click
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Accordion Logic
const accordionItems = document.querySelectorAll(".accordion-item");

// Open first item by default
if (accordionItems.length > 0) {
  accordionItems[0].classList.add("active");
}

accordionItems.forEach((item) => {
  const button = item.querySelector("button");
  button.addEventListener("click", () => {
    // Check if currently active
    const isActive = item.classList.contains("active");

    // Close all items
    accordionItems.forEach((i) => i.classList.remove("active"));

    // If it wasn't active before, open it
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// kontak validasi
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successBanner = document.getElementById("successBanner");

  const inputs = {
    nama: {
      el: document.getElementById("nama"),
      errorEl: document.getElementById("namaError"),
      validate: (val) => val.trim().length > 0
    },
    email: {
      el: document.getElementById("email"),
      errorEl: document.getElementById("emailError"),
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
    },
    pesan: {
      el: document.getElementById("pesan"),
      errorEl: document.getElementById("pesanError"),
      validate: (val) => val.trim().length > 0
    }
  };

  function toggleError(inputObj, isInvalid) {
    if (isInvalid) {
      inputObj.errorEl.classList.remove("hidden");
      inputObj.el.classList.add("border-red-500");
      inputObj.el.classList.remove("border-brand/20", "focus:border-brand-accent");
    } else {
      inputObj.errorEl.classList.add("hidden");
      inputObj.el.classList.remove("border-red-500");
      inputObj.el.classList.add("border-brand/20", "focus:border-brand-accent");
    }
  }

  Object.keys(inputs).forEach(key => {
    const field = inputs[key];
    field.el.addEventListener("input", () => {
      const isValid = field.validate(field.el.value);
      toggleError(field, !isValid);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isFormValid = true;

    // Check all fields
    Object.keys(inputs).forEach(key => {
      const field = inputs[key];
      const isValid = field.validate(field.el.value);
      
      toggleError(field, !isValid);
      if (!isValid) isFormValid = false;
    });

    if (isFormValid) {
      // Hide form elements and display success banner
      form.reset();
      successBanner.classList.remove("hidden");
      
      // Optional: Hide success banner after 5 seconds
      setTimeout(() => {
        successBanner.classList.add("hidden");
      }, 5000);
    } else {
      successBanner.classList.add("hidden");
    }
  });
});
