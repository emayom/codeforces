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
  const first = readline().split(" ").slice(1);
  const second = readline().split(" ").slice(1);
  const combined = Array(...new Set([...first, ...second]))
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);

  const index = combined.findIndex((el) => el === n);

  if (index >= 0) {
    combined.slice(0, index + 1).length === n
      ? console.log("I become the guy.")
      : console.log("Oh, my keyboard!");
  } else {
    console.log("Oh, my keyboard!");
  }
}
