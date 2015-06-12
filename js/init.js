

(function($){
  $(function(){
    var tam = 280;
    
    $('.button-collapse').sideNav({
      menuWidth: tam, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
  	);
      
    $('#nav-mobile').css('width', tam+'px');      
      //$('body, footer, main').css('padding-left', tam+'px');

      //$('.prueba').load('page2.html #ejemploDeContenido');

    //$('.prueba').click(function() {
    $('main').on('click', '.svg', function(event) {
    	//var equipo = this.id;
    	//console.log(equipo);

    	$('#mainPage').slideToggle();
  		$('.detalleEquipo').slideToggle();
  		//$('.detalleEquipo').load('page2.html #'+equipo);
        $('.detalleEquipo').load('puente_piedra.html');
    });
    $('.logo').click(function() {
        $('.detalleEquipo').css('display', 'none');;
      
      $('#mainPage').fadeIn( function() { '300',
        $('#mainPage').css('display', 'block');

      });

    });
    $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop());
      console.log(pos);
      var pos = $('#nav_bar').position().top;

    if ($(window).scrollTop() > pos) {
      
      $('#nav_barf').css('visibility', 'visible');;
      //$('#nav_bar').css('display', 'none');;

     };

      if ($(window).scrollTop() < pos) {
      
      $('#nav_barf').css('visibility', 'hidden');
      //$('#nav_bar').css('display', 'block');

     };

    });


  	$('.parallax').parallax();
  	
  });
})(jQuery); 


