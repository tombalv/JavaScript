console.clear();
// Funkcija automatiskai prideda return: undefined.
function sum(a, b) {
    console.log('>>>', a, b);
    return a + b;
}

const s1 = sum(2, 2);
console.log(s1);
const s2 = sum(7, 5);
console.log(s2);
const s3 = sum(-16, -15);
console.log(s3);
const s4 = sum(1);
console.log(s4);
const s5 = sum(3.14, 2.72);
console.log(s5);

// Hi, my name is Nepetras
// Hi, my name is Nemaryte
// Hi, my name is Nejonas
// Hi, my name is Neona
function hi(name) {
    console.log(name);
    return `Hi, my name is ${name}`;
}
console.log(hi('Nepetras'));
console.log(hi('Nemaryte'));
console.log(hi('Nejonas'));
console.log(hi('Neona'));

// Sveiki, as Nepetras ir man 16 metu.
// Sveiki, as Nemaryte ir man 160 metu.
// Sveiki, as Nejonas ir man 36 metu.
// Sveiki, as Neona ir man 99 metu.

function prisistatymas(name, age) {
    return `Sveiki, as ${name} ir man ${age} metu.`;
}
console.log(prisistatymas('Nepetras', 16));
console.log(prisistatymas('Nemaryte', 160));
console.log(prisistatymas('Nejonas', 36));
console.log(prisistatymas('Neona', 99));

