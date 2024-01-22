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
  let x = parseInt(readline());
  let min_step = 0;
  const steps = [5, 4, 3, 2, 1];

  steps.some((step) => {
    if (x === 0) return true;

    const count = parseInt(x / step);

    x -= count * step;
    min_step += count;
  });

  console.log(min_step);
}
