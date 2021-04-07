
$(document).ready(function() {
  $(document).on("click", ".fav", function(e) {
    e.preventDefault();
    let mapid = $(this).data("map-id");

    $.ajax({
      method: "POST",
      url: "/api/favourites",
      data: `mapid=${mapid}`
    }).then(response => console.log("favourited: ", response));
  });
});
