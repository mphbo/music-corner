import { Anchor, Header, Nav } from "grommet";
import { Home, Login, Logout, Play, User } from "grommet-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuthContext } from "../../context/auth";
import ShwackCloudIcon from "../../public/ShwackCloudIcon.png";
import styles from "./styles/Layout.module.scss";

interface ILayout {
  children: any;
}

function Layout({ children }: ILayout) {
  const { user, setUser } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    router.push("/login");
  };

  return (
    <>
      <Header sticky="scrollup">
        <Nav direction="row" width="full" background="brand" pad="medium">
          <Link href="/">
            <Anchor className={styles.icon}>
              <Image width={24} height={24} src={ShwackCloudIcon} />
            </Anchor>
          </Link>
          <Link href="/play">
            <Anchor icon={<Play color="white" />} />
          </Link>
          {user ? (
            <Anchor icon={<Logout color="white" />} onClick={handleLogout} />
          ) : (
            <Link href="/login">
              <Anchor icon={<Login color="white" />} />
            </Link>
          )}
          {user && (
            <Link href="/profile">
              <Anchor icon={<User color="white" />} />
            </Link>
          )}
        </Nav>
      </Header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
