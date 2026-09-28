(function(){
  var btn = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if(!btn || !nav) return;
  var labelOpen = btn.getAttribute('data-label-open') || 'Abrir menú';
  var labelClose = btn.getAttribute('data-label-close') || 'Cerrar menú';
  function setOpen(open){
    document.body.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? labelClose : labelOpen);
  }
  btn.addEventListener('click', function(){ setOpen(!document.body.classList.contains('nav-open')); });
  nav.addEventListener('click', function(e){ if(e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') setOpen(false); });
  window.matchMedia('(min-width: 881px)').addEventListener('change', function(e){ if(e.matches) setOpen(false); });
})();
