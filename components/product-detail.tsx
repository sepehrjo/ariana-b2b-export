"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { Product } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { useCallback } from "react"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { t, lang } = useLanguage()

  const handleScrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const handleContactSales = useCallback(() => {
    // Open email client or scroll to contact
    const email = "sales@arianaglobaltrade.com"
    window.location.href = `mailto:${email}?subject=Product Inquiry: ${product.name.en}`
  }, [product])

  const getName = (item: any) => {
    if (typeof item === 'object' && item !== null) {
      return item[lang] || item.en
    }
    return item
  }

  return (
    <article className="bg-parchment py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20"
        >
          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md bg-muted rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.image}
                alt={getName(product.name)}
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-saffron font-medium mb-5">
              {product.originRegion}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-ink mb-6">
              {getName(product.name)}
            </h1>
            <p className="text-lg leading-relaxed text-muted-text mb-8">
              {getName(product.shortDescription)}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={() => handleScrollToSection("inquire")}
                size="lg"
                className="bg-saffron text-ink hover:bg-saffron/90 font-medium px-10 h-12 text-[15px] shadow-lg shadow-saffron/20 cursor-pointer"
              >
                {product.sampleAvailable ? (t('products.requestSamples')) : 'Inquire'}
              </Button>
              <Button
                onClick={handleContactSales}
                size="lg"
                variant="outline"
                className="border-saffron text-saffron hover:bg-saffron/10 font-medium px-10 h-12 text-[15px] cursor-pointer"
              >
                {lang === 'fa' ? 'تماس با فروش' : lang === 'hy' ? 'Վաճառք կոնտակտ' : 'Contact Sales'}
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Full Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 sm:mb-20 pb-16 sm:pb-20 border-b border-border"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-6">
            {lang === 'fa' ? 'توضیحات کامل' : lang === 'hy' ? 'Մանրամասն նկարագրություն' : 'About This Product'}
          </h2>
          <p className="text-lg leading-[1.8] text-muted-text max-w-3xl">
            {getName(product.fullDescription)}
          </p>
        </motion.section>

        {/* Specifications Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-8">
            {lang === 'fa' ? 'مشخصات فنی' : lang === 'hy' ? 'Տեխնիկական բնութագրեր' : 'Technical Specifications'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {product.specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                className="bg-white rounded-lg p-6 border border-border shadow-sm"
              >
                <p className="text-[13px] tracking-[0.1em] uppercase text-saffron font-semibold mb-3">
                  {getName(spec.label)}
                </p>
                <p className="font-serif text-2xl font-medium text-ink">
                  {getName(spec.value)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-8">
            {lang === 'fa' ? 'گواهینامه‌ها و استاندارد‌ها' : lang === 'hy' ? 'Սերտիֆիկատներ և ստանդարտներ' : 'Certifications & Standards'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {product.certifications.map((cert, i) => (
              <Badge key={i} variant="outline" className="px-4 py-2 text-[13px] font-medium">
                {cert}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Packaging Options */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-8">
            {lang === 'fa' ? 'گزینه‌های بسته‌بندی' : lang === 'hy' ? 'Փաթեթավորման ընտրանքներ' : 'Packaging Options'}
          </h2>
          <ul className="space-y-3">
            {product.packaging.map((pkg, i) => (
              <li key={i} className="flex items-center gap-3 text-lg text-muted-text">
                <span className="w-2 h-2 bg-saffron rounded-full flex-shrink-0" />
                {getName(pkg)}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Shipping & Minimum Orders */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 sm:mb-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="font-serif text-xl font-medium text-ink mb-4">
              {lang === 'fa' ? 'حداقل سفارش' : lang === 'hy' ? 'Նվազագույն պատվեր' : 'Minimum Order'}
            </h3>
            <p className="text-lg text-muted-text leading-relaxed">
              {getName(product.minOrderVolume)}
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium text-ink mb-4">
              {lang === 'fa' ? 'گزینه‌های حمل‌ونقل' : lang === 'hy' ? 'Ծանր ընտրանքներ' : 'Shipping Options'}
            </h3>
            <ul className="space-y-2">
              {product.shippingOptions.map((option, i) => (
                <li key={i} className="text-lg text-muted-text flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full" />
                  {getName(option)}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-ink text-parchment rounded-lg p-8 sm:p-12 text-center"
        >
          <h3 className="font-serif text-3xl sm:text-4xl font-medium mb-4">
            {lang === 'fa' ? 'آماده برای سفارش؟' : lang === 'hy' ? 'Պատրաստ պատվերի համար' : 'Ready to Order?'}
          </h3>
          <p className="text-parchment/80 text-lg mb-8 max-w-2xl mx-auto">
            {lang === 'fa' ? 'تیم فروش ما در کمتر از ۱۲ ساعت با جزئیات کامل پیش‌فاکتور، مشخصات و نمونه‌ها تماس خواهند گرفت.' : lang === 'hy' ? 'Մեր վաճառքային թիմ 12 ժամում կապ կհաստատի ամբողջական համանիշի, տեխնիկական սպեցիֆիկացիաների և նմուշների հետ:' : 'Our sales team will respond within 12 hours with detailed quotes, technical specs, and samples.'}
          </p>
          <Button
            onClick={() => handleScrollToSection("inquire")}
            size="lg"
            className="bg-saffron text-ink hover:bg-saffron/90 font-medium px-12 h-12 text-[15px] shadow-lg shadow-saffron/20 cursor-pointer"
          >
            {lang === 'fa' ? 'درخواست نقل قول' : lang === 'hy' ? 'Հաստատել հարցում' : 'Request Quote'}
          </Button>
        </motion.div>
      </div>
    </article>
  )
}
