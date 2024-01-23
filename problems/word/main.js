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
  const s = readline();
  const uppercases = s.match(/[A-Z]/g);
  const lowercases = s.match(/[a-z]/g);

  if (uppercases && lowercases) {
    console.log(
      uppercases.length <= lowercases.length ? s.toLowerCase() : s.toUpperCase()
    );
  } else {
    console.log(s);
  }
}
