import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";

const Wrapper = () => {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <Router>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }} withGlobalStyles>
          <Provider store={store}>
            <App />
          </Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Router>
  //   <MantineProvider theme={{ colorScheme: "light" }} withGlobalStyles>
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   </MantineProvider>
  // </Router>
  <Wrapper />
);
