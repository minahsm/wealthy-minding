import Link from "next/link";
import { Sprout, Heart } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <Sprout size={21} aria-hidden="true" />
          <span>ذهن ثروتمند</span>
        </Link>
        <p className={styles.copyright}>
         طراحی و توسعه: مینا هاشمی
        </p>
        <nav className={styles.links} aria-label="لینک‌های فوتر">
          <Link href="/about/">درباره ما</Link>
          <Link href="/contact/">تماس با ما</Link>
          <Link href="/privacy/">حریم خصوصی</Link>
        </nav>
      </div>
      
    </footer>
  );
}
