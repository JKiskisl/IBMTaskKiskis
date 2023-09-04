import { Request, Response } from "express";
import fetchCryptoCurrency from "../services/fetchCrypto";
import Action from "../model";

export function logSearch(req: Request, res: Response) {
  console.log("Request query parameters:", req.query);
  const searchedCrypto: string = req.query.crypto as string;
  const dataRange: string = req.query.dataRange as string;
  console.log(`User searched for: ${searchedCrypto}`);
  console.log(`Data range selected: ${dataRange}`);

  fetchCryptoCurrency(searchedCrypto, dataRange)
    .then((rawData) => {
      console.log("Fetched data:", rawData);

      const formattedData = rawData.map((entry) => {
        return {
          timestamp: entry[0],
          open: entry[1],
          high: entry[2],
          low: entry[3],
          close: entry[4],
          volume: entry[5],
        };
      });

      res.json({
        data: formattedData,
      });

      const action = new Action({
        type: "search",
        crypto: searchedCrypto,
        dataRange: dataRange,
      });

      return action.save();
    })
    .catch((error) => {
      console.error("Error logging search:", error);
      res.status(500).json({ error: "Error logging search" });
    });
}
