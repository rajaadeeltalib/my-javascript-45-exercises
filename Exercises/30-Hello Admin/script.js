
//Excerise No. 30. 




var users = ["Admin", "Naseer", "Yasir", "Atif", "Hamza", "Adeel", "Khalil"];

var message = [];

for (var i = 0; i < users.length; i++)
{
    message[i] = users[i];

    if(message[i] == "Admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
    {
        console.log(`Hello ${message[i]}, thank you for logging in again.`);
    }
}