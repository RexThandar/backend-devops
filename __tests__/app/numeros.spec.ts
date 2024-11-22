import { describe, test } from "@jest/globals";
import { esPrimo } from "../../src/app/numeros";

describe("Bateria de tests de numeros", () => {
    test("Es primo", () => {
        expect(esPrimo(1)).toBe(false);
        expect(esPrimo(2)).toBe(true);
        expect(esPrimo(3)).toBe(true);
        expect(esPrimo(4)).toBe(false);
        expect(esPrimo(5)).toBe(true);
        expect(esPrimo(6)).toBe(false);
        expect(esPrimo(7)).toBe(true);
        expect(esPrimo(8)).toBe(false);
        expect(esPrimo(9)).toBe(false);
        expect(esPrimo(10)).toBe(false);
    });
});
        