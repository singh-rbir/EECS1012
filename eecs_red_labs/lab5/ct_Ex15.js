// in Ex9 to Ex15, change the name of the following function properly
function problem_15() {

  /* this statement defines an object reference to the
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  document.getElementById("output").setAttribute("style", "text-align: left; font-size: 12px");
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));


  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+a+"<br><br>";

  // translate rest of your flowcharts to js here:
  var i, j;
  for(i = 1; i <= a; i++){
    for(j = 1; j <= i; j++){
      outputObj.innerHTML += "[] ";
    }
    outputObj.innerHTML += "<br>";
  }


  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
