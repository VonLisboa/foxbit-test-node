"use strict";

import { TxtReader } from "./src/classes/Reader.js";
import { MarsUtils } from "./src/classes/utils.js";

let file = new TxtReader();
let mars = new MarsUtils();

file
  .readFile("./input.txt")
  .then((text) => {
    let arrText = text.split("\n"); // Windows usar '\r\n' ou Ubuntu usar '\n'
    let plateau = mars.createPlateau(arrText.shift());

    while (plateau && arrText.length > 0) {
      let rover = mars.parseRover(arrText.shift());
      plateau.addRover(rover);
      plateau.executeCommand(arrText.shift());
    }

    console.log("____RESULTADO____");
    plateau.getRoversPosition().forEach(function (pos) {
      console.log(pos.x, pos.y, pos.orientation);
    });
  });
