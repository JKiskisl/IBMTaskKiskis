import { Request, Response } from "express";
import fetchCryptoCurrency from "../services/fetchCrypto";
import Action from "../model";

export async function logSearch(req: Request, res: Response) {
  try {
    console.log("Request body:", req.body);
    const searchedCrypto: string = req.body.crypto;
    console.log(`User searched for: ${searchedCrypto}`);

    const data = await fetchCryptoCurrency(searchedCrypto);
    console.log("Fetched data:", data);

    const action = new Action({
      type: "search",
      crypto: searchedCrypto,
    });

    await action.save();

    res.sendStatus(200);
  } catch (error) {
    console.error("Error logging search:", error);
    res.status(500).json({ error: "Error logging search" });
  }
}
