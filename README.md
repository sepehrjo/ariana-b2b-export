# 🌾 Ariana Global Trade - B2B Export Platform

A modern, multi-language B2B export platform built with Next.js for Ariana Global Trade — a premium Iranian agricultural commodities supplier specializing in saffron, pistachios, dates, and specialty goods.

**Live**: [arianaglobaltrade.com](https://arianaglobaltrade.com)  
**Status**: ✅ Production Ready  
**Last Updated**: May 19, 2026

---

## 🎯 Overview

Ariana Global Trade is a next-generation B2B export website designed to:

- 🌍 **Reach global importers** in 14+ active markets
- 💬 **Support 3 languages**: English, Persian (Farsi), Armenian
- 🤖 **Provide instant quotes** via AI-powered chatbot
- 📋 **Capture qualified leads** with professional forms
- 🔒 **Demonstrate trust** through ISO certifications and metrics
- 📱 **Adapt to all devices** with responsive design

---

## ✨ Key Features

### 1. **Multi-Language Support**
- **English (en)**: Primary business language, LTR layout
- **Persian (fa)**: Full RTL support for Iranian market
- **Armenian (hy)**: Growing market, LTR layout
- All UI elements, forms, and product descriptions translated
- Automatic language detection and localStorage persistence
- Dynamic `document.dir` switching for RTL/LTR

### 2. **Intelligent Quote System**
- **Instant Price Calculation**: Auto-detects product inquiries and quantities
- **Natural Language Processing**: Understands "500kg of saffron", "need pistachios", etc.
- **Volume Discounts**: Automatically applies 5-20% discounts based on order size
- **Shipping Estimates**: Provides FOB/CIF pricing and lead times
- **Multi-Product**: Saffron, Pistachios, Dates, Figs, Apricots, Spices, Herbal Drinks

### 3. **Dynamic Product Pages**
- **7 Product Detail Pages**: Each with full specifications, certifications, packaging options
- **Pre-rendered Routes**: Lightning-fast static pages via `generateStaticParams`
- **Rich Content**: Images, technical specs, shipping options, MOQ, certifications
- **CTAs**: Request samples, contact sales, request quotes

### 4. **Lead Capture System**
- **Professional Form**: Name, email, phone, company, product, quantity, message
- **Bilingual Interface**: English and Persian (with Armenian fallback)
- **Real-time Validation**: Required field checks and error handling
- **CRM Ready**: JSONL format for easy integration with HubSpot, Pipedrive, Salesforce
- **Persistent Storage**: `public/data/leads.jsonl` with timestamps

### 5. **Trust & Authority Signals**
- **ISO Certifications**: ISO 22000, ISO 3632, GlobalG.A.P., Phytosanitary
- **Export Metrics**: 500+ partners, 12k+ tons exported, 100% traceability
- **Company Heritage**: Established 1998, proven track record
- **Multi-Market Presence**: Active in 14+ countries

### 6. **AI-Powered Chatbot**
- **Local-First Responses**: Fast answers from knowledge base
- **Quote Intent Detection**: Auto-detects pricing requests
- **Context Awareness**: Understands product, shipping, sample questions
- **AI Fallback**: OpenAI integration for complex queries
- **Multi-Language**: Handles English, Persian, Armenian

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/sepehrjo/ariana-b2b-export.git
cd ariana-b2b-export

# Install dependencies
npm install

# Create .env.local for OpenAI API (optional)
echo "OPENAI_API_KEY=your_key_here" > .env.local
```

### Development
```bash
npm run dev
open http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

---

## 📝 May 2026 Updates

### Phase 1: Localization (Armenian Support)
- Extended language system to 3 languages (en, fa, hy)
- Added Noto Sans Armenian font
- Implemented RTL/LTR auto-switching
- Language switcher in navbar

### Phase 2: Dynamic Routing
- Created `/products/[slug]` pages
- Built product catalog system (`lib/products.ts`)
- Pre-renders all 7 products with `generateStaticParams`
- ProductDetail component with full specs

### Phase 3: Trust Signals
- Added `CertificationsSection` component
- Integrated `ExportCapacitySection` component
- ISO 22000, GlobalG.A.P., ISO 3632 badges
- Metrics: 500+ partners, 12k+ tons, 100% traceability

### Phase 4: Intelligent Quotes
- Built `lib/chatbot/pricing.ts` pricing engine
- Quote intent detection in chatbot
- Volume discounts (5-20% off based on quantity)
- Natural language quantity parsing
- Automated shipping estimates and lead times

### Phase 5: Lead Capture
- Professional `LeadCaptureForm` component
- `/api/leads` endpoint for storage
- JSONL persistence for CRM import
- Bilingual validation and success messages

### Phase 6: Button Fixes
- Smooth scroll navigation to forms
- Email client integration for sales contact
- All CTAs fully functional
- Tested on all pages

---

## 🏗️ Architecture

**Tech Stack**:
```
Next.js 16.2.6 (App Router) + React 19 + TypeScript
Tailwind CSS + Framer Motion + Shadcn UI
OpenAI API (chat fallback)
```

**New Files Created** (10 total):
- `lib/chatbot/pricing.ts` - Pricing engine
- `app/api/leads/route.ts` - Lead storage API
- `components/lead-capture-form.tsx` - Lead form
- `components/product-detail.tsx` - Product pages
- `components/certifications-section.tsx` - Trust signals
- `components/export-capacity-section.tsx` - Metrics
- `app/products/[slug]/page.tsx` - Dynamic pages
- `lib/products.ts` - Product catalog

**Modified Files** (6 total):
- `app/layout.tsx` - Added Armenian font
- `lib/i18n.tsx` - Extended to 3 languages
- `components/navbar.tsx` - Language switcher
- `lib/chatbot/engine.ts` - Quote detection
- `lib/chatbot/data.ts` - Lang type extended
- `next.config.mjs` - Removed unsupported i18n

---

## 📊 API Endpoints

### Chat API
```
POST /api/chat
{
  "message": "Price for 500kg saffron?",
  "lang": "en|fa|hy",
  "currentSection": "products"
}
```

### Lead Capture API
```
POST /api/leads
{
  "fullName": "...",
  "email": "...",
  "phone": "...",
  "company": "...",
  "product": "saffron|pistachios|dates|...",
  "quantity": "500",
  "message": "...",
  "lang": "en|fa|hy"
}
```

**Response**: JSONL stored in `public/data/leads.jsonl` with timestamp and unique ID

---

## 🔒 Security & Performance

- ✅ Zero build errors
- ✅ TypeScript type-safe throughout
- ✅ Input validation on all forms
- ✅ Image optimization enabled
- ✅ Pre-rendered static pages (9 routes)
- ✅ File-based JSONL storage (no database)
- ✅ CORS-ready APIs

**Build Metrics**:
- Compilation: ~2 seconds
- TypeScript: ~4 seconds
- Static pages: 9 pre-rendered
- Dynamic routes: 2 APIs
- Product pages: 7 SSG

---

## 🎨 Customization

### Branding
- Colors: `tailwind.config.ts`
- Fonts: `app/layout.tsx`
- Products: `lib/products.ts`
- Pricing: `lib/chatbot/pricing.ts`
- Translations: `lib/i18n.tsx`
- Email: `components/product-detail.tsx`

### Languages
Add new language in `lib/i18n.tsx`:
```typescript
const dict = {
  en: { /* ... */ },
  fa: { /* ... */ },
  hy: { /* ... */ },
  // new_lang: { /* ... */ }
}
```

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

---

## 🐛 Troubleshooting

**Quote detection not working?**
- Check product names in chat (saffron, pistachios, etc.)
- Include "kg" in quantity (e.g., "500 kg")

**Language not switching?**
- Clear localStorage: `localStorage.clear()`
- Check `LanguageProvider` in `layout.tsx`

**Leads not saving?**
- Check file permissions on `public/data/`
- Verify `/api/leads` endpoint works

**Product page not loading?**
- Check slug format (lowercase, hyphens)
- Rebuild: `npm run build`

---

## 🎉 Deployment

### Vercel (Recommended)
```bash
git push origin main
# Auto-deploys from GitHub
```

### Docker
```bash
docker build -t ariana-b2b .
docker run -p 3000:3000 ariana-b2b
```

### Environment Variables
```bash
OPENAI_API_KEY=sk-...  # Optional, for AI fallback
NODE_ENV=production
```

---

## 📄 License

Proprietary to Ariana Global Trade. All rights reserved.

---

## 📞 Support

- Email: support@arianaglobaltrade.com
- GitHub: [Issues](https://github.com/sepehrjo/ariana-b2b-export/issues)

---

**Built with ❤️ for global trade partnerships**

Last updated: May 19, 2026  
**Status**: ✅ Production Ready
