function make_album(artist:string,title:string,tracks?:number){
 let album:{artist:string,title:string,tracks?:number} = {artist:artist,title:title};
console.log(artist,"by ,",title);

if(tracks){ album.tracks = tracks;}
return album;
}
   

let album1= make_album("I Wanna Be Yours","Arctic Monkeys",40);
let album2= make_album("See You Agian","Semuel Kim",42);
let album3= make_album("Tourner Dans Le Vide","Indila",40);


console.log(album1);
console.log(album2);
console.log(album3);