/* Revelações suaves ao rolar e envelope de contato.
   Sem dependências. Se este arquivo não carregar, o <head> remove a classe .js
   e todo o conteúdo aparece normalmente (cartão do envelope já aberto). */
(function () {
  var root = document.documentElement;
  window.lnMotion = true;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('[data-reveal]');

  function show(el) {
    el.classList.add('is-visible');
  }

  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(items, show);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(items, function (el) {
      io.observe(el);
    });
  }

  // Envelope de renda: abre ao toque/clique e revela o cartão com o atendimento.
  Array.prototype.forEach.call(document.querySelectorAll('[data-envelope]'), function (env) {
    var toggle = env.querySelector('.envelope__toggle');
    var stage = env.querySelector('.envelope__stage');
    var label = toggle && toggle.querySelector('.visually-hidden');
    if (!toggle || !stage) return;

    function setOpen(open) {
      env.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (label) label.textContent = open ? 'Fechar o convite' : 'Abrir o convite da Lívia';
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!env.classList.contains('is-open'));
    });

    // Clique em qualquer parte do envelope fechado também abre.
    stage.addEventListener('click', function (e) {
      if (e.target.closest('a, button')) return;
      if (!env.classList.contains('is-open')) setOpen(true);
    });

    setOpen(false);
  });

  root.classList.add('motion-ready');
})();
