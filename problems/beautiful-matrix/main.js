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
  const matrix = [];

  for (let i = 0; i < 5; i++) {
    matrix.push(
      readline()
        .split(" ")
        .map((v) => parseInt(v))
    );
  }

  let count = 0;
  matrix.forEach((row, idx) => {
    const [m, n] = [idx, row.findIndex((v) => v === 1)];

    if (n !== -1) {
      count += Math.abs(m - 2) + Math.abs(n - 2);
      return false;
    }
  });

  console.log(count);
}
