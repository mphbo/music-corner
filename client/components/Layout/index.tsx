import { Anchor, Header, Nav } from "grommet";
import { Chat, Help, Home, Login, Logout, Play, User } from "grommet-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ShwackCloudIcon from "../../public/ShwackCloudIcon.png";
import styles from "./styles/Layout.module.scss";
import { useSession, signOut } from "next-auth/client";

interface ILayout {
  children: any;
}

function Layout({ children }: ILayout) {
  const [session, loading] = useSession();
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.push("/login");
  };

  return (
    <>
      <Header sticky="scrollup">
        <Nav direction="row" width="full" background="brand" pad="medium">
          <Link href="/">
            <Anchor className={styles.icon}>
              <Image
                alt="ShwackCloud icon"
                width={24}
                height={24}
                src={ShwackCloudIcon}
              />
            </Anchor>
          </Link>
          <Link href="/play">
            <Anchor icon={<Play color="white" />} />
          </Link>
          {session ? (
            <Anchor icon={<Logout color="white" />} onClick={handleLogout} />
          ) : (
            <Link href="/login">
              <Anchor icon={<Login color="white" />} />
            </Link>
          )}
          {session && !loading && (
            <>
              <Link href="/profile">
                <Anchor icon={<User color="white" />} />
              </Link>
              <Link href="/chat">
                <Anchor icon={<Chat color="white" />} />
              </Link>
            </>
          )}
          <Link href="/help">
            <Anchor icon={<Help color="white" />} />
          </Link>
        </Nav>
      </Header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
