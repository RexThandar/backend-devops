import { describe, test } from "@jest/globals";
import { suma, operar, restar, multiplicar, dividir, potencia, factorial  } from "../../src/app/calculadora";

describe("Bateria de tests de la calculadora", () => {
    test("Operar en la calculadora", () => {
        expect(operar("suma", 1, 2)).toBe(3);
        expect(operar("resta", 1, 2)).toBe(-1);
        expect(operar("multiplicacion", 1, 2)).toBe(2);
        expect(operar("division", 1, 2)).toBe(0.5);
        expect(operar("potencia", 2, 3)).toBe(8);
        expect(operar("factorial", 2, 3)).toBe(2);
        expect(operar(undefined, 2, 3)).not.toBeDefined();
    });

    test("Sumar en la calculadora", () => {
        expect(suma(1, 2)).toBe(3);
        expect(suma(1, -2)).toBe(-1);
        expect(suma(1, 0)).toBe(1);
        expect(suma(0, 0)).toBe(0);
        expect(suma(1, 5)).not.toBe(1);
        let a:any = 1;
        let b:any = "a"
        expect(suma(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => suma(a, b)).toThrow("No se puede sumar indefinidos");
    });

    test("Restar en la calculadora", () => {
        expect(restar(2, 1)).toBe(1);
        expect(restar(2, 3)).toBe(-1);
        expect(restar(2, 0)).toBe(2);
        expect(restar(0, 0)).toBe(0);
        expect(restar(1, 5)).not.toBe(1);
        let a:any = 1;
        let b:any = "a"
        expect(restar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => restar(a, b)).toThrow("No se puede restar indefinidos");
    });

    test("Multiplicar en la calculadora", () => {
        expect(multiplicar(2, 1)).toBe(2);
        expect(multiplicar(2, -1)).toBe(-2);
        expect(multiplicar(2, 0)).toBe(0);
        expect(multiplicar(0, 0)).toBe(0);
        expect(multiplicar(1, 5)).not.toBe(1);
        let a:any = 1;
        let b:any = "a"
        expect(multiplicar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => multiplicar(a, b)).toThrow("No se puede multiplicar indefinidos");
    });

    test("Dividir en la calculadora", () => {
        expect(dividir(2, 1)).toBe(2);
        expect(dividir(2, -1)).toBe(-2);
        expect(dividir(2, 0)).toBe(Infinity);
        expect(dividir(0, 0)).toBeNaN();
        expect(dividir(1, 5)).not.toBe(1);
        let a:any = 1;
        let b:any = "a"
        expect(dividir(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => dividir(a, b)).toThrow("No se puede dividir indefinidos");
    });

    test("Potencia en la calculadora", () => {
        expect(potencia(2, 1)).toBe(2);
        expect(potencia(2, -1)).toBe(0.5);
        expect(potencia(2, 0)).toBe(1);
        expect(potencia(0, 0)).toBe(1);
        expect(potencia(-1, 5)).not.toBe(1);
        let a:any = 1;
        let b:any = "a"
        expect(potencia(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => potencia(a, b)).toThrow("No se puede potenciar indefinidos");
    });

    test ("Factorial en la calculadora", () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(2)).toBe(2);
        expect(factorial(3)).toBe(6);
        expect(factorial(4)).toBe(24);
        expect(factorial(5)).toBe(120);
        let a:any = "a";
        expect(() => factorial(a)).toThrow("El número debe ser un entero no negativo");
        a = undefined;
        expect(() => factorial(a)).toThrow("No se puede factoriar indefinidos");
    });
});