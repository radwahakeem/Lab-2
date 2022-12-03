  var text = prompt(" enter the text ");
var mytext = text.split("");
var countz = 0;
var counto = 0;
for(var i =0 ; i < mytext.length ; i++){
   if (mytext[i]=='z'){
       countz++;
   }
   if(mytext[i]=='o'){
       counto++;
   }
}
if(counto==countz*2){
   document.write("yes");
}
else{
   document.write("no");
}  