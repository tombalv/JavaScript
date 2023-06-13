console.clear();

function letters(str, step) {
  if (typeof str !== "string") {
    return "Pirmasis kintamasis yra netinkamo tipo.";
  }
  if (typeof step !== "number") {
    return "Antras kintamasis yra netinkamo tipo.";
  }
  if (!isFinite(step)) {
    return "Antras kintamasis yra normalus skaicius.";
  }
  if (str.length < step) {
    return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
  }
  if (step <= 0) {
    return "Antrasis kintamasis turi būti didesnis už nulį.";
  }
  let shortText = "";
  for (let i = step - 1; i < str.length; i += step) {
    if (str[i]) {
      shortText += str[i];
    }
  }

  return "";
}

console.log(letters());
console.log(letters(1561, 2));
console.log(letters(true, 2));
console.log(letters(false, 2));
console.log(letters(undefined, 2));
console.log(letters(Infinity, 2));
console.log(letters(NaN, 2));
console.log(letters(null, 2));
console.log(letters([], 2));
console.log(letters({}, 2));
console.log(letters(letters, 2));
console.log(letters("abcdefg", 2), "->", "bdf");
console.log(letters("abcdefghijkl", 3), "->", "cfil");
console.log(
  letters("abc", 0),
  "->",
  "Antrasis kintamasis turi būti didesnis už nulį."
);
console.log(letters("abc", ""));
console.log(letters("abc", undefined));
console.log(letters("abc", true));
console.log(letters("abc", false));
console.log(letters("abc", letters));
console.log(letters("abc", null));
console.log(letters("abc", []));
console.log(letters("abc", {}));
console.log(letters("abc", Infinity));
console.log(letters("abc", -Infinity));
console.log(letters("abc", NaN));

console.log(
  letters("abc", 4),
  "->",
  "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį."
);
console.log(letters(1561, 2), "->", "Pirmasis kintamasis yra netinkamo tipo.");

console.log(letters("abcdefghjkl", 1.5));
