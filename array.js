// ====  Створити пустий массив і заповнити його всіма парними  занченнями від 0 до 20 ====


let pairArray = new Array();
for(let i=0; i<21; i++){
    if(i % 2 == 0 && i>0){
        pairArray.push(i);
    }
}
console.log(pairArray);

console.log('=====================================================================')

// ==== Створіть новий массив за допомогою методів розглянутих на уроці в якому видалені ====
//  всі  значення "Remove"  з масиву  - ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", 
//  "Remove", "Remove"] в результаті повинен бути ось такий новий массив ["Keep", "Keep",
//   "Keep", ...]

let keepRemoveArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];
let keepArray = new Array();
for(let i = 0; i < keepRemoveArray.length; i++){
    if(keepRemoveArray[i] == "Keep"){
        keepArray.push(keepRemoveArray[i]);
    }
}
console.log(keepRemoveArray);
console.log(keepArray);
console.log('======================================================================');

// ==== Написати цикл який замінює відємне значення в масиві на 0  let checkArr  ====
//  = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]

let checkArray = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];
for(let i = 0; i < checkArray.length; i++){
    if(checkArray[i] < 0){
        checkArray[i] = 0;
    }
}console.log('Now modifyed checkArray looks like:')
console.log(checkArray);

console.log('=======================================================================');


// ***** Створити цикл який виводить значення в консоль в такому форматi "Сьогодні .....
//  у вас такі плани .." для данних використовує два массива let days = ["Понеділок",
//   "Середа", "Неділя"] let plans = ["Урок 03", "Урок 04", "Вихідни"] ********

let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідний"];
for(let i = 0; i<days.length; i++){
    for(let j = 0; j < plans.length; j++){
     if(i == j){
        console.log(`Сьогодні: ${days[i]} у вас такі плани: ${plans[j]}`);
 }
}
}
            
        
    
