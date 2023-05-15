console.clear();
/*
Numbers

 Normalus:
  - sveikieji
  -desimtainiai

Mistiniai:
 - Infinity/-Infinity
 - NaN (not-a-number)

 Matematiniai veiksmai
 +, -, /, *, **(kelimas laipsniu) - Aritmetiniai operatoriai, % (liekana)
 priskyrimo operatoriai:
 =, +=,-=, /=, *=, **=, %=

 Kintamuju iniciavimo budai
 - const (default)
 - let (jei kinta reiksme)
 - var (nenaudoti, nebent zinai ka darai)

*/


// Sveikasis skaicius
console.log(12551);
console.log(-12551);
console.log(0);
console.log(-0);

// Desimtainis skaicius
console.log(3.1415);
console.log(-3.1415);
console.log(3 / 4);
console.log(1 / 3);
console.log(0.1 + 0.2);
console.log(1 / 10 + 2 / 10);
console.log(3 / 10);
console.log(2 + 2 * 2);

// Begalybes
console.log(Infinity);
console.log(-Infinity);

//NaN
console.log(NaN);

// Aritmetiniai veiksmai
console.log(7 + 5);
console.log(7 - 5);
console.log(7 / 5);
console.log(7 * 5);

console.log(2 ** 2, '=', 2 * 2);
console.log(2 ** 2, '=', 2 * 2 * 2);
console.log(2 ** 4, '=',2 * 2 * 2 * 2);

const a = 7;
console.log(a);

let PI = 3.14;
console.log(PI);

PI = 3;
console.log(PI);

// Pazymiai 10, 2, 8, 4, 6.
let suma = 0;
console.log(suma);
suma = suma + 10;
console.log(suma);
suma = suma + 2;
console.log(suma);
suma = suma + 8;
console.log(suma);
suma = suma + 4;
console.log(suma);
suma = suma + 6;
console.log(suma);

let suma2 = 0;
console.log(suma2);
//Tapatys kintamieji suma2 = suma2
suma2 = suma2 + 10;
suma2 += 10;
console.log(suma2);
suma2 += 2;
console.log(suma2);
suma2 += 8;
console.log(suma2);
suma2 += 4;
console.log(suma2);
suma2 += 6;
console.log(suma2);

let suma3 = 0;
console.log(suma3);
suma3 += 10;
console.log(suma3);
suma3 *= 5;
console.log(suma3);
suma3 -= 1;
console.log(suma3);
suma3 /= 7;
console.log(suma3);
suma3 **= 3;
console.log(suma3);

const skaicius = 81;
const daliklis = 10;
const dalmuo = skaicius / daliklis;
console.log(skaicius, '/', daliklis, '=', dalmuo);
const liekana = skaicius % daliklis;
console.log(liekana);

let liek = 144;
liek %= 12;
console.log(liek);


