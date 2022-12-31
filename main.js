const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        console.log(entry);
      } else {
        entry.target.classList.remove("show");
      }
    });
    // entries.forEach((entry) => entry.target.classList.add("show"));
    //   console.log(entries);
  },
  { threshold: 0.5 }
);

// observer.observe(cards[2]);

const callback = (e) => {
  console.log(e.target);
};

cards.forEach((card) => observer.observe(card));
// cards.forEach((card) => card.addEventListener("click", callback));
