

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
        $('.detalleEquipo').load('page3.html');
    });
    $('.logo').click(function() {
        $('.detalleEquipo').css('display', 'none');;
      
      $('#mainPage').fadeIn( function() { '300'
        $('#mainPage').css('display', 'block');

      });

    });
    
  	$('.parallax').parallax();
  	
  });
})(jQuery); 


