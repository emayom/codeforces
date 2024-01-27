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
  const maximun = 1000;
  const almostLycky = Array(maximun)
    .fill(0)
    .map((_, idx) => idx + 1)
    .filter((n) => String(n).match(/^(4|7)(4|7)*$/));

  const isLucky = almostLycky.some((v) => {
    if (n % v === 0) {
      return true;
    }
  });

  console.log(isLucky ? "YES" : "NO");
}
