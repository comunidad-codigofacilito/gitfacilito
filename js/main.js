(function () {

    //Ir arriba
    var goToTop = function() {
        console.log("en funcion gototop");
		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

    // Cargando página
	var loaderPage = function() {
		$(".facilito-loader").fadeOut("slow");
	};

    $(function(){
        console.log("en funcion principal");
		goToTop();
		loaderPage();
	});

}());