// Add console.log to check to see if our code is working.
console.log("working");

/*
// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([34.0522, -118.2437],14);
 */

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [
    40.7, -94.5
  ],
  zoom: 4
});


//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

/*
L.circle([34.0522, -118.2437], {
  radius: 100
}).addTo(map);
*/


// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location,{
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
.addTo(map);
});


/*
//Creating circleMarker() function  - to add a circle to the map 
L.circleMarker([34.0522, -118.2437],{
  radius : 300,
  color:"black",
  fillcolor:"#ffffa1"
}).addTo(map);

*/
// Assign the variable map to the object L.map(). Instantiate the object with 'mapid'
// The 'mapid' will reference the 'id' tag in the <div> element
// The setView() method sets the view of the map with a geographical center, 
//     where the first coordinate is the latitude and the second is longitude. Set the zoom level to "4" (0-18)



// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


/*
// Create the tile layer that will be the background of our map.- Dark 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

*/
// Then Add our 'graymap' tile layer to the map.
streets.addTo(map);

// Assign the titleLayer() method to the variable 'streets'
// The URLS include an API URL with a reference to the accessToken, and the OpenStreetMap URL
// Add the 'maxZoom' attribute and assign it to a value of 18
// Add 'id' attribute and assign it 'mapbox.streets' which will show the streets on the map
// Add the accessToken attribute and assign it to the value of the API_KEY
// Call addTo() function with map object, 'map' on the greymap object tile layer. The addTo() will add the graymap object tile layer to the 'let map'