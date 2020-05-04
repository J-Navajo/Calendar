// use moment.js that gets the date
const date = '2019-03-09';
const format = 'LLLL';
const result = moment().format('MMMM Do YYYY, h:mm:ss a');
let today = $("todays-date");
$("#todays-date").html(result);
// put the date at the top of the page
const hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// add a function that loops through all of the hours
function hourLoop() {
    for (let i = 0; i < hourArray.length; i++) {


        var row = $("<div class='row time-block'>")
        var col = $("<div class='col-md-1 hour'>")

        if (hourArray[i] >= 12) {

            if (hourArray[i] > 12) {
                var result = hourArray[i] - 12;
                col.append(result + " PM")
            }
            else {
                col.append(hourArray[i] + " PM")
            }
        }
        else {
            col.append(hourArray[i] + " AM")
        }


        var textarea = $("<textarea class='col-md-10'>")

         var getHour = moment().hour()
        if (getHour > hourArray[i]) {
            textarea.addClass("future")
        }
        else if (getHour === hourArray[i]) {
            textarea.addClass("present")
        } else {
            textarea.addClass("past")
        }
        
        var getData = localStorage.getItem("text-"+i)
        textarea.attr("id", "text-" + i)
         textarea.val(getData)
        var button = $("<button class='btn saveBtn col-md-1' data-id='"+i+"' >")
        var icon = $("<i = class='fas fa-save'>")
        button.append(icon)

        row.append(col, textarea, button)
        $("#display").append(row)
    }


    $(".saveBtn").on("click", function () {
            var i = $(this).attr("data-id")
            var textbox = $("#text-"+i).val()
            localStorage.setItem("text-"+i, textbox)
    })



}



hourLoop()

{/* <div id="hour-10" class="row time-block">
<div class="col-md-1 hour">
  10AM
</div>
<textarea class="col-md-10 description">
</textarea>
<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
</div> */}
// any hour that is in the past you will use jQuery to change the color

// use text area to be able to type stuff into the hour slots and save into local storage

// when page loads gotta be able to get from local storage and then load on to the page

// 

