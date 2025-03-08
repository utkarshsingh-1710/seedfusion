"use client";

import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>About Seed Fusion Agri Grow</p>
      </div>
      <div className={styles.borderDiv}>
        <div className={styles.border}></div>
      </div>
      <div className={styles.storyrowwrapper}>
        <Image
          className={styles.picImage}
          src="/ourstory.jpg"
          width={180}
          height={38}
          alt="SeedFusion"
          priority
        />
        <div className={styles.storycolumnrapper}>
          <p className={styles.storyTitle}>Our Story</p>
          <p className={styles.storysubTitle}>
            At Seed Fusion Agri Grow, we believe the future of farming is smart,
            sustainable, and accessible to all. Founded by a team passionate
            about agriculture and technology, we set out to solve the biggest
            challenges farmers face—unpredictable weather, rising costs, and
            inefficient farming practices.
          </p>
        </div>
      </div>
      {/*
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
      </div> */}
    </div>
  );
}
