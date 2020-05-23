window.onload = () =>{
  for(var i = 1; i <= 30; i++){
    var newBtn = document.createElement("button");
    $(newBtn).attr("id", "btn" + i); // id = "btn1"
    $(newBtn).html("Problem " + i);
    $("nav").append(newBtn);
    var func_name = "func" + i + "()";
    $(newBtn).attr("onclick", func_name);


  }

  /*
  // handling the click events for checks/radio buttons
  for(var i = 1; i <= 3; i++){
    $("#check" + i).click(function(){
      $("img").toggle();
    });
  }
  */

}

function func1(){

  $("#problem").html("Sum of numbers 10 to 30");

  $("#flowchart").attr("src", "images/func1_1.png");
  $("#flowchart").css("style", "display: none");

  $("#js").attr("src", "images/func1_2.png");
  $("#js").attr("style", "display: none");

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
  if ($("#flowchart").css("display") == "none") {
     // add a getElementById here to get "flowchart" img and
     // set the display property of its style to "inline"
     $("#flowchart").fadeIn();
  }
  else {
     //$("#flowchart").css("display", "none");
     $('#flowchart').fadeOut();
  }

}
function checkUncheck2(){
  if (document.getElementById("js").style.display==="none") {
     //$("#js").css("display", "inline");
     $("#js").fadeIn();
  }
  else {
     $("#js").fadeOut();
  }
}
function checkUncheck3(){
  if (document.getElementById("another").style.display==="none") {
     document.getElementById("another").style.display="inline";
  }
  else {
     document.getElementById("another").style.display="none";
  }
}

// helper method for check all false
function checkAllFalse(){
  $("#check1").prop("checked", false);
  $("#check2").prop("checked", false);
  $("#check3").prop("checked", false);
}
