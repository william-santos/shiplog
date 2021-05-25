const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

// Hamburger Click
if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.classList.add('is-open');
    } else {
      menu.classList.add('hidden');
      menu.classList.remove('is-open');
    }
  });
}

const links = document.querySelectorAll("#main-navigation li a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();

  if (menu.classList.contains('is-open')) {
    menu.classList.add('hidden');
    menu.classList.remove('is-open');
  }

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
