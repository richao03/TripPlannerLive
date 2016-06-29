 $(document).ready(function() {
     var allDays = []
     var activeDay = 0
         //push empty object for each day
         //each selector + button sets property to the empty object
         //each - button needs to remove property from the object via keys

     $(document).on('click', '.anyday', function() {


         //sets active day
         var target = $(this).prev()
         if (!target[0]) {
             activeDay = 0
         } else {
             activeDay = $(this).prev()[0].textContent
         }
         //end of setting active day




         //button functions
         $('#daylabel').replaceWith('<span id="daylabel"> Day ' + $(this)[0].textContent + '</span>')

         $('.anyday').not(this).removeClass('current-day');
         $(this).toggleClass('current-day')
             //end of button functions




         //updating hotel
         if (allDays[activeDay]['hotel']) {
             $('#hotel-itinerary').replaceWith("<span class='title' id='hotel-itinerary'>" + allDays[activeDay]['hotel'] + "<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></span>")
         } else {
             $('#hotel-itinerary').replaceWith("<span class='title' id='hotel-itinerary'> </span>")
         }
         //end of update hotel

         //updating restaurant
         var targetArr = allDays[activeDay]['restaurant']
         if (allDays[activeDay]['restaurant']) {
             $('#restaurantItinerary').replaceWith("<div class='title' id='restaurantItinerary'>" + "" + "</div>")
             for (var i = 0; i < targetArr.length; i++) {
                 $('#restaurantItinerary').append("<div class='title' id='restaurantItinerary'>" + targetArr[i] + "<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></div>")
             }
         } else {
             $('#restaurantItinerary').replaceWith("<span class='title' id='restaurantItinerary'> </span>")
         }
         //end of update restaurant

         //updating activity
         var targetArr = allDays[activeDay]['activity']
         if (allDays[activeDay]['activity']) {
             $('#activityItinerary').replaceWith("<div class='title' id='activityItinerary'>" + "" + "</div>")
             for (var i = 0; i < targetArr.length; i++) {
                 $('#activityItinerary').append("<div class='title' id='activityItinerary'>" + targetArr[i] + "<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></div>")
             }
         } else {
             $('#activityItinerary').replaceWith("<span class='title' id='activityItinerary'> </span>")
         }
         //end of update activity


     })


     var allHotels = []
     $.each(hotels, function(index, value) { allHotels.push("<option>" + value.name + "</option>") })
     $('#hotel-choices').append(allHotels)


     var allRestaurants = []
     $.each(restaurants, function(index, value) { allRestaurants.push("<option>" + value.name + "</option>") })
     $('#restaurant-choices').append(allRestaurants)

     var allActivities = []
     $.each(activities, function(index, value) { allActivities.push("<option>" + value.name + "</option>") })
     $('#activity-choices').append(allActivities)



     // $('#hotelAdd').on('click', function (){
     //   console.log($('#hotelItinerary'))
     //     $('#hotelItinerary').replaceWith("<span class='title' id='hotelItinerary'>"+ $('#hotel-choices').val() +"<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></span>")
     // })

     $('#hotelAdd').on('click', function() {
         allDays[activeDay]['hotel'] = $('#hotel-choices').val()

         $('#hotel-itinerary').replaceWith("<span class='title' id='hotel-itinerary'>" + allDays[activeDay]['hotel'] + "<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></span>")
     })



     $('#restaurantAdd').on('click', function() {
         var targetArr = allDays[activeDay]['restaurant']
         allDays[activeDay]['restaurant'].push($('#restaurant-choices').val())
         console.log(allDays[activeDay]['restaurant'])
         $('#restaurantItinerary').replaceWith("<div class='title' id='restaurantItinerary'>" + "" + "</div>")
         for (var i = 0; i < targetArr.length; i++) {
             $('#restaurantItinerary').append("<div class='title' id='restaurantItinerary'>" + targetArr[i] + "<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></div>")
         }


     })



     $('#activityAdd').on('click', function() {

         var targetArr = allDays[activeDay]['activity']
         allDays[activeDay]['activity'].push($('#activity-choices').val())
         console.log(allDays[activeDay]['activity'])
         $('#activityItinerary').replaceWith("<div class='title' id='activityItinerary'>" + "" + "</div>")
         for (var i = 0; i < targetArr.length; i++) {
             $('#activityItinerary').append("<div class='title' id='activityItinerary'>" + targetArr[i] + "<button class='btn btn-xs btn-danger remove btn-circle' id='removebtn'>x</button></div>")
         }

     })



     $("#day-add").on("click", function() {
         var target = $(this).prev()
         if (!target[0]) {
             activeDay = 0
         } else {
             activeDay = target[0].textContent
         }
         console.log('active Day:', activeDay)


         var number = 0;
         if ($(this).prev()[0] === undefined) {
             number += 1;
         } else {
             number = Number($(this).prev()[0].textContent) + 1;
         }
         $('.anyday').not(this).removeClass('current-day');
         $(this).parent().append('<button class="btn btn-circle day-btn anyday current-day" id="+number+ "  >' + number + '</button>');


         $(this).parent().append(this);
         allDays.push({ hotel: "", restaurant: [], activity: [] })

     })


     $(document).on("click", "#removebtn", function() {
             var targetObj = allDays[activeDay]
             for (var key in targetObj) {
                 if (targetObj[key] == allDays[activeDay]['hotel']) {
                     allDays[activeDay]['hotel'] = ""
                     $('#hotel-itinerary').replaceWith("<span class='title' id='hotel-itinerary'> </span>")
                 } else if (typeof targetObj[key] == 'object'){
                 for (var i = 0; i < targetObj[key].length; i++) {
                  console.log(targetObj[key][i])
                  console.log($(this).parent()[0].textContent)
                  if(targetObj[key][i] == $(this).parent()[0].textContent){
                    allDays[activeDay]['restaurant'][key].splice(i,1)
                  }
                }
                 //     for (var j = 0; j < targetObj['restaurant'].length; j++) {
                 //  if(targetObj[key][i]==targetObj['restaurant'][j]){
                 //    console.log(targetObj['restaurant'][j])
                 //    targetObj['restaurant'].splice(j,1)

                 //  }
                 //       }
                 //     }

                 }
             }

         })



 })
