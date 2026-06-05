"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import styles from "./SiteShell.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/all-tools", label: "All Tools" },
  { href: "/categories/image-tools", label: "Image Tools" },
  { href: "/tools/image-compressor", label: "Compressor" },
  { href: "/about", label: "About" },
];

export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="EaseMyTools home">
      <span className={styles.logoMark}>▦</span>
      <span>EaseMyTools</span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.navWrap}>
      <nav className={styles.navbar}>
        <Logo />
        <div className={`${styles.navLinks} ${open ? styles.open : ""}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
        </div>
        <div className={styles.navActions}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle dark and light mode">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <Link className={styles.signIn} href="/about">Sign In</Link>
          <Link className={styles.login} href="/all-tools">Login</Link>
          <button className={styles.hamburger} onClick={() => setOpen((value) => !value)} aria-label="Open mobile menu">
            <span /> <span /> <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
