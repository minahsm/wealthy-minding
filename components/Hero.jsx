"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

const slides = [
  {
    id: 1,
    eyebrow: "ذهن‌آگاهی، رشد فردی، باورهای مالی",
    title: "ذهن تو، بزرگ‌ترین سرمایه توست",
    description: "با قدرت ذهن، زندگی آگاهانه و فراوانی را تجربه کن.",
    cta: "مشاهده مقالات",
    href: "/articles/",
    image: "/images/meditation.png",
    alt: "زنی در حال مدیتیشن در قله کوهستان"
  },
  {
    id: 2,
    eyebrow: "حضور در لحظه و آرامش درونی",
    title: "لحظه اکنون را آگاهانه تجربه کن",
    description: "با تمرین ذهن‌آگاهی، توجه خود را به لحظه حال بازگردان.",
    cta: "مطالعه مقالات ذهن‌آگاهی",
    href: "/articles/",
    image: "/images/yoga-pose-on-mountain-peak.webp",
    alt: "فردی در حال یوگا در قله کوهسستان"
  },
  {
    id: 3,
    eyebrow: "شناخت باورها و رشد آگاهانه",
    title: "باورهای خود را از نو بشناس",
    description: "با شناخت الگوهای ذهنی، قدم‌های آگاهانه‌تری برای رشد بردار.",
    cta: "آشنایی با جزوه",
    href: "#wealth-booklet",
    image: "/images/yoga-stones-balance-nature.webp",
    alt: "سنگ های تعادلی یوگا در طبیعت"
  }
];

const INTERVAL = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return undefined;
    const timer = window.setInterval(nextSlide, INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, nextSlide]);

  return (
    <section
      className={styles.hero}
      aria-label="معرفی ذهن ثروتمند"
      aria-roledescription="اسلایدر"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === activeIndex ? styles.activeSlide : ""} ${index === 0 ? styles.slideOne : index === 1 ? styles.slideTwo : styles.slideThree}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 1200px"
              className={styles.slideImage}
            />
            <div className={styles.overlay} />
            <div className={styles.slideContent}>
              <p className={styles.eyebrow}>{slide.eyebrow}</p>
              {index === 0 ? (
                <h1 className={styles.title}>{slide.title}</h1>
              ) : (
                <h2 className={styles.title}>{slide.title}</h2>
              )}
              <p className={styles.description}>{slide.description}</p>
              <Link
                href={slide.href}
                className={styles.cta}
                tabIndex={index === activeIndex ? 0 : -1}
              >
                {slide.cta}
                <ArrowLeft size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className={`${styles.arrow} ${styles.previous}`} onClick={previousSlide} aria-label="اسلاید قبلی">
        <ArrowRight size={21} aria-hidden="true" />
      </button>
      <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={nextSlide} aria-label="اسلاید بعدی">
        <ArrowLeft size={21} aria-hidden="true" />
      </button>

      <div className={styles.controls}>
        <div className={styles.dots} aria-label="انتخاب اسلاید">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
              aria-label={`نمایش اسلاید ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button type="button" className={styles.pauseButton} onClick={() => setPaused((value) => !value)}>
          {paused ? "ادامه" : "توقف"}
        </button>
      </div>
      <span className={styles.srOnly} aria-live="polite">
        اسلاید {activeIndex + 1} از {slides.length}: {slides[activeIndex].title}
      </span>
    </section>
  );
}
