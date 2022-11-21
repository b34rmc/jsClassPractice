let myStr = "This word is long, superfradgilisticexpialodocius";

function titleCase(str) {
  str = str.toLowerCase().split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(titleCase(myStr));

function longestWord(str) {
  let strSplit = str.split(" ");
  let biggestWord = "";

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > biggestWord.length) {
      biggestWord = strSplit[i];
    }
  }
  return biggestWord + "  is " + biggestWord.length;
}
console.log(longestWord(myStr), "letters");

function alphabetized(str) {
  str = str.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0);
  }
  let sorted = str.sort();
  return sorted.join("");
}
console.log(alphabetized(myStr));

var arr1 = [1, 2, 3],
  arr2 = [4, 5, 6],
  combinedArray = [],
  i,
  len = Math.min(arr1.length, arr2.length);

for (i = 0; i < len; i++) {
  combinedArray.push(arr1[i], arr2[i]);
}
combinedArray.push(...arr1.slice(len), ...arr2.slice(len));
console.log(combinedArray);
