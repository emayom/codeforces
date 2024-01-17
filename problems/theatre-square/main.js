"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = ""; // => string[]
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

/**
 * $ cat input.txt | node main.js
 */
function main() {
  const line = readline();
  const [n, m, a] = line.split(" ").map((v) => parseInt(v));
  const [long, short] = n >= m ? [n, m] : [m, n];

  let flagstones = 0;

  if (long && short) {
    if (long <= a) {
      flagstones++;
    } else {
      const x = Math.ceil(long / a);
      const y = short > a ? Math.ceil(short / a) : 1;

      flagstones = x * y;
    }
  }

  console.log(flagstones);
}
