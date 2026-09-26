/* Menu mobile: abre em tela cheia, Esc fecha, trava a rolagem e gerencia o foco. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu-mobile');
  if (!toggle || !menu) return;

  var closeBtn = menu.querySelector('.menu__close');
  var root = document.documentElement;
  var wide = window.matchMedia('(min-width: 880px)');

  // Tudo o que fica atrás do menu deixa de receber foco enquanto ele está aberto.
  function setBackgroundInert(on) {
    Array.prototype.forEach.call(document.body.children, function (el) {
      if (el === menu || el.tagName === 'SCRIPT') return;
      if (on) el.setAttribute('inert', '');
      else el.removeAttribute('inert');
    });
  }

  function focusable() {
    return menu.querySelectorAll('a[href], button:not([disabled])');
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      close(true);
      return;
    }
    if (e.key !== 'Tab') return;
    var items = focusable();
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function open() {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    root.classList.add('menu-aberto');
    setBackgroundInert(true);
    document.addEventListener('keydown', onKeydown);
    closeBtn.focus();
  }

  function close(returnFocus) {
    if (menu.hidden) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    root.classList.remove('menu-aberto');
    setBackgroundInert(false);
    document.removeEventListener('keydown', onKeydown);
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', open);
  closeBtn.addEventListener('click', function () {
    close(true);
  });

  // Ao seguir um link (inclusive para a própria página), o menu fecha.
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) close(false);
  });

  // Se a tela passar para o layout desktop com o menu aberto, fecha.
  function onWide(e) {
    if (e.matches) close(false);
  }
  if (wide.addEventListener) wide.addEventListener('change', onWide);
  else if (wide.addListener) wide.addListener(onWide);

  // Voltar pelo histórico (bfcache) não deve reabrir a página com o menu aberto.
  window.addEventListener('pageshow', function () {
    close(false);
  });
})();
