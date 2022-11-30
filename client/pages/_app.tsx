import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Grommet } from "grommet";
import { useState } from "react";
import Layout from "../components/Layout";
import { MusicProvider } from "../context/music";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export enum colors {
  primary = "#228BE6",
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
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
        <SessionProvider session={session} refetchInterval={5 * 60}>
          <Layout>
            <Head>
              <meta name="description" content="Created by Logan Thomas" />
              <link rel="icon" href="/shwackCloudIcon.png" />
            </Head>
            <Component {...pageProps} setTheme={setTheme} />
          </Layout>
        </SessionProvider>
      </MusicProvider>
    </Grommet>
  );
}

export default MyApp;
