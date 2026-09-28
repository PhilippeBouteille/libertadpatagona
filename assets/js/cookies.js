(function(){
  var KEY = 'lp_cookie_consent';
  var seen = false;
  try { if (localStorage.getItem(KEY)) return; } catch(e) {}
  var en = (document.documentElement.lang || 'es').slice(0,2) === 'en';
  var t = en
    ? { msg:'We only use essential cookies to make the site work. Analytics cookies will only be enabled if you accept them.', ok:'Accept', no:'Decline', label:'Cookie notice' }
    : { msg:'Usamos solo cookies esenciales para que el sitio funcione. Las cookies de análisis solo se activarán si las aceptas.', ok:'Aceptar', no:'Rechazar', label:'Aviso de cookies' };
  var box = document.createElement('div');
  box.className = 'cookie-banner';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', t.label);
  box.innerHTML = '<p></p><div class="cookie-actions"><button type="button" class="cookie-btn cookie-btn-no"></button><button type="button" class="cookie-btn cookie-btn-ok"></button></div>';
  box.querySelector('p').textContent = t.msg;
  box.querySelector('.cookie-btn-no').textContent = t.no;
  box.querySelector('.cookie-btn-ok').textContent = t.ok;
  function choose(value){
    try { localStorage.setItem(KEY, value); } catch(e) {}
    box.remove();
    document.dispatchEvent(new CustomEvent('cookieconsent', { detail: { value: value } }));
  }
  box.querySelector('.cookie-btn-ok').addEventListener('click', function(){ choose('accepted'); });
  box.querySelector('.cookie-btn-no').addEventListener('click', function(){ choose('declined'); });
  document.body.appendChild(box);
})();
