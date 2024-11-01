const mobile_nav = document.querySelector(".mobile-nav-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});


const sectioncar = document.querySelector(".section-main");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(sectioncar);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper2 = new Swiper('.testimonial-slider', {
  // Optional parameters
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

});
