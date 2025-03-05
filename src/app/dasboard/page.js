import React from "react";
import styles from "./dashboard.module.css";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.titletext}>SeedFusion AgriGrow</h1>
      </div>
      <div className={styles.subtitle}>
        <h3 className={styles.subtitletext}>Cultivating Dreams Together</h3>
      </div>

      <div className={styles.thirdtitle}>
        <p className={styles.thirdtitletext}>
          Transform the way you farm with our cutting-edge technologies and
          techniques
        </p>
      </div>
    </div>
  );
}
