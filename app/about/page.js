import { Sprout, GraduationCap, HeartHandshake } from "lucide-react";
import styles from "./about.module.css"

export const metadata = {
  title: "درباره ما | ذهن ثروتمند",
  description: "آشنایی با رسالت مجموعه ذهن ثروتمند در مسیر رشد آگاهانه، متافیزیک و فراوانی.",
};

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <Sprout size={48} className={styles.icon} />
        <h1 className={styles.title}>درباره ذهن ثروتمند</h1>
        <p className={styles.subtitle}>
          مسیری برای شناخت ذهن، آرامش درونی و رسیدن به فراوانی
        </p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.sectionTitle}>داستان ما</h2>
          <p  className={styles.text}>
            «ذهن ثروتمند» از یک باور ساده متولد شد: <strong>ثروت واقعی، ابتدا در ذهن ساخته می‌شود.</strong> 
            ما اینجا جمع شده‌ایم تا با ترکیب دانش روز (مانند تکنولوژی و روانشناسی) و مفاهیم عمیق معنوی (مانند مدیتیشن و قانون جذب)، به شما کمک کنیم تا الگوهای ذهنی محدودکننده را کنار بگذارید و زندگی آگاهانه‌تری را تجربه کنید.
          </p>
          <p className={styles.text}>
            ما معتقدیم که هر انسانی توانایی بی‌نهایتی برای خلق واقعیت مطلوب خود دارد. محتوای ما، از مقالات آموزشی گرفته تا سابلیمینال‌ها و جزوات، همه با این هدف طراحی شده‌اند که چراغی باشند برای مسیر رشد شما.
          </p>
        </div>
      </section>

      <section className={styles.featuresGrid}>
        <div className={styles.featureCard}>
          <GraduationCap size={32} className={styles.featureIcon} />
          <h3>پشتوانه علمی و تخصصی</h3>
          <p>محتوای این مجموعه با تمرکز بر روانشناسی ذهن و تکنولوژی‌های نوین تهیه و مدیریت می‌شود.</p>
        </div>
        <div className={styles.featureCard}>
          <HeartHandshake size={32} className={styles.featureIcon} />
          <h3>تعهد به رشد شما</h3>
          <p>ما تنها به ارائه محتوا بسنده نمی‌کنیم؛ هدف ما همراهی واقعی با شما در مسیر رسیدن به آرامش و ثروت پایدار است.</p>
        </div>
      </section>
    </main>
  );
}