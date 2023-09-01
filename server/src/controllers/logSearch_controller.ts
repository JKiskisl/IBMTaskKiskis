import { Request, Response } from "express";
import fetchCryptoCurrency from "../services/fetchCrypto";
import Action from "../model";

export function logSearch(req: Request, res: Response) {
  console.log("Request body:", req.body);
  const searchedCrypto: string = req.body.crypto;
  console.log(`User searched for: ${searchedCrypto}`);

  fetchCryptoCurrency(searchedCrypto)
    .then((data) => {
      console.log("Fetched data:", data);

      const action = new Action({
        type: "search",
        crypto: searchedCrypto,
      });

      return action.save();
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error logging search:", error);
      res.status(500).json({ error: "Error logging search" });
    });
}
