import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { logSearch } from "../../services/log.service";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

interface CryptoChartProps {
  selectedCryptocurrency: string | null;
  selectedDataRange: string;
}

interface CryptoData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

const CryptoChart: React.FC<CryptoChartProps> = ({
  selectedCryptocurrency,
  selectedDataRange,
}) => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const crypto = selectedCryptocurrency || "BTC/USDT";
    const dataRange = selectedDataRange || "30d";

    logSearch(crypto, dataRange).then((response) => {
      if (response.data && response.data.data) {
        setCryptoData(response.data.data);
      }
    });
  }, [selectedCryptocurrency, selectedDataRange]);

  useEffect(() => {
    if (selectedCryptocurrency) {
      options.plugins.title.text = `${selectedCryptocurrency} Price Chart`;
    } else {
      options.plugins.title.text = "Cryptocurrency Price Chart";
    }
  }, [selectedCryptocurrency]);

  const labels = cryptoData.map((item) =>
    new Date(item.timestamp).toLocaleDateString()
  );
  const dataset = {
    label: `${selectedCryptocurrency} Price`,
    data: cryptoData.map((item) => item.close),
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "rgba(53, 162, 235, 0.5)",
  };

  const data = {
    labels,
    datasets: [dataset],
  };

  return <Line options={options} data={data} />;
};

export default CryptoChart;
