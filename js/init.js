

(function($){
  $(function(){
    var tam = 280;

    $('.button-collapse').sideNav({
      menuWidth: tam, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
  	);

    //$('#nav-mobile').css('width', tam+'px');
      //$('body, footer, main').css('padding-left', tam+'px');

      //$('.prueba').load('page2.html #ejemploDeContenido');

    //$('.prueba').click(function() {
    $('main').on('click', '.planetalink', function(event) {
    	//var equipo = this.id;
    	//

    	$('#mainPage').slideToggle();
  		$('.detalleEquipo').slideToggle();
  		//$('.detalleEquipo').load('page2.html #'+equipo);
        var equipo = this.id;
        $('.detalleEquipo').load('res/'+equipo+'/'+equipo+'.html');
    });
    $('header').on('click', '.planetalink', function(event) {
      //var equipo = this.id;
      //console.log(equipo);

       $('#mainPage').css('display', 'none');;

      $('.detalleEquipo').css('display','block');
      //$('.detalleEquipo').load('page2.html #'+equipo);
        var equipo = this.id;
        console.log(equipo);

        equipo = equipo.substring(0,equipo.length-4);
        console.log(equipo);
        $('.detalleEquipo').load('res/'+equipo+'/'+equipo+'.html');
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
      //console.log($(window).scrollTop());
       var aux = $('#prev-nav').position().top;
       var pos = aux;
       var pos2 = $('#prim').position().top ;
       var scroll = $(window).scrollTop();
       //console.log(pos+'-'+pos2);

    //
     if ($(window).scrollTop() > pos - tam - pos2) {
    //
       $('#nav2').addClass('navbar-fixed');
       $('#nav-real').css('top', 0);
       console.log('1');

    //   //$('#nav_bar').css('display', 'none');;
    //
      };
    //
       if ($(window).scrollTop() <pos - tam - pos2) {
         $('#nav2').css('top', pos-pos2-tam);
         $('#nav2').removeClass('navbar-fixed');
         console.log('2');


    //
    //   $('#nav_barf').css('visibility', 'hidden');
    //   //$('#nav_bar').css('display', 'block');
    //
      };

    });


  	$('.parallax').parallax();

  });
})(jQuery);
