const request = require('supertest');
const app = require('../../app'); // din Express-app

describe("Integration Tests - Numbercruncher API", () => {
  test("GET /add?x=5&y=3 => 8", async () => {
    const res = await request(app).get('/add?x=5&y=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  test("GET /subtract?x=10&y=4 => 6", async () => {
    const res = await request(app).get('/subtract?x=10&y=4');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(6);
  });

  test("GET /multiply?x=3&y=7 => 21", async () => {
    const res = await request(app).get('/multiply?x=3&y=7');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(21);
  });

  test("GET /divide?x=12&y=4 => 3", async () => {
    const res = await request(app).get('/divide?x=12&y=4');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(3);
  });

  test("GET /divide?x=10&y=0 => error", async () => {
    const res = await request(app).get('/divide?x=10&y=0');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Cannot divide by zero");
  });
});
