
//Excerise No. 42. 



var magiciansNames = ["Naseer", "Atif", "Hamza", "Asad", "Mubeen"];

function show_magicians()
{
    
    for (var i = 0; i < magiciansNames.length; i++)
    {
        console.log(magiciansNames[i]);
    }
};

function make_great()
{
    for (var i = 0; i < magiciansNames.length; i++)
    {
        magiciansNames[i] = "The Great "+ magiciansNames[i];
       
    }
};

make_great()

show_magicians();
