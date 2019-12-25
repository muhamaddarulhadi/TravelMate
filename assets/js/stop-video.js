 /* $('.stopVideo').click(function(e) {
    e.preventDefault();
    $('.video-container').children('iframe').attr('src', '');
  });



/*$("modal").on('hidden.bs.modal', function (e) {
    $("modal iframe").attr("src", $("modal iframe").attr("src"));
});


$('.stopVideo').click(function()
{
	$('.video-container')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});




 /*( function( w, d ) 
 {
   'use strict';
    // Get the modal
	var el = d.getElementsByClassName( 'video-container' )[0];
    var modal = d.getElementById( 'id01' );
    // When the user clicks anywhere outside of the modal, close it
   w.onclick = function ( event ) {
      if ( event.target == modal ) {
           modal.style.display = 'none';
      }
   };
   d.getElementsByClassName( 'btn' )[0].addEventListener( 'click', function() 
   {
         d.getElementById( 'id01' ).style.display = 'none';
         while ( el.firstChild ) 
         {
                 el.removeChild( el.firstChild ); 
	  }
   }, false );

 }( window, document ));







$(document).ready(function() {
  	// set unique id to videoplayer for the Webflow video element
  	var src = $('video-container').children('iframe').attr('src');

  	// when object with class open-popup is clicked...
  	$('.open-popup').click(function(e) {
  		e.preventDefault();
  		// change the src value of the video
  		$('video-container').children('iframe').attr('src', src);
  		$('.popup-bg').fadeIn();
  	});

  	// when object with class close-popup is clicked...
  	$('.close-popup').click(function(e) {
  		e.preventDefault();
  		$('video-container').children('iframe').attr('src', '');
  		$('.popup-bg').fadeOut();
  	});
  });