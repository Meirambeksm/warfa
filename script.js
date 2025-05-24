// burger menu
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("header__menu--open");
  burger.classList.toggle("header__burger--active");
});

document.querySelectorAll(".header__menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("header__menu--open");
    burger.classList.remove("header__burger--active");
  });
});

// portfolio carousel
const slides = document.querySelectorAll(".portfolio__content");
const slideTrack = document.querySelector(".portfolio__slides");
const dots = document.querySelectorAll(".portfolio__carousel-add-button");
let currentIndex = 0;

function updateSliderPosition() {
  slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSliderPosition();
  });
});

updateSliderPosition();

// FAQ accordion
const faqItems = document.querySelectorAll(".faq__accordion-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq__button");

  button.addEventListener("click", () => {
    faqItems.forEach((el) => {
      if (el !== item) {
        el.classList.remove("current");
      }
    });

    item.classList.toggle("current");
  });
});

// Modal window
const openBtns = document.querySelectorAll(".modal-btn");
const closeBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modal");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

/* Gallery*/
const openGalleryBtn = document.getElementById("openGalleryBtn");
const galleryModal = document.getElementById("gallery");
const closeModal = document.getElementById("gallery-close-button");
const gallerySlides = document.getElementById("slides");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.getElementById("gallery-prevBtn");
const nextBtn = document.getElementById("gallery-nextBtn");

let galleryCurrentIndex = 0;

function updateCarousel() {
  gallerySlides.style.transform = `translateX(-${galleryCurrentIndex * 100}%)`;
  thumbnails.forEach((thumb) => thumb.classList.remove("active-current"));
  thumbnails[galleryCurrentIndex].classList.add("active-current");
}

openGalleryBtn.onclick = () => {
  galleryModal.style.display = "flex";
  updateCarousel();
};

closeModal.onclick = () => {
  galleryModal.style.display = "none";
};

prevBtn.onclick = () => {
  galleryCurrentIndex =
    (galleryCurrentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateCarousel();
};

nextBtn.onclick = () => {
  galleryCurrentIndex = (galleryCurrentIndex + 1) % thumbnails.length;
  updateCarousel();
};

thumbnails.forEach((thumb) => {
  thumb.onclick = () => {
    galleryCurrentIndex = parseInt(thumb.dataset.index);
    updateCarousel();
  };
});

// File upload:
const fileInput = document.getElementById("fileInput");
const formFileInput = document.getElementById("formFileInput");
const fileNameDisplay = document.getElementById("fileNameDisplay");
const formFileNameDisplay = document.getElementById("formFileNameDisplay");
const clearButton = document.getElementById("clearFileButton");
const formClearButton = document.getElementById("formClearFileButton");

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    const fileNames = Array.from(fileInput.files)
      .map((file) => file.name)
      .join(", ");

    fileNameDisplay.textContent = fileNames;
    fileNameDisplay.style.display = "flex";
    clearButton.style.display = "inline-block";
  } else {
    fileNameDisplay.style.display = "none";
    clearButton.style.display = "none";
  }
});

clearButton.addEventListener("click", function () {
  fileInput.value = "";
  fileNameDisplay.textContent = "";
  fileNameDisplay.style.display = "none";
  clearButton.style.display = "none";
});

formFileInput.addEventListener("change", function () {
  if (formFileInput.files.length > 0) {
    const fileNames = Array.from(formFileInput.files)
      .map((file) => file.name)
      .join(", ");

    formFileNameDisplay.textContent = fileNames;
    formFileNameDisplay.style.display = "flex";
    formClearButton.style.display = "inline-block";
  } else {
    formFileNameDisplay.style.display = "none";
    formClearButton.style.display = "none";
  }
});

formClearButton.addEventListener("click", function () {
  formFileInput.value = "";
  formFileNameDisplay.textContent = "";
  formFileNameDisplay.style.display = "none";
  formClearButton.style.display = "none";
});

// Mask
Inputmask("+7 999 999 99 99").mask("#phoneInput");

/*
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
}, 7000); // Auto change every 7 seconds
*/
