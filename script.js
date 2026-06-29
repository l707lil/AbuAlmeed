

let count = 0;
let target = 2800000;

let timer = setInterval(()=>{
count += 25000;

if(count >= target){
count = target;
clearInterval(timer);
}

document.getElementById("followers").innerHTML =
count.toLocaleString();

},20);

let text1 = "ABU AL.MEED";
let text2 = "Content Creator • Social Media Personality";


let i = 0;
let j = 0;


function typeName(){

if(i < text1.length){

document.getElementById("typing").innerHTML += text1.charAt(i);

i++;

setTimeout(typeName,150);

}

else{

setTimeout(typeDesc,500);

}

}



function typeDesc(){

if(j < text2.length){

document.getElementById("typing2").innerHTML += text2.charAt(j);

j++;

setTimeout(typeDesc,80);

}

}


typeName();


function counter(id, end){

let num = 0;

let element = document.getElementById(id);


let timer = setInterval(()=>{


num += Math.ceil(end / 100);


if(num >= end){

num = end;

clearInterval(timer);

}


element.innerHTML = num.toLocaleString() + "+";


},30);


}


counter("followers",4000000);

counter("views",900000000);

counter("videos",800);