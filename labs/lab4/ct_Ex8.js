// in Ex2 to Ex5, change the name of the following function properly
let dCount = 0;

function posOrNeg() {

  /* in Ex1, change the following two lines such that
     the sum of number num1 and num2 are parsed to integer
     before be assigned to w and h, respectively.        */
  /* in Ex 2, rename w and h to a and b, respectively.    */
  var a=parseInt(document.getElementById("num1").value);

  let answer = "";

  if(a != 0){
      if(a % 2 == 0 && a % 3 == 0){
        dCount++;
        answer = "divisible by 6";
      }
      else{
        answer = "not divisible by 6";
      }
  }
  else if(a == 0){
    answer = dCount + " inputs were divisible by 6.";
    answer += "\n Program has stopped."
    document.getElementById("inputs").setAttribute("style", "display: none");
  }

  /* in Ex2 to Ex5, you need to renmae "sum" to make it more readable
     for those problem, you may also need to rename s to a better
	 varibale that you have in your formulas above */
  document.getElementById("output").innerHTML="" + answer;

}
