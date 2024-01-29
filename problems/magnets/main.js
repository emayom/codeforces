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
  const n = parseInt(readline());
  const magnets = Array(n)
    .fill("")
    .map(() => readline());

  let count = 0;
  magnets.map((position, i) => {
    if (magnets[i - 1] !== position) count++;
  });

  console.log(count);
}
