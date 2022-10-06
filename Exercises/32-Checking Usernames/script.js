
//Excerise No. 32. 



var current_users = ["Naseer", "Atif", "Hamza", "Mobeen", "Khalil"];

var new_users = ["Shoukat","Atif","Khalil", "ASAD", "Shahid"];

var name_new_user;

for(var i = 0; i < new_users.length; i++)
{

    name_new_user = new_users[i]

    var result = 0;

    for(var j = 0; j <current_users.length; j++)
    {
        
        if (name_new_user == current_users[j])

        result = 1;
        
    }

    if (result == 1)
    {
    console.log(name_new_user+" Name Exist");
    }
    else
    {
    console.log(name_new_user+" Name not Exist ");
    }
 }