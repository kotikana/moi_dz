//scroll

$(document).ready(function () {
	var $anchors = $('a[href]').not('[href="#"]');

	$anchors.on('click' , function (e) {
		e.preventDefault();
		var id = $(this).attr('href');

		$('html').animate({
			scrollTop: $(id).offset().top }, 1500);
	});
});

//menu
$('._menuOpen').on('click',function(){
	$('._menuList').slideToggle(1500);
})
//slider

$(document).ready(function () {
	$('._slider').slick({
		slidesToShow: 1,
		slidesToScroll:1,
		arrows:true,
		dots:true,
		centerMode: true,
		prevArrow:'._prevArrow',
		nextArrow:'._nextArrow',
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				arrows:false,
				slidesToShow: 1,
			}
		}
		]
	});
});

$(document).ready(function () {
	$('._author').slick({
		slidesToShow: 3,
		slidesToScroll:1,
		arrows:true,
		dots:true,
		centerMode: true,
		prevArrow:'._prevArrow2',
		nextArrow:'._nextArrow2',
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				arrows:false,
				slidesToShow: 1,
			}
		}
		]
	});
});

 //map
 var map = null;
 function initMap(){
 	var mapContainer = $('.map');
 	mapContainer.width('100%').height(900);
 	var location = {lat: 40.6887278, lng: -73.8862997};

 	map = new google.maps.Map(document.querySelector('._map'), 
 		{zoom:13,
 			center: location,
 		});
 	var marker = new google.maps.Marker({
 		position:location,
 		map: map,

			});
 }
