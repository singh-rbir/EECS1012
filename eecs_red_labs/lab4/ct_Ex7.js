// in Ex2 to Ex5, change the name of the following function properly
let pCount = 0, nCount = 0;

function posOrNeg() {

  /* in Ex1, change the following two lines such that
     the sum of number num1 and num2 are parsed to integer
     before be assigned to w and h, respectively.        */
  /* in Ex 2, rename w and h to a and b, respectively.    */
  var a=parseInt(document.getElementById("num1").value);

  let answer = "";

  if(a != 0){
      if(a < 0){
        nCount++;
        answer = "negative";
      }
      else{
        pCount++;
        answer = "positive";
      }
  }
  else if(a == 0){
    answer = "entered " + pCount + " positive and " + nCount + " negative numbers.";
    answer += "\n Program has stopped."
    document.getElementById("inputs").setAttribute("style", "display: none");
  }

  /* in Ex2 to Ex5, you need to renmae "sum" to make it more readable
     for those problem, you may also need to rename s to a better
	 varibale that you have in your formulas above */
  document.getElementById("output").innerHTML="" + answer;

}
