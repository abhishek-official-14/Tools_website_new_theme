import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import styles from "../page.module.css";

const features = ["100% Free", "Easy to Use", "Fast & Reliable", "Secure & Safe"];

export default function AboutPage() {
  return <SiteShell><section className={styles.page}>
    <div className={styles.header}><h1>About Us</h1><p>Simple tools for a simpler life</p></div>
    <div className={styles.aboutGrid}>
      <div><article className={styles.infoBlock}><h2>Who We Are</h2><p className={styles.cardText}>EaseMyTools is a focused online workspace built for students, creators, freelancers, and teams who need everyday digital utilities without installing heavy software or creating accounts.</p></article><article className={styles.infoBlock}><h2>Our Mission</h2><p className={styles.cardText}>Our mission is to make file editing, image optimization, text utilities, calculators, and converters simple, secure, and accessible to everyone—free of hidden charges and unnecessary friction.</p></article></div>
      <div className={styles.aboutIllustration}><div className={styles.brandBubble}>EaseMyTools</div><span className={styles.floatIcon}>🌐</span><span className={styles.floatIcon}>🔒</span><span className={styles.floatIcon}>🖼️</span><span className={styles.floatIcon}>▦</span></div>
    </div>
    <div className={styles.features}>{features.map((feature) => <div className={styles.featureCard} key={feature}><span className={styles.icon}>✓</span><h3>{feature}</h3><p className={styles.cardText}>Designed to keep your workflow smooth and stress-free.</p></div>)}</div>
    <div className={styles.ctaPanel}><h2>Have Questions? We're here to help you.</h2><Link className={styles.primaryBtn} href="/about">Contact Us</Link></div>
  </section></SiteShell>;
}
