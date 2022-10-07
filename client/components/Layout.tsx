import { Anchor, Header, Nav } from "grommet";
import { Home, Login, Play } from "grommet-icons";
import Link from "next/link";
import React from "react";

interface ILayout {
  children: any;
}

function Layout({ children }: ILayout) {
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
          <Link href="/registration">
            <Anchor icon={<Login />} />
          </Link>
        </Nav>
      </Header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
