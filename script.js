// document.getElementById('toggle-button').addEventListener('click', function() {
//     var navbarLinks = document.getElementById('navbar-links');
//     if (navbarLinks.classList.contains('active')) {
//         navbarLinks.classList.remove('active');
//     } else {
//         navbarLinks.classList.add('active');
//     }
// });

const navLinks = document.querySelectorAll(".navbar-nav .custom-link");
const cardCategories = document.querySelectorAll(".card-category");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const category = this.id.replace("-favourites", "-cards");
    cardCategories.forEach((cards) => {
      if (cards.id === category) {
        cards.style.display = "flex";
      } else {
        cards.style.display = "none";
      }
    });
  });
});

const navSelect = document.getElementById("navSelect");
navSelect.addEventListener("change", function () {
  const selectedCategory = this.value;
  cardCategories.forEach((cards) => {
    if (cards.id === selectedCategory) {
      cards.style.display = "flex";
    } else {
      cards.style.display = "none";
    }
  });
});
