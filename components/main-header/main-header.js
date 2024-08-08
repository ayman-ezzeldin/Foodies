'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

import MainHeaderBackground from "./main-header-background";
import NavLink from "./NavLink";

const MainHeader = () => {
  const pathname = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {" "}
          <Image src={logoImg} alt="logo" priority /> NextLevel Food{" "}
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals"> Browse Meals </NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodies Community </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
