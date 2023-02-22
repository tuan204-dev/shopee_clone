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
const categoryContent = category.querySelector('.category-content');
const categoryList = category.querySelector('.category-list');
const categoryItem = categoryList.querySelector('.category-item');
const nextBtn = category.querySelector('.category-next-btn');
const prevBtn = category.querySelector('.category-prev-btn');
const listWidth = categoryList.children.length * categoryItem.clientWidth;
console.log(listWidth);


nextBtn.addEventListener('click', () => {
  categoryList.scrollLeft += categoryItem.clientWidth * 5;
  setTimeout(() => {
    if(categoryList.scrollLeft !== 0) {
      prevBtn.style = `visibility: visible;`
    }

    if((listWidth - Math.round(categoryList.scrollLeft)) === categoryList.clientWidth) {
      nextBtn.style = `visibility: hidden;`;
    }
  }, 400)
});

prevBtn.addEventListener('click', () => {
  categoryList.scrollLeft -= categoryItem.clientWidth * 5;
  setTimeout(() => {
    if(categoryList.scrollLeft === 0) {
      prevBtn.style = `visibility: hidden;`
    }

    if((listWidth - Math.round(categoryList.scrollLeft)) !== categoryList.clientWidth) {
      nextBtn.style = `visibility: visible;`;
    }
  }, 400)
})

// Sale
const sale = document.querySelector('.sale-section');
const saleContent = sale.querySelector('.sale-content');
const saleList = sale.querySelector('.sale-list');
const saleItem = saleList.querySelector('.sale-item');
const saleNextBtn = sale.querySelector('.sale-next-btn');
const salePrevBtn = sale.querySelector('.sale-prev-btn');
const saleListWidth = saleList.children.length * saleItem.clientWidth;
console.log(saleListWidth);


saleNextBtn.addEventListener('click', () => {
  saleList.scrollLeft += saleItem.clientWidth * 5;
  setTimeout(() => {
    if(saleList.scrollLeft !== 0) {
      salePrevBtn.style = `visibility: visible;`
    }

    if((saleListWidth - Math.round(saleList.scrollLeft)) === saleList.clientWidth) {
      saleNextBtn.style = `visibility: hidden;`;
    }
  }, 400)
});

salePrevBtn.addEventListener('click', () => {
  saleList.scrollLeft -= saleItem.clientWidth * 5;
  setTimeout(() => {
    if(saleList.scrollLeft === 0) {
      salePrevBtn.style = `visibility: hidden;`
    }

    if((saleListWidth - Math.round(saleList.scrollLeft)) !== saleList.clientWidth) {
      saleNextBtn.style = `visibility: visible;`;
    }
  }, 400)
})
  

