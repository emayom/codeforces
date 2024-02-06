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
  const t = parseInt(readline());

  for (let i = 0; i < t; i++) {
    const n = parseInt(readline());
    const cells = readline().split("");

    const firstIndex = cells.findIndex((string) => string === "B");

    if (firstIndex === -1) {
      console.log(0);
    } else {
      // findLastIndex() -> ECMAScript 2019
      let lastIndex = -1;
      for (let j = n - 1; j >= 0; j--) {
        if (cells[j] === "B") {
          lastIndex = j;
          break;
        }
      }
      console.log(lastIndex - firstIndex + 1);
    }
  }
}
