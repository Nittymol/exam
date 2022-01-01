var arr=[];
for(i=0;i<3;i++){
    var val = prompt("Enter Number:")
    val = parseInt(val);
    arr.push(val);
}

var res = Math.max(arr);
console.log(res);