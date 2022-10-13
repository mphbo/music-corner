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
  const [users, setUsers] = useState<IUser[] | []>([]);

  useEffect(() => {
    axios.get("/api/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const players = users.map((user, index) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.08 }}
      key={index}
    >
      <SoundCloudWidget {...user} setUsers={setUsers} />
    </motion.div>
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>Play</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.image}>
          <Image alt="ShwackCloud logo" src={shwackCloudImage} />
        </div>
        {users.length > 0 && <h1>Playlists</h1>}
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
