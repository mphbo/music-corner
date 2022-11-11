import { Avatar, Box, Button, Stack, Text, Tip } from "grommet";
import Image from "next/image";
import keys from "../../utils/keys";
import styles from "./styles/UserList.module.scss";
import { User } from "./User";

export const UserList = () => {
  const users = [
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
    return <User username={user.username} email={user.email} />;
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
