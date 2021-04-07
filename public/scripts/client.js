$(document).ready(() => {
  console.log("Form Ready");
  $(".nav-item").hide();

  let hue = 122;
  let contrast = 2.4;
  let sepia = 0;
  let invert = 0.7;
  $(document).keypress(e => {
    let filter = `invert(${invert}) hue-rotate(${hue}deg) contrast(${contrast}) sepia(${sepia}%)`;
    if (e.key === "`") {
      hue = 122;
      contrast = 2.4;
      sepia = 0;
      invert = 0.7;
      $(".map-item, .map-item > div").css("filter", filter);
    }
    if (e.key === "0") {
      invert = 0;
      $(".map-item, .map-item > div").css("filter", filter);
    }

    if (e.key === "1") {
      hue += 5;
      $(".map-item, .map-item > div").css("filter", filter);
    }

    if (e.key === "2") {
      contrast += 0.2;
      $(".map-item, .map-item > div").css("filter", filter);
    }
    if (e.key === "3") {
      contrast -= 0.2;
      $(".map-item, .map-item > div").css("filter", filter);
    }
    if (e.key === "4") {
      contrast += 10;
      $(".map-item, .map-item > div").css("filter", filter);
    }
    if (e.key === "5") {
      sepia -= 10;
      $(".map-item, .map-item > div").css(
        "filter",
        `invert(0.7) hue-rotate(${hue}deg) contrast(${contrast})`
      );
    }

    if (e.key === "9") {
      hue -= 5;
      $(".map-item, .map-item > div").css(
        "filter",
        `invert(0.7) hue-rotate(${hue}deg) contrast(2.4)`
      );
    }

    if (e.key === "-") {
      hue -= 5;
      $(".map-item, .map-item > div").css("filter", `none`);
    }
  });

  $("#create-map-cancel").click(e => {
    e.preventDefault();
    $("#create-map-div").toggle();
  });

  $("#nav-create-map").click(e => {
    $("#create-map-div").toggle();
  });

  $("#input-form").submit(e => {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "/login",
      data: { input: $("#input-form input").val() }
    })
      .then(res => {
        if (res === "email validated") {
          $("#form-msg").text("Enter Password:  ");
          $("#input-form input")
            .attr("name", "password")
            .attr("type", "password")
            .attr("placeholder", "********")
            .val("");
          $("#login-button").show(500);
          $("#logout-button")
            .addClass("btn-warning")
            .removeClass("btn-dark")
            .text("Back")
            .show(500);
          $("#register-button").hide(500);
          $(".error-message").hide(500);
          $(".nav-item").hide(500);
          return;
        }
        if (res.text === "password validated") {
          const capitalName = res.name
            .split("")
            .map((el, i) => (i === 0 ? el.toUpperCase() : el))
            .join("");
          console.log(capitalName);
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
          window.location.reload();
          return "";
        }
        return;
      })
      .catch(e => {
        console.log("error", e);
        const errorMSG = e.responseText;
        $(".error-message").hide();
        $("#form-msg")
          .before(`<span class='error-message text-danger'>${errorMSG} </span>`)
          .show(500);
      });
  });

  $("#logout-button").click(e => {
    $.ajax({
      type: "POST",
      url: "/logout"
    }).then(() => {
      console.log("logout");
      $(".error-message").hide();
      $("#input-form input")
        .attr("name", "email")
        .attr("type", "email")
        .attr("placeholder", "example@email.com")
        .val("")
        .show(500);
      $("#form-msg").text("Enter Email:  ");
      $("#register-button").show(500);
      $(".nav-item").hide(500);
      $("#login-button").show(500);
      $("#logout-button")
        .addClass("btn-warning")
        .removeClass("btn-dark");
      window.location.reload();
      return;
    });
  });

  //works bring user specific map back and front
  $("#map")
    .css("z-index", 5)
    .css("filter", "invert(1)");
  $("#map")
    .css("z-index", -1000)
    .css("filter", "invert(1) blur(1.1px)");
});
