import axios from "axios";
import { Grid } from "grommet";
import type { NextPage } from "next";
import Head from "next/head";
import { SoundCloudWidget } from "../components/SoundCloudWidget";
import styles from "../styles/Home.module.scss";
import { IUser } from "../context/auth";
import { useEffect, useState } from "react";

const Play: NextPage = () => {
  const [users, setUsers] = useState<IUser[] | []>([]);

  useEffect(() => {
    axios.get("/api/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const players = users.map((user, index) => (
    <div key={index}>
      <SoundCloudWidget {...user} />
    </div>
  ));
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
        <Grid>{players}</Grid>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Play;