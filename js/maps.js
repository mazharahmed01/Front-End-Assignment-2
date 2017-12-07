
/*java code for responsiveness*/
(function(){

  window.initMap = function initMap() {
    var mapCanvas1 = document.getElementById("australiaMap");
    var mapCanvas2 = document.getElementById("chineseMap");

    var mapAustralia = new google.maps.LatLng(-37.849722, 144.968333);
    var mapChinese = new google.maps.LatLng(31.338889,121.219722);

    var mapSize = {
        center: mapAustralia,
        zoom: 15
    };
    var mapSize1 = {
        center: mapChinese,
        zoom: 15
    };

    var map1 = new google.maps.Map(mapCanvas1, mapSize);
    var map2 = new google.maps.Map(mapCanvas2, mapSize1);

    var marker1 = new google.maps.Marker({
      position: mapAustralia,
      animation: google.maps.Animation.BOUNCE
    });

    var marker2 = new google.maps.Marker({
      position: mapChinese,
      animation: google.maps.Animation.BOUNCE
    });


    marker1.setMap(map1);
    marker2.setMap(map2);

  }

})();
