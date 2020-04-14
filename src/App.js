import React, { Component } from "react";
import { BodyPage } from "./BodyPage";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    
    text:{
      primary: "rgba(0,0,0,0.85)",
      secondary: "rgba(0,0,0,0.54)",
      disabled: "rgba(0,0,0,0.38)",
    },
    primary: {
      main: "hsl(184, 46%, 48%)",
    },
    secondary: {
      main: "hsl(355, 67%, 48%)",
    },
  },
});

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BodyPage />
      </MuiThemeProvider>
    );
  }
}

export default App;
