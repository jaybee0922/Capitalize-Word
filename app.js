// First solution
const words = ["coder", "programmer", "developer"];
const capitalizeFirstLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);
const capitalizedWords = words.map(capitalizeFirstLetter);
console.log(capitalizedWords);

// Second solution
words.forEach((newWords, index, array) => {
  array[index] = newWords.charAt(0).toUpperCase() + newWords.slice(1);
});

console.log(words);

// Third solution
for (const myWords of words) {
  myWords.charAt(0).toUpperCase + myWords.slice(1);
  console.log(`${myWords}`);
}
