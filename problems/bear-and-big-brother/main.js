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
  const line = readline();
  let [a, b] = line.split(" ").map((v) => parseInt(v));
  let count = 0;

  while (a <= b) {
    a *= 3;
    b *= 2;
    count++;
  }

  console.log(count);
}
