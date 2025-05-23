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
const slides = [
  {
    image: "./images/portfolio-1.png",
    title: "— ТОО «АгроТрейд»",
    text: "“Построили ангар 1200 м² в Шымкенте — строго по сроку, без переплат. Всё как обещали”",
    area: "1300 кв м",
    type: "Складское помещение",
  },
  {
    image: "./images/portfolio-2.png",
    title: "— ТОО «KazAgro»",
    text: "“Быстро, качественно и по договору. Отличная команда”",
    area: "950 кв м",
    type: "Производственный цех",
  },
  {
    image: "./images/portfolio-3.png",
    title: "— ИП «Altyn Dan»",
    text: "“Заказали склад в Астане. Всё было на высшем уровне. Спасибо!”",
    area: "1100 кв м",
    type: "Складское помещение",
  },
];

let currentIndex = 0;
const imageEl = document.querySelector(".porfolio__content-portfolio-image");
const titleEl = document.querySelector(".portfolio__content-info-title");
const textEl = document.querySelector(".portfolio__content-info-text");
const areaEl = document.querySelectorAll(".portfolio__content-info-type p")[0];
const typeEl = document.querySelectorAll(".portfolio__content-info-type p")[1];
const dots = document.querySelectorAll(".portfolio__carousel-add-button");
const contentBox = document.querySelector(".portfolio__content");

function updateSlide(index) {
  const slide = slides[index];
  imageEl.src = slide.image;
  titleEl.textContent = slide.title;
  textEl.textContent = slide.text;
  areaEl.textContent = slide.area;
  typeEl.textContent = slide.type;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  contentBox.classList.add("animate");
  setTimeout(() => contentBox.classList.remove("animate"), 100);
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlide(currentIndex);
  });
});

updateSlide(currentIndex);

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

Inputmask("+7 999 999 99 99").mask("#phoneInput");

/*
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
}, 7000); // Auto change every 7 seconds
*/
