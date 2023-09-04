import ccxt from "ccxt";

/**
 * Fetch cryptocurrency data for a given symbol and data range.
 * @param {string} cryptoSymbol - The symbol of the cryptocurrency to fetch.
 * @param {string} dateRange - datarange
 * @returns {Promise} A promise that resolves to the fetched cryptocurrency data.
 */
function fetchCryptoCurrency(cryptoSymbol: string, dateRange: string) {
  console.log(`Fetching data for ${cryptoSymbol} (${dateRange})`);

  const exchange = new ccxt.binance();
  console.log("Exchange instance created.");

  let timeframe;
  let limit;

  switch (dateRange) {
    case "1d":
      timeframe = "1h";
      limit = 24;
      break;
    case "3d":
      timeframe = "1h";
      limit = 72;
      break;
    case "7d":
      timeframe = "1h";
      limit = 168;
      break;
    case "30d":
      timeframe = "1h";
      limit = 720;
      break;
    default:
      timeframe = "1h";
      limit = 24;
  }

  return exchange
    .fetchOHLCV(cryptoSymbol, timeframe, undefined, limit)
    .then((ohlcv) => {
      console.log(
        `OHLCV data fetched for ${cryptoSymbol} (${dateRange}):`,
        ohlcv
      );

      return ohlcv;
    })
    .catch((error) => {
      console.error(
        `Error fetching data for ${cryptoSymbol} (${dateRange}):`,
        error
      );
      throw error;
    });
}

export default fetchCryptoCurrency;
