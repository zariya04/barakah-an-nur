// Product data
const products = {
  "aurora-corner-sofa": {
    name: "Modern Minimalist Cabinets",
    mainImage: "images/4.jpeg",
    images: [
      { src: "images/4.jpeg", label: "Cabinet - 1" },
      { src: "images/8.jpeg", label: "Cabinet - 2" },
      { src: "images/9.jpeg", label: "Cabinet - 3" },
      { src: "images/13.jpeg", label: "Cabinet - 4" },
    ],
  },
  "zenith-dining-table": {
    name: "Natural Wood-Grain Cabinets",
    mainImage: "images/8.jpeg",
    images: [
      { src: "images/8.jpeg", label: "Cabinet - 1" },
      { src: "images/9.jpeg", label: "Cabinet - 2" },
      { src: "images/13.jpeg", label: "Cabinet - 3" },
      { src: "images/17.jpeg", label: "Cabinet - 4" },
    ],
  },
  "luxe-bed-frame": {
    name: "Contemporary Matte Cabinets",
    mainImage: "images/9.jpeg",
    images: [
      { src: "images/9.jpeg", label: "Cabinet - 1" },
      { src: "images/13.jpeg", label: "Cabinet - 2" },
      { src: "images/17.jpeg", label: "Cabinet - 3" },
      { src: "images/18.jpeg", label: "Cabinet - 4" },
    ],
  },
  "tundra-coffee-table": {
    name: "Elite Showcase Cabinets",
    mainImage: "images/13.jpeg",
    images: [
      { src: "images/13.jpeg", label: "Cabinet - 1" },
      { src: "images/17.jpeg", label: "Cabinet - 2" },
      { src: "images/18.jpeg", label: "Cabinet - 3" },
      { src: "images/19.jpeg", label: "Cabinet - 4" },
    ],
  },
  "tundra-coffee-table-2": {
    name: "Rustic Ash L-Shape Kitchen",
    mainImage: "images/17.jpeg",
    images: [
      { src: "images/17.jpeg", label: "Cabinet - 1" },
      { src: "images/18.jpeg", label: "Cabinet - 2" },
      { src: "images/19.jpeg", label: "Cabinet - 3" },
      { src: "images/20.jpeg", label: "Cabinet - 4" },
    ],
  },
  "tundra-coffee-table-3": {
    name: "Glossy Monochrome Kitchen",
    mainImage: "images/18.jpeg",
    images: [
      { src: "images/18.jpeg", label: "Cabinet - 1" },
      { src: "images/19.jpeg", label: "Cabinet - 2" },
      { src: "images/20.jpeg", label: "Cabinet - 3" },
      { src: "images/24.jpeg", label: "Cabinet - 4" },
    ],
  },
    "tundra-coffee-table-4": {
    name: "Slate & Timber L-Suite Kitchen",
    mainImage: "images/1.jpeg",
    images: [
      { src: "images/1.jpeg", label: "Cabinet - 1" },
      { src: "images/2.jpeg", label: "Cabinet - 2" },
      { src: "images/3.jpeg", label: "Cabinet - 3" },
      { src: "images/45.jpeg", label: "Cabinet - 4" },
    ],
  },
    "tundra-coffee-table-5": {
    name: "Mediterranean Olive Ensemble Kitchen",
    mainImage: "images/5.jpeg",
    images: [
      { src: "images/5.jpeg", label: "Cabinet - 1" },
      { src: "images/6.jpeg", label: "Cabinet - 2" },
      { src: "images/7.jpeg", label: "Cabinet - 3" },
      { src: "images/46.jpeg", label: "Cabinet - 4" },
    ],
  },
};

// WhatsApp number - UPDATE THIS WITH YOUR ACTUAL WHATSAPP NUMBER
// Format: country code + number without + or spaces (e.g., 1234567890 for US, 6281234567890 for Indonesia)
const whatsappNumber = "60183885964";

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Load product details if on product detail page
  if (window.location.pathname.includes("product-detail.html")) {
    loadProductDetails();
  }
});

// Open product detail page
function openProductDetail(productId) {
  // Store product ID in sessionStorage
  sessionStorage.setItem("selectedProduct", productId);
  // Navigate to product detail page
  window.location.href = "product-detail.html";
}

// Load product details on product detail page
function loadProductDetails() {
  const productId =
    sessionStorage.getItem("selectedProduct") || "aurora-corner-sofa";
  const product = products[productId];

  if (!product) {
    console.error("Product not found:", productId);
    return;
  }

  // Update product name
  const productNameEl = document.getElementById("productName");
  if (productNameEl) {
    productNameEl.textContent = product.name;
  }


  // Update main image
  const mainImageSrc = document.getElementById("mainImageSrc");
  const mainImageLabel = document.getElementById("mainImageLabel");
  if (mainImageSrc) {
    mainImageSrc.src = product.mainImage;
    mainImageSrc.alt = product.name;
  }
  if (mainImageLabel) {
    mainImageLabel.textContent = product.images[0].label;
  }

  // Update thumbnails
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  if (thumbnailContainer && product.images.length > 0) {
    thumbnailContainer.innerHTML = "";
    product.images.forEach((image, index) => {
      const thumbnail = document.createElement("div");
      thumbnail.className = `thumbnail cursor-pointer border-2 ${
        index === 0 ? "border-blue-500" : "border-transparent"
      } rounded overflow-hidden hover:border-gray-300`;
      thumbnail.onclick = () => changeMainImage(image.src, image.label, index);

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.label;
      img.className = "w-full h-20 object-cover";

      const label = document.createElement("p");
      label.className = "text-xs text-center p-1 text-gray-600";
      label.textContent = image.label;

      thumbnail.appendChild(img);
      thumbnail.appendChild(label);
      thumbnailContainer.appendChild(thumbnail);
    });
  }

}

// Change main image
function changeMainImage(src, label, index = 0) {
  const mainImageSrc = document.getElementById("mainImageSrc");
  const mainImageLabel = document.getElementById("mainImageLabel");

  if (mainImageSrc) {
    mainImageSrc.src = src;
  }
  if (mainImageLabel) {
    mainImageLabel.textContent = label;
  }

  // Update thumbnail borders
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.remove("border-transparent");
      thumb.classList.add("border-blue-500");
    } else {
      thumb.classList.remove("border-blue-500");
      thumb.classList.add("border-transparent");
    }
  });
}

// Order via WhatsApp
function orderViaWhatsApp() {
  const productId =
    sessionStorage.getItem("selectedProduct") || "aurora-corner-sofa";
  const product = products[productId];

  if (!product) {
    console.error("Product not found:", productId);
    return;
  }

  // Create WhatsApp message
  const message = encodeURIComponent(
    `Hello, I would like to order:\n\n` +
      `Product: ${product.name}\n\n` +
      `Please confirm shipping and payment details.`
  );

  // Open WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(whatsappUrl, "_blank");
}

// Generic WhatsApp contact function
function contactViaWhatsApp(
  message = "Hello, I would like to inquire about your furniture collections."
) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}
