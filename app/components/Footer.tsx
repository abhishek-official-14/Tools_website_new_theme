import Link from "next/link";
import { Logo } from "./Navbar";
import styles from "./SiteShell.module.css";

const columns = [
  { title: "Explore", links: ["All Tools", "Image Tools", "Converters", "Text Tools", "Calculators", "PDF Tools", "Video Tools"] },
  { title: "Popular Tools", links: ["PDF to Word", "Image Compressor", "Remove Background", "Merge PDF", "Video Converter", "QR Code Generator", "Text to Speech"] },
  { title: "Company", links: ["About Us", "Blog", "Contact Us", "Privacy Policy", "Terms of Use", "Disclaimer"] },
  { title: "Support", links: ["Help Center", "Feedback", "Report a Bug"] },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <Logo />
          <p>Your all-in-one destination for free, fast and easy-to-use online tools. Simplify your digital tasks in seconds.</p>
          <div className={styles.socials} aria-label="Social links">
            <span>f</span><span>𝕏</span><span>in</span><span>▶</span>
          </div>
        </div>
        {columns.map((column) => (
          <div className={styles.footerColumn} key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => <Link href="/all-tools" key={link}>{link}</Link>)}
          </div>
        ))}
      </div>
      <div className={styles.bottomBar}>
        <span>© 2024 EaseMyTools. All rights reserved.</span>
        <span>✅ 100% Free</span>
        <span>⚡ Fast & Secure</span>
        <span>🔒 No Sign Up</span>
      </div>
    </footer>
  );
}
