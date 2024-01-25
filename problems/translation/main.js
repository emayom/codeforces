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
  const s = readline().trim();
  const t = readline().trim();
  const lastIdx = s.length - 1;

  let sameWord = true;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== t.charAt(lastIdx - i)) {
      sameWord = false;
      break;
    }
  }

  console.log(sameWord ? "YES" : "NO");
}
