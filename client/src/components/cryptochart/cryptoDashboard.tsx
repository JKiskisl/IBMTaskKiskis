import React, { useState } from "react";
import CryptocurrencySearch from "./cryptoCurrencySearch";
import CryptoChart from "./cryptoChart";

function CryptoDashboard() {
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState<
    string | null
  >(null);
  const [selectedDataRange, setSelectedDataRange] = useState<string>("");

  const handleSearch = (crypto: string, dataRange: string) => {
    setSelectedCryptocurrency(crypto);
    setSelectedDataRange(dataRange);
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
