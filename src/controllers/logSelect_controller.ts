import { Request, Response } from "express";
import Action from "../model";

export async function logSelected(req: Request, res: Response) {
  try {
    const selectedCrypto: string = req.body.crypto;
    console.log(`User selected: ${selectedCrypto}`);

    const action = new Action({
      type: "selected",
      crypto: selectedCrypto,
    });

    await action.save();

    res.sendStatus(200);
  } catch (error) {
    console.error("Error logging selection:", error);
    res.status(500).json({ error: "Error logging selection" });
  }
}
