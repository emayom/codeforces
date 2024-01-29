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

  let count = 0;

  for (let i = 0; i < n; i++) {
    const [p, q] = readline()
      .split(" ")
      .map((v) => parseInt(v));

    if (q - p >= 2) count++;
  }

  console.log(count);
}
