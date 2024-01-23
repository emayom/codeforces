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
  const coordinate = Array(n)
    .fill([])
    .map(() =>
      readline()
        .split(" ")
        .map((v) => parseInt(v))
    );

  const equilibrium = coordinate[0].some((_, yIndex) => {
    return (
      Array(n)
        .fill(0)
        .reduce((acc, _, xIndx) => (acc += coordinate[xIndx][yIndex]), 0) !== 0
    );
  });

  console.log(equilibrium ? "NO" : "YES");
}
