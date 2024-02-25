const app = (() => {
   let body;
   let menu;
   let menuItems;

   const init = () => {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav-list__item');

      applyListeners();
   }

   const applyListeners = () => {

      menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
   }

   const toggleClass = (element, stringClass) => {
      if (element.classList.contains(stringClass))
         element.classList.remove(stringClass);
      else
         element.classList.add(stringClass);
   }

   init();
})();


// эффект свечения текста меню
let text = document.querySelectorAll('.nav-list__item a').forEach(text => {
   text.innerHTML = text.innerText.split('').map((letters,
      i) => `<span style = "transition-delay: ${i * 50}ms;">${letters}</span>`).join('')
})
