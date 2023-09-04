import { Request, Response } from "express";
import Action from "../model";

export function logSelected(req: Request, res: Response) {
  console.log("Request query parameters:", req.query);
  const selectedCrypto: string = req.query.crypto as string;
  const dataRange: string = req.query.dataRange as string;
  console.log(`User selected: ${selectedCrypto}`);
  console.log(`Data range selected: ${dataRange}`);

  const action = new Action({
    type: "selected",
    crypto: selectedCrypto,
    dataRange: dataRange,
  });

  action
    .save()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error logging selection:", error);
      res.status(500).json({ error: "Error logging selection" });
    });
}
