function P1Rajanbir(){
  let prime = true;
  let d = 2;
  var num = parseInt(prompt("Enter a number to determine if it's prime or not: "));
  while(prime == true && d <= num/2){
    if(num % d == 0){
      prime = false;
    }
    d++;
  }
  if(prime == true){
    alert(num + " is prime.");
  }
  else{
    alert(num + " is not prime.");
  }
}

function P2Rajanbir(){
  let sum1 = 0;
  let sum2 = 0;
  var i;
  var j;
  for(i = 0; i < 4 ; i++){
    let num = parseInt(prompt("Enter a number: "));
    sum1 += num;
  }
  for(j = 0; j < 4 ; j++){
    let num = parseInt(prompt("Enter a number: "));
    sum2 += num;
  }

  if(sum1 == sum2){
    alert("yes");
  }
  else {
    alert("no");
  }

}

function P3Rajanbir(){
  let p = 0;
  let n = 0;

  do{
    var num = parseInt(prompt("Enter a number: "));
    if(num > 0){
      p++;
    } else if(num < 0){
      n++;
    }
  } while((num != 0) && (p <= 2*n));

}

function P4Rajanbir(){
  let cnt1 = 0;
  let cnt2 = 0;
  let i;
  for(i = 1; i <= 4; i++){
    var num = parseInt(prompt("Enter a number: "));
    if(num < 0){
      cnt1++;
    }
  }
  for(i = 1; i <= 4; i++){
    var num = parseInt(prompt("Enter a number: "));
    if(num > 0){
      cnt2++;
    }
  }

  if(cnt1 == cnt2){
    alert("yes");
  } else{
    alert("no");
  }
}

function P5Rajanbir(){
  var num = parseInt(prompt("Enter a number: "));
  let i;
  var answer = "Primes: ";
  for(i = 3; i <= num; i++){
    if(prime(i) == true){
      answer += i + ", ";
    }
  }
  alert(answer);
}

// helper function "(prime(i)" for the P5Rajanbir function
function prime(num){
  let prime = true;
  let d = 2;
  while(prime == true && d <= num/2){
    if(num % d == 0){
      prime = false;
    }
    d++;
  }
  return prime;
}
