/* Task1.js - Add your Java Script Code Here */
function myFunction()
{
  var p = document.getElementById("mydata");
  var num = Math.random();
  // set p.innerHTML equal to YES or NO
  if(num > 0.5){
    p.innerHTML = "Yes";
  } else{
    p.innerHTML = "No";
  }
}
