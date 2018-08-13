// jQuery Exercise 

// Correctly include jQuery
// Select all divs and give them a purple background
// select the divs with class "highlight" and make them 200px wide
// select the dis with id "third" and give it an orange border
// Bonus: Select the first div only and change its font color to pink

if (jQuery){

	// Select all divs and give them a purple background
	$("div").css("background", "purple"); 

	//select the divs with class "highlight" and make them 200px wide
	$("div.highlight").css("width", "200px");

	// select the dis with id "third" and give it an orange border
	$("#third").css("border", "4px solid orange");

	// Bonus: Select the first div only and change its font color to pink
	$("div:first-of-type").css("color", "pink")
}
else {
	alert("jQuery is not defined");	
}

			