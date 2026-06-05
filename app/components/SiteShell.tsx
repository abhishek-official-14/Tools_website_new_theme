import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import styles from "./SiteShell.module.css";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
