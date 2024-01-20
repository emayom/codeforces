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
  /** 1 ≤ M ≤ N ≤ 16 */
  const [m, n] = readline()
    .split(" ")
    .map((v) => parseInt(v))
    .sort();

  const board = m * n;
  const domino = 2 * 1;

  let count = 0;

  if (n >= 2) {
    count = n % 2 === 0 ? board / domino : Math.floor(board / domino);
  }

  console.log(count);
}
