"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = ""; // => string[]
let currentLine = 0;

process.stdin.on("data", (inputStdin) => (inputString += inputStdin));

process.stdin.on("end", () => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => string.trim());

  main();
});

function readline() {
  return inputString[currentLine++];
}

/**
 * $ cat input.txt | node main.js
 */
function main() {
  const n = readline();

  let replaced = [];

  for (let i = 0; i < n; i++) {
    const word = readline();

    if (word.length > 10) {
      replaced.push(word[0] + word.slice(1, -1).length + word.slice(-1));
    } else {
      replaced.push(word);
    }
  }

  console.log(replaced.join("\n"));
}
