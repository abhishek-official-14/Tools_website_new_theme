import Link from "next/link";
import { SiteShell } from "./components/SiteShell";
import styles from "./page.module.css";

const categories = [
  { icon: "🖼️", name: "Image Tools", count: "9 tools", href: "/categories/image-tools" },
  { icon: "🔁", name: "Converters", count: "4 tools", href: "/all-tools" },
  { icon: "Aa", name: "Text Tools", count: "5 tools", href: "/all-tools" },
  { icon: "🧮", name: "Calculators", count: "3 tools", href: "/all-tools" },
];

const mockTools = ["PDF Tools", "Image Tools", "Text Tools", "Converters", "Video Tools", "Calculators"];

export default function Home() {
  return (
    <SiteShell>
      <section className={`${styles.page} ${styles.hero}`}>
        <div>
          <span className={styles.badge}>⚡ 100% Free • Fast • Secure</span>
          <h1 className={styles.title}>All-in-One Free <span className={styles.accent}>Online Tools</span> for Everyone</h1>
          <p className={styles.subtitle}>Edit PDFs, convert files, compress images, remove backgrounds, generate QR codes and do much more – all in one place.</p>
          <div className={styles.ctas}>
            <Link href="/all-tools" className={styles.primaryBtn}>Explore All Tools →</Link>
            <Link href="/tools/image-compressor" className={styles.outlineBtn}>⭐ Popular Tools</Link>
          </div>
        </div>
        <div className={styles.mockWrap} aria-label="Floating tools interface preview">
          <span className={styles.sparkle}>✦</span><span className={styles.sparkle}>✧</span><span className={styles.sparkle}>★</span>
          <div className={styles.mockCard}>
            <div className={styles.mockSearch}>🔎 Search any tool...</div>
            <div className={styles.mockGrid}>{mockTools.map((tool, index) => <div className={styles.mockTool} key={tool}><span className={styles.icon}>{["📄","🖼️","Aa","🔁","🎬","%"] [index]}</span>{tool}</div>)}</div>
          </div>
        </div>
      </section>
      <section className={styles.page}>
        <div className={styles.searchSection}><div className={styles.searchBar}>🔎 Search tools...</div></div>
        <div className={styles.categoryRow}>{categories.map((category) => <Link href={category.href} className={styles.categoryCard} key={category.name}><span className={styles.icon}>{category.icon}</span><div><p className={styles.cardTitle}>{category.name}</p><p className={styles.cardText}>{category.count}</p></div><span className={styles.arrow}>→</span></Link>)}</div>
        <div className={styles.trustBar}><div className={styles.trustItem}>✅ 100% Free – No hidden charges</div><div className={styles.trustItem}>⚡ Super Fast – Instant results</div><div className={styles.trustItem}>🔒 Secure – Your data is safe</div></div>
      </section>
    </SiteShell>
  );
}
