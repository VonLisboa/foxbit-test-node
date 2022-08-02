import { Plateau } from "../../src/classes/Plateau.js";
import { MarsUtils } from "../../src/classes/utils.js";

describe("MarsUtils", () => {
  let mars = new MarsUtils();

  it("Deve retornar um objeto Plateau", () => {
    let plateau = mars.createPlateau("5 5");
    expect(plateau).toEqual(jasmine.any(Plateau));
  });

  it("Deve retornar o mesmo valor quando recebe-lo como uma string", () => {
    let criteria = { x: "5", y: "3", orientation: "N" };
    expect(mars.parseRover(Object.values(criteria).join(" "))).toEqual(
      criteria
    );
  });

  it("Deve retornar um erro porque o input esta invalido", () => {
    expect(function () {
        mars.createPlateau("teste");
    }).toThrowError(
      "O Plateau nao pode ser criado, verifique o arquivo de entrada."
    );
  });

  it("Deve retornar um erro porque o input esta invalido", () => {
    expect(function () {
        mars.parseRover("blablabla");
    }).toThrowError(
      "O Rover nao foi adicionado. verifique o arquivo de entrada."
    );
  });
});
