
import Image from "next/image";

import { subliminals } from "../../Data/subliminals.js";
import styles from "./subliminal.module.css";

export const metadata = {
  title: "فروشگاه سابلیمینال | ذهن ثروتمند",
  description:
    "آشنایی با مجموعه سابلیمینال‌های ذهن ثروتمند در زمینه فراوانی، اعتمادبه‌نفس و رشد ذهنی.",
};

export default function SubliminalPage() {
  return (
    <main className={styles.subliminal}>
      <div className={styles["subliminal__container"]}>

        <header className={styles["subliminal__header"]}>

          <span className={styles["subliminal__eyebrow"]}>
            فروشگاه ذهن ثروتمند
          </span>

          <h1 className={styles["subliminal__title"]}>
            سابلیمینال‌های ذهن ثروتمند
          </h1>

          <p className={styles["subliminal__description"]}>
            مجموعه‌ای از محتوای صوتی برای همراهی با مسیر
            خودشناسی، ذهن‌آگاهی و پرورش نگرش سازنده.
          </p>

        </header>

        <section
          className={styles["subliminal__grid"]}
          aria-label="محصولات سابلیمینال"
        >

          {subliminals.map((item) => (
            <article
              key={item.slug}
              className={styles["subliminal__card"]}
            >

              <div className={styles["subliminal__image-wrapper"]}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles["subliminal__image"]}
                />
              </div>

              <div className={styles["subliminal__card-content"]}>

                <h2 className={styles["subliminal__card-title"]}>
                  {item.title}
                </h2>

                <p className={styles["subliminal__card-description"]}>
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["subliminal__button"]}
                >
                  سفارش سابلیمینال
                  <span aria-hidden="true">←</span>
                </a>

              </div>

            </article>
          ))}

        </section>

      </div>
    </main>
  );
}
