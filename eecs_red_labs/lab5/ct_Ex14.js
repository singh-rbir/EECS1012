// in Ex9 to Ex15, change the name of the following function properly
function problem_14() {

  /* this statement defines an object reference to the
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));


  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+a+"<br><br>" + "Fibonacci = 0, 1, ";


  // translate rest of your flowcharts to js here:

  let secondLast = 0;
  let last = 1;
  var newVal;
  var i = 3;
  while(i <= a){
    newVal = secondLast + last;
    outputObj.innerHTML += newVal + ", ";
    secondLast = last;
    last = newVal;
    i++;
  }



  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
