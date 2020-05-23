window.onload = () =>{
  for(var i = 1; i <= 30; i++){
    var newBtn = document.createElement("button");
    $(newBtn).attr("id", "btn" + i);
    $(newBtn).html("Problem " + i);
    $("nav").append(newBtn);
    var func_name = "func" + i + "()";
    newBtn.setAttribute("onclick", func_name);
  }
}

function func1(){

  document.getElementById("problem").innerHTML = "Sum of numbers 10 to 30";

  document.getElementById("flowchart").setAttribute("src", "images/func1_1.png");
  document.getElementById("flowchart").setAttribute("style", "display: none");

  document.getElementById("js").setAttribute("src", "images/func1_2.png");
  document.getElementById("js").setAttribute("style", "display: none");

  checkAllFalse();

}

/* in Ex4, create function p02Func similar to p01Func */
function func2(){
  document.getElementById("problem").innerHTML = "factorial";

  document.getElementById("flowchart").setAttribute("src", "images/func2_1.jpeg");
  document.getElementById("flowchart").setAttribute("style", "display: none");

  document.getElementById("js").setAttribute("src", "images/func2_2.png");
  document.getElementById("js").setAttribute("style", "display: none");

  checkAllFalse();
}

function func3(){
  document.getElementById("problem").innerHTML="<p>Fibonacci</p>"

  document.getElementById("flowchart").setAttribute("src", "images/func3_1.jpeg");
  document.getElementById("flowchart").setAttribute("style", "display: none");

  document.getElementById("js").setAttribute("src", "images/func3_2.png");
  document.getElementById("js").setAttribute("style", "display: none");

  // initally keep them unchecked (important step to be done everytime)
  checkAllFalse();
}

function func4(){
  document.getElementById("problem").innerHTML="a*b, without using multiplication"

  document.getElementById("flowchart").setAttribute("src", "images/dimsum/dimsum1.jpg");
  document.getElementById("flowchart").setAttribute("style", "display: none");

  document.getElementById("js").setAttribute("src", "images/dimsum/dimsum2.jpg");
  document.getElementById("js").setAttribute("style", "display: none");

  // initally keep them unchecked (important step to be done everytime)
  checkAllFalse();
}

function func5(){
  document.getElementById("problem").innerHTML="<p>I'm looking for a dish that is eaten as appetizers, and comes in the shape of a roll, filled with veggies inside. It definitely came out of the asian cuisine as well and is likey to be found in most restaurant these days. Cabbage is the main ingredient in the dish, but many other meat variants can also be found.</p>"

  document.getElementById("flowchart").setAttribute("src", "images/springRoll/springRoll1.jpg");
  document.getElementById("flowchart").setAttribute("style", "display: none");

  document.getElementById("js").setAttribute("src", "images/springRoll/springRoll2.jpg");
  document.getElementById("js").setAttribute("style", "display: none");

  document.getElementById("another").setAttribute("src", "images/springRoll/springRoll3.jpg");
  document.getElementById("another").setAttribute("style", "display: none");

  // initally keep them unchecked (important step to be done everytime)
  checkAllFalse();
}

function zoomIn(){
  document.getElementById("flowchart").style.width="200%";
}

function zoomOut(){
  document.getElementById("flowchart").style.width="100%";
}

function checkUncheck1(){
  if (document.getElementById("flowchart").style.display==="none") {
     // add a getElementById here to get "flowchart" img and
     // set the display property of its style to "inline"
     document.getElementById("flowchart").style.display="inline";
  }
  else {
     // add a getElementById here to get "flowchart" img and
     // set the display property of its style to "none"
     document.getElementById("flowchart").style.display="none";
  }
}
function checkUncheck2(){
  if (document.getElementById("js").style.display==="none") {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "inline"
     document.getElementById("js").style.display="inline";
  }
  else {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "none"
     document.getElementById("js").style.display="none";
  }
}
function checkUncheck3(){
  if (document.getElementById("another").style.display==="none") {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "inline"
     document.getElementById("another").style.display="inline";
  }
  else {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "none"
     document.getElementById("another").style.display="none";
  }
}

// helper method for check all false
function checkAllFalse(){
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}
