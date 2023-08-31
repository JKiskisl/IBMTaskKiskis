import ccxt from "ccxt";

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

export default fetchCryptoCurrency;
