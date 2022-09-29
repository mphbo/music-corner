import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Grommet } from "grommet";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState({
    global: {
      colors: {
        brand: "#228BE6",
      },
      font: {
        family: "'M PLUS Rounded 1c', sans-serif",
        size: "18px",
        height: "20px",
      },
    },
  });

  return (
    <Grommet theme={theme}>
      <Component {...pageProps} setTheme={setTheme} />
    </Grommet>
  );
}

export default MyApp;
