"use client";

import { useState } from "react";
import { SiteShell } from "../../components/SiteShell";
import styles from "../../page.module.css";

export default function ImageCompressorPage() {
  const [level, setLevel] = useState(75);
  return <SiteShell><section className={styles.page}>
    <div className={styles.breadcrumb}>Home &gt; Image Tools &gt; Image Compressor</div>
    <div className={styles.header}><h1>Image Compressor</h1><p>Compress JPG, PNG and WEBP images without losing quality.</p></div>
    <div className={styles.uploadPanel}>
      <div className={styles.uploadZone}><div><div className={styles.uploadIcon}>☁️</div><h2>Upload your image</h2><p className={styles.cardText}>Drag & drop your image here or</p><button className={styles.chooseBtn}>Choose File</button><p className={styles.cardText}>Supported formats: JPG, PNG, WEBP | Max file size: 100MB</p></div></div>
      <div className={styles.sliderRow}><span>Compression Level</span><span>{level}%</span></div>
      <input className={styles.slider} aria-label="Compression Level" type="range" min="0" max="100" value={level} onChange={(event) => setLevel(Number(event.target.value))} />
      <button className={styles.fullBtn}>Compress Image</button>
    </div>
    <div className={styles.badges}><div className={styles.trustItem}>⚡ Fast Compression</div><div className={styles.trustItem}>⭐ High Quality</div><div className={styles.trustItem}>✅ 100% Free</div><div className={styles.trustItem}>🔒 Secure</div></div>
  </section></SiteShell>;
}
