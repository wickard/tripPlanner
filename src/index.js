const mapboxgl = require("mapbox-gl");
const addMarker = require('./marker');
mapboxgl.accessToken = 'pk.eyJ1IjoidGxhd2xlc3MzIiwiYSI6ImNqZDF0ZDluNjMyYzMyeW81dW1hbjQ1MHUifQ.gKnSXpZrc5kYlS5d_VY81g';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div");
// markerDomEl.classList.add('marker')
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);

const marker = addMarker('hotel', [-87.6354, 41.8885])

marker.addTo(map)

const elements = document.querySelectorAll('.vert')

elements.forEach(element => {
  element.addEventListener('click', () => {
    element.parentNode.parentNode.classList.toggle('active')
  })
})
