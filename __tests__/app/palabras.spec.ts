import { describe, test } from "@jest/globals";
import { esPalindromo } from "../../src/app/palabras";

describe("Bateria de tests de palindromos", () => {
    test("Es palindromo", () => {
        expect(esPalindromo("")).toBe(false);
        expect(esPalindromo("a")).toBe(true);
        expect(esPalindromo("ana")).toBe(true);
        expect(esPalindromo("an a")).toBe(true);
        expect(esPalindromo("Anita lava la tina")).toBe(true);
    });
});