const searchForm = document.querySelector('.search-form');
const searchInput = searchForm.querySelector('.form-control');
const searchSuggestion = searchForm.querySelector('.search-suggestion');


searchInput.addEventListener('focus', () => {
  searchSuggestion.setAttribute('style', `display: block;`)
});

searchInput.addEventListener('blur', () => {
  searchSuggestion.removeAttribute('style');
});
