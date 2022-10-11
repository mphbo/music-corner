import { Anchor } from "grommet";
import { Login, Play } from "grommet-icons";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "../context/auth";
import styles from "../styles/Home.module.scss";
import shwackCloudImage from "../public/ShwackCloud.png";

const Home: NextPage = () => {
  const { user } = useAuthContext();
  return (
    <div className={styles.container}>
      <Head>
        <title>ShwackCloud</title>
        <meta name="description" content="Created by Logan Thomas" />
        <link rel="icon" href="/shwackCloudIcon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.image}>
          <Image src={shwackCloudImage} />
        </div>
        {user ? (
          <>
            <div className={styles.icon}>
              <h1>Edit profile and/or your SoundCloud Playlist URL</h1>
              <Link href="/profile">
                <Anchor icon={<Login size="large" />} />
              </Link>
            </div>
            <div className={styles.icon}>
              <h1>Go to Playlists</h1>
              <Link href="/play">
                <Anchor icon={<Play size="large" />} />
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={styles.icon}>
              <h1>
                Login or register to create or edit your account and SoundCloud
                URL
              </h1>
              <Link href="/login">
                <Anchor icon={<Login size="large" />} />
              </Link>
            </div>
            <div className={styles.icon}>
              <h1>Skip login and play existing playlists</h1>
              <Link href="/play">
                <Anchor icon={<Play size="large" />} />
              </Link>
            </div>
          </>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
