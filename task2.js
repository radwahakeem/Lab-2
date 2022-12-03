  var n = prompt("Please enter Integer");
var reverse=0;
var reminder;
while(n!=0)    
  {    
    reminder=n%10;    
    reverse=reverse*10+reminder;    
    n = Math.floor(n/=10);    
  }    
  document.write("Reversed Number:\n",reverse);  