"use strict";

import { Rover } from "./Rover.js";

class Plateau {
  constructor(x, y) {
    this._x = x;
    this._y = y;
    this._rovers = [];
    this._currentRover = 0;
  }

  addRover(roverProp) {
    if (this.isValidPosition({ _x: roverProp.x, _y: roverProp.y })) {
      this._rovers.push(
        new Rover(roverProp.x, roverProp.y, roverProp.orientation)
      );
    }
  }

  getRovers() {
    return this._rovers;
  }

  getRoversPosition() {
    return this._rovers.reduce((positions, rover) => {
      positions.push(rover.getCurrentPosition());
      return positions;
    }, []);
  }

  isValidPosition(pos) {
    if (pos && pos._x <= this._x && pos._y <= this._y) {
      return !this.getRoversPosition().some(function (existingRover) {
        return (
          existingRover.x === pos._x && existingRover.y === pos._y
        );
      });
    } else {
      return false;
    }
  }

  executeCommand(commandString) {
    let currentRover = this._rovers[this._currentRover];

    if (currentRover) {
      let arrCommands = commandString.split("");
      for (let command of arrCommands) {
        switch (command) {
          case "L":
            currentRover.rotateLeft();
            break;
          case "R":
            currentRover.rotateRight();
            break;
          case "M":
            if (this.isValidPosition(currentRover.futureMove())) {
              currentRover.moveForward();
            }
            break;
          default:
            break;
        }
      }
      this._currentRover++;
    }
  }
}

export { Plateau };
