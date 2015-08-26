// On page load || document.ready
$(function() {
  getFoods();
  // set event listeners
  $('#food-form').on('submit', function(e) {
    // prevent form submission
    e.preventDefault();
    //grab data from form
    formData = $(this).serialize();
    // post data to server w/ AJAX
    $.post("/foods", formData).done(function() {
      // when food ahs been succesfully do something...
      getFoods();
    });
  })
});

// Function definitions
function getFoods() {
  $.get("/foods", function(res){ 
    var foods = JSON.parse(res);
    // grab foods template
    template = _.template($("#foods-template").html());
    // input foods into template and append to parent
    foodItems = foods.map(function(food) {
      return template(food);
    });
    // clear content (for repeated use)
    $("#food-ul").html("");
    // append foods to ul
    $("#food-ul").append(foodItems);
  });
}