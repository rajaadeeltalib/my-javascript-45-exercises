
//Excerise No. 43. 



var magiciansNames = ["Naseer", "Atif", "Hamza", "Asad", "Mubeen"];
var magiciansNames2 =[];
function show_magicians(m_name)
{
    for (var i = 0; i < m_name.length; i++)
    {
        console.log(m_name[i]);
    }
};

function make_great(magiciansNames)
{
    for (var i = 0; i < magiciansNames.length; i++){
        magiciansNames2[i] = "The Great "+ magiciansNames[i];
        
        }
    
}

make_great(magiciansNames);
show_magicians(magiciansNames);
show_magicians(magiciansNames2);