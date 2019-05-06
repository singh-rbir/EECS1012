/* Task5.js - Add your Java Script Code Here */
function btnPressed(){
  var output = document.getElementById("mydata");
  var d = new Date();
  var date = d.getDate();
  var dayIndex = d.getDay();
  var monthIndex = d.getMonth();
  var year = d.getYear();

  var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  output.innerHTML = "Today is the " + date + " (" + days[dayIndex] + ") " + months[monthIndex] + " " + year;
}
