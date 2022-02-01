let calArray=[];
let getVal= (value) =>{
  calArray.push(value);
 document.querySelector(".topM").innerHTML=calArray.join(" ");
 document.querySelector(".mainM").innerHTML=0;
 
}
const allclear= () =>{
    calArray=[];
    document.querySelector(".topM").innerHTML=0;
    document.querySelector(".mainM").innerHTML="";
 
}
const back= () =>{
    calArray.pop();
    document.querySelector(".topM").innerHTML=calArray.join(" ");

 
}
const final= () =>{
    let string=calArray.join("");
    document.querySelector(".mainM").innerHTML=eval(string);

 
}
