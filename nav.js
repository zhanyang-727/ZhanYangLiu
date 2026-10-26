/* Header motion: shrink + frosted glass once you scroll,
   slide away while scrolling down, slide back when scrolling up. */
(function () {
  var bar = document.querySelector('.topbar');
  if (!bar) return;
  var lastY = window.scrollY, ticking = false;
  function update() {
    var y = window.scrollY;
    bar.classList.toggle('is-scrolled', y > 8);
    if (y > 220 && y > lastY + 4) bar.classList.add('is-hidden');
    else if (y < lastY - 4 || y <= 220) bar.classList.remove('is-hidden');
    lastY = y;
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();
