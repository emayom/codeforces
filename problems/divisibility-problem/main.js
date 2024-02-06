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

  console.log(inputString);

  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  const t = parseInt(readline());

  for (let i = 0; i < t; i++) {
    const [a, b] = readline()
      .split(" ")
      .map((v) => parseInt(v));

    console.log(Math.ceil(a / b) * b - a);
  }
}
