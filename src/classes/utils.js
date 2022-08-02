"use strict";

import { rotations } from "./Rover.js";
import { Plateau } from "./Plateau.js";

class MarsUtils {
    createPlateau(line) {
    let values = line.split(" ");
    if (values.length === 2 && !isNaN(values[0]) && !isNaN(values[1])) {
      return new Plateau(values[0], values[1]);
    } else {
      throw Error(
        "O Plateau nao pode ser criado, verifique o arquivo de entrada."
      );
    }
  }

  parseRover(line) {
    let values = line.split(" ");
    if (
      values.length === 3 &&
      !isNaN(values[0]) &&
      !isNaN(values[1]) &&
      Object.keys(rotations).includes(values[2])
    ) {
      return {
        x: values[0],
        y: values[1],
        orientation: values[2],
      };
    } else {
      throw Error(
        "O Rover nao foi adicionado. verifique o arquivo de entrada."
      );
    }
  }
}

export { MarsUtils };
