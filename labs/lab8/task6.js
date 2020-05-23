/* Task6.js - Add your Java Script Code Here */
var count = 20;

btnPressed = () =>{
  var output = document.getElementById('mydata');
  if(count <= 0){
    output.innerHTML = "BOOM!";
  } else{
    output.innerHTML = count;
  }
  count--;
}
