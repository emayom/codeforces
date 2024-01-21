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
  const toCharCodeArray = (string) =>
    [...string].map((char) => char.charCodeAt(0));

  const first = toCharCodeArray(readline().toLowerCase());
  const second = toCharCodeArray(readline().toLowerCase());

  let output = 0;

  first.some((char, idx) => {
    if (char === second[idx]) return false;
    else {
      output = char > second[idx] ? 1 : -1;
      return true;
    }
  });

  console.log(output);
}
