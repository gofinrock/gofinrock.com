(function () {
  var paint = function () { if (window.lucide) window.lucide.createIcons(); };
  paint(); setTimeout(paint, 400); setTimeout(paint, 1200); setTimeout(paint, 2600);
  var reveal = function () {
    var vh = window.innerHeight || 800;
    document.querySelectorAll('.rv:not(.in)').forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.94) el.classList.add('in');
    });
  };
  var ticking = false;
  var onScroll = function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { reveal(); ticking = false; }); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  var hdr = document.querySelector('header');
  var onHdr = function () { if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 24); };
  window.addEventListener('scroll', onHdr, { passive: true });
  onHdr();
  var mb = document.querySelector('.mbtn'), mm = document.querySelector('.mmenu');
  if (mb && mm) {
    mb.addEventListener('click', function (e) { e.stopPropagation(); mm.classList.toggle('open'); });
    document.addEventListener('click', function () { mm.classList.remove('open'); });
  }
  var fit = function () {
    document.querySelectorAll('[data-appshot]').forEach(function (el) {
      var w = Number(String(el.dataset.appshot).split('x')[0]) || 1120;
      var inner = el.firstElementChild;
      if (inner && el.clientWidth) inner.style.transform = 'scale(' + (el.clientWidth / w) + ')';
    });
  };
  fit(); setTimeout(fit, 60); setTimeout(fit, 500);
  window.addEventListener('resize', fit, { passive: true });
  reveal();
  var iv = setInterval(reveal, 900);
  setTimeout(function () { document.querySelectorAll('.rv:not(.in)').forEach(function (el) { el.classList.add('in'); }); clearInterval(iv); }, 9000);
})();