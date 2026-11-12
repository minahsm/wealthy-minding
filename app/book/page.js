import Image from "next/image";
import { Send, Sprout } from "lucide-react";
import styles from "./book.module.css";

const TELEGRAM_URL = "https://t.me/minnaaa_h"; // لینک تلگرامت

export default function BookletPage() {
  return (
    <main className={styles.main}>
      <section className={styles.bookletSection}>
        {/* 👈 بخش عکس (بالا) */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/attract-money-and-wealth-article.webp"
            alt="کتاب آموزش جذب پول و فراوانی"
            width={420}
            height={440}
            sizes="(max-width: 768px) 80vw, 400px"
            className={styles.bookImage}
            priority // چون اولین عکس صفحه است، priority دادم برای سرعت سئو
          />
          <Sprout className={styles.decorativeIcon} aria-hidden="true" />
        </div>

        {/* 👈 بخش محتوا (وسط‌چین) */}
        <div className={styles.contentWrapper}>
          <p className={styles.eyebrow}></p>
          
          {/* 👈 چون این صفحه جداست، تیتر اصلی رو h1 گذاشتم (برای سئو عالیه) */}
          <h1 className={styles.title}>جزوه آموزش جذب پول و فراوانی</h1>
          
          <p className={styles.description}>
            خیلی از ما دچار این توهم میشیم که چیزی از بیرون باید تغییر کنه که باعث بشه زندگیمون بهتر بشه، در حالی که اصلا اینطور نیست.
            تمام تغییرات از درون باید اتفاق بیفته. دنیای ما پر از افرادی هست که مهارت های پولسازی دارند ولی خودشون ثروتمند نیستند و برای افرادی کار می کنند که ذهنیت پولسازی دارند و ثروتمندند.
          </p>

          <p className={styles.description}> 
            مطالبی که در این جزوه گفته میشه بدون دادن توضیحات اضافه و دادن شاخ و برگ اضافه هست و مستقیما تمام نکاتی که باید برای رسیدن به پول و ثروت انجام بدی رو توی این جزوه ی آموزشی بهت میگم.
          </p>
          
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            خرید از طریق تلگرام <Send size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* 👈 بخش نظرات کاربران (فعلاً خالی) */}
      <section className={styles.reviewsSection}>
        <h2 className={styles.reviewsTitle}>نظرات کاربران</h2>
        <div className={styles.reviewsPlaceholder}>
          <p>به زودی نظرات ارزشمند شما عزیزان در این بخش قرار می‌گیرد...</p>
        </div>
      </section>
    </main>
  );
}