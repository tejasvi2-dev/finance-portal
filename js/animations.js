/* ============================================
   Finance Department of India Portal
   Animations - Scroll Reveal & Effects
   ============================================ */

$(document).ready(function () {

  // ---- Scroll Reveal ----
  function scrollReveal() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    $('.reveal').each(function () {
      var elemTop = $(this).offset().top;
      if (windowBottom > elemTop + 80) {
        $(this).addClass('active');
      }
    });
  }

  $(window).on('scroll', scrollReveal);
  scrollReveal(); // Run once on load

  // ---- Staggered reveal for cards ----
  function staggerReveal() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    $('.stagger-container').each(function () {
      if (windowBottom > $(this).offset().top + 60) {
        var $children = $(this).find('.stagger-item');
        $children.each(function (i) {
          var $el = $(this);
          setTimeout(function () {
            $el.addClass('active');
          }, i * 120);
        });
      }
    });
  }

  $(window).on('scroll', staggerReveal);
  staggerReveal();

  // ---- Parallax subtle effect on hero ----
  $(window).on('scroll', function () {
    var scroll = $(this).scrollTop();
    if (scroll < 800) {
      $('.hero-bg').css('transform', 'translateY(' + scroll * 0.3 + 'px)');
      $('.hero-content').css('opacity', 1 - scroll / 700);
    }
  });

  // ---- Animated border glow for stat cards ----
  // Uses CSS animations, triggered by scroll

  // ---- Counter badge pop-in ----
  var badgeShown = false;
  $(window).on('scroll', function () {
    if (badgeShown) return;
    var $badge = $('.hero-badge');
    if ($badge.length && $(window).scrollTop() < 100) {
      $badge.css({ opacity: 1, transform: 'translateY(0)' });
      badgeShown = true;
    }
  });

});

/* Stagger item styles */
(function () {
  var style = document.createElement('style');
  style.textContent = '.stagger-item{opacity:0;transform:translateY(30px);transition:all 0.6s cubic-bezier(0.4,0,0.2,1)}.stagger-item.active{opacity:1;transform:translateY(0)}';
  document.head.appendChild(style);
})();
