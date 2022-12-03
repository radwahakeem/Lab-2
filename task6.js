 var text = prompt(" enter the text ");
     var mytext = text.split("");
     var arr = [text.charAt(0),text.charAt(1),text.charAt(text.length-2),text.charAt(text.length-1)];
     
     

    if(mytext.length<2){
        document.write(" empty ");
    }
    else{
        document.write(arr.join(""));
    } 