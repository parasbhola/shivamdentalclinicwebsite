<script>
// Initialize the map
function initMap() {
  // Define map options
  var mapOptions = {
    center: { lat: 0, lng: 0 }, // Set the initial center coordinates
    zoom: 8 // Set the initial zoom level
  };

  // Create the map instance
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
</script>