function onGeoOK(position) {
  const lat = position.coords.latitude; // 위도
  const lng = position.coords.longitude; // 경도
  console.log("You live it", lat, lng)
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
