"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/vedant-yetekar-497949218"
        >
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link target="_blank" href="https://github.com/uuvedant4">
          <Image
            src={theme === "dark" ? "/github2.png" : "/github.png"}
            alt="github"
            width={24}
            height={24}
          />
        </Link>
        <Link target="_blank" href="https://twitter.com/__vedant4">
          <Image src="/twitter.png" alt="twitter" width={24} height={24} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/__vedant6/">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
      </div>
      <div className={styles.logo}>vedantsays</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Homepage
        </Link>
        <Link className={styles.link} href="/">
          About
        </Link>
        <Link className={styles.link} href="/">
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
