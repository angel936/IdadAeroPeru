// /* mostrar menú */

const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

// Mostrar submenú en mobile por click
const subItems = document.querySelectorAll('.dropdown__subitem');

subItems.forEach(item => {
  const trigger = item.querySelector('.dropdown__add');

  if (trigger) {
    trigger.addEventListener('click', () => {
      const submenu = item.querySelector('.dropdown__submenu');
      submenu.classList.toggle('show-submenu');
    });
  }
});

// uso de los clic
trigger.addEventListener('click', () => {
  // Cierra todos los submenús abiertos
  subItems.forEach(other => {
    const otherSubmenu = other.querySelector('.dropdown__submenu');
    if (otherSubmenu && otherSubmenu !== submenu) {
      otherSubmenu.classList.remove('show-submenu');
    }
  });

  // Alterna el actual
  submenu.classList.toggle('show-submenu');
});