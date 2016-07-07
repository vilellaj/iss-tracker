"use strict";

var flightPlanCoordinates = [];

function initMap() {

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.397, lng: 30.644},
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    scrollwheel: false,
    zoom: 3
  });

  var marker = new google.maps.Marker({
  	position: {lat: 43.397, lng: 30.644},
  	map: map,
  	icon: 'img/green_marker.png'
  	//icon: 'https://www.katespade.com/on/demandware.static/Sites-Shop-Site/-/default/dwdb784703/images/googleMapPin-js.png'
  });

  var result = setInterval(function(){

	$.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {

		console.log(data);
		var latitude = data.iss_position.latitude;
		var longitude = data.iss_position.longitude;

		if(flightPlanCoordinates.length === 2)
			flightPlanCoordinates.shift();
		
		flightPlanCoordinates.push({lat: latitude, lng: longitude});

		var flightPath = new google.maps.Polyline({
			path: flightPlanCoordinates,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
		});

		flightPath.setMap(map);

		marker.setPosition({lat: latitude, lng: longitude});
		map.panTo({lat: latitude, lng: longitude});

	});
  }, 7000);
}

