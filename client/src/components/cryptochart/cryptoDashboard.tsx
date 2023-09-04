import React, { useState } from "react";
import CryptocurrencySearch from "./cryptoCurrencySearch";
import CryptoChart from "./cryptoChart";
import { logSelected } from "../../services/log.service";

function CryptoDashboard() {
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState<
    string | null
  >(null);
  const [selectedDataRange, setSelectedDataRange] = useState<string>("");

  const handleSearch = (crypto: string, dataRange: string) => {
    setSelectedCryptocurrency(crypto);
    setSelectedDataRange(dataRange);

    logSelected({ crypto, dataRange })
      .then((response) => {
        console.log("Selected action logged:", crypto, dataRange);
      })
      .catch((error) => {
        console.error("Error logging selected action:", error);
      });
  };

  return (
    <>
      <CryptocurrencySearch onSearch={handleSearch} />
      {selectedCryptocurrency !== null && selectedDataRange !== "" && (
        <CryptoChart
          selectedCryptocurrency={selectedCryptocurrency}
          selectedDataRange={selectedDataRange}
        />
      )}
    </>
  );
}

export default CryptoDashboard;
