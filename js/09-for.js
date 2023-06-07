console.clear();
/*
FOR - ciklas, kuris kartoja procesus N-kartu
for (1; 2; 3) {}
1) inicijuojame kintamaji pasikartojimu kiekiui skaiciuoti (aka, tai kelintas dabar kartas?)
2) ar kartoti? jei tenkina - kartojam, jei ne - baigiam darba
3) tai kaip keisti 1) dalies kintamaji?
*/

const tekstas = "Su gimimo diena!";

for (let i = 0; i < 5; i = i + 1) {
  console.log(i, tekstas);
}

for (let i = 10; i < 17; i = i + 2) {
  console.log(`${i}) va ir tiek...`);
}

for (let x = 0; x <= 5; x++) {
  console.log(x + "...");
}

// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius.
// 0, 2, 4, 6, 8

for (let n = 0; n <= 8; n += 2) {
  console.log(n);
}

console.log("#################");
// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius atbuline tvarka.
// 8, 6, 4, 2, 0

for (let n = 8; n >= 0; n -= 2) {
  console.log(n);
}

console.clear();

// Kokia yra skaiciu suma nurodytame intervale (imtinai)?
const start = 0;
const end = 10;
const step = 1;

let sum = 0;

for (let i = start; i <= end; i += step) {
  sum += i;
  console.log(">>>", i, sum);
}

console.log(sum);

console.clear();

// Koks yra pazymiu vidurkis?
//                 0  1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
let pazymiuSuma = 0;

for (let i = 0; i < pazymiai.length; i++) {
  const pazymys = pazymiai[i];
  pazymiuSuma += pazymys;
}

const pazymiuKiekis = pazymiai.length;
const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log(`Pazymiu vidurkis yra ${pazymiuVidurkis}.`);

console.clear();

// Kiek yra ne neigiamu skaiciu?
//                0   1  2   3   4   5  6   7
const numbers = [10, -7, 5, 77, 13, -9, 0, 14];
let kiek = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number >= 0) {
    kiek++;
  }
}

console.log("KIEK:", kiek);

const list = [];
for (let i = 0; i < list.length; i++) {
  const item = list[i];
}

console.clear();

const dictionary = [
  "Labas",
  "rytas",
  "sakau",
  "tau",
  "mano",
  "mielas",
  "mieste",
  "Ka",
  "tu",
  "ka",
  "vakare",
];

// Kiek yra zodziu, kurie yra trumpesni nei "Labas"?
// Kiek yra zodziu, kurie yra ilgesni nei "Labas"?
// Kiek yra zodziu, kurie yra tokio pat ilgio kaip "Labas"?
// Pavyzdinis zodis gali buti kintamas.

let trumpi = 0;
let toksPat = 0;
let ilgu = 0;
const zodis = "Labas";
const ilgis = zodis.length;

for (let i = 0; i < dictionary.length; i++) {
  const word = dictionary[i];

  if (word.length === ilgis) {
    toksPat++;
  } else if (word.length < ilgis) {
    trumpi++;
  } else {
    ilgu++;
  }
}

console.log("Trumpesniu zodziu:", trumpi);
console.log("Tokio pat ilgio zodziu:", toksPat);
console.log("Ilgesniu zodziu:", ilgu);

// Kiek duotas masyvas turi ieskomo skaiciaus atveju (kiekio)?
// m1:1 -> 3
// m1:2 -> 0
// m1:3 -> 0
// m2:1 -> 1
// m2:2 -> 2
// m2:3 -> 1
// m4:1 -> 5
// m4:2 -> 3
// m4:3 -> 2

console.clear();
const masyvas1 = [1, 1, 1];
const masyvas2 = [1, 2, 2, 3];
const masyvas3 = [5, 4, 3, 2, 1];
const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];

const ieskomasSkaicius = 1;

function skaiciuotiKieki(masyvas, skaicius) {
  let kiekis = 0;
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] === skaicius) {
      kiekis++;
    }
  }
  return kiekis;
}
console.log("m1:1 ->", skaiciuotiKieki(masyvas1, ieskomasSkaicius));
console.log("m2:1 ->", skaiciuotiKieki(masyvas2, ieskomasSkaicius));
console.log("m4:1 ->", skaiciuotiKieki(masyvas3, ieskomasSkaicius));
console.log("m4:1 ->", skaiciuotiKieki(masyvas4, ieskomasSkaicius));

// Ciklo pirma uzduotis.

// Intervalas: 0 ... 0
let suma1 = 0;
for (let i = 0; i <= 0; i++) {
  suma1 += i;
}
console.log("Suma intervalui nuo 0 iki 0:", suma1);

// Intervalas: 0 ... 4
let suma2 = 0;
for (let i = 0; i <= 4; i++) {
  suma2 += i;
}
console.log("Suma intervalui nuo 0 iki 4:", suma2);

// Intervalas: 0 ... 100
let suma3 = 0;
for (let i = 0; i <= 100; i++) {
  suma3 += i;
}
console.log("Suma intervalui nuo 0 iki 100:", suma3);

// Intervalas: 574 ... 815
let suma4 = 0;
for (let i = 574; i <= 815; i++) {
  suma4 += i;
}
console.log("Suma intervalui nuo 574 iki 815:", suma4);

// Intervalas: -50 ... 50
let suma5 = 0;
for (let i = -50; i <= 50; i++) {
  suma5 += i;
}
console.log("Suma intervalui nuo -50 iki 50:", suma5);

// Intervalas: -70 ... 30
let suma6 = 0;
for (let i = -70; i <= 30; i++) {
  suma6 += i;
}
console.log("Suma intervalui nuo -70 iki 30:", suma6);

function atbulai(tekstas) {
  const masyvas = tekstas.split("");
  const atbulaiMasyvas = masyvas.reverse();
  const atbulaiTekstas = atbulaiMasyvas.join("");
  return atbulaiTekstas;
}

const tekstas1 = "abcdef";
const atbulaiTekstas = atbulai(tekstas1);
console.log(atbulaiTekstas);

// Ciklas trecias uzdavinys.
console.clear;
function beLiekanos(intervalasPradzia, intervalasPabaiga, daliklis) {
  let kiekis = 0;
  for (let skaicius = pradzia; skaicius <= pabaiga; skaicius++) {
    if (skaicius % daliklis === 0) {
      kiekis++;
    }
  }
  return kiekis;
}
const pradzia = 0;
const pabaiga = 11;
const daliklis3 = 3;
const daliklis5 = 5;
const daliklis7 = 7;
const kiekis3 = beLiekanos(pradzia, pabaiga, daliklis3);
const kiekis5 = beLiekanos(pradzia, pabaiga, daliklis5);
const kiekis7 = beLiekanos(pradzia, pabaiga, daliklis7);

console.log(
  `Skaičių intervale tarp ${pradzia} ir ${pabaiga}, besidalijančių be liekanos iš ${daliklis3} yra ${kiekis3} vienetai.`
);
console.log(
  `Skaičių intervale tarp ${pradzia} ir ${pabaiga}, besidalijančių be liekanos iš ${daliklis5} yra ${kiekis5} vienetai.`
);
console.log(
  `Skaičių intervale tarp ${pradzia} ir ${pabaiga}, besidalijančių be liekanos iš ${daliklis7} yra ${kiekis7} vienetai.`
);
