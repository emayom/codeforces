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
  const operator = "+";
  let s = readline().trim();

  if (s.length > 1) {
    s = s
      .split(operator)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .join(operator);
  }

  console.log(s);
}
