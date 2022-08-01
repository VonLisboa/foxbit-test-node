"use strict";

const rotations = {
  N: {
    nextR: "E",
    nextL: "W",
    move: (rover) => {
      rover._y++;
    },
  },
  E: {
    nextR: "S",
    nextL: "N",
    move: (rover) => {
      rover._x++;
    },
  },
  S: {
    nextR: "W",
    nextL: "E",
    move: (rover) => {
      rover._y--;
    },
  },
  W: {
    nextR: "N",
    nextL: "S",
    move: (rover) => {
      rover._x--;
    },
  },
};

class Rover {
  constructor(x, y, orientation) {
    this._x = x;
    this._y = y;
    this._orientation = orientation;
    this._rotationState = rotations[orientation];
  }

  getCurrentPosition() {
    return {
      x: this._x,
      y: this._y,
      orientation: this._orientation,
    };
  }

  moveForward() {
    this._rotationState.move(this);
  }

  futureMove() {
    let pos = {
      _x: this._x,
      _y: this._y,
    };
    this._rotationState.move(pos);
    return pos;
  }

  rotateRight() {
    this._orientation = this._rotationState.nextR;
    this._rotationState = rotations[this._orientation];
  }

  rotateLeft() {
    this._orientation = this._rotationState.nextL;
    this._rotationState = rotations[this._orientation];
  }
}

export { Rover, rotations };
