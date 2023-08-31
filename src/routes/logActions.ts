import express, { Request, Response } from "express";
import { Router } from "express";
import ccxt from "ccxt";
import Action from "../model";
const router: Router = express.Router();

// POST /api/logSearch
router.post("/logSearch", async (req: Request, res: Response) => {
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
});

// Function to fetch crypto data
async function fetchCryptoCurrency(cryptoSymbol: string) {
  try {
    console.log("Fetching data for:", cryptoSymbol);

    const exchange = new ccxt.binance();
    console.log("Exchange instance created.");

    const ticker = await exchange.fetchTicker(cryptoSymbol);
    console.log("Ticker fetched:", ticker);

    return ticker;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// POST /api/logSelected
router.post("/logSelected", async (req: Request, res: Response) => {
  const selectedCrypto: string = req.body.crypto;
  console.log(`User selected: ${selectedCrypto}`);

  const action = new Action({
    type: "selected",
    crypto: selectedCrypto,
  });

  await action.save();

  res.sendStatus(200);
});

export default router;
