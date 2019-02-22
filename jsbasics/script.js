
var age=18;
if(age<13)
{
    console.log("minor");

}
else if (age>18)
{
    console.log("major");
}
age>=18?console.log("major"):console.log("minor");

//function
function swathi(firstname,lastname)
{
    console.log(firstname+''+lastname);
}
swathi('swathi','thanu');

//array
var names=["swathi",'maya','jinke'];
console.log(names[2]);
console.log(names.length);

names.push("Shrihaan");
names.unshift("John");
names.pop(); //removing from last
console.log(names);


var res1=[];
var total1 =[];
var tips=[];
function restaurant(bill){
if(bill > 50 ){
share = (25/100) * bill;
res1.push(share);
total=share + bill;
total1.push(total);}
else if(bill > 50 && bill< 200 ){
share = (15/100) * bill;
res1.push(share);
total=share + bill;
total1.push(total);}
else{
share = (10/100) * bill;
res1.push(share);
total=share + bill;
total1.push(total);}
console.log(tips);
console.log(total1);}

restaurant(48);
restaurant(124);
restaurant(268);
