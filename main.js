// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10

let cislaDoDeseti = [];
for (let i=1; i <= 10; i = i+1) {
    cislaDoDeseti.push(i);
}

console.log(cislaDoDeseti);

let vypsanaCisla = document.querySelector("#vypsat-cisla");
vypsanaCisla.innerHTML = cislaDoDeseti;

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

let cislaMensiDeseti = [];
for (let i=1; i < 10; i = i+1) {
    cislaMensiDeseti.push(i);
}

console.log(cislaMensiDeseti);

// Třetí příklad - vypiš sestupně čísla od 10 do 0

let cislaSestupne = [];
for (let i=10; i > 0; i = i-1) {
    cislaSestupne.push(i);
}

console.log(cislaSestupne);


let i = 10;
while (i >=0) {
    console.log("while " + i);
    i--;
}


/*
let podminka = true;
let nahoda;
while (podminka) {
    nahoda = Math.floor(Math.random() * 10);
    if (nahoda > 5) {
        podminka = false;
    }
    console.log(nahoda);
}
*/
