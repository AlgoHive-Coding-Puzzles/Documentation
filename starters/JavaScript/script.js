const fs = require("file-system");
const path = require("path");

const inputPath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(inputPath, { encoding: "utf-8" });
const lines = input.split(/\r?\n/);

let solution = null;

/**
 * @description Implement the solution here
 */

console.log(solution);
