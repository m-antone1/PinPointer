//helper function that generates new map marker on click event
const placeMarker = function(location, map, mapid, existingMarker) {
  let gmarker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true
  });

  window.maps[mapid].markers.push({
    userid: gmarker.user_id,
    lat: gmarker.position.lat(),
    lng: gmarker.position.lng()
  });

  let popover = renderMarkerPopover(gmarker, existingMarker, mapid);

  gmarker.addListener("click", function(event) {
    popover.open(map, gmarker);
  });
  gmarker.addListener("dblclick", function(event) {
    if (!existingMarker) {
      gmarker.setMap(null);
    }
  });
};

const deleteMarkerData = marker_id => {
  $.ajax({
    method: "POST",
    url: `/api/markers/delete/${marker_id}`
  });
};

const editMarkerData = marker => {
  console.log("marker", marker);
  $.ajax({
    method: "POST",
    url: `/api/markers/edit/${marker.id}`
  });
};

const renderMarkerPopover = (marker, existingMarker, mapid) => {
  getCookie = function(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  };
  if (existingMarker) {
    console.log("existingMARKER", existingMarker);
    return new google.maps.InfoWindow({
      content: `<div id="content"
      style='filter:invert(1) hue-rotate(243deg);'
      >
        <div id="siteNotice">
        </div style='text-shadow:none; color:#fff;'>
        <h1 id="firstHeading" class="firstHeading">${existingMarker.title}</h1>
        <div id="bodyContent" style='text-shadow:none; color:#fff;'>
        <div>
        <p style='text-shadow:none; color:#fff;'><b>${
          existingMarker.description
        }</b>
        </div>
        <div>
        <p style='text-shadow:none; color:#fff;'> <b>${
          existingMarker.address
        }</b>
        </div>
        <div>
        <img style='filter:invert(0);max-height:150px;' src='${
          existingMarker.image_url
        }'  style="height:100px;"
        style="width:100px;">
        </div>
        <div>
        ${
          getCookie("user_id")
            ? `<button id="delete-btn" onclick="deleteMarkerData(${existingMarker.id})">Delete</button>
          <button id="edit-btn" onclick="editMarkerData(${existingMarker.id})">Edit</button>`
            : ""
        }
        </div>
        </div>`
    });
  } else {
    //if cookie exists

    if (getCookie("user_id")) {
      return new google.maps.InfoWindow({
        content: `<form id="marker-form" action="/api/maps/markers" method = "POST">
          <p>Create New Marker</p>
          <div>
            <input name="title" placeholder="Title" />
          </div>
          <div>
            <input type="text" name="description" placeholder="Description" />
          </div>
          <div>
            <input type="text" name="address" placeholder="Address" />
          </div>
          <div>
            <input type="text" name="image_url" placeholder="Image Url" />
          </div>
          <input type="hidden" name="user_id" value="1" />
          <input type="hidden" name="mapid" value="${mapid}" />
          <input type="hidden" name="lat" value="${marker.position.lat()}" />
          <input type="hidden" name="lng" value="${marker.position.lng()}" />
          <div>
            <button type="submit">Create</button>
            <a id="login-form__cancel" href="/">Cancel</a>
          </div>
        </form>
          `
      });
    }
  }
};

$(document).on("submit", "#marker-form", function(evt) {
  evt.preventDefault();
  let markerData = {
    title: $(this.title).val(),
    description: $(this.description).val(),
    address: $(this.address).val(),
    image_url: $(this.image_url).val(),
    user_id: $(this.user_id).val(),
    map_id: $(this.mapid).val(),
    latitude: $(this.lat).val(),
    longitude: $(this.lng).val()
  };

  $.ajax({
    url: "/api/maps/markers",
    method: "POST",
    data: markerData
  }).then(data => {
    res.send(data);
  });
});

// Initialize and add the map
window.initMap = mapid => {
  mapMaker("map");
};

// helper function that generates user maps.
// needs to be refactored to generate all maps connected to currently logged in user
const mapMaker = function(mapid, mapmarkers) {
  const lhl = { lat: 51.04635267364882, lng: -114.07574283068925 };

  let map = new google.maps.Map(document.getElementById(mapid), {
    zoom: 14,
    center: lhl
  });

  if (mapmarkers) {
    for (let key in mapmarkers) {
      if (key == mapid) {
        for (let marker of mapmarkers[key]) {
          let lat = Number(marker.latitude);
          let lng = Number(marker.longitude);
          placeMarker({ lat, lng }, map, mapid, marker);
        }
      }
    }
  }

  // create a loop using all the markers and place marker
  // on click map event handler
  google.maps.event.addListener(map, "click", function(event) {
    if (document.cookie) {
      placeMarker(event.latLng, map, mapid);
    }
  });
};