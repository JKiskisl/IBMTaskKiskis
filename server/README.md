# Backend Documentation (running on port:8000)

The backend of the Cryptocurrency Price Tracker application is responsible for handling API requests, logging user actions, and fetching cryptocurrency data from external sources. This documentation provides an overview of the key components of the backend.

## Controllers

### `logSearch_controller.ts`

The `logSearch_controller.ts` file contains the controller function for logging cryptocurrency searches. It handles GET requests to the /api/logSearch endpoint and performs the following actions:

1.  Extracts query parameters for the searched cryptocurrency and data range.
2.  Logs the user's search request.
3.  Fetches cryptocurrency data using the fetchCryptoCurrency function.
4.  Formats and returns the fetched data as JSON.
5.  Saves the search action to the database.

### `logSelect_controller.ts`

The `logSelect_controller.ts` file contains the controller function for logging selected cryptocurrencies. It handles GET requests to the `/api/logSelected` endpoint and performs the following actions:

1.  Extracts query parameters for the selected cryptocurrency and data range.
2.  Logs the user's selection request.
3.  Saves the selection action to the database.

## Routes

### `logActions.ts`

The `logActions.ts` file defines the routes for logging user actions. It uses the Express Router to create two endpoints:

1.  `/api/logSearch`: Handles logging cryptocurrency search actions.
2.  `/api/logSelected`: Handles logging selected cryptocurrency actions.
    These endpoints are mapped to the corresponding controller functions defined in `logSearch_controller.ts` and `logSelect_controller.ts`.

## Services

### `fetchCrypto.ts`

The `fetchCrypto.ts` file defines the fetchCryptoCurrency function, responsible for fetching cryptocurrency data from external sources. It uses the CCXT library to interact with cryptocurrency exchanges. The function takes two parameters:

1.  `cryptoSymbol`: The symbol of the cryptocurrency to fetch.
2.  `dateRange`: The requested data range (e.g., "1d," "3d," "7d," "30d").
    The function selects an appropriate timeframe and limit based on the data range, fetches OHLCV (Open, High, Low, Close, Volume) data, and returns it as a Promise.

## Index File

### `index.ts`

The `index.ts` file serves as the entry point for the backend application. It does the following:

1.  Initializes Express and sets up middleware (body parser, CORS).
2.  Connects to a MongoDB database using Mongoose.
3.  Defines a basic health check endpoint at the root (/) to confirm the server's health.
4.  Mounts the /api routes defined in logActions.ts.
5.  Listens for incoming requests on a specified port (default: 8000).

## Model

### `model.ts`

The `model.ts` file defines the Mongoose schema for logging user actions. It uses the Action model with the following schema fields:

1. `type`: The type of action (e.g., "search," "selected").
2. `crypto`: The cryptocurrency involved in the action.
3. `dataRange`: The data range for the action.
4. `timestamp`: The timestamp when the action occurred (automatically generated).
   This schema is used to store user actions in the MongoDB database.

## Getting Started

To set up and run the backend of the Cryptocurrency Price Tracker application, follow these steps:

Clone the backend repository to your local machine.

```bash

git clone https://github.com/JKiskisl/IBMTaskKiskis.git
```

Install the required dependencies using npm.

```bash
cd server
npm install
```

Configure your development environment and any necessary environment variables (e.g., database connection).

Start the backend server.

```bash
npm start
```

The backend server will be running on the specified port (default: 8000) and ready to handle API requests from the frontend.

## Tests (jest)

### `logActions.test.ts`

To run the tests, open up your terminal, and proceed with the following commands:

```bash
cd server
npx jest
```
