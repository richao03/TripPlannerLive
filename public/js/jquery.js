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

})



$('#activityAdd').on('click', function (){
  $('#activityItinerary').append("<span class='title'>"+ $('#activity-choices').val() +"<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></span>")
})


$("#day-add").on("click", function(){
    var number = 0;
    if($(this).prev()[0] === undefined) {
        number += 1;
    }else{
        number = Number($(this).prev()[0].textContent) + 1;
    }


    $(this).parent().append('<button class="btn btn-circle day-btn anyday" id="+number+"  >'+number+'</button>');
    $(this).parent().append(this);
})


})

$(document).on("click", "#removebtn", function(){

	$(this).parent().remove();

})

$(document).on('click', '.anyday', function(){
  $('#something').replaceWith('<span id="something"> Day ' + $(this)[0].textContent +'</span>')
  $('.anyday').not(this).removeClass('current-day');
  $(this).toggleClass('current-day')
})
