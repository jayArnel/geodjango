require([
    'model',
    'async!https://maps.googleapis.com/maps/api/js?v=3.24&libraries=geometry&sensor=false'
], function(Model) {
        /*
      Initialize variables
     */
    var map = new google.maps.Map(document.getElementById('map'));
    // Chicago City box points
    var NorthEast = new google.maps.LatLng(42.023135, -87.523661);
    var NorthWest = new google.maps.LatLng(42.023135, -87.940101);
    var SouthWest = new google.maps.LatLng(41.644286, -87.940101 );
    var SouthEast = new google.maps.LatLng(41.644286, -87.523661);
    var WorldBorder = new Model('worldborder');
    /*
      Set initial map properties
     */
    function initializeMap() {
      WorldBorder.objects.get(1, function(response){
        var center = new google.maps.LatLng(response.lat, response.lon);
        map.setCenter(center);  
        map.setZoom(8); 
        var geojson = response.geom;
        console.log(geojson);
        map.data.addGeoJson(JSON.parse(geojson));
      });
      
    }
    initializeMap();

    /*
      Bind page actions
     */
    function bindActions() {
      google.maps.event.addDomListener(window, "resize", resizeMap);
    }
    bindActions();

    /*
      Event handler for making Google Map responsive
     */
    function resizeMap() {
       var center = map.getCenter();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center);
    }


});