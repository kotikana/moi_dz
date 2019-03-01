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

 //map
 var map = null;
 function initMap(){
 	var mapContainer = $('#map');
	mapContainer.width('100%').height(500);
		var location = {lat: 40.6887278, lng: -73.8862997};

		map = new google.maps.Map(document.querySelector('._map'), 
				{zoom:13,
						center: location,
				});
		var marker = new google.maps.Marker({
				position:location,
				map: map,
				// animation: google.maps.Animation.BOUNCE,
				// icon:{
				//     url: "js/marker.png",
				//     scaledSize: new google.maps.Size(70, 70)
				// },

		});
}
