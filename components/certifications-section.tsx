"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"

interface Certification {
  name: string
  description: {
    en: string
    fa: string
    hy: string
  }
  icon: string
  year: string
}

const CERTIFICATIONS: Certification[] = [
  {
    name: "ISO 22000",
    description: {
      en: "Food Safety Management System certified. Ensures all products meet international food safety standards.",
      fa: "سیستم مدیریت ایمنی مواد غذایی معتبر است. تضمین می‌کند که تمام محصولات استانداردهای ایمنی مواد غذایی بین‌المللی را رعایت کنند.",
      hy: "Սննդի անվտանգության կառավարման համակարգ սերտիֆիկացված: Ապահովում է, որ բոլոր ապրանքները համապատասխանեն միջազգային սննդի անվտանգության ստանդարտներին:"
    },
    icon: "✓",
    year: "2015"
  },
  {
    name: "GlobalG.A.P.",
    description: {
      en: "Global Good Agricultural Practice certification for sustainable and responsible farming methods.",
      fa: "گواهینامه تمام‌جهانی روش‌های کشاورزی خوب برای کشاورزی پایدار و مسئول.",
      hy: "Գլոբալ լավ գյուղատնտեսական պրակտիկա հավաստիացում կայուն և պատասխանատու ֆերմերային մեթոդների համար:"
    },
    icon: "♻",
    year: "2018"
  },
  {
    name: "Phytosanitary Certificate",
    description: {
      en: "Official documentation confirming products are free from harmful pests and diseases, meeting import regulations for all markets.",
      fa: "مستندات رسمی تایید می‌کنند که محصولات از آفات و بیماری‌های مضر عاری هستند و قوانین وارداتی را برای تمام بازارها برآورده می‌کنند.",
      hy: "Պաշտոնական փաստաթղթեր հաստատում են, որ ապրանքները ազատ են վնասակար վարակներից և հիվանդություններից, իսկ բոլոր շուկաների ներմուծման կանոնակարգերին համապատասխանում են:"
    },
    icon: "🌿",
    year: "2000-Present"
  },
  {
    name: "ISO 3632 (Saffron)",
    description: {
      en: "International standard for saffron quality, color strength, and aroma guaranteeing premium grade products.",
      fa: "استاندارد بین‌المللی برای کیفیت زعفران، شدت رنگ و عطر تضمین کننده محصولات درجه‌اول.",
      hy: "Արտահանման շան որակի, գույնի ուժի և հոտի միջազգային ստանդարտ՝ պրեմիում գրադ ապրանքներ:"
    },
    icon: "★",
    year: "2010"
  }
]

export function CertificationsSection() {
  const { lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      heading: {
        en: "International Certifications",
        fa: "گواهینامه‌های بین‌المللی",
        hy: "Միջազգային հավաստիացումներ"
      },
      subtitle: {
        en: "Our commitment to quality and compliance is verified by leading international bodies.",
        fa: "تعهد ما به کیفیت و انطباق توسط نهادهای پیشرو بین‌المللی تایید می‌شود.",
        hy: "Մեր որակի և համապատասխանության հավատարմությունը հաստատվում է առաջատար միջազգային մարմիններով:"
      }
    }
    return translations[key]?.[lang] || translations[key]?.en
  }

  return (
    <section
      ref={ref}
      className="bg-parchment py-16 sm:py-24 md:py-32 lg:py-40"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-saffron font-medium mb-5">
            {lang === 'fa' ? 'اعتماد و انطباق' : lang === 'hy' ? 'Վստահություն և համապատասխանություն' : 'Trust & Compliance'}
          </p>
          <h2
            id="certifications-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink"
          >
            {getText('heading')}
          </h2>
          <p className="mt-5 text-muted-text max-w-lg mx-auto leading-relaxed">
            {getText('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <Badge variant="outline" className="text-[11px]">{cert.year}</Badge>
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink mb-3">
                {cert.name}
              </h3>
              <p className="text-muted-text leading-relaxed">
                {cert.description[lang as keyof typeof cert.description] || cert.description.en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
