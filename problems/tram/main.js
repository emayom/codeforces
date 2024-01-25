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

  let min = 0;
  let passenger = 0;

  for (let i = 0; i < n; i++) {
    const [a, b] = readline()
      .split(" ")
      .map((v) => parseInt(v));

    passenger -= a;
    passenger += b;

    if (min <= passenger) min = passenger;
  }
  console.log(min);
}
