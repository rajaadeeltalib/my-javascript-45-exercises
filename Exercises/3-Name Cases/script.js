//Excerise No. 3. 

var nameCases = "malik Naseer AHMED"

console.log(nameCases.toLowerCase());

console.log(nameCases.toUpperCase());

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(titleCase("Malik naseer AHMED"));
