// in Ex9 to Ex15, change the name of the following function properly
function problem_10() {

  /* this statement defines an object reference to the
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));


  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+a+"<br><br>number of 3's: ";

  // translate rest of your flowcharts to js here:
  var counter = 0;
  while(a > 0){
    var digit = a % 10;
    if(digit == 3){
      counter++;
    }
    a = parseInt(a/10);
  }

  outputObj.innerHTML=outputObj.innerHTML+counter;


  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
