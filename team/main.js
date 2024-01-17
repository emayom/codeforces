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
  const lines = readline();

  let solvedCnt = 0;

  for (let i = 0; i < lines; i++) {
    if (
      readline()
        .split(" ")
        .filter((v) => parseInt(v)).length >= 2
    ) {
      solvedCnt++;
    }
  }

  console.log(solvedCnt);
}
