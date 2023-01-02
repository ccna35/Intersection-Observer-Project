const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.5 }
);

const callback = (e) => {
  console.log(e.target);
};

cards.forEach((card) => observer.observe(card));

const dropdownBtns = document.querySelectorAll(".dropdown");

dropdownBtns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.querySelector("ul").classList.add("show");
  });
  btn.addEventListener("mouseleave", () => {
    btn.querySelector("ul").classList.remove("show");
  });
});
