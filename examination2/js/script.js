

$(document).ready(function(){
	
	$('.header_slider').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
	});



	var $anchors = $('a[href]').not('[href="#"]');

	$anchors.on('click' , function (e) {
		e.preventDefault();
		var id = $(this).attr('href');

		$('html').animate({
			scrollTop: $(id).offset().top }, 1200);

	});

});
var map = null;
function initMap(){

	map = new google.maps.Map(document.querySelector('.map'), {zoom:13, center: {lat: -34.397, lng: 150.644}
})
	new google.maps.Marker({
		position:{lat: -34.397, lng: 150.644},
		map: map,
	});
}
