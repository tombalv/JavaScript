console.clear();
/*
Array - arejus, sarasas, listas, matrica, masyvas(slang)

Masyvas(array) prasideda index = 0;
array.length - masyve esanciu reiksmiu kiekis;
*/

const empty = [];
console.log(empty);

// To paties tipo informacija skaiciai = skaiciai, raides = raides.
// Eiliskumas      0  1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

// Random informacija nerekomenduojama naudoti.
const random = [1, 'antras', 3, '4', 3.14, 'asdasd'];

// Eiliskumas       0           1           2         3
const vardai = ['Nepetras', 'Nemaryte', 'Nejonas', 'Neona'];
console.log(vardai);

const vardas1 = vardai[0];
console.log(vardas1);
const vardas2 = vardai[1];
console.log(vardas2);

console.log(vardai[2]);
console.log(vardai[3]);
// Naudojama tik paskutine reiksme
console.log(vardai[0, 1, 2, 3]);
console.log(vardai[3, 2, 1, 0]);

// Eiliskumas   0  1  2  3  4
const marks = [10, 2, 8, 4, 6];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

console.clear();

const marks1 = [10, 9, 8];
const marks2 = [6, 7, 8];
const marks3 = [5, 5, 5];

// Vidurkis 
function average(marks) {
    let sum = 0;
    sum += marks[0];
    sum += marks[1];
    sum += marks[2];
    return sum / marks.length;
}

console.log('Vidurkis 1:', marks1, '=', average(marks1));
console.log('Vidurkis 2:', marks2, '=', average(marks2));
console.log('Vidurkis 3:', marks3, '=', average(marks3));


const dict1 = ['pirmas', 'zodis', 'labas'];
const dict2 = ['Labas', 'rytas', 'Lietuva'];
const dict3 = ['Labas', 'rytas', 'suraitytas'];

// a, b, c.

function dictionary(wordList) {
    console.log(wordList);
    let result = 'Zodynas: ';
    result += wordList[0] + ', ';
    result += wordList[1] + ', ';
    result += wordList[2] + '. ';
    return result;
    // Arba backtick return `Zodynas: ${wordList[0]}, ${wordList[1]}, ${wordList[2]}.`;
}
console.log(dictionary(dict1));
console.log(dictionary(dict2));
console.log(dictionary(dict3));
/* Arba nepavyks panaudoti kai bus daug zodziu ir jei kiekvienas zodynas sudarys kintama kieki zodziu.
Del to geriau naudoti logika kuri gauna vienu atveju viena zodyna kitokiu atveju kita.
console.log(`Zodynas: ${wordList[0]}, ${wordList[1]}, ${wordList[2]}.`);
console.log(`Zodynas: ${wordList[0]}, ${wordList[1]}, ${wordList[2]}.`);
console.log(`Zodynas: ${wordList[0]}, ${wordList[1]}, ${wordList[2]}.`); */

console.clear();

// Istraukti kubine sakni tai tas pats kas pakelti viena treciaja.
console.log(2 ** 3);
console.log(9 ** 2);
// Istraukti kubine sakni tai tas pats kas pakelti viena treciaja.
console.log(9 ** 0.5);
console.log(8 ** 0.33333333);

// Zodzio arba sakinio skaidymas po viena pozicija(simboli). String yra supaprastintas masyvas(array).
const text = 'Labas rytas';
console.log(text);
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);
console.log(text[7]);
console.log(text[8]);
console.log(text[9]);
console.log(text[10]);
// .length pasako kiek yra poziciju(simboliu) masyve(array);
console.log(text.length);
// Kartu skaiciuojasi ir tuscios eilutes. String ir Array ir giminingi bet ne panasus.
console.log('                 '.length );


/* Apskaiciuoti verte is sarasu kuriu verciu tipas yra skaiciai, pagal pateikta logika.
a. 1-2+3-4+5.
b. Rezultata isvesti i console. */
