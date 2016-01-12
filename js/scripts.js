$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var streetInput = $("input#street").val();
    var cityInput= $("input#city").val();
    var stateInput = $("input#state").val();
    var zipcodeInput = $("input#zipcode").val();

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);

    $("#story").show();

    event.preventDefault();
  });
});
