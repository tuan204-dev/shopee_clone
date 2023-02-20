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

// Category
const category = document.querySelector('.category-section');
const categoryList = category.querySelector('.category-list');
const nextBtn = category.querySelector('.catagory-next-btn');
const prevBtn = category.querySelector('.catagory-prev-btn');
nextBtn.onclick = () => {
  categoryList.setAttribute('style', `transform: translateX(-${categoryList.clientWidth - 1200}px)`);
  nextBtn.style = "visibility: hidden;";
  prevBtn.style = "visibility: visible;";
}
prevBtn.onclick = () => {
  categoryList.removeAttribute('style');
  nextBtn.style = "visibility: visible;";
  prevBtn.style = "visibility: hidden;";
}

