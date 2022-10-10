import { Anchor, Header, Nav } from "grommet";
import { Home, Login, Logout, Play } from "grommet-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuthContext } from "../context/auth";

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
            <Anchor icon={<Home />} />
          </Link>
          <Link href="/play">
            <Anchor icon={<Play />} />
          </Link>
          {user ? (
            <Anchor onClick={handleLogout} icon={<Logout />} />
          ) : (
            <Link href="/login">
              <Anchor icon={<Login />} />
            </Link>
          )}
        </Nav>
      </Header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
