import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SoundCloudWidget } from "../components/SoundCloudWidget";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SoundCloudWidget url="https://soundcloud.com/rwdy-music/get-rwdy-3" />
        <SoundCloudWidget url="https://soundcloud.com/rwdy-music/get-rwdy-3" />
        <SoundCloudWidget url="https://soundcloud.com/rwdy-music/get-rwdy-3" />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
