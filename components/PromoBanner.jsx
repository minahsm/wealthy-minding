import Image from "next/image";
import { Send, Sprout } from "lucide-react";
import styles from "./PromoBanner.module.css";

const TELEGRAM_URL = "https://t.me/minnaaa_h";

export default function PromoBanner() {
  return (
    <section id="wealth-booklet" className={styles.promo} aria-labelledby="promo-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageColumn}>
          <Image
            src="/images/attract-money-and-wealth-article.webp"
            alt="کتابی در فضایی آرام با رنگ‌های طبیعی"
            width={420}
            height={440}
            sizes="(max-width: 768px) 75vw, 360px"
            className={styles.bookImage}
          />
          <Sprout className={styles.decorativeIcon} aria-hidden="true" />
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>مسیر رشد آگاهانه</p>
          <h2 id="promo-heading" className={styles.title}>جزوه آموزش جذب پول و فراوانی</h2>
          <p className={styles.description}>
            خیلی از ما دچار این توهم میشیم که چیزی از بیرون باید تغییر کنه که باعث بشه زندگیمون بهتر بشه، در حالی که اصلا اینطور نیست.
             تمام تغییرات از درون باید اتفاق بیفته. دنیای ما پر از افرادی هست که مهارت های پولسازی دارند ولی خودشون ثروتمند نیستند و برای افرادی کار می کنند که ذهنیت پولسازی دارند و ثروتمندند.
          </p>

          <p className={styles.description}> 
            مطالبی که در این جزوه گفته میشه بدون دادن توضیحات اضافه و دادن شاخ و برگ اضافه هست و مستقیما تمام نکاتی رو که باید برای رسیدن به پول و ثروت انجام بدی رو توی این جزوه ی آموزشی بهت میگم.
          </p>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            خرید از طریق تلگرام <Send size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
