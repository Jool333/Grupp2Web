// Hämta referensen till elementet där GPS-informationen ska visas
var gpsInfoElement = document.getElementById('gps-info');

// Kontrollera om webbläsaren stöder geolokalisering
if ('geolocation' in navigator) 
{ navigator.geolocation.getCurrentPosition(getCityFromCoordinates);} 
else { gpsInfoElement.innerHTML = 'Geolocation stöds inte i din webbläsare.'; }

// Hämta stad från koordinaterna
function getCityFromCoordinates(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Skapa en URL för omvänd geokodning med MapQuest Geocoding API
  var geocodingUrl = `https://www.mapquestapi.com/geocoding/v1/reverse?key=IFt0evPV6hWdf0OP2wxRHRAdYJZjLXhl&location=${latitude},${longitude}`;

  // Skicka en förfrågan för omvänd geokodning
  fetch(geocodingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Kontrollera om omvänd geokodning lyckades
      if (data.results && data.results.length > 0) {
        var city = data.results[0].locations[0].adminArea5;
        // Visa staden
        gpsInfoElement.innerHTML = 'Väder i ' + city;
      } else {
        gpsInfoElement.innerHTML = 'Omvänd geokodning misslyckades.';
      }
    })
    .catch(function (error) {
      console.log('Fel vid omvänd geokodning:', error);
    });
}