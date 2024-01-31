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
  const first = readline();
  const second = readline();
  const result = first
    .split("")
    .map((number, idx) => (number === second.charAt(idx) ? 0 : 1))
    .join("");

  console.log(result);
}
