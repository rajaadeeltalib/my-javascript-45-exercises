
//Excerise No. 16. 


var guestList = ["Naseer", "Yasir", "Atif"];

console.log(`Mr. ${guestList[0]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[1]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[2]} you are invited for dinner on October 10, 2022`);

console.log(`\nMr. ${guestList[0]} can't make it due to some personal issues`);

guestList[0] = "Hamza";

console.log(`\nMr. ${guestList[0]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[1]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[2]} you are invited for dinner on October 10, 2022`);

console.log("\nGood News I have found a bigger dinner table !");

guestList.unshift("Zeb");

guestList.splice(2, 0, "Khalil");

guestList.push("Ejaz");

console.log(`\nMr. ${guestList[0]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[1]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[2]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[3]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[4]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[5]} you are invited for dinner on October 10, 2022`);