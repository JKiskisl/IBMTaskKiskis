import ccxt from "ccxt";

function fetchCryptoCurrency(cryptoSymbol: string) {
  console.log("Fetching data for:", cryptoSymbol);

  const exchange = new ccxt.binance();
  console.log("Exchange instance created.");

  return exchange
    .fetchTicker(cryptoSymbol)
    .then((ticker) => {
      console.log("Ticker fetched:", ticker);
      return ticker;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

export default fetchCryptoCurrency;
