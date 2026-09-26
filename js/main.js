tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#722C39", // Deep maroon/burgundy
          secondary: "#C6555B",
          light: "#F8F7FB", // Very light #3f3f3f for placeholders/bg areas
          danger: "#FF0000",
          success: "#76C457",
          accent: "#DB258F", // Pink/rose for accents and secondary text
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
