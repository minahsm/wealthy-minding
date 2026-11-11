import Image from "next/image";
import Link from "next/link";
import { articles } from "../../Data/articles.js";
import styles from "./articles.module.css";

export const metadata = {
  title: "مقالات ذهن ثروتمند | ذهن‌آگاهی و رشد فردی",
  description:
    "مجموعه مقالات ذهن ثروتمند درباره ذهن‌آگاهی، تجسم ذهنی، قانون جذب و رشد فردی.",
};

export default function ArticlesPage() {
  return (
    <main className={styles.articles}>
      <div className={styles["articles__container"]}>

        <header className={styles["articles__header"]}>
          <span className={styles["articles__eyebrow"]}>
          
          </span>

          <h1 className={styles["articles__title"]}>
            مقالات ذهن ثروتمند
          </h1>

          <p className={styles["articles__description"]}>
            
             مقالاتی درباره ذهن‌ آگاهی، تجسم و نگرش ثروت‌ آفرین. در مسیر آگاهی همراه ما باشید.
          </p>
        </header>

        <section
          className={styles["articles__grid"]}
          aria-label="فهرست مقالات"
        >
          {articles.map((article) => (
            <article
              key={article.slug}
              className={styles["articles__card"]}
            >
              <Link
                href={`/articles/${article.slug}`}
                className={styles["articles__image-link"]}
                aria-label={`مطالعه مقاله ${article.title}`}
              >
                <div className={styles["articles__image-wrapper"]}>
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles["articles__image"]}
                  />
                </div>
              </Link>

              <div className={styles["articles__card-content"]}>

                <div className={styles["articles__meta"]}>
                  <time>{article.date}</time>
                  <span>{article.readTime} مطالعه</span>
                </div>

                <h2 className={styles["articles__card-title"]}>
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className={styles["articles__excerpt"]}>
                  {article.excerpt}
                </p>

                <Link
                  href={`/articles/${article.slug}`}
                  className={styles["articles__read-more"]}
                >
                  بیشتر بخوانید
                  <span aria-hidden="true">←</span>
                </Link>

              </div>
            </article>
          ))}
        </section>

      </div>
    </main>
  );
}