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
  const [k, n, w] = line.split(" ").map((v) => parseInt(v));

  let cost = 0;

  for (let i = 1; i <= w; i++) {
    cost += k * i;
  }

  console.log(cost > n ? cost - n : 0);
}
