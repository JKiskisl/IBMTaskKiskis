import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../src/components/header/header";
import CryptoDashboard from "../src/components/cryptochart/cryptoDashboard";

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
