import axios from "axios";
import { Grid } from "grommet";
import type { NextPage } from "next";
import Head from "next/head";
import { SoundCloudWidget } from "../components/SoundCloudWidget";
import styles from "../styles/Home.module.scss";
import { IUser } from "../context/auth";
import { useEffect, useState } from "react";
import Image from "next/image";
import shwackCloudImage from "../public/ShwackCloud.png";

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
        <title>Play</title>
        <meta name="description" content="Created by Logan Thomas" />
        <link rel="icon" href="/shwackCloudIcon.png" />
      </Head>

      <main className={styles.main}>
        <Image src={shwackCloudImage} />
        <Grid>{players}</Grid>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Play;
