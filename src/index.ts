import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import logActionsRouter from "./routes/logActions";

// Wrap app creation logic in a function
export function createApp(): Application {
  const app: Application = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors({ origin: true }));

  // Connect to MongoDB
  mongoose
    .connect("mongodb://127.0.0.1:27017/crypto_logger", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });

  app.get("/", (req: Request, res: Response) => {
    res.send("healthy");
  });

  app.use("/api", logActionsRouter);

  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });

  return app;
}

// Start the server if this file is the entry point
if (require.main === module) {
  createApp();
}
