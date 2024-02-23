let I =0;
let ordnums = ["1","2","3","4","5","6","7","8","9"];
for(let ordnum of ordnums){
    if(ordnum === "1"){
        console.log(ordnum +"st");
    }else if(ordnum === "2"){
        console.log(ordnum +"nd");
    }else if(ordnum === "3"){
        console.log(ordnum +"rd");
    }else{
        console.log(ordnum + "th");
    }
}