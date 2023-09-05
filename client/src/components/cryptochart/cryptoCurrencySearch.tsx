import React, { useState, useEffect } from "react";
import Select from "react-select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { logSelected } from "../../services/log.service";

interface CryptocurrencySearchProps {
  onSearch: (crypto: string, dataRange: string) => void;
}

const CryptocurrencySearch: React.FC<CryptocurrencySearchProps> = ({
  onSearch,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedDataRange, setSelectedDataRange] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cryptoOptions, setCryptoOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState<{
    value: string;
    label: string;
  } | null>(null);

  useEffect(() => {
    const fetchCryptoOptions = async () => {
      const options = [
        { value: "BTC/USDT", label: "Bitcoin/USD" },
        { value: "ETH/USDT", label: "Ethereum/USD" },
        { value: "BCH/USDT", label: "Bitcoin Cash/USD" },
        { value: "LTC/USDT", label: "Litecoin/USD" },
        { value: "XRP/USDT", label: "Ripple/USD" },
        { value: "ADA/USDT", label: "Cardano/USD" },
        { value: "DOT/USDT", label: "Polkadot/USD" },
        { value: "LINK/USDT", label: "Chainlink/USD" },
        { value: "XLM/USDT", label: "Stellar/USD" },
        { value: "DOGE/USDT", label: "Dogecoin/USD" },
      ];

      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchInput.toLowerCase())
      );

      setCryptoOptions(filteredOptions);
    };

    fetchCryptoOptions();
  }, [searchInput]);

  useEffect(() => {
    if (selectedCryptocurrency && selectedDataRange) {
      logSelected({
        crypto: selectedCryptocurrency.value,
        dataRange: selectedDataRange,
      })
        .then((response) => {
          console.log(
            "Selected action logged:",
            selectedCryptocurrency.value,
            selectedDataRange
          );
        })
        .catch((error) => {
          console.error("Error logging selected action:", error);
        });
    }
  }, [selectedCryptocurrency, selectedDataRange]);

  const handleInputChange = (newValue: string) => {
    if (newValue.length > 30) {
      newValue = newValue.slice(0, 30);
      setErrorMessage("Input must be 30 characters or less");
    } else {
      setErrorMessage("");
    }

    setSearchInput(newValue);
  };

  const handleDataRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDataRange(e.target.value);
  };

  const handleSearch = () => {
    if (selectedCryptocurrency && selectedDataRange) {
      onSearch(selectedCryptocurrency.value, selectedDataRange);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <div style={{ position: "relative" }}>
        {errorMessage && (
          <div style={{ color: "red", position: "absolute", top: "-20px" }}>
            {errorMessage}
          </div>
        )}
        <Select
          options={cryptoOptions}
          value={selectedCryptocurrency}
          onChange={(selectedOption) =>
            setSelectedCryptocurrency(selectedOption)
          }
          onInputChange={handleInputChange}
          placeholder="Search for a cryptocurrency..."
        />
      </div>
      <br />
      <TextField
        label=""
        variant="outlined"
        fullWidth
        select
        value={selectedDataRange}
        onChange={handleDataRangeChange}
        SelectProps={{
          native: true,
        }}
      >
        <option value="">Select Range</option>
        <option value="1d">1 Day</option>
        <option value="3d">3 Days</option>
        <option value="7d">7 Days</option>
        <option value="30d">30 Days</option>
      </TextField>
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Paper>
  );
};

export default CryptocurrencySearch;
