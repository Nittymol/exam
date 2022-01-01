var num = prompt("Enter a number");
 var prime;

 for(var i = 2; i<= num; i= i + 1){
   prime = true;

     for(var j=2; j<=i/2; j = j + 1) {
          if(i%j == 0){
             prime = false; 
             break;

      }
   }

         if(prime == true){
             console.log(i);

  }   
    } 