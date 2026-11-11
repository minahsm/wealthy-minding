
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import PromoBanner from "../components/PromoBanner";
import Contact from "../components/Contact";


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://example.com/#organization",
      "name": "ذهن ثروتمند",
      "url": "https://example.com/",
      "description": "محتوای فارسی درباره ذهن‌آگاهی، رشد فردی و فراوانی."
    },
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com/",
      "name": "ذهن ثروتمند",
      "inLanguage": "fa-IR",
      "publisher": {
      "@id": "https://example.com/#organization"
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      
      <main>
        <Hero />
        <Articles />
        <PromoBanner />
        <Contact />
      </main>
      
    </>
  );
}
