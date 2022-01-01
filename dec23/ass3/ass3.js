var n = prompt("Enter a number");
var count = 1;
for(var i=2; i<n; i=i+1) {
   if(n%i == 0)
    {
    count=0;
    }
 }
  if(count==1)
  {
  alert("prime number");
  }
  else
  {
  alert("not a prime");
  }