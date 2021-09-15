/*

var score = 55;
switch(parseInt(score / 10)){
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
        console.log("合格")
        break
    default:
        console.log("不合规")
            
}

*/

/*
var score = 88
switch(true){
    case score >=60:
        console.log("合格");
        break;
    case score <60:
        console.log("不合格") 
        break;
}

*/
/*
var n = 1
while(true){
    console.log(n++);
    if (n == 10){
    break
  
}
}


var i = 0;
while(i < 10){
    console.log(i);
    i++;
}



var i = 1;
do{console.log(i);}   
while(i <= 10);
    


var n = 0, a = 1000;
while(a < 5000){ 
    n++;
    a = a * 1.05;
   
}
console.log(n);
console.log(a)



var i = 0;

while(i < 10){
    console.log(i++);
}



for (var i = 0; i < 10; i++){
    console.log(i);
}


var i = 0;
for(; i < 10;i++){
console.log(i)
}


var sum=0; 
for(var i=1; i<=100; i++){
    if(i%2 != 0){
    //console.log(i)
    sum = sum + i;
    }

}
console.log(sum);

*/
/*
var sum = 0;
var c = 0;
for(var i=1; i<=100; i++){
    if(i % 7 == 0){ 
    sum += i;
    c++;
    }
}
console.log(sum);
console.log(c);



//百位水仙花数

for(var i=100; i<1000; i++){
  var bai = parseInt(i/100);
  var shi = parseInt((i - bai*100)/10);
  var ge = i % 10;

  if (bai*bai*bai + shi*shi*shi +ge*ge*ge == i){
  console.log(i)
  }

}


var a = 11;
if(a <= 1){
console.log(a);
} else{
    var flag = true;
    for(var i=2; i<a; i++){
        if(a % i == 0){
            flag = false;
        }
    if(flag){
        console.log(i);
    } else{
        console.log(a)
    }
    }
}



for(var i=0; i<5; i++){
    for(var j=0; j<i+1; j++){
    document.write("*&nbsp;&nbsp;&nbsp;");
    } 
}


for(var i=1; i<=9; i++){
   for(var j=1; j<=i; j++){
       document.write(j+"*"+i+ "=" +i*j");
   }
}


//100以内的质数

for(var i=2; i<=100; i++){
    var flag = true;

    for(var j=2; j<i; j++){
        if(i%j == 0){
        flag = false;
        }
    }
    if(flag){
    console.log(i);
    }
}
*/


