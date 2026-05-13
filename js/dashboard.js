/* ============================================
   Finance Department of India Portal
   Dashboard - Counters & Stats
   ============================================ */

$(document).ready(function () {

  // ---- Animated Counters ----
  var countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    var $counters = $('.counter');
    if (!$counters.length) return;

    var windowBottom = $(window).scrollTop() + $(window).height();
    var triggerPoint = $counters.first().offset().top + 100;

    if (windowBottom > triggerPoint) {
      countersAnimated = true;
      $counters.each(function () {
        var $this = $(this);
        var target = parseFloat($this.attr('data-target'));
        var suffix = $this.attr('data-suffix') || '';
        var prefix = $this.attr('data-prefix') || '';
        var decimals = $this.attr('data-decimals') || 0;
        var duration = 2000;
        var startTime = null;

        function updateCounter(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          // Ease out cubic
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = eased * target;

          if (parseInt(decimals) > 0) {
            $this.text(prefix + current.toFixed(decimals) + suffix);
          } else {
            $this.text(prefix + Math.floor(current).toLocaleString('en-IN') + suffix);
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            if (parseInt(decimals) > 0) {
              $this.text(prefix + target.toFixed(decimals) + suffix);
            } else {
              $this.text(prefix + target.toLocaleString('en-IN') + suffix);
            }
          }
        }
        requestAnimationFrame(updateCounter);
      });
    }
  }

  $(window).on('scroll', animateCounters);
  animateCounters();

  // ---- Animated Progress Bars ----
  var progressAnimated = false;

  function animateProgress() {
    if (progressAnimated) return;
    var $bars = $('.progress-bar-custom');
    if (!$bars.length) return;

    var windowBottom = $(window).scrollTop() + $(window).height();
    var triggerPoint = $bars.first().offset().top + 50;

    if (windowBottom > triggerPoint) {
      progressAnimated = true;
      $bars.each(function () {
        var width = $(this).attr('data-width');
        $(this).css('width', width + '%');
      });
    }
  }

  $(window).on('scroll', animateProgress);
  animateProgress();

  // ---- Dashboard Hover Glow ----
  $('.stat-card').on('mousemove', function (e) {
    var rect = this.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    $(this).css('background',
      'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(212,165,32,0.08), transparent 50%), rgba(255,255,255,0.08)');
  }).on('mouseleave', function () {
    $(this).css('background', 'rgba(255,255,255,0.08)');
  });

});
