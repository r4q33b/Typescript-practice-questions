let p=0;
let curr_users:string[]= ["Andrew","Micheal","Eric","Johnson","anus","Hassan"];
let new_users:string[]=  ["khizer","muneeb","anus","Hassan","Sarah","Sana"];
for(p=0;p<new_users.length;p++){
    if(curr_users.includes(new_users[p].toLowerCase())){
        console.log(`Sorry the username ${new_users[p]} is used enter another username`);
    }else{
        console.log(`the user_name ${new_users[p]} avalible`);
    }
}