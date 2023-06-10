/*
1 meter = 3.281 feet
0.3048
1 liter = 0.264 gallon
3.78541
1 kilogram = 2.204 pound
0.453592
*/

let iptEl=document.getElementById("ipt-el")
let lengcntEl=document.getElementById("lengcnt-el")
let volcntEl=document.getElementById("volcnt-el")
let mascntEl=document.getElementById("mascnt-el")
let btnEl=document.getElementById("btn")
let data=0
btnEl.addEventListener("click",function(){
    data=Number(iptEl.value)
    lengcntFunc()
    volcntFunc()
    mascntFunc()
})
function lengcntFunc(){
    if (data<=1){
        lengcntEl.textContent=`${data} meter = ${(data*3.281).toFixed(3)} feet ｜ ${data} feet = ${(data*0.3048).toFixed(3)} meter`
    }else{
        lengcntEl.textContent=`${data} meters = ${(data*3.281).toFixed(3)} feets ｜ ${data} feets = ${(data*0.3048).toFixed(3)} meters`      
    }
}
function volcntFunc(){
    if (data<=1){
        volcntEl.textContent=`${data} liter = ${(data*0.264).toFixed(3)} gallon ｜ ${data} gallon=${(data*3.78541).toFixed(3)} liter`
    }else{
         volcntEl.textContent=`${data} liters = ${(data*0.264).toFixed(3)} gallons ｜ ${data} gallons = ${(data*3.78541).toFixed(3)} liters`    
    }
}
function mascntFunc(){
    if (data<=1){
        mascntEl.textContent=`${data} kilogram = ${(data*2.204).toFixed(3)} pound ｜ ${data} pound = ${(data*0.453592).toFixed(3)} kilogram`
    }else{
         mascntEl.textContent=`${data} kilograms = ${(data*2.204).toFixed(3)} pounds ｜ ${data} pounds = ${(data*0.453592).toFixed(3)} kilograms`    
    }
}