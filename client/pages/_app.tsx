import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Grommet } from "grommet";
import { useState } from "react";
import Layout from "../components/Layout";
import { MusicProvider } from "../context/music";
import Head from "next/head";
import { Provider } from "next-auth/client";

export enum colors {
  primary = "#228BE6",
}

function MyApp({ Component, pageProps }: any) {
  const [theme, setTheme] = useState({
    global: {
      colors: {
        brand: colors.primary,
        text: {
          dark: "#FFF",
          light: colors.primary,
        },
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
    notification: {
      container: {
        background: {
          color: colors.primary,
        },
      },
    },
  });

  return (
    <Grommet theme={theme}>
      <MusicProvider>
        <Provider session={pageProps.session}>
          <Layout>
            <Head>
              <meta name="description" content="Created by Logan Thomas" />
              <link rel="icon" href="/shwackCloudIcon.png" />
            </Head>
            <Component {...pageProps} setTheme={setTheme} />
          </Layout>
        </Provider>
      </MusicProvider>
    </Grommet>
  );
}

export default MyApp;
