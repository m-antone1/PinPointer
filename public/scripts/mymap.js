$(document).ready(function() {
  const createUserMapElement = function(users, userid) {
    $("#map-container").empty();
    for (let map of users) {
      if (map.user_id === userid || true) {
        $("#map-container").append(`
          <article class=map-grid>
          <div id="${map.id}" class='map map-item' style='width: 100%; height: 100%;'></div>
          <h3 class=map-name title='view map'>${map.title}</h3>
              <span class=user-handle title="go to user's maps"> ${map.email} <i class="fas fa-atlas"></i></span><br>
              <a data-map-id="${map.id}" class="map-option fav" href="http://" title='Favourite Map'><i class="fas fa-heart"></i></a>
              <a class=map-option href="http://" title='Delete Map'><i class="fas fa-times"></i></a>
              <a class=map-option href="http://" title='Add pins from Map'><i class="fas fa-map-marked"></i></a>
              <a class=map-option href="http://" title='Remove Pins from Map'><i class="far fa-map"></i></a>
              <a class=map-option href="http://" title='Edit Map'><i class="fas fa-edit"></i></a>
            </article>
          `);
      }
    }
  };

  getCookie = function(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  };
  $("#usermaps").on("click", function() {
    $.ajax({
      method: "GET",
      url: "/api/favourites"
    }).then(users => {
      createUserMapElement(users.maps, Number(getCookie("user_id")));
      window.maps = {};

      $.ajax({
        method: "GET",
        url: "/api/markers"
      }).then(response => {
        let mapmarkers = {};
        for (let marker of response.markers) {
          let map_id = marker.map_id;
          if (mapmarkers[map_id]) {
            mapmarkers[map_id].push(marker);
          } else {
            mapmarkers[map_id] = [marker];
          }
        }

        for (let map of users.maps) {
          window.maps[map.id] = {
            user_id: map.user_id,
            markers: []
          };
          mapMaker(map.id, mapmarkers);
          let randHue = Math.random() * 360;
          $(`#${map.id}`).css(
            "filter",
            `invert(1) sepia(0.8) hue-rotate(${randHue}deg)`
          );
        }
      });
    });
  });
});
