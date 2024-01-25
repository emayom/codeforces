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
  const [n, h] = readline()
    .split(" ")
    .map((v) => parseInt(v));
  const tall = readline()
    .split(" ")
    .filter((v) => parseInt(v) > h);

  console.log(n + tall.length);
}
