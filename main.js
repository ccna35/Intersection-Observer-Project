// Code to handle the intersection observer of the posts
// const cards = document.querySelectorAll(".card");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// const callback = (e) => {
//   console.log(e.target);
// };

// cards.forEach((card) => observer.observe(card));

// Code to handle the dropdown menus
const clickableDropdownBtns = document.querySelectorAll(".clickableDropdown");

clickableDropdownBtns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.querySelector("ul").classList.add("show");
  });
  btn.addEventListener("mouseleave", () => {
    btn.querySelector("ul").classList.remove("show");
  });
});
