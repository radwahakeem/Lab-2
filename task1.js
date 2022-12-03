 var n = prompt("Please enter Integer");
var t;
var sum =0;
var reminder;
t = n;
while (t != 0)
   {
      remainder = t % 10;
      sum       = sum + remainder;
      t         = Math.floor(t / 10);
   }
   document.write("Sum of digits =\n",n,sum); 