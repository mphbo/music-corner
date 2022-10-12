import axios from "axios";
import { Grid } from "grommet";
import type { NextPage } from "next";
import Head from "next/head";
import { SoundCloudWidget } from "../components/SoundCloudWidget";
import { motion } from "framer-motion";
import styles from "../styles/Play.module.scss";
import { IUser } from "../context/auth";
import { useEffect, useState } from "react";
import Image from "next/image";
import shwackCloudImage from "../public/ShwackCloud.png";

const Play: NextPage = () => {
  const [users, setUsers] = useState<IUser[] | []>([
    {
      url: "https://soundcloud.com/logan-norman-thomas/sets/electroswinging",
      email: "test@test.com",
      username: "Gregolas",
    },
    {
      url: "https://soundcloud.com/logan-norman-thomas/sets/old-tunes",
      email: "test@test.com",
      username: "Gregolas",
    },
    {
      url: "https://soundcloud.com/hd4884/tracks",
      email: "test@test.com",
      username: "Gregolas",
    },
    {
      url: "https://soundcloud.com/hd4884/tracks",
      email: "test@test.com",
      username: "Gregolas",
    },
    {
      url: "https://soundcloud.com/hd4884/tracks",
      email: "test@test.com",
      username: "Gregolas",
    },
    {
      url: "https://soundcloud.com/hd4884/tracks",
      email: "test@test.com",
      username: "Gregolas",
    },
  ]);

  // useEffect(() => {
  //   axios.get("/api/users").then(({ data }) => {
  //     setUsers(data);
  //   });
  // }, []);

  const players = users.map((user, index) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.08 }}
      key={index}
    >
      <SoundCloudWidget {...user} />
    </motion.div>
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>Play</title>
        <meta name="description" content="Created by Logan Thomas" />
        <link rel="icon" href="/shwackCloudIcon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.image}>
          <Image src={shwackCloudImage} />
        </div>
        <h1>Playlists</h1>
        <div className={styles.gridContainer}>
          <Grid fill columns="large" gap="medium">
            {players}
          </Grid>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Play;
