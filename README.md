# ذهن ثروتمند — صفحه اصلی

پروژه نمونه صفحه اصلی سایت فارسی «ذهن ثروتمند» با Next.js App Router، JavaScript، CSS Modules و Lucide React.

## نیازمندی‌ها

- Node.js نسخه 18.17 یا جدیدتر (پیشنهاد: Node.js 20 LTS)
- npm

## نصب و اجرا

در پوشه ریشه پروژه ترمینال باز کنید و اجرا کنید:

```bash
npm install
npm run dev
```

سپس آدرس زیر را در مرورگر باز کنید:

```text
http://localhost:3000
```

برای ساخت نسخه production:

```bash
npm run build
npm start
```

## ساختار پوشه‌ها

```text
zehn-servatmand-project/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Header.jsx
│   ├── Header.module.css
│   ├── Hero.jsx
│   ├── Hero.module.css
│   ├── Articles.jsx
│   ├── Articles.module.css
│   ├── PromoBanner.jsx
│   ├── PromoBanner.module.css
│   ├── Contact.jsx
│   ├── Contact.module.css
│   ├── Footer.jsx
│   └── Footer.module.css
├── next.config.mjs
├── package.json
└── README.md
```

## قبل از انتشار

1. در `app/layout.js` دامنه نمونه `https://example.com` را با دامنه واقعی عوض کنید.
2. در `components/PromoBanner.jsx` مقدار `TELEGRAM_URL` را با لینک واقعی تلگرام جایگزین کنید.
3. اطلاعات تماس و شبکه اجتماعی در `components/Contact.jsx` را به‌روزرسانی کنید.
4. تصاویر Unsplash فعلی فقط تصاویر نمونه هستند؛ در صورت امکان از تصاویر نهایی و بهینه‌شده خود سایت استفاده کنید.
5. مسیرهای مقاله در `components/Articles.jsx` نمونه‌اند و باید با صفحات واقعی هماهنگ شوند.
6. محتوای JSON-LD در `app/page.js` باید با اطلاعات واقعی کسب‌وکار تکمیل شود.

## نکات

- استایل کامپوننت‌ها با CSS Modules نوشته شده است.
- صفحه فارسی و راست‌به‌چپ است.
- اسلایدر Hero به صورت خودکار حرکت می‌کند و کنترل‌های دستی و توقف دارد.
- اطلاعات تماس، لینک‌ها، تصاویر و متن‌ها برای نمونه هستند و پیش از انتشار باید بررسی شوند.
