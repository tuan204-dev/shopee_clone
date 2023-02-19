const searchForm = document.querySelector('.search-form');
const searchInput = searchForm.querySelector('.form-control');
const searchSuggestion = searchForm.querySelector('.search-suggestion');


searchInput.addEventListener('focus', () => {
  searchSuggestion.setAttribute('style', `display: block;`)
});

searchInput.addEventListener('blur', () => {
  searchSuggestion.removeAttribute('style');
});



// Slider

$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    infinite: true,
    arrow: false,
    prevArrow: `<div class="slider-arrow slider-prev">
                  <i class="fa-solid fa-angle-left"></i>
                </div>`,
    nextArrow: `<div class="slider-arrow slider-next">
                  <i class="fa-solid fa-angle-right"></i>
                </div>`,
    dots: true,
  });
});