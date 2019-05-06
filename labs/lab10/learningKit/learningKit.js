window.onload = function(){
        // Array to hold the button names, which will be displayed on the website
        var buttonCaption = ["Addition", "Triangle", "Real-Roots", "Roots", "GPA",
							 "* Pyramid", "Add Array", "Prime Array", "Odd in Array", "All Factorial",
							 "Mod without mod", "Fibonacci", "Plaindromes till num", "Fact 1 to 10", "Matrix Multiplication",
							 "Negative Positive", "Two Halfs", "pow of 5", "Sum of Digits", "Countdown","Sum 10 to 30","Convert to base 2","Multuiplication Table",
             "Power of ab without pow","LCM","GCD","Sum of n primes","Random name","Lucky","Roots","Enter till 0","positive or negative","Positive in array","Area of triangle","Grade","triangles of numbers",
            "right angled triangle","inverted triangle","square","product of digits"];
        // Loop till the number of button you want
        for (var i = 0; i < 40; i++){

              var newButton = document.createElement("button"); // Creates the button element
              $("nav").append(newButton); // Add it in the navigation section of your Html Code
              $(newButton).attr("id", "button" + (i+1));  // Assings Id to button corresposnding to its order
              $(newButton).html(buttonCaption[i]);  // Gets the name of the button and assing it
              $(newButton).attr("onClick", "execute("+i+");") // add onClick event to each button
              $(newButton).attr("class", "button"); // add class to button
        }
}
// Takes the problem number and display it description, Js Code, FlowChart
function execute(problemId) {
        // Array which holds the discription of each problem
        var descriptionOfProblem = ["receive two numbers and output their sum.",
                                    "receive three numbers and store them within memory spaces called a, b, and c to represent a triangle\'s three sides and, by using Heron\'s formula, calculate and output the triangle\'s area. ",
                                    "receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots. (assume coefficients are good enough such that a solution in real number exists. Don’t worry about cases that a solution does not exist). ",
                                    "receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers. ",
                                    "receive a number and map it to a letter grade based on York University's standard. ",'Star Pyramid','Sum of Elements of Array','Counting Prime Numbers in an Array','Display Odd Number in Array',
        'Display All Factorials Till a Number Less than 10','Modulo Without Using Modulo','Fibonacci','All Palindrome Till A Number More than 10','Factorial of 1 to 10','Matrix Multiplication',
        'First 4 Negative numbers equals to next 4 positive Numbers','Sum of two Halfs Equal','How Many power of 5 are there in a Number','Sum of digits','CountDown','Sum of 10 to 30',
        'Convert base to 2', 'Multiplication Table','Power of a to b without using power function','LCM','GCD','Sum of n Primes','Random Name','Lucky Lottery','Checking Roots',
        'Numbers will be shown positive or Negative till a 0 is entered','the entered numbers are negative or postive','How many Positive Numbers in an array','Area of triangle','Grades','pascal triangle','stars formed in a right angled triangle form','inverted triangle',
      'square of n rows','product of digits'];
		/* for teaching purposes, we used some pure JS and some jQuery codes in the following lines.
		   compare them, and learn both */
        document.getElementById("description").innerHTML= "<p> Computational thinking problem for a program to "+descriptionOfProblem[problemId] +"</p>"; // Getting the corresponding description of the problem from discription array
        document.getElementById("flowchart").setAttribute("src","./images/fc_" + (problemId+1) + ".jpg"); // gets the image of flowchart
        document.getElementById("flowchart").style.display="none";
        $("#javaScript").attr("src","./images/js_" + (problemId+1) + ".jpg"); // gets the image of javascript code
        $("#javaScript").css("display","none");
        $("#anotherSolution").css("display","none");
        $("#checkbox1").prop("checked",false);
        document.getElementById("checkbox2").checked=false;
        document.getElementById("checkbox3").checked=false;
}

/* for teaching purposes, we used some pure JS and some jQuery codes in the following 3 functions.
   compare them, and learn both */
function checkUncheck1(){
      if ($("#flowchart").css("display")==="none") {
         $("#flowchart").css("display","inline");
      }
      else {
         $("#flowchart").css("display","none");
      }
}

function checkUncheck2(){
      if (document.getElementById("javaScript").style.display==="none") {
         document.getElementById("javaScript").style.display="inline";
      }
      else {
         document.getElementById("javaScript").style.display="none";
      }
}
function checkUncheck3(){
        if ($("#anotherSolution").css("display")==="none") {
            $("#anotherSolution").css("display","inline");
        }
        else {
            $("anotherSolution").css("display","none");
        }
}

/* for teaching purposes, we used some pure JS and some jQuery codes in the following 2 functions.
   compare them, and learn both */
function zoomIn() {
        $("#flowchart").css("width","200%");
}
function zoomOut() {
        document.getElementById("flowchart").style.width="100%";
}

/* for rest of this file, provide your js code for all problems you address
   in this project. We have already provided the js code for problems 19 and 20 */

//Problem 19
function prime(){

    var num=parseInt(prompt("Enter a number ",""));

	var prime=true;
	var d=2;

	while ((prime==true) && (d<=num/2)) {
		if(num%d == 0)
			prime=false;
		d++;
	}
	if (prime==true)
		alert(num+" is prime!");
	else alert (num+" is NOT prime!");

}

//Problem 20
function sum(){

    var sum1=0;
	var sum2=0;

	for (var i=1; i<=4; i++) {
		var num = parseInt(prompt("Enter a number ",""));
		sum1 += num;
	}

	for (var i=1; i<=4; i++) {
		var num = parseInt(prompt("Enter a number ",""));
		sum2 += num;
	}

	if (sum1==sum2)
		alert("Yes!");
	else alert ("Nope.");

}

/*
   MY CODE STARTS HERE-------------------------------
*/

function prob1(){
  var a = parseInt(prompt("Enter a number: "));
  var b = parseInt(prompt("Enter a number"));
  alert("sum " + (a + b));
}

function prob2() {
  var a=parseInt(document.getElementById("num1").value);
  var b=parseInt(document.getElementById("num2").value);
  var c = parseInt(document.getElementById("num3").value);

  var p = (a + b + c) / 2;

  var area = Math.sqrt(p*(p-a)*(p-b)*(p-c));

}

function prob3() {
  var a=parseInt(document.getElementById("num1").value);
  var b=parseInt(document.getElementById("num2").value);
  var c = parseInt(document.getElementById("num3").value);
  /* in Ex2, write a similar code to the above line
     to capture the value for c*/
  var left = b * (-1);
  var right = Math.sqrt((b*b) - (4*a*c));
  var bottom = 2 * a;
  var root1 = (left + right) / bottom;
  var root2 = (left - right) / bottom;

  document.getElementById("output1").innerHTML="root1: "+root1.toFixed(2);
  document.getElementById("output2").innerHTML="another: " + root2.toFixed(2);

}

function prob4(){
  var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);
    /* in Ex2, write a similar code to the above line
       to capture the value for c*/
    var discriminant = (b*b) - (4*a*c);

    let result = "it has no roots in real numbers";
    if(discriminant > 0){
      result = "it has 2 distinct roots";
    }
    else if(discriminant === 0){
      result = "its roots are identical";
    }

}

// in Ex2 to Ex5, change the name of the following function properly
function prob5() {
  var a=parseInt(document.getElementById("num1").value);

  switch (true){
	case (a>89):
		answer="A+";
		break;
	case (a>79):
		answer="A";
		break;
  case (a>74):
    answer="B+";
    break;
  case (a>69):
    answer="B";
    break;
  case (a>64):
    answer="C+";
    break;
  case (a>59):
    answer="C";
    break;
  case (a>54):
    answer="D+";
    break;
  case (a>49):
    answer="D";
    break;
  case (a>47):
    answer="E";
    break;
	default:
		answer="F";
  }

  document.getElementById("output").innerHTML="" + answer;

}
