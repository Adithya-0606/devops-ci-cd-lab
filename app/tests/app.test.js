const request = require("supertest");
const app = require("../server");

describe("Application Tests", () => {

    test("GET / should return 200", async () => {
        const res = await request(app).get("/");

        expect(res.statusCode).toBe(200);
    });

    test("GET /health should return UP", async () => {
        const res = await request(app).get("/health");

        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("UP");
    });

});