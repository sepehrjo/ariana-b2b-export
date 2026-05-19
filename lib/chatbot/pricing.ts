/**
 * Pricing Database and Quote Calculation
 * Provides estimated pricing for instant quotes based on product and quantity
 */

export interface ProductPrice {
  name: string
  basePrice: number // USD per kg
  minOrderKg: number
  volumeDiscounts: Array<{
    minKg: number
    discountPercent: number
  }>
}

// Base prices per kilogram (wholesale, before discounts)
const PRICING: Record<string, ProductPrice> = {
  saffron: {
    name: "Saffron (Grade 1)",
    basePrice: 15, // $15 per gram = $15,000 per kg
    minOrderKg: 5,
    volumeDiscounts: [
      { minKg: 5, discountPercent: 0 },
      { minKg: 10, discountPercent: 5 },
      { minKg: 25, discountPercent: 10 },
      { minKg: 50, discountPercent: 15 },
      { minKg: 100, discountPercent: 20 },
    ],
  },
  pistachios: {
    name: "Pistachios",
    basePrice: 8,
    minOrderKg: 10,
    volumeDiscounts: [
      { minKg: 10, discountPercent: 0 },
      { minKg: 50, discountPercent: 5 },
      { minKg: 100, discountPercent: 10 },
      { minKg: 500, discountPercent: 15 },
      { minKg: 1000, discountPercent: 20 },
    ],
  },
  dates: {
    name: "Dates (Premium Mix)",
    basePrice: 5,
    minOrderKg: 20,
    volumeDiscounts: [
      { minKg: 20, discountPercent: 0 },
      { minKg: 100, discountPercent: 5 },
      { minKg: 500, discountPercent: 10 },
      { minKg: 1000, discountPercent: 15 },
      { minKg: 5000, discountPercent: 20 },
    ],
  },
  figs: {
    name: "Dried Figs",
    basePrice: 6,
    minOrderKg: 15,
    volumeDiscounts: [
      { minKg: 15, discountPercent: 0 },
      { minKg: 75, discountPercent: 5 },
      { minKg: 300, discountPercent: 10 },
      { minKg: 1000, discountPercent: 15 },
    ],
  },
  apricots: {
    name: "Dried Apricots",
    basePrice: 7,
    minOrderKg: 20,
    volumeDiscounts: [
      { minKg: 20, discountPercent: 0 },
      { minKg: 100, discountPercent: 5 },
      { minKg: 500, discountPercent: 10 },
      { minKg: 2000, discountPercent: 15 },
    ],
  },
  spices: {
    name: "Premium Spice Mix",
    basePrice: 12,
    minOrderKg: 10,
    volumeDiscounts: [
      { minKg: 10, discountPercent: 0 },
      { minKg: 50, discountPercent: 5 },
      { minKg: 250, discountPercent: 10 },
      { minKg: 1000, discountPercent: 15 },
    ],
  },
  "herbal-drinks": {
    name: "Herbal Drink Mix",
    basePrice: 4,
    minOrderKg: 25,
    volumeDiscounts: [
      { minKg: 25, discountPercent: 0 },
      { minKg: 100, discountPercent: 5 },
      { minKg: 500, discountPercent: 10 },
      { minKg: 2000, discountPercent: 15 },
    ],
  },
}

export interface QuoteCalculation {
  productName: string
  quantityKg: number
  pricePerKg: number
  discount: number
  subtotal: number
  currency: string
  shippingEstimate: string
  leadTime: string
}

/**
 * Calculate a quote based on product slug and quantity in kg
 */
export function calculateQuote(productSlug: string, quantityKg: number): QuoteCalculation | null {
  const pricing = PRICING[productSlug]
  if (!pricing) return null

  // Check minimum order
  if (quantityKg < pricing.minOrderKg) {
    return null // Will be handled with error message
  }

  // Find applicable discount
  const discountTier = pricing.volumeDiscounts
    .reverse()
    .find((tier) => quantityKg >= tier.minKg)

  const discountPercent = discountTier?.discountPercent || 0
  const pricePerKg = pricing.basePrice * (1 - discountPercent / 100)
  const subtotal = pricePerKg * quantityKg

  // Estimate shipping based on quantity
  let shippingEstimate = "Included in FOB"
  if (quantityKg > 100) {
    shippingEstimate = "20ft container approx. $3,000–$5,000"
  } else if (quantityKg > 500) {
    shippingEstimate = "40ft container approx. $5,000–$8,000"
  }

  // Estimate lead time
  let leadTime = "15–20 business days"
  if (quantityKg > 1000) {
    leadTime = "20–30 business days"
  }

  return {
    productName: pricing.name,
    quantityKg,
    pricePerKg,
    discount: discountPercent,
    subtotal,
    currency: "USD",
    shippingEstimate,
    leadTime,
  }
}

/**
 * Get all available products for quote
 */
export function getAvailableProducts() {
  return Object.entries(PRICING).map(([slug, data]) => ({
    slug,
    name: data.name,
    minOrderKg: data.minOrderKg,
  }))
}

/**
 * Parse quantity from user input (handles various formats like "500kg", "500 kg", "500")
 */
export function parseQuantity(text: string): number | null {
  // Extract first number found
  const match = text.match(/(\d+(?:\.\d+)?)\s*(?:kg|kilogram|kgs)?/i)
  if (!match) return null
  return parseFloat(match[1])
}

/**
 * Detect if user is asking for a quote (keywords + quantity mention)
 */
export function isQuoteRequest(text: string): boolean {
  const quoteKeywords = [
    "quote",
    "price",
    "cost",
    "how much",
    "how much does",
    "estimate",
    "quotation",
    "bid",
    "offer",
    "pricing",
    "rates",
    "per kg",
    "per kilogram",
  ]

  const persianKeywords = [
    "قیمت",
    "نرخ",
    "هزینه",
    "چند تومان",
    "چند دلار",
    "پیش‌فاکتور",
    "پیش فاکتور",
    "پیشنهاد",
    "دستور",
    "فاکتور",
  ]

  const normalizedText = text.toLowerCase()
  const hasQuoteKeyword =
    quoteKeywords.some((k) => normalizedText.includes(k)) ||
    persianKeywords.some((k) => normalizedText.includes(k))

  // Must also mention a product or quantity
  const hasProductOrQty =
    /\b\d+\s*(kg|kilogram|kgs|g|gram)\b/i.test(text) ||
    Object.keys(PRICING).some((slug) => normalizedText.includes(slug))

  return hasQuoteKeyword && hasProductOrQty
}

/**
 * Extract product name from user query
 */
export function extractProductFromQuery(text: string): string | null {
  const lowered = text.toLowerCase()

  // Try slug-based matching first
  for (const slug of Object.keys(PRICING)) {
    if (lowered.includes(slug.replace(/-/g, " "))) {
      return slug
    }
  }

  // Try by common product names
  const productMatches: Record<string, string> = {
    saffron: "saffron",
    "safran": "saffron",
    pistachio: "pistachios",
    pistachios: "pistachios",
    date: "dates",
    dates: "dates",
    fig: "figs",
    figs: "figs",
    apricot: "apricots",
    apricots: "apricots",
    spice: "spices",
    spices: "spices",
    herbal: "herbal-drinks",
    tea: "herbal-drinks",
  }

  for (const [keyword, slug] of Object.entries(productMatches)) {
    if (lowered.includes(keyword)) {
      return slug
    }
  }

  return null
}
