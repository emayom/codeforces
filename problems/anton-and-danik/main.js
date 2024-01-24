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
  const outcome = readline().trim();
  const half = Math.ceil(n / 2);

  let antonWins = 0;
  let danikWins = 0;

  for (let i = 0; i < n; i++) {
    const char = outcome.charAt(i);

    if (char === "A") antonWins++;
    if (char === "D") danikWins++;

    if (antonWins > half || danikWins > half) break;
  }

  if (antonWins > danikWins) {
    console.log("Anton");
  } else if (antonWins < danikWins) {
    console.log("Danik");
  } else {
    console.log("Friendship");
  }
}
