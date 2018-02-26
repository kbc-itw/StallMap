

var map;
var marker = [];
var infoWindow = [];
var markerData = [ // マーカーを立てる場所名・緯度・経度
    {
        name: 'MBC',
        lat: 33.84056,
        lng: 132.772447,
        Decision:false
    }, {
        name: 'サンプル1',
        lat: 33.840000,
        lng: 132.672440,
        Decision:false
    }, {
        name: 'サンプル',
        lat: 33.333333,
        lng: 132.5725000,
        Decision:false
    }
];
var mapLatLngs=[];
function initMap() {

    if (navigator.geolocation) {
        // 現在地を取得
        navigator.geolocation.getCurrentPosition(
            // 取得成功した場合
            function(position) {
                // 緯度・経度を変数に格納
                var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                mapLatLngs=new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                // マップ＆マップオブジェクト作成
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom : 15,          // 拡大倍率
                    center : mapLatLng,  // 緯度・経度
                    // マップのデザインを変更
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

                //　マップに自身のマーカーを表示する
                var mymarker = new google.maps.Marker({
                    map : map,             // 対象の地図オブジェクト
                    position : mapLatLng,   // 緯度・経度
                    animation: google.maps.Animation.DROP,
                    icon: "my.png"
                });

                // サンプルマーカー
                // マーカー毎の処理
                for (var i = 0; i < markerData.length; i++) {
                    markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
                    marker[i] = new google.maps.Marker({ // マーカーの追加
                        position: markerLatLng, // マーカーを立てる位置を指定
                        map: map, // マーカーを立てる地図を指定
                        name:markerData[i].name,//マーカー名
                        lat:markerData[i]['lat'],//マーカー位置の緯度
                        lng:markerData[i]['lng'],//マーカー位置の経度
                        icon: "mbc.png"
                    });

                    infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
                        content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
                    });

                    markerEvent(i); // マーカーにクリックイベントを追加
                }

                //     クリックされた場合のイベント




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
function markerEvent(i) {//i番目のマーカーに対するイベント

    marker[i].addListener('click', function() { // マーカーをクリックしたとき
        console.log(marker[i].lat+"!"+marker[i].lng);
        if (navigator.geolocation) {
            // 現在地を取得
            navigator.geolocation.getCurrentPosition(
                // 取得成功した場合

                function(position) {

                    // 緯度・経度を変数に格納
                    var request = {
                        origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), // 出発地
                        destination: new google.maps.LatLng(marker[i].lat, marker[i].lng), // 目的地
                        travelMode: google.maps.DirectionsTravelMode.WALKING, // 交通手段(歩行。DRIVINGの場合は車)
                    };
                    var d = new google.maps.DirectionsService(); // ルート検索オブジェクト
                    var r = new google.maps.DirectionsRenderer({ // ルート描画オブジェクト
                        map: map, // 描画先の地図
                        preserveViewport: true, // 描画後に中心点をずらさない
                    });

                    d.route(request, function(result, status){
                        // ルート検索
                        if (status == google.maps.DirectionsStatus.OK&&markerData[i].Decision==false) {
                            // OKの場合ルート描画
                            r.setDirections(result);
                            //markerData[i].Decision=true;
                        }else{
                            console.log("hahahahha");

                        }


                    });


                    infoWindow[i].open(map, marker[i]) // 吹き出しの表示

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

    });


}
