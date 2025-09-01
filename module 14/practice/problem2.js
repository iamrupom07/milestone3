// BMI calculator

var weight = 80;
var height = 1.615;

var BMI = weight / (height * height);

if (BMI < 18.5){
    console.log("you are underweight");
}
else if (BMI >= 18.5 && BMI <= 24.9){
    console.log("You are normal")
}
else if (BMI >= 25 && BMI <= 29.9){
    console.log("You are overweight")
}
else{
    console.log("you are obese")
}