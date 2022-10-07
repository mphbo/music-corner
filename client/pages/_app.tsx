import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Grommet } from "grommet";
import { useState } from "react";
import Layout from "../components/Layout";

enum colors {
  primary = "#228BE6",
}

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState({
    global: {
      colors: {
        brand: colors.primary,
      },
      font: {
        family: "'M PLUS Rounded 1c', sans-serif",
        size: "18px",
        height: "20px",
      },
    },
    formField: {
      border: {
        color: {
          light: colors.primary,
        },
      },
    },
    button: {
      color: {
        light: "white",
      },
    },
  });

  return (
    <Grommet theme={theme}>
      <Layout>
        <Component {...pageProps} setTheme={setTheme} />
      </Layout>
    </Grommet>
  );
}

export default MyApp;
