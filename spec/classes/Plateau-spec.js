import { Plateau } from "../../src/classes/Plateau.js";

describe("Plateau", () => {
  it("deve adicionar o rover ao array rovers", () => {
    let plateau = new Plateau(10, 10);
    plateau.addRover({ x: 5, y: 5, orientation: "N" });
    expect(plateau.getRovers().length).toBe(1);
  });

  it("adiciona e valida se o rover esta no local", () => {
    let plateau = new Plateau(10, 10);
    let roverParams = { x: 6, y: 2, orientation: "N" };

    plateau.addRover(roverParams);

    let addedRover = plateau.getRovers()[0];
    expect(addedRover.getCurrentPosition()).toEqual(roverParams);
  });

  it("deve mover e rotacionar o rover de acordo com o comando", () => {
    let plateau = new Plateau(10, 10);
    let roverParams = { x: 1, y: 2, orientation: "E" };

    plateau.addRover(roverParams);
    plateau.executeCommand("MLRM");
    expect(plateau.getRoversPosition()).toEqual([
      { x: 3, y: 2, orientation: "E" },
    ]);
  });

  it("retorna true porque nao existe rovers", () => {
    let plateau = new Plateau(10, 10);
    let pos = { _x: 5, _y: 5 };
    expect(plateau.isValidPosition(pos)).toBe(true);
  });

  it("retorna false porque nada foi enviado", () => {
    let plateau = new Plateau(10, 10);
    expect(plateau.isValidPosition()).toBe(false);
  });

  it("retorna falso porque esta posicionado alem da margem limite", () => {
    let plateau = new Plateau(10, 10);
    let pos = { _x: 11, _y: 1 };
    expect(plateau.isValidPosition(pos)).toBe(false);
  });

  it("nao deve adicionar o rover por ja haver adiconado um identico", () => {
    let plateau = new Plateau(10, 10);
    let roverParams = { x: 1, y: 2, orientation: "E" };

    plateau.addRover(roverParams);
    plateau.addRover(roverParams);
    expect(plateau.getRovers().length).toBe(1);
  });
});
