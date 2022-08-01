import { Rover } from "../../src/classes/Rover.js";

describe("Rover", () => {
  it("deve retornar o mesmo valor usado na instanciacao", () => {
    let rover = new Rover(1, 2, "N");
    expect(rover.getCurrentPosition()).toEqual({
      x: 1,
      y: 2,
      orientation: "N",
    });
  });

  it("incrementa x ou y dependendo da orientacao", () => {
    let rover = new Rover(1, 2, "E");
    rover.moveForward();
    expect(rover.getCurrentPosition()).toEqual({
      x: 2,
      y: 2,
      orientation: "E",
    });
  });

  it("incrementa e retorna a nova posicao de acordo com o esperado", () => {
    let rover = new Rover(4, 4, "S");
    expect(rover.futureMove()).toEqual({ _x: 4, _y: 3 });
  });

  it("deve rotacionar a direita dependendo da orientacao", () => {
    let rover = new Rover(4, 4, "S");
    let nextR = rover._rotationState.nextR;
    rover.rotateRight();
    expect(rover.getCurrentPosition()).toEqual({
      x: 4,
      y: 4,
      orientation: nextR,
    });
  });

  it("deve rotacionar a esquerda dependendo da orientacao", () => {
    let rover = new Rover(4, 4, "S");
    let nextL = rover._rotationState.nextL;
    rover.rotateLeft();
    expect(rover.getCurrentPosition()).toEqual({
      x: 4,
      y: 4,
      orientation: nextL,
    });
  });
});
