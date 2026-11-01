import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn"
});

export const metadata = {
  metadataBase: new URL("https://wealthy-minding.vercel.app/"),
  title: {
    default: "ذهن ثروتمند | ذهن‌آگاهی، رشد فردی و فراوانی",
    template: "%s | ذهن ثروتمند"
  },
  description:
    "مطالبی درباره ذهن‌آگاهی، رشد فردی، باورهای مالی و فراوانی؛ برای شناخت بهتر ذهن و برداشتن قدم‌های آگاهانه.",
  applicationName: "ذهن ثروتمند",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "ذهن ثروتمند",
    description: "ذهن‌آگاهی، رشد فردی و فراوانی",
    locale: "fa_IR",
    type: "website",
    siteName: "ذهن ثروتمند"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>{children}</body>
    </html>
  );
}
