const bars = document.querySelector('.bars');

bars.addEventListener('click', () => {
  const ulNav = document.querySelector('.ulNav');
  ulNav.classList.toggle('active');

})