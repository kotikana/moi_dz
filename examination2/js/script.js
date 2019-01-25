// alert('1');

$(document).ready(function(){
	
	$('.header_slider').slick({
		slidesToShow: 1,
				centerPadding:'0',
	});

});

$(document).ready(function(){
	$('.news_slider').slick({
		slidesToShow: 3,
		slidesToScroll:1,
		arrows:true,
		autoplay:true,
		dots:true,
		autoplaySpeed:2000,
		prevArrow:'._prevArrow',
		nextArrow:'._nextArrow',
		responsive: [
		{
			breakpoint: 1170,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 950,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});
});


var $anchors = $('a[href]').not('[href="#"]');

$anchors.on('click' , function (e) {
	e.preventDefault();
	var id = $(this).attr('href');

	$('html').animate({
		scrollTop: $(id).offset().top }, 1500);
});


var map = null;
function initMap(){
	var location = {lat: 40.6887278, lng: -73.8862997};

	map = new google.maps.Map(document.querySelector('.map'), 
		{zoom:13,
		center: location,
	});
	var marker = new google.maps.Marker({
		position:location,
		map: map,
		animation: google.maps.Animation.BOUNCE,
		icon:{
			url: "js/marker.png",
			scaledSize: new google.maps.Size(70, 70)
		},

	});
}

