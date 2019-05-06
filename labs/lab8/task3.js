/* Task3.js - Add your Java Script Code Here */
const btnPressed = value => {
  value = parseInt(value);
  var output = document.getElementById('mydata');
  var i, sum = 0;
  for(i = 1; i <= value; i++){
    sum += i;
  }
  output.innerHTML = "Result = " + sum;
}
