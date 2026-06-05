import { SiteShell } from "../components/SiteShell";
import { tools } from "../data";
import styles from "../page.module.css";

const tabs = ["All", "Image Tools", "Converters", "Text Tools", "Calculators", "PDF Tools", "Video Tools"];

export default function AllToolsPage() {
  return <SiteShell><section className={styles.page}>
    <div className={styles.header}><h1>All Tools</h1><p>Explore our collection of 50+ free online tools</p></div>
    <div className={styles.searchBar}>🔎 Search tools...</div>
    <div className={styles.tabs}>{tabs.map((tab, index) => <button className={index === 0 ? styles.activeTab : styles.tab} key={tab}>{tab}</button>)}</div>
    <div className={styles.toolGrid}>{tools.map((tool) => <article className={styles.toolCard} key={tool.name}><div className={styles.toolCardHeader}><span className={styles.icon} style={{ color: tool.color, backgroundColor: `${tool.color}1f` }}>{tool.icon}</span><span className={styles.arrow}>→</span></div><h3>{tool.name}</h3><p className={styles.cardText}>{tool.desc}</p></article>)}</div>
    <div className={styles.loadMore}><button className={styles.outlineBtn}>Load More Tools ↻</button></div>
  </section></SiteShell>;
}
