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
  const output = Array(n);

  readline()
    .split(" ")
    .forEach((value, index) => {
      output[parseInt(value) - 1] = index + 1;
    });

  console.log(output.join(" "));
}
