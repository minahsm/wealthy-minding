import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Sprout } from "lucide-react";
import styles from "./Articles.module.css"

const articles = [
  {
    id: 1,
    title: "قانون جذب چیست؟",
    excerpt: `      خیلیها هنوز هم که هنوز است تا نام قانون جذب می آید، خوشحال میشوند ! 
      زیرا حس میکنند قرار است چیزی را با راهی میانبر به دست بیاورند،`,
    date: "۱۴۰۳/۰۸/۰۸",
    dateTime: "2024-10-29",
    href: "/articles/law-of-attraction",
    image: "/images/law-of-attraction-metaphysics.webp",
    alt:"انسانی در مرکز امواج مغناطیسی"
  },
  {
    id: 2,
    title: "ذهن‌آگاهی؛ راهی برای رسیدن به آرامش و تمرکز",
    excerpt:  "ذهن‌آگاهی به ما کمک می‌کند به جای غرق شدن در افکار گذشته و نگرانی‌های آینده، حضور بیشتری در لحظه اکنون داشته باشیم.",
    date: "۱۴۰۳/۰۸/۱۲",
    dateTime: "2024-11-02",
    href: "/articles/mindfulness-and-inner-peace",
    image: "/images/yoga-in-nature-meditation.webp",
    alt: "تصویر مغز یک فرد و امواج مغناطیسی ساطع شده از آن"
  },
  {
    id: 3,
    title: "تصویرسازی ذهنی",
    excerpt: `به چه علت باید با مردمی همزمان و هم‌ عصر بود که برایشان باید
     با صرف زمان فهماند که تصویر سازی ذهنی شان، برخلاف چیزی که به آنها سالهاست (عمدا) دیکته شده خیالپردازی نیست`,
    date: "۱۴۰۳/۰۸/۱۵",
    dateTime: "2024-11-05",
    href: "/articles/visualization-and-energy",
    image: "/images/mind-imaginary.webp",
    alt: "تصویر یک خانم در حال مدیتیشن"
  }
];

  // 👈 یک کامپوننت کوچیک برای لینک ساختیم تا کد تکراری ننویسیم
  const ViewAllLink = ({ className }) => (
    <Link href="/articles" className={`${styles.allArticles} ${className}`}>
      مشاهده همه مقالات <ArrowLeft size={17} aria-hidden="true" />
    </Link>
  );

export default function Articles() {
  return (
    <section className={styles.articles} aria-labelledby="articles-heading">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.headingGroup}>
            <Sprout size={28} aria-hidden="true" className={styles.headingIcon} />
            <div>
              <h2 id="articles-heading" className="section-title">مقالات</h2>
              <p className="section-description">مطالبی برای شناخت ذهن، آرامش و رشد آگاهانه</p>
            </div>
          </div>
          <ViewAllLink className={styles.desktopLink} />
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.card}>
              <Link href={article.href} className={styles.imageLink} aria-label={`مطالعه مقاله ${article.title}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className={styles.image}
                  />
                </div>
              </Link>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}><Link href={article.href}>{article.title}</Link></h3>
                <p className={styles.date}>
                  <CalendarDays size={14} aria-hidden="true" />
                  <time dateTime={article.dateTime}>{article.date}</time>
                </p>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <Link href={article.href} className={styles.readMore}>
                  بیشتر بخوانید <ArrowLeft size={16} aria-hidden="true" />
                </Link>
                <ViewAllLink className={styles.mobileLink} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
