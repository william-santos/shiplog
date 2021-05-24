const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

// Hamburger Click
if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });
}

const links = document.querySelectorAll("#main-navigation li a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
