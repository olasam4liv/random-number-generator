var arr = [
    {name: "Samuel", Gender: "Male", Color: "chocolate", Age: 27},
    {name: "Oluwaseyi", Gender: "Female", Color: "Light", Age: 23

];

console.log(arr, ["name","Gender", "Color", "Age"]);

function reverString(reverseStr){
return reverseStr.split('').reverse().join("");

}
console.log(reverString("Samuel"));

function reverString(str){
    //var reverseStr = ""
   
    for (var i=str.length-1; i >=0; i--){
    let reverseStr = reverseStr + str[i];
    }
    return reverseStr
}
   
    console.log(reverString("Samuel"));