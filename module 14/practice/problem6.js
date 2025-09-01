var price = 800;
var age = 6;
var isStudent = false;

if (age < 10){
    console.log("Free");
}
else if (isStudent === true){
    var discount = price * 50 /100;
    var payAmount = price - discount;
    console.log("Your amount after 50% discount is :",payAmount);
}
else if (age >= 60){
    var discount = price * 15 /100;
    var payAmount = price - discount;
    console.log("Your amount after 15% discount is :",payAmount);
}
else{
    console.log(price);
}