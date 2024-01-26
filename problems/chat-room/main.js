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
  const word = "hello";

  let j = 0;
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (j === word.length) break;
    if (s.charAt(i) === word.charAt(j)) {
      result += word.charAt(j);
      j++;
    }
  }
  console.log(result === word ? "YES" : "NO");
}
