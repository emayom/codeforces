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
  let [n, k] = readline()
    .split(" ")
    .map((v) => parseInt(v));

  for (let i = 0; i < k; i++) {
    n = n % 10 === 0 ? n / 10 : n - 1;
  }

  console.log(n);
}
