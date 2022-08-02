"use strict";

import { TxtReader } from "./src/classes/Reader.js";

let file = new TxtReader();

file
  .readFile("./input.txt")
  .then((data) => {
    let inputData = data.split("\n"); // Windows usar '\r\n' ou Ubuntu usar '\n'
    console.log(inputData)
  });
