(function($){
  "use strict";
  Drupal.behaviors.jollyness_theme = {
    attach: function(context, settings){
      $('.dexp-container').find('.block-big-title').once('wrapper').wrap('<div class="container">');
      /*Search icon click event*/
      $('.search-icon').once('click', function(){
        $(this).click(function (e) {
          e.preventDefault();
          $(this).parent().find('.search-wrapper').show(0, function () {
            $(this).parent().find('.search-wrapper').find('input[type=text]').focus();
          });
        });
      });
      $('.search-close').once('click', function(){ 
        $(this).click(function () {
          $(this).closest('.search-wrapper').hide(0);
        });
      });
      /* Bootstrap tooltip */
      $('.dtooltip').once('tooltip', function(){
        $(this).tooltip({
          container: 'body'
        });
      });
      $('[rel=popover]').once('click', function(){ 
        $(this).popover();
        $(this).click(function(e){
          e.preventDefault();
        });
      });
      /* Fix portfolio hover on iOS */
      $('.portfolio-item-inner').once('hover', function(){
        $(this).hover(function(){
          $(this).trigger('hover');
        })
      });
      $('.dexp-masonry-item').once('hover', function(){ 
        $(this).hover(function () {
          $(this).find('.portfolio-item-inner').trigger('hover');
        });
      });

      $('.stat-count').once('stats',function(){
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
      });

      /* Go to top */
      $(window).once('scroll', function(){ 
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $('#go-to-top').css({
              bottom: "25px"
            });
          } else {
            $('#go-to-top').css({
              bottom: "-100px"
            });
          }
        });
      });
      
      $('#go-to-top').once('click', function(){ 
        $(this).click(function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: '0px'
          }, 800);
        });
      });

      $('.scroll-down').once('click', function(){
        $(this).click(function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: $(window).height(),
          }, 800);
        });
      });
    }
  };
})(jQuery);

function count($this) {
  var current = parseInt($this.html(), 10);
  current = current + 1; /* Where 50 is increment */

  $this.html(++current);
  if (current > $this.data('count')) {
    $this.html($this.data('count'));
  } else {
    setTimeout(function () {
      count($this)
    }, 50);
  }
}