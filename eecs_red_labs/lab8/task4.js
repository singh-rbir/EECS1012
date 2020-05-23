/* Task4.js - Add your Java Script Code Here */
const btnPressed = () => {
  var output = document.getElementById('mydata');
  var num1 = Math.floor((Math.random() * 6) + 1);
  var num2 = Math.floor((Math.random() * 6) + 1);
  if(num1 == num2){
    alert("DOUBLES!");
  }
  output.innerHTML = 'Dice rolls are "' + num1 + '" "' + num2 + '"';
}
