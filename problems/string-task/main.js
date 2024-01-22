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
  const line = readline().trim();
  const vowels_regex = /[^aoyeuiAOYEUI]/g;
  const consonants = [, ...line.match(vowels_regex)];

  console.log(consonants.join(".").toLowerCase());
}
