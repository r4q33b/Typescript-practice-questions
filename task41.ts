const magicians3:string[] = ["David Copperfeild","Harry Anderson","Derren Brown","Teller"];
show_magicians2(magicians3);


function show_magicians2(magicians2:string[]){
    for(let m=0;m<magicians2.length;m++){
   console.log(magicians2[m]);
}
}


function make_great(magicians3:string[]){   
    for(let m=0;m<magicians3.length;m++){
    console.log("The Great Magician "+magicians3[m]);
    }
}   
make_great(magicians3);