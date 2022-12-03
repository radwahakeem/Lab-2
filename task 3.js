 function reverseNum(n) {
    var r = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(r);
  }
  
  var number = prompt("enter a number to check if the number is palindrome : ");
  if(number == reverseNum(number)){
      document.write("yes");
  }
  else{
      document.write("no");
  } 