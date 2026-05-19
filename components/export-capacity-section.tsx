"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/lib/i18n"

interface Capacity {
  label: {
    en: string
    fa: string
    hy: string
  }
  value: string
  description: {
    en: string
    fa: string
    hy: string
  }
}

const CAPACITIES: Capacity[] = [
  {
    label: {
      en: "Annual Export Capacity",
      fa: "ظرفیت صادرات سالانه",
      hy: "Տարային արտահանման ունակություն"
    },
    value: "5,000+ tons",
    description: {
      en: "Capable of handling large-scale orders with consistent quality and on-time delivery.",
      fa: "قابلیت مدیریت سفارش‌های بزرگ‌مقیاس با کیفیت یکپارچه و تحویل به موقع.",
      hy: "Կարող է վարել մեծ-մասշտաբի պատվերներ հետևողական որակի և ժամանակին մատակարարման հետ:"
    }
  },
  {
    label: {
      en: "Quality Assurance Labs",
      fa: "آزمایشگاه‌های کنترل کیفیت",
      hy: "Որակի ապահովման լաբորատորիաներ"
    },
    value: "6 Facilities",
    description: {
      en: "State-of-the-art testing facilities ensuring every batch meets international standards for purity, potency, and safety.",
      fa: "تجهیزات آزمایشی پیشرفته تضمین می‌کنند که هر دسته استانداردهای بین‌المللی برای خلوص، تاثیر و ایمنی را برآورده کند.",
      hy: "Ժամանակակից թեստավորման հաստատություններ որոշում են, որ յուրաքանչյուր հաբ համապատասխանում է միջազգային ստանդարտներին մաքրության, ուժի և անվտանգության համար:"
    }
  },
  {
    label: {
      en: "Export Markets",
      fa: "بازارهای صادراتی",
      hy: "Արտահանման շուկաներ"
    },
    value: "14+ Countries",
    description: {
      en: "Established supply chains and partnerships across Europe, Asia, Middle East, and North America with proven compliance records.",
      fa: "زنجیره تامین و شراکت‌های تثبیت‌شده در سراسر اروپا، آسیا، خاورمیانه و شمال آمریکا با رکوردهای انطباق ثابت.",
      hy: "Հաստատված մատակարար շղթա և գործընկերություններ Եվրոպայում, Ասիայում, Մերձավոր Արևելքում և Հյուսիսային Ամերիկայում ապացուցված համապատասխանության գրանցումներով:"
    }
  },
  {
    label: {
      en: "Response Time",
      fa: "زمان پاسخ",
      hy: "Պատասխանի ժամանակ"
    },
    value: "< 12 Hours",
    description: {
      en: "Dedicated export team responds to inquiries and quotation requests within 12 hours, 24/7 availability.",
      fa: "تیم صادرات اختصاصی به درخواست‌های پیش‌فاکتور و پاسخگو ۲۴/۷ با دسترسی در کمتر از ۱۲ ساعت پاسخ می‌دهند.",
      hy: "Նվիրված արտահանման թիմ պատասխանում է հարցումներին և պիտակային պահանջներին 12 ժամից պակաս, 24/7 հասանելիությամբ:"
    }
  }
]

export function ExportCapacitySection() {
  const { lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      heading: {
        en: "Export Capacity & Compliance",
        fa: "ظرفیت صادرات و انطباق",
        hy: "Արտահանման ունակություն և համապատասխանություն"
      },
      subtitle: {
        en: "Built to scale. Committed to compliance. Ready for your global markets.",
        fa: "ساخت شده برای گسترش. متعهد به انطباق. آماده برای بازارهای جهانی شما.",
        hy: "Կառուցված մասշտաբի համար: Վստահեցված համապատասխանությամբ: Պատրաստ ձեր գլոբալ շուկաների համար:"
      }
    }
    return translations[key]?.[lang] || translations[key]?.en
  }

  return (
    <section
      ref={ref}
      className="bg-white py-16 sm:py-24 md:py-32 lg:py-40"
      aria-labelledby="capacity-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-saffron font-medium mb-5">
            {lang === 'fa' ? 'خصوصیات' : lang === 'hy' ? 'Առանձնահատկություններ' : 'Capabilities'}
          </p>
          <h2
            id="capacity-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink"
          >
            {getText('heading')}
          </h2>
          <p className="mt-5 text-muted-text max-w-lg mx-auto leading-relaxed">
            {getText('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPACITIES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-parchment/40 rounded-lg p-8 border border-border/50 hover:border-saffron/30 transition-colors">
                <div className="mb-6">
                  <h3 className="text-[13px] tracking-[0.2em] uppercase text-saffron font-bold mb-3">
                    {item.label[lang as keyof typeof item.label] || item.label.en}
                  </h3>
                  <p className="font-serif text-3xl md:text-4xl font-medium text-ink">
                    {item.value}
                  </p>
                </div>
                <p className="text-muted-text leading-relaxed text-[15px]">
                  {item.description[lang as keyof typeof item.description] || item.description.en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
