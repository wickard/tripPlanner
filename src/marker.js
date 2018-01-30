const mapboxgl = require("mapbox-gl");
const marker = (type, coords) => {
  const icons = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
  }
const mark = document.createElement("div");
mark.classList.add('marker')
mark.style.backgroundImage = `url(${icons[type]})`;
console.log(mark)
return new mapboxgl.Marker(mark).setLngLat(coords)
}

module.exports = marker
