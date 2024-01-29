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
  const integers = readline()
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => b - a);

  const majority = Math.floor(
    integers.reduce((acc, current) => acc + current, 0) / 2
  );

  let total = 0;
  let count = 0;
  integers.some((coin) => {
    total += coin;
    count++;

    if (total > majority) return true;
  });

  console.log(count);
}
