
//Excerise No. 40. 



var album = {artistName: "", albumTitle:"", numberofTrack:""};

function make_album(artist_name, album_title, number_of_tracks)
    {   
         album = {artistName: artist_name, albumTitle: album_title, numberofTrack: number_of_tracks};
         
         return album
         
    }


 make_album("Atif Aslam", "Jal Pari");
 console.log(album.artistName, album.albumTitle);

 make_album("Ali Zafar", "Masty");
 console.log(album.artistName, album.albumTitle);

 make_album("Faakhir", "Mantra", "11");
console.log(album.artistName, album.albumTitle, album.numberofTrack);
 