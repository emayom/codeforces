"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
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

function main() {
  const y = readline();

  let min = parseInt(y) + 1;

  while (true) {
    if (new Set(Array.from(String(min), Number)).size === 4) {
      break;
    }
    min += 1;
  }

  console.log(min);
}
