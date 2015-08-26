function getFoods() {
	$.get("/foods", function(res) {
		// console.log(res);
		// template response of food items
		  var foods = JSON.parse(res);
		// generate a template mold
		var foodTemplate = _.template($("#food-template").html());
		// clears existing items
		$("#food-ul").empty();
		// iterates through foods
		foods.forEach(function (food) {
			// return foodTemplate(food);
			var foodHTML = foodTemplate(food);
			$("#food-ul").append(foodHTML);
		});
	});
};
