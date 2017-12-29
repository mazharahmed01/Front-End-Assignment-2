
/*java code for responsiveness*/
(function(){

  //for each round a map canvas is set up
  window.initMap = function initMap() {
    var mapCanvas1 = document.getElementById("australiaMap");
    var mapCanvas2 = document.getElementById("bahrainMap");
    var mapCanvas3 = document.getElementById("chineseMap");
    var mapCanvas4 = document.getElementById("bakuMap");
    var mapCanvas5 = document.getElementById("spanishMap");
    var mapCanvas6 = document.getElementById("monacoMap");
    var mapCanvas7 = document.getElementById("canadianMap");
    var mapCanvas8 = document.getElementById("frenchMap");
    var mapCanvas9 = document.getElementById("austrianMap");
    var mapCanvas10 = document.getElementById("britishMap");
    var mapCanvas11 = document.getElementById("germanMap");
    var mapCanvas12 = document.getElementById("hungarianMap");
    var mapCanvas13 = document.getElementById("belgianMap");
    var mapCanvas14 = document.getElementById("italianMap");
    var mapCanvas15 = document.getElementById("singaporeMap");
    var mapCanvas16 = document.getElementById("russainMap");
    var mapCanvas17 = document.getElementById("japaneseMap");
    var mapCanvas18 = document.getElementById("usaMap");
    var mapCanvas19 = document.getElementById("mexicanMap");
    var mapCanvas20 = document.getElementById("brazilianMap");
    var mapCanvas21 = document.getElementById("abuDhabiMap");

    // for each map the location is set 
    //I used googled to search each grandprix and then got the geological location
    var mapAustralia = new google.maps.LatLng(-37.849722, 144.968333);
    var mapBahrain = new google.maps.LatLng(26.0325, 50.510556);
    var mapChinese = new google.maps.LatLng(31.338889,121.219722);
    var mapBaku = new google.maps.LatLng(40.3725, 49.853333);
    var mapSpanish = new google.maps.LatLng(41.57, 2.261111);
    var mapMonaco = new google.maps.LatLng(43.734722, 7.420556);
    var mapCanadian = new google.maps.LatLng(45.500578, -73.522461);
    var mapFrench = new google.maps.LatLng(46.863242, 3.164228);
    var mapAustrian = new google.maps.LatLng(47.219722, 14.764722);
    var mapBritish = new google.maps.LatLng(52.078611, -1.016944);
    var mapGerman = new google.maps.LatLng(49.32334, 8.55194);
    var mapHungarian = new google.maps.LatLng(47.583, 19.251);
    var mapBelgian = new google.maps.LatLng(50.437222, 5.971389);
    var mapItalian = new google.maps.LatLng(45.620556, 9.289444);
    var mapSingapore = new google.maps.LatLng(1.291531, 103.86385);
    var mapRussain = new google.maps.LatLng(43.410278, 39.968271);
    var mapJapanese = new google.maps.LatLng(34.843056, 136.540556);
    var mapUsa = new google.maps.LatLng(30.132778, -97.641111);
    var mapMexican = new google.maps.LatLng(19.406111, -99.0925);
    var mapBrazilian = new google.maps.LatLng(-23.701111, -46.697222);
    var mapAbuDhabi = new google.maps.LatLng(24.467222, 54.603056);
    
    //For each map I've centred the content and set the zoom to 15
    var mapSize1 = {
        center: mapAustralia,
        zoom: 15
    };
    var mapSize2 = {
        center: mapBahrain,
        zoom: 15
    };
    var mapSize3 = {
        center: mapChinese,
        zoom: 15
    };
    var mapSize4 = {
        center: mapBaku,
        zoom: 15
    };
    var mapSize5 = {
        center: mapSpanish,
        zoom: 15
    };
    var mapSize6 = {
        center: mapMonaco,
        zoom: 15
    };
    var mapSize7 = {
        center: mapCanadian,
        zoom: 15
    };
    var mapSize8 = {
        center: mapFrench,
        zoom: 15
    };
    var mapSize9 = {
        center: mapAustrian,
        zoom: 15
    };
    var mapSize10 = {
        center: mapBritish,
        zoom: 15
    };
    var mapSize11 = {
        center: mapGerman,
        zoom: 15
    };
    var mapSize12 = {
        center: mapHungarian,
        zoom: 15
    };
    var mapSize13 = {
        center: mapBelgian,
        zoom: 15
    };
    var mapSize14 = {
        center: mapItalian,
        zoom: 15
    };
    var mapSize15 = {
        center: mapSingapore,
        zoom: 15
    };
    var mapSize16 = {
        center: mapRussain,
        zoom: 15
    };
    var mapSize17 = {
        center: mapJapanese,
        zoom: 15
    };
    var mapSize18 = {
        center: mapUsa,
        zoom: 15
    };
    var mapSize19 = {
        center: mapMexican,
        zoom: 15
    };
    var mapSize20 = {
        center: mapBrazilian,
        zoom: 15
    };
    var mapSize21 = {
        center: mapAbuDhabi,
        zoom: 15
    };

    //making map include the map canvas and centering the map and appying a
    // zoom of 15 
    var map1 = new google.maps.Map(mapCanvas1, mapSize1);
    var map2 = new google.maps.Map(mapCanvas2, mapSize2);
    var map3 = new google.maps.Map(mapCanvas3, mapSize3);
    var map4 = new google.maps.Map(mapCanvas4, mapSize4);
    var map5 = new google.maps.Map(mapCanvas5, mapSize5);
    var map6 = new google.maps.Map(mapCanvas6, mapSize6);
    var map7 = new google.maps.Map(mapCanvas7, mapSize7);
    var map8 = new google.maps.Map(mapCanvas8, mapSize8);
    var map9 = new google.maps.Map(mapCanvas9, mapSize9);
    var map10 = new google.maps.Map(mapCanvas10, mapSize10);
    var map11 = new google.maps.Map(mapCanvas11, mapSize11);
    var map12 = new google.maps.Map(mapCanvas12, mapSize12);
    var map13 = new google.maps.Map(mapCanvas13, mapSize13);
    var map14 = new google.maps.Map(mapCanvas14, mapSize14);
    var map15 = new google.maps.Map(mapCanvas15, mapSize15);
    var map16 = new google.maps.Map(mapCanvas16, mapSize16);
    var map17 = new google.maps.Map(mapCanvas17, mapSize17);
    var map18 = new google.maps.Map(mapCanvas18, mapSize18);
    var map19 = new google.maps.Map(mapCanvas19, mapSize19);
    var map20 = new google.maps.Map(mapCanvas20, mapSize20);
    var map21 = new google.maps.Map(mapCanvas21, mapSize21);
  
    //adding a map marker to each map which points out the location.
    //the marking is also animated so it bounces on the spot
    var marker1 = new google.maps.Marker({
      position: mapAustralia,
      animation: google.maps.Animation.BOUNCE
    });
    var marker2 = new google.maps.Marker({
      position: mapBahrain,
      animation: google.maps.Animation.BOUNCE
    });
    var marker3 = new google.maps.Marker({
      position: mapChinese,
      animation: google.maps.Animation.BOUNCE
    });
    var marker4 = new google.maps.Marker({
      position: mapBaku,
      animation: google.maps.Animation.BOUNCE
    });
    var marker5 = new google.maps.Marker({
      position: mapSpanish,
      animation: google.maps.Animation.BOUNCE
    });
    var marker6 = new google.maps.Marker({
      position: mapMonaco,
      animation: google.maps.Animation.BOUNCE
    });
     var marker7 = new google.maps.Marker({
      position: mapCanadian,
      animation: google.maps.Animation.BOUNCE
    });
    var marker8 = new google.maps.Marker({
      position: mapFrench,
      animation: google.maps.Animation.BOUNCE
    });
    var marker9 = new google.maps.Marker({
      position: mapAustrian,
      animation: google.maps.Animation.BOUNCE
    });
    var marker10 = new google.maps.Marker({
      position: mapBritish,
      animation: google.maps.Animation.BOUNCE
    });
    var marker11 = new google.maps.Marker({
      position: mapGerman,
      animation: google.maps.Animation.BOUNCE
    });
     var marker12 = new google.maps.Marker({
      position: mapHungarian,
      animation: google.maps.Animation.BOUNCE
    });
    var marker13 = new google.maps.Marker({
      position: mapBelgian,
      animation: google.maps.Animation.BOUNCE
    });
    var marker14 = new google.maps.Marker({
      position: mapItalian,
      animation: google.maps.Animation.BOUNCE
    });
     var marker15 = new google.maps.Marker({
      position: mapSingapore,
      animation: google.maps.Animation.BOUNCE
    });
    var marker16 = new google.maps.Marker({
      position: mapRussain,
      animation: google.maps.Animation.BOUNCE
    });
    var marker17 = new google.maps.Marker({
      position: mapJapanese,
      animation: google.maps.Animation.BOUNCE
    });
     var marker18 = new google.maps.Marker({
      position: mapUsa,
      animation: google.maps.Animation.BOUNCE
    });
    var marker19 = new google.maps.Marker({
      position: mapMexican,
      animation: google.maps.Animation.BOUNCE
    });
    var marker20 = new google.maps.Marker({
      position: mapBrazilian,
      animation: google.maps.Animation.BOUNCE
    });
    var marker21 = new google.maps.Marker({
      position: mapAbuDhabi,
      animation: google.maps.Animation.BOUNCE
    });
    //adding the marker to the map item.
    marker1.setMap(map1);
    marker2.setMap(map2);
    marker3.setMap(map3);
    marker4.setMap(map4);
    marker5.setMap(map5);
    marker6.setMap(map6);
    marker7.setMap(map7);
    marker8.setMap(map8);
    marker9.setMap(map9);
    marker10.setMap(map10);
    marker11.setMap(map11);
    marker12.setMap(map12);
    marker13.setMap(map13);
    marker14.setMap(map14);
    marker15.setMap(map15);
    marker16.setMap(map16);
    marker17.setMap(map17);
    marker18.setMap(map18);
    marker19.setMap(map19);
    marker20.setMap(map20);
    marker21.setMap(map21);
  }

})();
