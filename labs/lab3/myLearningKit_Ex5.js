function p01Func() {

  /* in Ex2, add a getElementById here to get the "probelm" div and
     set its innerHTML to <p>I'm looking for a type of ...</p>
  */
  document.getElementById("problem").innerHTML="<p>I'm looking for a type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance.</p>";

  /* in Ex2, add a getElementById here to get "flowchart" img and
     set its attribue src to dosaDesign.jpg. Note that dosa images are
	 in subfolder dosa inside images folder.
  */
  document.getElementById("flowchart").setAttribute("src", "images/dosa/dosaDesign.jpg");

  /* in Ex2, add a getElementById here to get "flowchart" img and
     set the display property of its style to none
  */
  document.getElementById("flowchart").setAttribute("style", "display: none");

  /* in Ex2, repeat the above two steps for "js" img here
     for the image that is shown for "js", use dosa1.jpg
  */
  document.getElementById("js").setAttribute("src", "images/dosa/dosa1.jpg");
  document.getElementById("js").setAttribute("style", "display: none");

  document.getElementById("another").setAttribute("src", "images/dosa/dosa2.jpg");
  document.getElementById("another").setAttribute("style", "display: none");

  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

}

/* in Ex3, uncomment the following function and complete it*/

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

/* in Ex4, or step 4 of Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/

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


/* in Ex4, create function p02Func similar to p01Func */
function p02Func(){
  document.getElementById("problem").innerHTML="<p>I'm looking for an Iranian dish that consists of grilled chunks of chicken which are sometimes with bone and other times without bone. It's one of the most popular dishes of Iran. It is common to marinate the chunks in minced onion, lemon juice and sometimes saffron.</p>"

  document.getElementById("flowchart").setAttribute("src", "images/jujeh/jujehDesign.jpg");
  document.getElementById("flowchart").setAttribute("style", "display: none");

  document.getElementById("js").setAttribute("src", "images/jujeh/jujeh1.jpg");
  document.getElementById("js").setAttribute("style", "display: none");

  document.getElementById("another").setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").setAttribute("style", "display: none");

  // initally keep them unchecked (important step to be done everytime)
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}

/* in Ex5, create functions zoomIn() and zoomOut() */
function zoomIn(){
  document.getElementById("flowchart").style.width="200%";
}

function zoomOut(){
  document.getElementById("flowchart").style.width="100%";
}



/* -----------------------------------------------------------------------------
  EXERCISE 6, FOR BONUS - adding two more food items (problems)
*/

function p03Func(){
  document.getElementById("problem").innerHTML="<p>I'm looking for a dish that is made up of soaked chickpeas. It's quite popular to be eaten as breakfast. It is commonly seasoned with onions, scallions and spices like parsley, garlic, cumin and coriander.</p>"

  document.getElementById("flowchart").setAttribute("src", "images/falafel/falafel2.jpg");
  document.getElementById("flowchart").setAttribute("style", "display: none");

  document.getElementById("js").setAttribute("src", "images/falafel/falafel1.jpg");
  document.getElementById("js").setAttribute("style", "display: none");

  document.getElementById("another").setAttribute("src", "images/falafel/falafel3.jpg");
  document.getElementById("another").setAttribute("style", "display: none");

  // initally keep them unchecked (important step to be done everytime)
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}

function p04Func(){
  document.getElementById("problem").innerHTML="<p>I'm looking for a dish that comes as steamed, small bite-sized portions and extremely popular in the chinese cuisine. They can include a large range of ingredients like beef, chicken, pork, prawns, and vegetarian options.</p>"

  document.getElementById("flowchart").setAttribute("src", "images/dimsum/dimsum1.jpg");
  document.getElementById("flowchart").setAttribute("style", "display: none");

  document.getElementById("js").setAttribute("src", "images/dimsum/dimsum2.jpg");
  document.getElementById("js").setAttribute("style", "display: none");

  document.getElementById("another").setAttribute("src", "images/dimsum/dimsum3.jpg");
  document.getElementById("another").setAttribute("style", "display: none");

  // initally keep them unchecked (important step to be done everytime)
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}

function p05Func(){
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

// helper method for check all false
function checkAllFalse(){
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}
