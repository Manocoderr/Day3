// TASK-1
/*
let obj1={name:"vicky",age:5}
let obj2={age:5,name:"vicky"}
let str1 = JSON.stringify(obj1)
console.log(str1);
let str2 = JSON.stringify(obj2)
console.log(str2);
if(str1.length===str2.length)
{
console.log("The JSON objects are equal");
}
else{
    console.log("The JSON objects are not equal");
}
*/

// TASK-2
var request = new XMLHttpRequest(); 
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function() {
var data = request.response;
var result = JSON.parse(data)
for(var i=0;i<result.length;i++){
    console.log(result[i].flags.svg);
}
}

// TASK-3
var request1 = new XMLHttpRequest(); 
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function() {
var data1 = request1.response;
var result1 = JSON.parse(data1)
for(var i=0;i<result1.length;i++){
    console.log("Country Name:"+" "+result1[i].name.common,"Region:"+" "+result1[i].region,"Population:"+" "+result1[i].population,"Subregion:"+" "+result1[i].subregion);
}
}
