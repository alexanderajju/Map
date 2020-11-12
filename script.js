mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleGFuZGVyYWpqdSIsImEiOiJja2hldzA0YXkwYW53MnptdjJ0MGEweGs1In0.sERMLZeftUYtDkvOr_BI4Q";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});
function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupMap([-0.127758, 51.507351]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
