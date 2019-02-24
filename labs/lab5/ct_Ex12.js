// in Ex9 to Ex15, change the name of the following function properly
function problem_12() {

  /* this statement defines an object reference to the
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));


  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+a+"<br><br>equal to it's reverse? ";

  // translate rest of your flowcharts to js here:
  var orig = a;
  var rev = 0;
  while(a > 0){
    var digit = a % 10;
    rev = rev * 10 + digit;
    a = Math.floor(a/10);
  }

  if(rev == orig){
    outputObj.innerHTML += "Yes";
  } else{
    outputObj.innerHTML += "No";
  }



  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
