import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6B45C4",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        color: "#6B45C4",
        backgroundColor: "#fff",
        "&:hover": {
          backgroundColor: "#6B45C4",
          "@media (hover: none)": {
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
