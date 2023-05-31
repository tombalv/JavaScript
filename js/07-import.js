import count from "../extra/number.js";
import str from "../extra/string.js";
import {
  lentele as table,
  number as n,
  multiplier,
  isFun,
} from "../extra/multi.js";

const lentele = "LENTELE - NELIESTI MANES!!!";
const number = 777;

console.clear();

console.log(count);
console.log(str);
console.log(lentele);
console.log(number);
console.log(multiplier);
console.log("isFun:", isFun);
console.log(table);
console.log(n);

// Triju lygiu
// multiplier.js -> const multiplier = 5;
// Number.js - > const n1 = 1; const n2 = 2; ...
// table-1.js - > import multiplier + number -> String su pliusais
// table-2.js - > import multiplier + number -> String su backtikais

// indexedDB.js - > import table-1 + table-2 -> log.
