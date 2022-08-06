const coursl = document.querySelector(".coursl");
const navbarMov = document.querySelector(".navbar__list");
const blur = document.querySelector(".blur");

coursl.addEventListener("click", () => {
  coursl.classList.toggle("coursl-active");
  navbarMov.classList.toggle("navbar__list--mov");
  blur.classList.toggle("blur-active");
});

// slider

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

slides.forEach(
  (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
);

setInterval(function () {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
}, 4000);

/////////////////// my work
const myWorkListItem = document.querySelectorAll(".myworks--list li");
const workCard = document.querySelectorAll(".work__card");
const learnMore = document.querySelectorAll(".popup");
const cards = document.querySelectorAll(".work__card");
const webs = document.querySelectorAll(".website");
const apps = document.querySelectorAll(".app");

workCard.forEach((card, i) =>
  card.addEventListener("mouseover", function () {
    learnMore[i].style.height = "100%";
    learnMore[i].style.opacity = "100%";
  })
);
workCard.forEach((card, i) =>
  card.addEventListener("mouseout", function () {
    learnMore[i].style.height = "0%";
    learnMore[i].style.opacity = "0%";
  })
);

myWorkListItem.forEach((item) =>
  item.addEventListener("click", function () {
    myWorkListItem.forEach((box) => box.classList.remove("active"));
    item.classList.add("active");
    if (item.id === "all") {
      cards.forEach((card) => card.classList.remove("notShow"));
    }
    if (item.id === "web") {
      cards.forEach((card) => card.classList.remove("notShow"));
      apps.forEach((web) => web.classList.add("notShow"));
    }
    if (item.id === "app") {
      cards.forEach((card) => card.classList.remove("notShow"));
      webs.forEach((web) => web.classList.add("notShow"));
    }
  })
);

// observer sections
const views = document.querySelectorAll(".section");
const links = document.querySelectorAll(".navbar__list--item");
const linksA = document.querySelectorAll(".navbar__list--item a");

const navbar = document.querySelector(".navbar");

const coords0 = views[0].getBoundingClientRect();
const coords1 = views[1].getBoundingClientRect();
const coords2 = views[2].getBoundingClientRect();
const coords3 = views[3].getBoundingClientRect();

console.log(-coords0.top);

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > coords0.top && window.scrollY < coords0.bottom) {
    console.log("yes");
    links.forEach((link) => link.classList.remove("active__link"));
    linksA[0].classList.add("active__link");
  }

  if (window.scrollY > coords1.top && window.scrollY < coords1.bottom) {
    console.log("yes");
    linksA.forEach((link) => link.classList.remove("active__link"));
    linksA[1].classList.add("active__link");
  }
  if (window.scrollY > coords2.top && window.scrollY < coords2.bottom) {
    console.log("yes");
    linksA.forEach((link) => link.classList.remove("active__link"));
    linksA[2].classList.add("active__link");
  }
  if (window.scrollY > coords3.top && window.scrollY < coords3.bottom) {
    console.log("yes");
    linksA.forEach((link) => link.classList.remove("active__link"));
    linksA[3].classList.add("active__link");
  }
});

// sticky navigation
const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.1,
});
observer.observe(views[0]);

// smooth scroll

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.dataset.tab;
    const scrollSection = document.querySelector(`#view--${id}`);
    console.log(scrollSection);
    scrollSection.scrollIntoView({ behavior: "smooth" });
    coursl.classList.toggle("coursl-active");
    navbarMov.classList.toggle("navbar__list--mov");
    blur.classList.toggle("blur-active");
  });
});
