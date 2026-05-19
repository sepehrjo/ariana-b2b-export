"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useLanguage } from "@/lib/i18n"
import { LeadCaptureForm } from "./lead-capture-form"

export function InquiryCTA() {
  const { lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showForm, setShowForm] = useState(false)

  const isFa = lang === "fa"

  const labels = isFa
    ? {
        heading: "آماده‌اید برای همکاری؟",
        subtitle: "درخواست‌های شما را بررسی کرده و بهترین قیمت‌ها را برایتان ارسال می‌کنیم",
        btnLabel: "درخواست نمونه یا پیش‌فاکتور",
      }
    : {
        heading: "Ready to partner with us?",
        subtitle: "Submit your inquiry and our team will send you a formal quote within 24 hours",
        btnLabel: "Request a Sample or Quote",
      }

  return (
    <section
      id="inquire"
      ref={ref}
      className="bg-parchment py-16 sm:py-24 md:py-32 lg:py-40"
      aria-labelledby="inquire-heading"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {!showForm ? (
          <>
            <motion.h2
              id="inquire-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-ink leading-[1.1] tracking-tight text-center"
            >
              {labels.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-sm sm:text-[15px] text-muted-text leading-[1.8] text-center"
            >
              {labels.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 flex justify-center"
            >
              <motion.button
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setShowForm(true)}
                className="bg-saffron text-white hover:bg-saffron/90 font-medium px-12 h-14 text-base shadow-lg shadow-saffron/20 tracking-wide rounded-lg transition-all duration-300"
              >
                {labels.btnLabel}
              </motion.button>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg"
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-2">
              {isFa ? "درخواست شما" : "Your Request"}
            </h2>
            <p className="text-sm text-muted-text mb-8">
              {isFa
                ? "اطلاعات خود را پر کنید و تیم فروش ما شما را در 24 ساعت تماس می‌گیرند."
                : "Fill out the form below and our sales team will contact you within 24 hours."}
            </p>

            <LeadCaptureForm
              onSuccess={() => {
                setTimeout(() => setShowForm(false), 3000)
              }}
            />

            <button
              onClick={() => setShowForm(false)}
              className="mt-6 text-sm text-muted-text hover:text-ink transition-colors"
            >
              {isFa ? "بازگشت" : "← Back"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
