import Link from "next/link";
import { Instagram, MapPin, Mail, Phone, Sprout } from "lucide-react";
import styles from "./Contact.module.css";

const contactItems = [
  { id: "instagram", label: "اینستاگرام", value: "wealthy_minding@", href: "https://instagram.com/wealthy_minding", icon: Instagram },
  { id: "address", label: "آدرس", value: "آدرس مجموعه را وارد کنید", href: "/contact/", icon: MapPin },
  { id: "email", label: "ایمیل", value: "mina.hsm.rzn@gmail.com", href: "mailto:info@example.com", icon: Mail },
  { id: "phone", label: "شماره تماس", value: "شماره تماس را وارد کنید", href: "tel:+980000000000", icon: Phone }
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.heading}>
          <Sprout size={27} className={styles.headingIcon} aria-hidden="true" />
          <h2 id="contact-heading" className="section-title">تماس با ما</h2>
        </div>
        <p className={styles.intro}>برای پرسش درباره مقالات، جزوه و خدمات سایت، از راه‌های ارتباطی زیر استفاده کنید.</p>
        <div className={styles.grid}>
          {contactItems.map((item) => {
            const Icon = item.icon;
            const external = item.href.startsWith("https://");
            return (
              <div className={styles.item} key={item.id}>
                <span className={styles.iconCircle}><Icon size={23} aria-hidden="true" /></span>
                <h3 className={styles.label}>{item.label}</h3>
                {external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.value}>{item.value}</a>
                ) : (
                  <Link href={item.href} className={styles.value}>{item.value}</Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
