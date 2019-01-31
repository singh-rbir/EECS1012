// in Ex2 to Ex5, change the name of the following function properly
function mapping() {

  /* in Ex1, change the following two lines such that
     the sum of number num1 and num2 are parsed to integer
     before be assigned to w and h, respectively.        */
  /* in Ex 2, rename w and h to a and b, respectively.    */
  var a=parseInt(document.getElementById("num1").value);

  switch (true){
	case (a>89):
		answer="A+";
		break;
	case (a>79):
		answer="A";
		break;
		// in Ex5, you need to add more cases for other letter grades
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

  /* in Ex2 to Ex5, you need to renmae "sum" to make it more readable
     for those problem, you may also need to rename s to a better
	 varibale that you have in your formulas above */
  document.getElementById("output").innerHTML="" + answer;

}
