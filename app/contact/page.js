import { Mail, Send, Instagram, MapPin } from "lucide-react";
import styles from "./contact.module.css";

export const metadata = {
  title: "تماس با ما | ذهن ثروتمند",
  description: "راه‌های ارتباطی با پشتیبانی و مدیریت سایت ذهن ثروتمند.",
};

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>تماس با ما</h1>
        <p className={styles.subtitle}>ما همیشه خوشحال می‌شویم نظرات و سوالات شما را بشنویم.</p>
      </section>

      <div className={styles.grid}>
        {/* ستون اطلاعات تماس */}
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>راه‌های ارتباطی</h2>
          
          <a href="https://t.me/wealthy_minding" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <div className={styles.iconWrapper}><Send size={24} /></div>
            <div>
              <h3>تلگرام (سریع‌ترین راه)</h3>
              <p>wealthy_minding@</p>
            </div>
          </a>

          <a href="https://instagram.com/wealthy_minding" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <div className={styles.iconWrapper}><Instagram size={24} /></div>
            <div>
              <h3>اینستاگرام</h3>
              <p>wealthy_minding</p>
            </div>
          </a>

          <a href="mailto:info@zehnservatmand.com" className={styles.contactItem}>
            <div className={styles.iconWrapper}><Mail size={24} /></div>
            <div>
              <h3>ایمیل</h3>
              <p>mina.hsm.rzn@gmail.com</p>
            </div>
          </a>

         <a href="https://maps.google.com/?q=ساری" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <div className={styles.iconWrapper}><MapPin size={24} /></div>
            <div>
              <h3>آدرس</h3>
              <p>مازندران، ساری</p>
            </div>
          </a>
          </div>

        {/* ستون فرم تماس */}
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>ارسال پیام</h2>
          <form className={styles.form} action="#">
            <div className={styles.inputGroup}>
              <label htmlFor="name">نام و نام خانوادگی</label>
              <input type="text" id="name" placeholder="نام شما" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">ایمیل یا شماره تماس</label>
              <input type="text" id="email" placeholder="ایمیل یا شماره" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">متن پیام</label>
              <textarea id="message" rows="5" placeholder="پیام خود را اینجا بنویسید..." required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>ارسال پیام</button>
          </form>
        </div>
      </div>
    </main>
  );
}