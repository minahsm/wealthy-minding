import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { articles } from "../../../Data/articles.js";
import styles from "./article.module.css";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "مقاله پیدا نشد | ذهن ثروتمند",
    };
  }

  return {
    title: `${article.title} | ذهن ثروتمند`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
    },
  };
}

export default async function SingleArticlePage({ params }) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className={styles.article}>
      <div className={styles["article__container"]}>

        <Link
          href="/articles"
          className={styles["article__back"]}
        >
          <span aria-hidden="true">←</span>
          بازگشت به همه مقالات
        </Link>

        <article className={styles["article__content"]}>

          <header className={styles["article__header"]}>

            <h1 className={styles["article__title"]}>
              {article.title}
            </h1>

            <div className={styles["article__meta"]}>
              <time>{article.date}</time>
              <span>{article.readTime} مطالعه</span>
            </div>

          </header>

          <div className={styles["article__image-wrapper"]}>
            <Image
              src={article.image}
              alt={article.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 750px"
              className={styles["article__image"]}
            />
          </div>

          <div
            className={styles["article__body"]}
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />

          <div className={styles["article__footer"]}>
            <Link href="/articles">
              مشاهده سایر مقالات
            </Link>
          </div>

        </article>

      </div>
    </main>
  );
}