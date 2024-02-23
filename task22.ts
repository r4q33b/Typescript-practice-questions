//Equality And Inequality
let plug2 = 'on';
if(plug2==='on'){
console.log(plug2=== 'on')
}else if(plug2!='on'){
    console.log(plug2 ==='')
};


let Grade2 = 'B';
if(Grade2==='A'){
console.log(Grade2=== 'A')
}else if(Grade2!='A'){
    console.log(Grade2==='',"\n")
}

//test the lowercase function
let letter = 'hello'
if(letter.toUpperCase() == letter){
    console.log('letter is uppercase')
}else(letter.toLowerCase() == letter);{
    console.log('letter is lowercase\n')
}
//Test Grater than and Less than
let a = 6;
let b = 4;
if(a>b){
    console.log('6>4=',a>b)
}else(a<b);{
    console.log('6<4=',a<b,"\n")
}


//Test Grater and Less than Equal To.
let x = 4;
let y = 2;
if(x>=y){
    console.log('4>=2 =',x>=y)
}else(a<=b);{ 
    console.log('4=<2 =',x<=y,"\n")
}

//Test And and OR operators.
//AND Operator
let M = 10;
let N = 6;
const cond1 = M>=N;
const cond2 = M===N;
console.log('cond1 && cond2 =',cond1 && cond2,);
//OR Operator
let P = 16;
let Q = 6;
const eq1 = P>=Q;
const eq2 = P<=Q;
console.log('eq1 || eq2', eq1 || eq2,"\n");

//check iteam in an array
const nums = [1,2,3,4,5,6];
console.log(nums.includes(3));