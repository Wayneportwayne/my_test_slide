$(document).ready(function(){
  var currentPosition = 0;
  var slideWidth = 720;
  var slides = $('.slide');
  var numberOfSlides = slides.length;



  $('.slidesContainer').css('overflow', 'hidden');

  slides
    .wrapAll('<div class="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
	.css({
      'float' : 'left',
      'width' : slideWidth
    });


  $('.slideInner').css('width', slideWidth * numberOfSlides);


  $('.slideshow')
    .prepend('<span class="leftControl control">лево</span>')
    .append('<span class="rightControl control">право</span>');


  $('.control')
    .bind('click', function(){

	currentPosition = ($(this).attr('class')=='rightControl control') ? currentPosition+1 : currentPosition-1;    
    $('.slideInner').animate({
      'marginLeft' : slideWidth*(-currentPosition)
    });
  });
	


});