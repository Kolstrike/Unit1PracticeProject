document.write("JavaScript works!");

console.log("Hello console!");
console.log("This is only a test!");

function handleButtonClick() {

    alert('Hello!!!')
}

let myName = "Brett";
let workFromHome = true;
let side = 15;
let radius = 10;
let squareArea = side * side;
let squarePerimeter = 4 * side;
let x = Math.PI;
let circleArea = radius * radius * x;
let circlePerimeter = 2 * x * radius;

console.log("My name is " + myName);
console.log(`I work from home: ${workFromHome}`);
console.log(`Our sidewalk is ${side} feet long` );
console.log(`The we got a pizza that is ${radius} inches around`);
console.log(`The square area is ${squareArea} & the perimeter is ${squarePerimeter}`);
console.log(`The circle area is ${circleArea} & the perimeter is ${circlePerimeter}`);


let travelOptions = ["foot", "bike", "car", "airplane"];
let choice = prompt("How would you like to travel?");
let index = choice -1;
let travelType = choice;
let distance = 100;
let time = 0;
let cost = 0;

console.log("The travel options are:")
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);
console.log(`Travel Type:  ${choice}`)


if(travelType === "foot") {
    console.log ("Walking is free, but only at 3mph.");
    cost = 0;
    time = distance / 3;
}   
    else if(travelType === "bike") {
    let rentBike = prompt("Do you need to rent the bike? (yes or no)");
        if (rentBike === "yes"){
            console.log("Bike rental is $45! Speed is 10mph.");
            cost = 45;
    }   else {
        console.log ("Biking is free! Speed is 10mph.");
        cost = 0;
    }
        time = distance / 10;
}   
    else if(travelType === "car") {
    console.log ("Driving is $.25/mi & is 60mph.");  
    cost = .25 * distance;
    time = distance / 60;
}   
    else if(travelType === "airplane") {
    let passengerCount = prompt("How many passengers?");
    cost = .10 * distance * passengerCount;
    time = distance / 400;
    console.log ("Flying is $.10/mi per passenger. Speed is 400mph.");
    console.log (`Traveling 100 miles by airplane took ${cost}!`);
}
    else{
    console.log(`Sorry. ${travelType} is an invalid option.`);
}

console.log(`Traveling ${distance} miles by ${travelType} took ${time}
hours and cost $${cost}!`);

let costBar = "Cost: ";
for(let i = 1; i <= cost; i++){
    costBar += "$";
}
console.log(costBar);

let timeHour = "Time: ";
for(let i = 1; i <= time; i++){
    timeHour += "/";
}
console.log(timeHour);










