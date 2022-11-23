import axios from "axios";
import { Avatar, Box, Button, Stack, Text, Tip } from "grommet";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IUser } from "../../../context/auth";
import keys from "../../../utils/keys";
import styles from "./styles/UserList.module.scss";
import { User } from "./User";

export const UserList = () => {
  const [users, setUsers] = useState<IUser[] | []>([]);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    axios
      .get("/api/users")
      .then(({ data: { result } }) => {
        setUsers(result);
      })
      .catch(({ response: { data } }) => setServerError(data));
  }, []);

  const usersx = [
    {
      username: "larry",
      email: "logannormanthomas@protonmail.com",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "asdf",
      email: "logannormanthomas@protonmail.com",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "test",
      email: "logannormanthomas@protonmail.com",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "hello",
      email: "test@test.c",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "world",
      email: "test@test.c",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "test",
      email: "test@test.c",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "hello",
      email: "test@test.c",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "world",
      email: "test@test.c",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "world",
      email: "test@test.c",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "world",
      email: "test@test.c",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "world",
      email: "test@test.c",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
  ];

  const userListItems = users.map((user, i) => {
    console.log(i);
    return <User username={user.username} id={user.id} />;
  });

  return (
    <Box
      className={styles.userList}
      overflow="scroll"
      direction="row"
      gap="small"
    >
      {userListItems}
    </Box>
  );
};
