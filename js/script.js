/* ============================================
   Finance Department of India Portal
   Main Script - Core Functionality
   ============================================ */

$(document).ready(function () {

  // ---- Loading Screen ----
  $(window).on('load', function () {
    setTimeout(function () {
      $('#loader').addClass('hidden');
    }, 800);
  });
  // Fallback
  setTimeout(function () { $('#loader').addClass('hidden'); }, 2500);

  // ---- Navbar Scroll Effect ----
  $(window).on('scroll', function () {
    var $nav = $('.navbar-finance');
    if ($(this).scrollTop() > 60) {
      $nav.addClass('scrolled');
    } else {
      $nav.removeClass('scrolled');
    }

    // Scroll to top button
    if ($(this).scrollTop() > 400) {
      $('#scrollTop').addClass('show');
    } else {
      $('#scrollTop').removeClass('show');
    }
  });

  // ---- Scroll to Top ----
  $('#scrollTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  // ---- Smooth Scroll for Anchor Links ----
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600);
    }
  });

  // ---- Active Nav Link ----
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.navbar-finance .nav-link').each(function () {
    var href = $(this).attr('href');
    if (href === currentPage) {
      $(this).addClass('active');
    }
  });

  // ---- Announcement Ticker ----
  // Duplicate ticker items for seamless loop
  var $ticker = $('.ticker');
  if ($ticker.length) {
    $ticker.each(function () {
      var $this = $(this);
      $this.append($this.html());
    });
  }

  // ---- Hero Particles ----
  var $particles = $('.particles');
  if ($particles.length) {
    for (var i = 0; i < 20; i++) {
      var size = Math.random() * 12 + 4;
      var $p = $('<div class="particle"></div>').css({
        width: size + 'px',
        height: size + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: (Math.random() * 10) + 's',
        animationDuration: (Math.random() * 10 + 10) + 's'
      });
      $particles.append($p);
    }
  }

  // ---- Typing Effect ----
  var $typed = $('#typed-text');
  if ($typed.length) {
    var words = ['Financial Future', 'Economic Growth', 'Digital Economy', 'Fiscal Strength'];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typeSpeed = 100;

    function typeEffect() {
      var currentWord = words[wordIndex];
      if (isDeleting) {
        $typed.text(currentWord.substring(0, charIndex - 1));
        charIndex--;
        typeSpeed = 50;
      } else {
        $typed.text(currentWord.substring(0, charIndex + 1));
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400;
      }
      setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();
  }

  // ---- Button Ripple Effect ----
  $('.btn-primary-custom, .btn-gold').on('click', function (e) {
    var $btn = $(this);
    var x = e.pageX - $btn.offset().left;
    var y = e.pageY - $btn.offset().top;
    var $ripple = $('<span class="ripple-effect"></span>').css({
      left: x + 'px', top: y + 'px'
    });
    $btn.append($ripple);
    setTimeout(function () { $ripple.remove(); }, 600);
  });

  // ---- Form Validation ----
  $('.contact-form').on('submit', function (e) {
    e.preventDefault();
    var isValid = true;
    $(this).find('[required]').each(function () {
      if (!$(this).val().trim()) {
        $(this).addClass('is-invalid');
        isValid = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    if (isValid) {
      var $btn = $(this).find('button[type="submit"]');
      $btn.html('<i class="bi bi-check-circle me-2"></i>Message Sent!').prop('disabled', true);
      setTimeout(function () {
        $btn.html('<i class="bi bi-send me-2"></i>Send Message').prop('disabled', false);
      }, 3000);
      this.reset();
    }
  });

  // ---- Gallery Modal ----
  $('.gallery-item').on('click', function () {
    var imgSrc = $(this).find('img').attr('src');
    var caption = $(this).find('.gallery-overlay span').text();
    $('#galleryModal .modal-body img').attr('src', imgSrc);
    $('#galleryModal .modal-title').text(caption);
    $('#galleryModal').modal('show');
  });

});

/* Ripple styles injected */
(function () {
  var style = document.createElement('style');
  style.textContent = '.ripple-effect{position:absolute;border-radius:50%;background:rgba(255,255,255,0.4);transform:scale(0);animation:ripple-anim 0.6s linear;pointer-events:none}@keyframes ripple-anim{to{transform:scale(4);opacity:0}}';
  document.head.appendChild(style);
})();
