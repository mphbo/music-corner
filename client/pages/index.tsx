import { Anchor } from "grommet";
import { Play } from "grommet-icons";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useAuthContext } from "../context/auth";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const { user } = useAuthContext();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>ShwackCloud</h3>
        <h2>Your music... just shwacked.</h2>
        <div style={{ marginTop: 60 }}>
          <Link href="/play">
            <Anchor icon={<Play size="xlarge" />} />
          </Link>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
