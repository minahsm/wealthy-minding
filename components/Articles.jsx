import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Sprout } from "lucide-react";
import styles from "./Articles.module.css";

const articles = [
  {
    id: 1,
    title: "قانون جذب؛ واقعیت یا باور؟",
    excerpt: "با مفهوم باور و نقش آن در برداشت ما از زندگی و رشد فردی آشنا شوید.",
    date: "۱۴۰۳/۰۸/۰۸",
    dateTime: "2024-10-29",
    href: "/articles/law-of-attraction/",
    image: "/images/law-of-attraction-metaphysics.webp",
    alt:"انسانی در مرکز امواج مغناطیسی"
  },
  {
    id: 2,
    title: "مدیتیشن برای آرامش و تمرکز",
    excerpt: "با تمرین توجه و آگاهی از لحظه حال، فضایی برای آرامش درونی ایجاد کنید.",
    date: "۱۴۰۳/۰۸/۱۲",
    dateTime: "2024-11-02",
    href: "/articles/meditation-and-focus/",
    image: "/images/yoga-in-nature-meditation.webp",
    alt: "فردی در طبیعت در حال مدیتیشن"
  },
  {
    id: 3,
    title: "قدرت ذهن در جذب فراوانی",
    excerpt: "درباره باورهای مالی، ذهنیت فراوانی و شناخت الگوهای فکری بخوانید.",
    date: "۱۴۰۳/۰۸/۱۵",
    dateTime: "2024-11-05",
    href: "/articles/wealth-mindset/",
    image: "/images/mind-power-and-abundance.webp",
    alt: "مغز انسان و امواج مفناطیسی ساطع شده از آن"
  }
];

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
          <Link href="/articles/" className={styles.allArticles}>
            مشاهده همه مقالات <ArrowLeft size={17} aria-hidden="true" />
          </Link>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
