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
  const ACCEPTABLE_REGEX = /(^X{1}(\+|-){2}$|^(\+|-){2}X{1}$)/;
  const OPER_REGEX = /(\+|-){2}/;

  let x = 0;

  for (let i = 0; i < n; i++) {
    const statement = readline();

    if (ACCEPTABLE_REGEX.test(statement)) {
      const operation = statement.match(OPER_REGEX)[0];

      if (operation === "++") x++;
      else if (operation === "--") x--;
    }
  }

  console.log(x);
}
