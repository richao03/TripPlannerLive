 $( document ).ready(function() {

var allHotels = []
 $.each(hotels, function(index, value){allHotels.push("<option>" + value.name + "</option>")})
$('#hotel-choices').append(allHotels)


var allRestaurants = []
$.each(restaurants, function (index, value){allRestaurants.push("<option>"+ value.name + "</option>")})
$('#restaurant-choices').append(allRestaurants)

var allActivities = []
$.each(activities, function (index, value){allActivities.push("<option>"+ value.name + "</option>")})
$('#activity-choices').append(allActivities)



$('#hotelAdd').on('click', function (){
  console.log($('#hotelItinerary'))
    $('#hotelItinerary').replaceWith("<span class='title' id='hotelItinerary'>"+ $('#hotel-choices').val() +"<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></span>")
})



$('#restaurantAdd').on('click',  function (){
  $('#restaurantItinerary').append("<span class='title'>"+ $('#restaurant-choices').val() +"<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></span>")
  
  // console.log(this);
  // console.log(Array.from($("#restaurantItinerary").children()).indexOf(this));

  // console.log($.inArray(this, $("#restaurantItinerary").children()));
})



$('#activityAdd').on('click', function (){
  $('#activityItinerary').append("<span class='title'>"+ $('#activity-choices').val() +"<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></span>")
})




})

$(document).on("click", "#removebtn", function(){

	$(this).parent().remove();
	// console.dir(this);
	// console.log(index);
	// console.log("clicked");

})
