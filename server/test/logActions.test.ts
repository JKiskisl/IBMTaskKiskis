import request from "supertest";
import { createApp } from "../src/index";
import { Application } from "express";
import mongoose from "mongoose";

describe("Log Actions API", () => {
  let app: Application;
  let server: any;

  beforeAll(async () => {
    app = createApp();
    server = await app.listen(0);
  });

  afterAll(async () => {
    if (server) {
      await server.close();
    }

    await mongoose.connection.close();
  });
  it("should log a search action", async () => {
    const response = await request(server)
      .get("/api/logSearch")
      .query({ crypto: "BTC/USDT", dataRange: "1d" });

    expect(response.status).toBe(200);
  }, 10000);

  it("should log a selected action", async () => {
    const response = await request(server)
      .get("/api/logSelected")
      .query({ crypto: "BTC/USDT", dataRange: "3d" });

    expect(response.status).toBe(200);
  });

  it("should return 500 with wrong crypto", async () => {
    const response = await request(server)
      .get("/api/logSearch")
      .query({ crypto: "BTC" });

    expect(response.status).toBe(500);
  });
});
