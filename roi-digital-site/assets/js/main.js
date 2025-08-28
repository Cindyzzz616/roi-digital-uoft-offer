
(function(){
  const toggle = document.getElementById('menuToggle');
  const list = document.getElementById('navList');
  if(toggle && list){
    toggle.addEventListener('click', function(){
      const open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  const year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }
})();
