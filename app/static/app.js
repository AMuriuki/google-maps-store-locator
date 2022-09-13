function initMap() {
    // create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: -1.274610, lng: 36.875759 }
    });

    // Load the locations GeoJSON onto the map
    url = "../static/locations.geojson"
    map.data.loadGeoJson(url, { idPropertyName: 'storeid' });

    console.log(url)

    const apikey = maps_api_key
    const infoWindow = new google.maps.InfoWindow();

    // Show the information for a store when its marker is clicked
    map.data.addListener('click', (event) => {
        const category = event.feature.getProperty('category');
        const name = event.feature.getProperty('name');
        const description = event.feature.getProperty('description');
        const hours = event.feature.getProperty('hours');
        const phone = event.feature.getProperty('phone');
        const position = event.feature.getGeometry().get();
        const content = `
          <h2>${name}</h2><p>${description}</p>
          <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
        `;

        infoWindow.setContent(content);
        infoWindow.setPosition(position);
        infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
        infoWindow.open(map);
    });

}