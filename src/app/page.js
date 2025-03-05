import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Seed Fusion Agri Grow</h1>
        <h2>Coming Soon</h2>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
