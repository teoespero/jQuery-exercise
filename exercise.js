// jQuery Exercise 

// Correctly include jQuery
// Select all divs and give them a purple background
// select the divs with class "highlight" and make them 200px wide
// select the dis with id "third" and give it an orange border
// Bonus: Select the first div only and change its font color to pink

if (jQuery){
	$("div").css("background", "purple");
	$(".highlight").css("fontSize", "200px");
	$("#third").css("border", "2px solid orange");
}
else {
	alert("jQuery is not defined");	
}

			