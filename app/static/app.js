const mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    { 'elementType': "geometry", 'stylers': [{ 'color': "#e2dad4" }] },
    { 'elementType': "labels.text.fill", 'stylers': [{ 'color': "#523735" }] },
    { 'elementType': "labels.text.stroke", 'stylers': [{ 'color': "#f5f1e6" }] },
    {
        'featureType': "administrative",
        'elementType': "geometry.stroke",
        'stylers': [{ 'color': "#c9b2a6" }]
    },
    {
        'featureType': "administrative.land_parcel",
        'elementType': "geometry.stroke",
        'stylers': [{ 'color': "#dcd2be" }]
    },
    {
        'featureType': "administrative.land_parcel",
        'elementType': "labels.text.fill",
        'stylers': [{ 'color': "#ae9e90" }]
    },
    {
        'featureType': "landscape.natural",
        'elementType': "geometry",
        'stylers': [{ 'color': "#d3ccc7" }]
    },
    {
        'featureType': "poi",
        'elementType': "geometry",
        'stylers': [{ 'color': "#d3ccc7" }]
    },
    {
        'featureType': "poi",
        'elementType': "labels.text.fill",
        'stylers': [{ 'color': "#93817c" }]
    },
    {
        'featureType': "poi.park",
        'elementType': "geometry.fill",
        'stylers': [{ 'color': "#c3bbb5" }]
    },
    {
        'featureType': "poi.park",
        'elementType': "labels.text.fill",
        'stylers': [{ 'color': "#685c51" }]
    },
    {
        'featureType': "road",
        'elementType': "geometry",
        'stylers': [{ 'color': "#f5f1e6" }]
    },
    {
        'featureType': "road.arterial",
        'elementType': "geometry",
        'stylers': [{ 'color': "#fdfcf8" }]
    },
    {
        'featureType': "road.highway",
        'elementType': "geometry",
        'stylers': [{ 'color': "#bcb4ad" }]
    },
    {
        'featureType': "road.highway",
        'elementType': "geometry.stroke",
        'stylers': [{ 'color': "#bcb4ad" }]
    },
    {
        'featureType': "road.highway.controlled_access",
        'elementType': "geometry",
        'stylers': [{ 'color': "#e98d58" }]
    },
    {
        'featureType': "road.highway.controlled_access",
        'elementType': "geometry.stroke",
        'stylers': [{ 'color': "#db8555" }]
    },
    {
        'featureType': "road.local",
        'elementType': "labels.text.fill",
        'stylers': [{ 'color': "#938276" }]
    },
    {
        'featureType': "transit.line",
        'elementType': "geometry",
        'stylers': [{ 'color': "#d3ccc7" }]
    },
    {
        'featureType': "transit.line",
        'elementType': "labels.text.fill",
        'stylers': [{ 'color': "#8f7d77" }]
    },
    {
        'featureType': "transit.line",
        'elementType': "labels.text.stroke",
        'stylers': [{ 'color': "#ebe3cd" }]
    },
    {
        'featureType': "transit.station",
        'elementType': "geometry",
        'stylers': [{ 'color': "#d3ccc7" }]
    },
    {
        'featureType': "water",
        'elementType': "geometry.fill",
        'stylers': [{ 'color': "#d3ccc7" }]
    },
    {
        'featureType': "water",
        'elementType': "labels.text.fill",
        'stylers': [{ 'color': "#92998d" }]
    }
];

function initMap() {
    // create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: -1.281757, lng: 36.806577 },
        mapTypeControl: 0,
        zoomControl: 1,
        scrollwheel: 0,
        streetViewControl: 0,
        panControl: 0,
        draggable: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: mapStyle,
        fullscreenControl: false
    });

    // Load the locations GeoJSON onto the map
    url = "../static/locations.geojson"
    map.data.loadGeoJson(url, { idPropertyName: 'storeid' });

    // Define custom maker icons, using the store's "category"
    map.data.setStyle((feature) => {
        return {
            icon: {
                url: `https://www.artcaffe.co.ke/images/markers/marker.webp`
            }
        }
    })

    const apikey = maps_api_key
    const infoWindow = new google.maps.InfoWindow();

    // Show the information for a store when its marker is clicked
    map.data.addListener('click', (event) => {
        const category = event.feature.getProperty('category');
        const name = event.feature.getProperty('name');
        const hours = event.feature.getProperty('hours');
        const marker_color = event.feature.getProperty('marker-color');
        const position = event.feature.getGeometry().get();
        const content = `<p>${category}</p><h2>${name}</h2><p>Open: ${hours}</p>`;
        infoWindow.setContent(content);
        infoWindow.setPosition(position);
        infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
        infoWindow.open(map);
    })

}