import { describe, test } from "@jest/globals";
import request from "supertest";
import express from "express";
import mainRouter from "../../src/routes/main-route";

const app = express();
app.use(mainRouter);

describe("Pruebas para mainRouter", () => {
    test("GET / - Mensaje de bienvenida", async () => {
        return await request(app) // Usar la aplicación en lugar del router
            .get("/")
            .expect(200)
            .expect("Content-Type", /text/)
            .expect((res) => {
                expect(res.text).toContain("Hola mundo al usuario");
            });
    });

    test("GET /api-key - Mensaje de apikey", async () => {
        return await request(app)
            .get("/api-key")
            .expect(200)
            .expect("Content-Type", /text/)
            .expect((res) => {
                expect(res.text).toContain("la apikey de mi aplicacion es:");
            });
    });

    test("GET /operar - Operación suma", async () => {
        return await request(app)
            .get("/operar?operacion=suma&num1=2&num2=3")
            .expect(200)
            .expect("Content-Type", /text/)
            .expect((res) => {
                expect(res.text).toContain("El resultado de la operacion es: 5");
            });
    });

    test("GET /palindromo - Palindromo", async () => {
        return await request(app)
            .get("/palindromo?frase=anita lava la tina")
            .expect(200)
            .expect("Content-Type", /text/)
            .expect((res) => {
                expect(res.text).toContain("La frase ingresada es palindromo");
            });
    });

    test("GET /palindromo - No Palindromo", async () => {
        return await request(app)
            .get("/palindromo?frase=anita no lava la tina")
            .expect(200)
            .expect("Content-Type", /text/)
            .expect((res) => {
                expect(res.text).toContain("La frase ingresada no es palindromo");
            });
    });

    test("GET /primo - Número primo", async () => {
        return await request(app)
            .get("/primo?numero=7")
            .expect(200)
            .expect("Content-Type", /text/)
            .expect((res) => {
                expect(res.text).toContain("el numero ingresado es un numero primo");
            });
    });
    
    test("GET /primo - Número no primo", async () => {
        return await request(app)
            .get("/primo?numero=4")
            .expect(200)
            .expect("Content-Type", /text/)
            .expect((res) => {
                expect(res.text).toContain("el numero ingresado no es un numero primo");
            });
    });
});