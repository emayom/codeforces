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
  const [n, k] = readline()
    .split(" ")
    .map((v) => parseInt(v));

  const lastOddIndex = n % 2 === 0 ? n / 2 : Math.ceil(n / 2);

  console.log(lastOddIndex < k ? (k - lastOddIndex) * 2 : 1 + 2 * (k - 1));
}
