function initMap() {
        // Geolocation APIに対応している
        if (navigator.geolocation) {
            // 現在地を取得
            navigator.geolocation.getCurrentPosition(
                // 取得成功した場合
                function(position) {
                    // 緯度・経度を変数に格納
                    var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    var directionsService = new google.maps.DirectionsService;
                    var directionsDisplay = new google.maps.DirectionsRenderer;
                    // マップオプションを変数に格納
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 15,
                        center: {lat: 33.8436233, lng: 132.7564573},
                        "clickableIcons": true, "disableDoubleClickZoom": false, "draggable": true, "fullscreenControl": true,
                        "keyboardShortcuts": true, "mapMaker": false, "mapTypeControl": true, "mapTypeControlOptions":
                            {  "text": "Default (depends on viewport size etc.)",  "style": 0 }, "mapTypeId": "roadmap", "rotateControl": true, "scaleControl": true,
                        "scrollwheel": true, "streetViewControl": true, "styles":
                            [
                                {   "featureType": "all",   "elementType": "labels.text.fill",   "stylers": [
                                    {     "saturation": 36    },    {     "color": "#ffffff"    },    {     "lightness": 40    }   ]    },
                                {   "featureType": "all",   "elementType": "labels.text.stroke",   "stylers": [
                                    {     "visibility": "off"    },    {     "color": "#000000"    },    {     "lightness": 16    }   ] },
                                {   "featureType": "all",   "elementType": "labels.icon",   "stylers": [
                                    {     "visibility": "off"    }   ]  },
                                {   "featureType": "administrative",   "elementType": "geometry.fill",   "stylers": [
                                    {     "color": "#c0c0c0"    },    {     "lightness": 20    },    {     "visibility": "on"    }   ]  },
                                {   "featureType": "administrative",   "elementType": "geometry.stroke",   "stylers": [
                                    {     "color": "#000000"    },    {     "lightness": 17    },    {     "weight": 1.2    },    {     "visibility": "off"    }   ]    },
                                {   "featureType": "landscape",   "elementType": "geometry",   "stylers": [
                                    {     "color": "#000000"    },    {     "lightness": 20    }   ]    },
                                {   "featureType": "landscape",   "elementType": "geometry.fill",   "stylers": [
                                    {     "color": "#3f3f3f"    }   ]  },
                                {   "featureType": "landscape",   "elementType": "geometry.stroke",   "stylers": [
                                    {     "visibility": "off"    }   ]  },
                                {   "featureType": "landscape.man_made",   "elementType": "geometry.fill",   "stylers": [
                                    {     "color": "#333333"    },    {     "visibility": "on"    },    {     "saturation": "0"    },    {     "lightness": "0"    },    {     "gamma": "1.00"    }   ]  },
                                {   "featureType": "landscape.man_made",   "elementType": "geometry.stroke",   "stylers": [
                                    {     "visibility": "off"    }   ]  },
                                {   "featureType": "landscape.natural",   "elementType": "geometry.fill",   "stylers": [
                                    {     "color": "#2b2b2b"    },    {     "visibility": "on"    },    {     "gamma": "1"    },    {     "lightness": "0"    },    {     "saturation": "0"    }   ]  },
                                {   "featureType": "landscape.natural",   "elementType": "geometry.stroke",   "stylers": [
                                    {     "visibility": "off"    }   ]  },
                                {   "featureType": "landscape.natural.landcover",   "elementType": "geometry.fill",   "stylers": [
                                    {     "visibility": "off"    },    {     "color": "#ff0000"    }   ]  },
                                {   "featureType": "landscape.natural.landcover",   "elementType": "geometry.stroke",   "stylers": [
                                    {     "visibility": "off"    }   ]  },
                                {   "featureType": "landscape.natural.terrain",   "elementType": "geometry.fill",   "stylers": [
                                    {     "visibility": "on"    },    {     "color": "#222222"    }   ]  },
                                {   "featureType": "landscape.natural.terrain",   "elementType": "geometry.stroke",   "stylers": [
                                    {     "visibility": "off"    }   ]  },
                                {   "featureType": "poi",   "elementType": "geometry",   "stylers": [
                                    {     "color": "#000000"    },    {     "lightness": 21    }   ]  },
                                {   "featureType": "poi",   "elementType": "geometry.fill",   "stylers": [
                                    {     "color": "#4a4a4a"    },    {     "visibility": "on"    }   ]  },
                                {   "featureType": "road.highway",   "elementType": "geometry.fill",   "stylers": [
                                    {     "color": "#ac9455"    },    {     "lightness": "0"    },    {     "gamma": "1.00"    }   ]  },
                                {   "featureType": "road.highway",   "elementType": "geometry.stroke",   "stylers": [
                                    {     "color": "#000000"    },    {     "lightness": 29    },    {     "weight": 0.2    }   ]  },
                                {   "featureType": "road.arterial",   "elementType": "geometry",   "stylers": [
                                    {     "color": "#ac9455"    },    {     "lightness": "0"    }   ]  },
                                {   "featureType": "road.arterial",   "elementType": "geometry.fill",   "stylers": [
                                    {     "color": "#ac9455"    }   ]  },
                                {   "featureType": "road.arterial",   "elementType": "geometry.stroke",   "stylers": [
                                    {     "visibility": "off"    }   ]  },
                                {   "featureType": "road.local",   "elementType": "geometry",   "stylers": [
                                    {     "color": "#000000"    },    {     "lightness": 16    }   ]  },
                                {   "featureType": "road.local",   "elementType": "geometry.fill",   "stylers": [
                                    {     "color": "#222222"    }   ]  },
                                {   "featureType": "road.local",   "elementType": "geometry.stroke",   "stylers": [
                                    {     "visibility": "off"    }   ]  },
                                {   "featureType": "transit",   "elementType": "geometry",   "stylers": [
                                    {     "color": "#000000"    },    {     "lightness": 19    }   ]  },
                                {   "featureType": "water",   "elementType": "geometry",   "stylers": [
                                    {     "color": "#000000"    },    {     "lightness": 17    }   ]  },
                                {   "featureType": "water",   "elementType": "geometry.fill",   "stylers": [
                                    {     "color": "#1a1a1a"    }   ]  } ]
                    });
                    directionsDisplay.setMap(map);
                    var onChangeHandler = function() {
                        calculateAndDisplayRoute(directionsService, directionsDisplay);
                    };
                    document.getElementById('start').addEventListener('change', onChangeHandler);
                    document.getElementById('end').addEventListener('change', onChangeHandler);
                },
                // 取得失敗した場合
                function(error) {
                    // エラーメッセージを表示
                    switch(error.code) {
                        case 1: // PERMISSION_DENIED
                            alert("位置情報の利用が許可されていません");
                            break;
                        case 2: // POSITION_UNAVAILABLE
                            alert("現在位置が取得できませんでした");
                            break;
                        case 3: // TIMEOUT
                            alert("タイムアウトになりました");
                            break;
                        default:
                            alert("その他のエラー(エラーコード:"+error.code+")");
                            break;
                    }
                }
            );
            // Geolocation APIに対応していない
        } else {
            alert("この端末では位置情報が取得できません");
        }
    }
    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        // Geolocation APIに対応している
        if (navigator.geolocation) {
            // 現在地を取得
            navigator.geolocation.getCurrentPosition(
                // 取得成功した場合
                function(position) {
                    // 緯度・経度を変数に格納
                    var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    directionsService.route({
                        origin: mapLatLng,
                        destination: document.getElementById('end').value,
                        travelMode: 'DRIVING'
                    }, function(response, mapLatLng) {
                        if (mapLatLng === 'OK') {
                            directionsDisplay.setDirections(response);
                        } else {
                            window.alert('Directions request failed due to ' + mapLatLng);
                        }
                    });
                },
                // 取得失敗した場合
                function(error) {
                    // エラーメッセージを表示
                    switch(error.code) {
                        case 1: // PERMISSION_DENIED
                            alert("位置情報の利用が許可されていません");
                            break;
                        case 2: // POSITION_UNAVAILABLE
                            alert("現在位置が取得できませんでした");
                            break;
                        case 3: // TIMEOUT
                            alert("タイムアウトになりました");
                            break;
                        default:
                            alert("その他のエラー(エラーコード:"+error.code+")");
                            break;
                    }
                }
            );
            // Geolocation APIに対応していない
        } else {
            alert("この端末では位置情報が取得できません");
        }
    }
