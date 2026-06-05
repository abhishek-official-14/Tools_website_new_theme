import { SiteShell } from "../../components/SiteShell";
import { imageTools } from "../../data";
import styles from "../../page.module.css";

export default function ImageToolsPage() {
  return <SiteShell><section className={styles.page}>
    <div className={styles.header}><h1>Image Tools</h1><p>Edit, optimize and enhance your images easily</p></div>
    <div className={styles.searchBar}>🔎 Search image tools...</div>
    <div className={styles.toolGrid}>{imageTools.map((tool, index) => <article className={styles.toolCard} key={tool.name}><div className={styles.toolCardHeader}><span className={styles.icon}>{["🖼️","✂️","📄","↔️","✳️","🔄","🔃","JPG","PNG"][index]}</span><span className={styles.arrow}>→</span></div><h3>{tool.name}</h3><p className={styles.cardText}>{tool.desc}</p></article>)}</div>
    <div className={styles.loadMore}><button className={styles.centerBtn}>View All Image Tools →</button></div>
  </section></SiteShell>;
}
