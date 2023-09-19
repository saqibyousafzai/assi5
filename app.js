
////////////////////Assigment///////////////////////

// Q3

var num = [1,2,3,4,5,6,7,8,9,10];
for (var i=0; i<num.length; i++ ){
    console.log( num[i]);
}


var userInput=+prompt("enter the table num");
var tableLength=+prompt("enter the table length");

for(var i=1; i<=tableLength; i++){
    document.write(userInput+"x"+i +"="+userInput*i+"<br>")
}

var fruits=["apple","banan","Grapes","mango"];
for(var i=0; i<fruits.length; i++){
    console.log("Element of"+fruits[i]+"","","" +"at"+" "+i);
}



for (var i=0; i<=10; i++ ){
    console.log(i);
}


for (var i=0; i<=10; i=i+2 ){
    console.log(i);
}


for (var i=0; i<=10; i=i+3 ){
    console.log(i);
}

for (var i=0; i<=10; i++ ){
    console.log(i+"k");
}

var userInput=("enter your choice");
var A=["apple","banan","Grapes","mango"];
for(var i=0; i<fruits.length; i++){
    console.log("Element of"+fruits[i]+"","","" +"at"+" "+i);
}

var a=["cacke","samosa","pestries","cookies","sandwich"];
var userInput=prompt("enter your choice");
for(var i=0; i<a.length; i++){
    if(userInput==a[i]){
        console.log("yes its avalible in 2nd row");
    }
}

var a=[21,23,45,81,31,22];
var userInput=prompt("enter your num");
for(var i=0; i<a.length; i++){
    if(userInput==3){
        console.log("The largest Num is 91");
    }
}

var a=[21,23,45,81,31,22];
var userInput=prompt("enter your num");
for(var i=0; i<a.length; i++){
    if(userInput==0){
        console.log("The smallest Num is 21");
    }
}
 
for (var i=0; i<=100; i=i+5 ){
    console.log(i);
}





//  chapter 17-20
///////////////////////////////////////

var i = 2;

for(var i=2; i<=10;i++)
{
    console.log("welcom boy");
}


for (var i = 0; i <= 12; i++) {
    console.log("increament", i);
}


for (var i = 0; i<=4; i++){
    console.log(i);
}


for (var run=0; run<100; run++){
    console.log("Fassat",run)
}


var counter = 10; 
const numLoops = 3;
for (var i = 0; i < numLoops; i++) {
  console.log("Counter:", counter);
  counter--;
}

var myArray = [1, 2, 3, 4, 5,6,7,8,9,10];
var arrayLength = myArray.length;
console.log("Number of elements in the array:", arrayLength);


var flag = true;


const pets = ["dog", "cat", "fish", "rabbit"]; 
for (let i = 0; i < pets.length; i++) {
  console.log("Pet:", pets[i]);
}

for (let i = 1; i <= 10; i++) {
    if (i === 2) {
      alert("Counter: " + (i - 1));
      break; 
    }
  }


var userNames =[ "Alia", "Amjad", "Aslam", "irfan"];
var firstName = prompt("enter your first name");
var nameFound = false ;
for( var i=0; i < userNames.length; i++){
    if(firstName === userNames[i]){
        nameFound=true ;
       break;
    }
}
if(nameFound){
    alert("welcome" + firstName);
} else{
    alert("pleae enter correct name");
}



    var list =["aslam","akram", "amjad"];
    var userInput=prompt("enter your name");
    var matchFound = false;
 for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
     break;
    }
    }
    

var firstArr =["a","b","c","d","e","f"];
var secondArr =[1,2,3,4,5,6];
for( var i=0; i<firstArr.length; i++){
    for (var j=0; j<secondArr.length; j++){
        var concatenatedValue = firstArr[i] + secondArr[j];
        console.log(concatenatedValue);
    }
 }