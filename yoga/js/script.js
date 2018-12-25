var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 53.139461,
			lng: -1.557924
		},
		zoom: 16,
		styles: [{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [{
					"color": "#fffffa"
				}]
			},
			{
				"featureType": "water",
				"stylers": [{
					"lightness": 50
				}]
			},
			{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "transit",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry",
				"stylers": [{
					"lightness": 40
				}]
			}
		]
	});


	var marker = new google.maps.Marker({
		position: {
			lat: 53.139461,
			lng: -1.557924
		},
		map: map,
		title: '19 Bakewell: Matlock, England',

	});

}

$('a[href^="#"]').bind("click", function (e) {
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr("href")).offset().top
	}, 1000);
	e.preventDefault();
	return false
});