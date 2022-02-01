const skill=document.querySelectorAll(".skill");
const listI=document.querySelector("#listI");
skill.forEach(skills =>{
    skills.addEventListener("change",function(){        
        let allData=document.querySelectorAll(".skill:checked");        
        let data_array=[];
        allData.forEach(data =>{
            data_array.push(data.value);   
        })
        let list="";
        data_array.map(data=>{
            list +=`  <li class="list-group-item my-1"> ${data} </li>`;
        })
        listI.innerHTML=list;  
    })
 })

//  analog clock

const hour=document.querySelector(".h");
const min=document.querySelector(".m");
const sec=document.querySelector(".s");
const hour2=document.querySelector(".ho2");
const min2=document.querySelector(".m2");
const sec2=document.querySelector(".s2");


setInterval(() => {
    let now=new Date();
    let currentH=now.getHours();
    let currentM=now.getMinutes();
    let currentS=now.getSeconds();
    hour.style.transform= `rotate(${clock(12 , currentH)}deg)`;
    min.style.transform= `rotate(${clock(60 , currentM)}deg)`;
    sec.style.transform= `rotate(${clock(60 , currentS)}deg)`;
},1000)
function clock(time,current){
    return (360 * current ) / time;

}

setInterval(() => {
    let now2=new Date();
    let currentH2=now2.getHours();
    let currentM2=now2.getMinutes();
    let currentS2=now2.getSeconds();
    hour2.style.transform= `rotate(${clock(12 , currentH2)}deg)`;
    min2.style.transform= `rotate(${clock(60 , currentM2)}deg)`;
    sec2.style.transform= `rotate(${clock(60 , currentS2)}deg)`;
},1000)
function clock2(time2,current2){
    return (360 * current2 ) / time2;

}



