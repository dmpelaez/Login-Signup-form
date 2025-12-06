document.querySelector('.js-about-me')
.addEventListener('click', () => {
  const links =  document.querySelector('.links');

  links.classList.toggle("navLinks");
})