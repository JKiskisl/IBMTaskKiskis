# Cryptocurrency Price Tracker

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
