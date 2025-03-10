"use client";

import React from "react";
import styles from "./dashboard.module.css";
import Image from "next/image";
import About from "../About/page";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Image
          className={styles.Logoimage}
          src="/logo_seed.jpeg"
          width={180}
          height={38}
          alt="SeedFusion"
          priority
        />
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
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => window.open(`tel:+919264499684`)}
          className={styles.buttonStyles}
        >
          {" "}
          GET STARTED TODAY
        </button>
      </div>

      <div className={styles.picImageWrapper}>
        <Image
          className={styles.picImage}
          src="/pic1.jpg"
          width={180}
          height={38}
          alt="SeedFusion"
          priority
        />
      </div>
      <About />
    </div>
  );
}
