"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { PRODUCTS } from "@/lib/products"

export function ProductGrid() {
  const { t, lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getName = (item: any) => {
    if (typeof item === 'object' && item !== null) {
      return item[lang] || item.en
    }
    return item
  }

  return (
    <section
      id="products"
      ref={ref}
      className="bg-parchment py-16 sm:py-24 md:py-32 lg:py-40"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-saffron font-medium mb-5">
            {t('products.tag')}
          </p>
          <h2
            id="products-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink"
          >
            {t('products.heading')}
          </h2>
          <p className="mt-5 text-muted-text max-w-lg mx-auto leading-relaxed">
            {t('products.subheading')}
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="group bg-card rounded-lg overflow-hidden shadow-sm border border-border cursor-default"
            >
              <Link href={`/products/${product.slug}`} className="block">
                {/* Product Image */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <Image
                    src={product.image}
                    alt={getName(product.name)}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-5 sm:p-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
                    {getName(product.name)}
                  </h3>
                  <p className="mt-3 text-muted-text leading-[1.8] text-[15px]">
                    {getName(product.shortDescription)}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.18em] uppercase text-saffron font-semibold">
                      {t('products.originPrefix')}{product.originRegion}{t('products.originSuffix')}
                    </span>
                    <span className="text-[13px] font-medium text-ink/60 group-hover:text-saffron transition-colors flex items-center">
                      {t('products.viewSpecs')} <span className="ml-1 opacity-0 rtl:translate-x-2 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
