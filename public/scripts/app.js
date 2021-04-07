$(document).ready(function() {
  const createMapElement = function(users) {
    for (let map of users) {
      $("#map-container").append(`
        <article class=map-grid>
        <div id="${map.id}" class='map map-item' style='width: 100%; height: 100%;'></div>
        <h3 class=map-name title='view map'>${map.title}</h3>
              <span class=user-handle title="go to user's maps"> ${map.email} <i class="fas fa-atlas"></i></span><br>
              <a class="map-option fav" data-map-id="${map.id}" href="http://" title='Favourite Map'><i class="fas fa-heart"></i></a>
              <a class=map-option href="http://" title='Delete Map'><i class="fas fa-times"></i></a>
              <a class=map-option href="http://" title='Add pins from Map'><i class="fas fa-map-marked"></i></a>
              <a class=map-option href="http://" title='Remove Pins from Map'><i class="far fa-map"></i></a>
              <a class=map-option href="http://" title='Edit Map'><i class="fas fa-edit"></i></a>
              </article>
              `);
    }
  };

  getCookie = function(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  };

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then(users => {
    createMapElement(users.users);
    if (getCookie("user_id")) {
      for (let map of users.users) {
        if (map.user_id === Number(getCookie("user_id"))) {
          const capitalName = map.name
            .split("")
            .map((el, i) => (i === 0 ? el.toUpperCase() : el))
            .join("");

          const html = `Welcome <span id="logged-name">${capitalName}   </span>`;
          $("#input-form input")
            .attr("name", "email")
            .attr("type", "email")
            .attr("placeholder", "example@email.com")
            .val("")
            .hide(500);
          $("#form-msg").html(html);
          $("#login-button").hide(500);
          $("#logout-button")
            .text("Logout")
            .show(500);
          $("#register-button").hide(500);
          $(".error-message").hide();
          $(".nav-item").show(500);
        }
      }
    }
    window.maps = {};
    window.mapmarkers = {};

    $.ajax({
      method: "GET",
      url: "/api/markers"
    }).then(response => {
      for (let marker of response.markers) {
        let map_id = marker.map_id;
        if (mapmarkers[map_id]) {
          mapmarkers[map_id].push(marker);
        } else {
          mapmarkers[map_id] = [marker];
        }
      }
      for (let map of response.markers) {
        window.maps[map.map_id] = {
          user_id: map.user_id,
          markers: []
        };
        mapMaker(map.map_id, mapmarkers);
      }
    });

    for (let map of users.users) {
      window.maps[map.id] = {
        user_id: map.user_id,
        markers: []
      };
      let randHue = Math.random() * 360;
      mapMaker(map.id, mapmarkers);
      $(`#${map.id}`).css(
        "filter",
        `invert(1) sepia(0.8) hue-rotate(${randHue}deg)`
      );
    }
  });
});

