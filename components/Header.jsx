"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, UserRound } from "lucide-react";
import styles from "./Header.module.css";

const navItems = [
  { label: "خانه", href: "/" },
  { label: "مقالات", href: "/articles/" },
  { label: "جزوه آموزش جذب ثروت", href: "#wealth-booklet" },
  { label: "سابلیمینال", href: "/subliminal/" },
  { label: "درباره ما", href: "/about/" },
  { label: "تماس با ما", href: "#contact" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <Link href="/" className={styles.brand} onClick={closeMenu}>
          <span className={styles.brandName}>ذهن ثروتمند</span>
          <span className={styles.tagline}>آگاهی و موفقیت</span>
        </Link>

        <Link href="/login/" className={styles.login}>
          <UserRound size={15} aria-hidden="true" />
          <span>ورود / ثبت‌نام</span>
        </Link>
      </div>

      <nav
        id="primary-navigation"
        className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}
        aria-label="منوی اصلی"
      >
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            onClick={closeMenu}
            className={styles.navLink}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
