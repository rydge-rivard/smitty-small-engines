const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

let bike = document.querySelector(".bike");
window.addEventListener("scroll", function () {
  let value = window.scrollY * 0.1;
  bike.style.transform = `translateX(${
    -100 + value * 6
  }px) rotate(-${value}deg)`;
});
