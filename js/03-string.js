console.clear();

/*
String - tekstas

Iniciavimo budai:
- "" dvigubos kabutes
- '' viengubos kabute
- ` backtick

*/

const empty = "";
const spaces = 'A           Z';
const userName = "Pavarde";
const nickName = 'Vardas';
console.log(empty);
console.log(userName);
console.log(spaces);
console.log(nickName);

// Vieguba kabute (').
const kabute1 = "Vieguba kabute (')";
console.log(kabute1);

// Dviguba kabute (").
const kabute2 = 'Dviguba kabute (").';
console.log(kabute1);

// Vienguba (') ir dviguba (") kabutes.
const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.'; 
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);
// Galima kabutes apeiti naudojant backslash \
const backSlash1 = '\\';
const backSlash2 = "\\\\";
console.log(backSlash1);
console.log(backSlash2);
// '""' arba "''"
const kabute777 = 'Vienguba (' + "'" + ') ir dviguba (' + '"' + ') kabutes.';
console.log(kabute777);
const kabute888 = "Vienguba (') ir " + 'dviguba (") kabutes.';
console.log(kabute888);

//Sveiki, <vardas>!
const user1 = 'Petras';
const user2 = 'Maryte';
const user3 = 'Jonas';
const user4 = 'Ona';
const hi1 = 'Sveiki, ' + user1 + '!';
console.log(hi1);
const hi2 = 'Sveiki, ' + user2 + '!';
console.log(hi2);
const hi3 = 'Sveiki, ' + user3 + '!';
console.log(hi3);
const hi4 = 'Sveiki, ' + user4 + '!';
console.log(hi4);

const personName = 'Vardenis';
const lastName = 'Pavardenis';

//Hi, I am Vardenis Pavardenis!
const personHi = 'Hi, I am ' + personName + ' ' + lastName;
console.log(personHi);

//Backticks `` + \r, arba \n enter is naujos eilutes
const HTML = '<header>\r\n\
\t<img class="logo" src="#" alt="Logo">\r\n\
\t\t<nav>\r\n\
\t\t\t<a href="#"> Home</a>\r\n\
\t\t\t<a href="#"> Home</a>\r\n\
\t\t\t<a href="#"> Home</a>\r\n\
\t\t</nav>\r\n\
</header>';
console.log(HTML);

const labas = 'Labas rytas\rtau.';
// tau.s rytas
console.log(labas);
const labas2 = 'Labas rytas\ntau.';
// Labas rytas
//             tau.
console.log(labas2);
const labas3 = 'Labas rytas\r\ntau.';
// Labas rytas
// tau.
console.log(labas3);
//Backtick
const backtickHtml = `<header>
    <img class="logo" src="#" alt="Logo">
        <nav>
        <a href="#"> Home</a>
        <a href="#"> Home</a>
        <a href="#"> Home</a>
        </nav>
</header>`;
console.log(backtickHtml);

//Backtick string nauojimas
const personName2 = 'Nejonis';
const lastName2 = 'Nejonaitis';
const personHi2 = `Hi, I am ${personName2}, ${lastName2}!`;
console.log(personHi2);