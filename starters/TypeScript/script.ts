// @ts-ignore => Remove this ignore after installing all the Typescript dependencies
import * as fs from "fs";
// @ts-ignore => Remove this ignore after installing all the Typescript dependencies
import * as path from "path";

// @ts-ignore => Remove this ignore after installing all the Typescript dependencies
const inputPath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(inputPath, { encoding: "utf-8" });
const lines = input.split(/\r?\n/);

let solution: any = null;

/**
 * @description Implement the solution here
 */

console.log(solution);
