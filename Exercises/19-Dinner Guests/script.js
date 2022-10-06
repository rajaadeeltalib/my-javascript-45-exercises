
//Excerise No. 19. 


// from exercise 14 to 17.

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

console.log("\nI am sorry, big table is not available so now I can invite only two people for dinner");

var guestRemoved1 = guestList.pop();

console.log(`\nMr. ${guestRemoved1} I am sorry, I can’t invite you for dinner.`);

var guestRemoved2 = guestList.pop();

console.log(`Mr. ${guestRemoved2} I am sorry, I can’t invite you for dinner.`);

var guestRemoved3 = guestList.pop();

console.log(`Mr. ${guestRemoved3} I am sorry, I can’t invite you for dinner.`);

var guestRemoved4 = guestList.pop();

console.log(`Mr. ${guestRemoved4} I am sorry, I can’t invite you for dinner.`);

console.log(`\nMr. ${guestList[0]} you are invited for dinner on October 10, 2022`);

console.log(`Mr. ${guestList[1]} you are invited for dinner on October 10, 2022`);

guestList = [];

console.log(guestList);

var totalGuest = guestList.length;

console.log(`I am inviting ${totalGuest} guests for dinner.`);