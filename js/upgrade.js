/* ============================================
   UPGRADE JS — Dark Mode, Scroll Progress, FAQ, 
   Circular Progress, Card Tilt, Video Modal
   ============================================ */
$(document).ready(function(){

  // ---- Scroll Progress Bar ----
  if(!$('.scroll-progress').length){
    $('body').prepend('<div class="scroll-progress"></div>');
  }
  $(window).on('scroll',function(){
    var s=$(this).scrollTop(),h=$(document).height()-$(window).height();
    $('.scroll-progress').css('width',(s/h*100)+'%');
  });

  // ---- Dark Mode Toggle ----
  $('#darkToggle').on('click',function(){
    var isDark=$('body').attr('data-theme')==='dark';
    $('body').attr('data-theme',isDark?'':'dark');
    $(this).find('i').toggleClass('bi-moon-fill bi-sun-fill');
    localStorage.setItem('theme',isDark?'light':'dark');
  });
  // Restore
  if(localStorage.getItem('theme')==='dark'){
    $('body').attr('data-theme','dark');
    $('#darkToggle').find('i').removeClass('bi-moon-fill').addClass('bi-sun-fill');
  }

  // ---- FAQ Accordion ----
  $('.faq-question').on('click',function(){
    var $item=$(this).closest('.faq-item');
    var wasActive=$item.hasClass('active');
    $('.faq-item').removeClass('active');
    if(!wasActive) $item.addClass('active');
  });

  // ---- Circular Progress Animation ----
  var circlesAnimated=false;
  function animateCircles(){
    if(circlesAnimated) return;
    var $circles=$('.circle-fill');
    if(!$circles.length) return;
    var wB=$(window).scrollTop()+$(window).height();
    if(wB>$circles.first().closest('.section').offset().top+100){
      circlesAnimated=true;
      $circles.each(function(){
        var pct=$(this).attr('data-percent')||0;
        var offset=339.292-(339.292*pct/100);
        $(this).css('stroke-dashoffset',offset);
      });
    }
  }
  $(window).on('scroll',animateCircles);
  animateCircles();

  // ---- Card Tilt Effect ----
  $('.tilt-card').on('mousemove',function(e){
    var r=this.getBoundingClientRect();
    var x=(e.clientX-r.left)/r.width-.5;
    var y=(e.clientY-r.top)/r.height-.5;
    $(this).css('transform','perspective(800px) rotateY('+x*8+'deg) rotateX('+(-y*8)+'deg) translateY(-4px)');
  }).on('mouseleave',function(){
    $(this).css('transform','perspective(800px) rotateY(0) rotateX(0) translateY(0)');
  });

  // ---- Video Play Button ----
  $('.video-play-btn').on('click',function(){
    var $modal=$('#videoModal');
    if($modal.length) $modal.modal('show');
  });

  // ---- Notification Bell ----
  $('#notifBtn').on('click',function(){
    $(this).find('.nav-badge').fadeOut(200);
  });

});
