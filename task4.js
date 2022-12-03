var array=[1, 2, 3, 4, 5];  
 var number =parseInt(prompt(" the number is ")) ;
 console.log(typeof(number));
  
  if(array.indexOf(number) !== -1)  
  {  
          document.write("Yes, the value exists! <br> ")  
          document.write("and the index of it equal ",array.indexOf(number));
  }   
  else  
  {  
         document.write("No, the value is not exist")  
  }  