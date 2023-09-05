# Cryptocurrency Price Tracker (running on port:3000)

Cryptocurrency Price Tracker is a React-based web application that allows users to search for and track the prices of various cryptocurrencies. This README provides an overview of the project structure and key components.

## Project Structure

The project is organized into several key components:

### `App.tsx`

`App.tsx` serves as the entry point for the application. It sets up the basic layout of the app, including the header and the main content area. Here's a snippet of the code:

```tsx
// ... (import statements)
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CryptoDashboard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
```

### `log.service.tsx`

`log.service.tsx` contains functions for logging actions related to cryptocurrency searches and selections. It uses Axios for making HTTP requests to the server.

### `header.tsx`

`header.tsx` is a simple component responsible for rendering the application's header. It displays the title "Cryptocurrency Price Tracker." Here's the code:

```tsx
// ... (import statements)

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Cryptocurrency Price Tracker</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
```

### `cryptoChart.tsx`

`cryptoChart.tsx` is a component that displays a line chart of cryptocurrency prices. It uses Chart.js for chart rendering and makes API calls to fetch data. Here's an example of the code:

```tsx
// ... (import statements)

// ... (Chart options)

const CryptoChart: React.FC<CryptoChartProps> = ({
  selectedCryptocurrency,
  selectedDataRange,
}) => {
  // ... (data fetching and chart rendering)

  return <Line options={options} data={data} />;
};

export default CryptoChart;
```

### `cryptoCurrencySearch.tsx`

`cryptoCurrencySearch.tsx` is a component responsible for searching and selecting cryptocurrencies. It includes input validation and error handling. Here's an excerpt from the code:

```tsx
// ... (import statements)

const CryptocurrencySearch: React.FC<CryptocurrencySearchProps> = ({
  onSearch,
}) => {
  // ... (component state and functions)

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <div style={{ position: "relative" }}>
        {errorMessage && (
          <div style={{ color: "red", position: "absolute", top: "-20px" }}>
            {errorMessage}
          </div>
        )}
        <Select
        // ... (Select component configuration)
        />
      </div>
      <br />
      <TextField
      // ... (TextField component configuration)
      />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Paper>
  );
};

export default CryptocurrencySearch;
```

### Getting Started

To get started with the project, follow these steps:

Clone this repository to your local machine.

```bash
git clone https://github.com/JKiskisl/IBMTaskKiskis.git
```

Install the required dependencies using npm.

```bash
cd client
npm install
```

Start the development server.

```bash
npm start
```
