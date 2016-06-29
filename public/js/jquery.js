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
    $('#hotelItinerary').replaceWith("<span class='title'>"+ $('#hotel-choices').val() +"</span>")
})



$('#restaurantAdd').on('click',  function (){
  $('#restaurantItinerary').append("<span class='title'>"+ $('#restaurant-choices').val() +"</span>")
})

$('#activityAdd').on('click', function (){
  $('#activityItinerary').append("<span class='title'>"+ $('#activity-choices').val() +"</span>")
})





})
