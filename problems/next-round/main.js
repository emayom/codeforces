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
  const parseStringToIntArray = (string) => {
    return string.split(/\s{1,}/).map((v) => parseInt(v));
  };

  const [n, k] = parseStringToIntArray(readline());
  const integers = parseStringToIntArray(readline());
  const cutoff = integers[k - 1];

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (integers[i] < cutoff) break;
    else if (integers[i] >= cutoff && integers[i] !== 0) count++;
  }

  console.log(count);
}
