console.log("test");
// 
// LOOP
// ein loop ist eine grundlegende und nützliche kontrollstruktur in TS
// mit Hilfe von Loops kann ich einen bestimmten Anweisungsblock wiederholt ausführen lassen
// dafür brauche ich eine Bedingungen und solange die Bedingung true ist wird der Loop ausgeführt 
// code kann automatisiert werden
// welche loops gibt es 
//  array-loops --> map, forEach, filter 
// for-loop
// for-of --> es6
// for-in für objekte, while, do while 
// syntax for loop
// for(startWert,bedigung,steps){code der ausgeführt werden soll}
// der startWert ist eine variable mit einem von uns ausgesuchtem wert 
// wir halten in der bedingung halten wir fest wann der loop abgebrochen werden soll, wenn i nicht mehr kleiner ist als 5, dann beende den loop- STEPS, damit halten wir fest, wie die variable STARTWERT, verändert wird
for(let i: number = 0; i < 5; i++){
    console.log("hallo" + 1);
}
for(let i: number = 0; i<5; i++){
    console.log("*****");
}
for (let i: number= 5; i <10; i++){
    console.log(i);
}
for (let num: number = 50; num > 44; num--){
    console.log(num);
}
for (let i: number = 1; i <= 6; i++) {
    let stars: string = '';
    for (let j: number = 0; j < i; j++) {
        stars += '*';
    }
    console.log('//' + stars);
}
for (let i: number= 0; i <3; i++){
    let zeile: string= '';
    for (let stern: number= 0; stern <20; stern++){
        zeile += "*"
    }
    console.log(zeile);   
}
let sum: number = 0; 
for (let num: number= 0; num<=100; num++){
    sum += num;
    console.log(sum);
}
// for-of loop
// syntax for(const "name" of iterable){code}
const nums: number [] = [10,20,30,40,50];
for (const singleNum of nums){
    console.log(singleNum *2);   
}
const text2: string = "typescript";

for(const SingleLetter of text2){
    console.log(SingleLetter.toUpperCase());
    
}
