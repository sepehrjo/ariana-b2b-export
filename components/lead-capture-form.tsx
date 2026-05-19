"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { Mail, Phone, Building2, CheckCircle, AlertCircle } from "lucide-react"

interface LeadFormProps {
  prefilledProduct?: string
  prefilledQuantity?: number
  onSuccess?: () => void
}

export function LeadCaptureForm({ prefilledProduct, prefilledQuantity, onSuccess }: LeadFormProps) {
  const { lang } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    product: prefilledProduct || "",
    quantity: prefilledQuantity?.toString() || "",
    message: "",
  })

  const isFa = lang === "fa"

  const labels = isFa
    ? {
        title: "درخواست پیش‌فاکتور رسمی",
        subtitle: "اطلاعات خود را ارسال کنید تا تیم فروش ما با شما تماس بگیرد",
        fullName: "نام کامل",
        email: "ایمیل",
        phone: "شماره تلفن",
        company: "نام شرکت",
        product: "محصول",
        quantity: "مقدار (کیلوگرم)",
        message: "پیام اضافی",
        submit: "ارسال درخواست",
        successMessage: "درخواست شما با موفقیت ارسال شد. تیم فروش ما شما را در 24 ساعت تماس می‌گیرند.",
        errorMessage: "خطایی رخ داد. لطفاً دوباره تلاش کنید.",
        required: "(الزامی)",
      }
    : {
        title: "Request a Formal Quote",
        subtitle: "Submit your information and our sales team will contact you within 24 hours",
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        company: "Company Name",
        product: "Product",
        quantity: "Quantity (kg)",
        message: "Additional Message",
        submit: "Submit Request",
        successMessage: "Your request has been sent successfully. Our sales team will contact you within 24 hours.",
        errorMessage: "An error occurred. Please try again.",
        required: "(required)",
      }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          lang,
        }),
      })

      if (!res.ok) throw new Error("Failed to submit")

      setSuccess(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        quantity: "",
        message: "",
      })

      if (onSuccess) {
        setTimeout(onSuccess, 2000)
      }
    } catch (err) {
      setError(labels.errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <div className="flex gap-3">
          <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-emerald-900">{isFa ? "موفق!" : "Success!"}</h3>
            <p className="text-sm text-emerald-800 mt-1">{labels.successMessage}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", isFa && "dir-rtl")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            {labels.fullName} <span className="text-saffron">{labels.required}</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder={isFa ? "نام و نام خانوادگی" : "John Doe"}
            className="w-full px-3 py-2 border border-border rounded-lg text-ink placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-saffron/50"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            {labels.email} <span className="text-saffron">{labels.required}</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className="w-full px-3 py-2 border border-border rounded-lg text-ink placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-saffron/50"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            {labels.phone} <span className="text-saffron">{labels.required}</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder={isFa ? "+98 (912) 000-0000" : "+1 (555) 123-4567"}
            className="w-full px-3 py-2 border border-border rounded-lg text-ink placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-saffron/50"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            {labels.company} <span className="text-saffron">{labels.required}</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder={isFa ? "نام شرکت" : "Your Company Inc."}
            className="w-full px-3 py-2 border border-border rounded-lg text-ink placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-saffron/50"
          />
        </div>

        {/* Product */}
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            {labels.product} <span className="text-saffron">{labels.required}</span>
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-border rounded-lg text-ink focus:outline-none focus:ring-2 focus:ring-saffron/50 bg-white"
          >
            <option value="">{isFa ? "انتخاب کنید" : "Select a product"}</option>
            <option value="saffron">Saffron</option>
            <option value="pistachios">Pistachios</option>
            <option value="dates">Dates</option>
            <option value="figs">Dried Figs</option>
            <option value="apricots">Dried Apricots</option>
            <option value="spices">Premium Spice Mix</option>
            <option value="herbal-drinks">Herbal Drink Mix</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            {labels.quantity} <span className="text-saffron">{labels.required}</span>
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
            placeholder={isFa ? "مثلاً: 100" : "e.g., 100"}
            className="w-full px-3 py-2 border border-border rounded-lg text-ink placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-saffron/50"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">
          {labels.message}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={isFa ? "سوالات یا نیازهای خاص..." : "Any special requirements or questions..."}
          rows={4}
          className="w-full px-3 py-2 border border-border rounded-lg text-ink placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-saffron/50 resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={cn(
          "w-full px-4 py-2.5 rounded-lg font-medium transition-colors",
          "bg-saffron text-white hover:bg-saffron/90",
          "disabled:bg-muted disabled:text-muted-text disabled:cursor-not-allowed",
        )}
      >
        {loading ? (isFa ? "درحال ارسال..." : "Sending...") : labels.submit}
      </button>
    </form>
  )
}
