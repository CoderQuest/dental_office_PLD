$(document).on('ready page:load', function(){

// function isElementInViewport (el) {

//     //special bonus for those using jQuery
//     if (typeof jQuery === "function" && el instanceof jQuery) {
//         el = el[0];
//     }

//     var rect = el.getBoundingClientRect();

//     return (
//         rect.top < 375 &&
//         rect.top > 365
//         // rect.left >= 0 &&
//         // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && or 
//         // rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
//     );
// };
// function callback () {
//     //your code here, e.g. console.log('is visible now');
//     console.log('Map is visible now');
// }; 


// function fireIfElementVisible (el, callback) {
//     return function () {
//         if ( isElementInViewport(el) ) {
//             callback();
//         }
//     }
// };

// var handler = fireIfElementVisible ($('#map'), callback);


// //jQuery
// $(window).on('DOMContentLoaded load resize scroll', handler); 


drawGmap = google.maps.event.addDomListener(window, 'load', init);
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var parkLinLocale = new google.maps.LatLng(41.277887,-73.68118900000002);
                var contentString = "<h4>ParkLin Dental, PC </h4> <p>190 Goldens Bridge Road, Katonah, NY 10536</p> <a href='https://www.google.com/maps/dir//190+Goldens+Bridge+Road,+Katonah,+NY/@41.277895,-73.6855664,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2b1bec41b7c53:0xf62ac288dbbe34ca!2m2!1d-73.681189!2d41.277887'><p><b>Directions</b></p></a>";
                 var infowindow = new google.maps.InfoWindow({
								      content: contentString
								  });
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 14,
                    scrollwheel: false,
                    draggable: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(41.277887,-73.68118900000002), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
				{
					featureType:'water',
					elementType:'all',
					stylers:[{hue:'#e9ebed'},						{saturation:-78},						{lightness:67},						{visibility:'simplified'}					]				},{					featureType:'landscape',					elementType:'all',					stylers:[						{hue:'#ffffff'},						{saturation:-100},						{lightness:100},						{visibility:'simplified'}					]				},{					featureType:'road',					elementType:'geometry',					stylers:[						{hue:'#bbc0c4'},						{saturation:-93},						{lightness:31},						{visibility:'simplified'}					]				},{					featureType:'poi',					elementType:'all',					stylers:[						{hue:'#ffffff'},						{saturation:-100},						{lightness:100},						{visibility:'off'}					]				},{					featureType:'road.local',					elementType:'geometry',					stylers:[						{hue:'#e9ebed'},						{saturation:-90},						{lightness:-8},						{visibility:'simplified'}					]				},{					featureType:'transit',					elementType:'all',					stylers:[						{hue:'#e9ebed'},						{saturation:10},						{lightness:69},						{visibility:'on'}					]				},{					featureType:'administrative.locality',					elementType:'all',					stylers:[						{hue:'#2c2e33'},						{saturation:7},						{lightness:19},						{visibility:'on'}					]				},{					featureType:'road',					elementType:'labels',					stylers:[						{hue:'#bbc0c4'},						{saturation:-93},						{lightness:31},						{visibility:'on'}					]				},{					featureType:'road.arterial',					elementType:'labels',					stylers:[						{hue:'#bbc0c4'},						{saturation:-93},						{lightness:-2},						{visibility:'simplified'}					]				}			]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using out element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
                var marker = new google.maps.Marker({
							      position: parkLinLocale,
							      map: map,
							      title: 'Eric Chang Dental' });
                 google.maps.event.addListener(marker, 'click', function() {
									    infowindow.open(map,marker);
									  });
			}

            drawGmap;


        });