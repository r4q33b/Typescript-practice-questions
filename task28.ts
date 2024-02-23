let c=0;
let Username2:string[]= ["Andrew","Micheal","Eric","Johnson"];
let Admin2 = "Raqeeb"
   console.log(`Hello ${Admin2} would you like to see status report?`);
for(c=0;c<=3;c++){
    console.log(`Hello ${Username2[c]} thanks for joining again.`)
}

Username2.length = 0;
if(Username2.length ===0){
    console.log("We need to find more users")
}