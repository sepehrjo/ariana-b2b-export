# Ariana Global Trade Website - Deployment Checklist & Quick Start

## Pre-Deployment Checklist

### Code Quality
- [x] All TypeScript files compile without errors
- [x] No console errors in browser
- [x] All imports resolved correctly
- [x] Components properly exported/imported
- [x] Consistent code formatting

### Functionality Tests
- [x] All three languages work (en, fa, hy)
- [x] Language switching persists across page reloads
- [x] RTL mode activates properly for Persian
- [x] LTR mode works for English and Armenian
- [x] All product pages are accessible and render correctly
- [x] Navigation links work across all languages
- [x] Mobile menu functions properly

### Visual Tests
- [x] Homepage displays all sections correctly
- [x] New trust sections render properly
- [x] Typography hierarchy is maintained
- [x] Spacing is consistent across components
- [x] Responsive design works on all breakpoints
- [x] Images load and scale properly
- [x] Animations are smooth and not excessive

### Localization Tests
- [x] English text displays left-to-right
- [x] Persian text displays right-to-left
- [x] Armenian text displays left-to-right
- [x] Character encoding is correct for all languages
- [x] Font files load for Armenian
- [x] Numbers and dates display correctly per locale

---

## Quick Start Guide

### Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Server runs on `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

### File Structure Overview

```
project-root/
├── app/
│   ├── layout.tsx              # Root layout with font setup
│   ├── page.tsx                # Homepage with all sections
│   ├── products/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic product page
│   ├── api/                    # API routes (chat endpoint)
│   └── globals.css             # Global styles
├── components/
│   ├── navbar.tsx              # Navigation with language switcher
│   ├── hero.tsx                # Hero section
│   ├── trust-bar.tsx           # Key metrics display
│   ├── certifications-section.tsx    # [NEW] Trust signals
│   ├── export-capacity-section.tsx   # [NEW] Capabilities
│   ├── product-grid.tsx        # Product listing
│   ├── product-detail.tsx      # [NEW] Product page content
│   ├── origin-teaser.tsx       # Sourcing information
│   ├── logistics-strip.tsx     # Process steps
│   ├── client-logos.tsx        # Partner logos
│   ├── inquiry-cta.tsx         # Call-to-action
│   ├── footer.tsx              # Footer with language switcher
│   └── ui/                     # Radix UI components
├── lib/
│   ├── i18n.tsx                # i18n setup & translations
│   ├── products.ts             # [NEW] Product catalog
│   ├── utils.ts                # Utility functions
│   └── chatbot/
│       ├── data.ts             # Chatbot knowledge base
│       └── engine.ts           # Chatbot logic
├── public/
│   ├── images/                 # Product & hero images
│   ├── videos/                 # Hero background video
│   └── screenshots/            # Screenshot assets
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── REDESIGN_SUMMARY.md         # [NEW] Complete change log
```

---

## Key Files Modified

### Internationalization
- **lib/i18n.tsx** - Added Armenian (hy) language support with complete translations
- **next.config.mjs** - Added i18n configuration for locales

### Product System
- **lib/products.ts** - New product catalog with multilingual specs
- **components/product-grid.tsx** - Updated to use new product data and link to detail pages
- **components/product-detail.tsx** - New component for product detail pages
- **app/products/[slug]/page.tsx** - New dynamic route for individual products

### Trust & Credibility
- **components/certifications-section.tsx** - New section showcasing certifications
- **components/export-capacity-section.tsx** - New section showing company capabilities
- **app/page.tsx** - Added new sections to homepage

### Visual Refinements
- **components/navbar.tsx** - Added Armenian language button, improved spacing
- **components/footer.tsx** - Added Armenian language option, improved spacing
- **components/trust-bar.tsx** - Enhanced spacing and typography
- **components/logistics-strip.tsx** - Improved visual hierarchy
- **components/origin-teaser.tsx** - Enhanced spacing
- **app/layout.tsx** - Added Armenian font support

---

## Language Configuration

### Supported Languages
| Code | Language | Direction | Status |
|------|----------|-----------|--------|
| en | English | LTR | ✅ Complete |
| fa | Persian/Farsi | RTL | ✅ Complete |
| hy | Armenian | LTR | ✅ Complete |

### How to Add More Languages

1. Add language code to `type Language` in `lib/i18n.tsx`
2. Add translations object for new language in `dict`
3. Update language switcher in `components/navbar.tsx` and `components/footer.tsx`
4. Add font if needed (for special character support)
5. Test RTL/LTR as needed in `app/layout.tsx`

---

## Product System

### Add a New Product

1. **Add to PRODUCTS array in `lib/products.ts`:**
   ```typescript
   {
     id: "unique-id",
     slug: "product-slug",
     name: {
       en: "English Name",
       fa: "نام فارسی",
       hy: "Հայերեն անուն"
     },
     // ... other fields
   }
   ```

2. **Product page automatically created** at `/products/product-slug`

3. **New language product automatically includes** in all dropdowns

### Product Data Required
- Multilingual name, descriptions
- Origin information
- Grades and specifications
- Packaging options
- Certifications
- Technical specs
- Minimum order volumes
- Shipping options

---

## Deployment Instructions

### Vercel Deployment (Recommended)
1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Vercel auto-detects Next.js
4. Deploy with one click
5. Set environment variables if needed

### Self-Hosted Deployment
1. Build: `npm run build`
2. Install production dependencies: `npm ci --production`
3. Start server: `npm start`
4. Use PM2 or similar for process management
5. Configure reverse proxy (nginx/Apache)

### Environment Variables
None required for basic operation. Optional:
- Analytics tracking IDs
- API endpoints for external services
- Contact form submission endpoints

---

## Performance Optimization

### Already Implemented
- ✅ Image optimization with Next.js Image component
- ✅ Static page generation for products
- ✅ Font subsetting for Google Fonts
- ✅ CSS minification via Tailwind
- ✅ Code splitting via Next.js

### Recommendations
1. Enable caching headers on Vercel/server
2. Use CDN for image assets
3. Monitor Core Web Vitals
4. Regular performance audits
5. Consider service worker for offline support

---

## Security Considerations

- ✅ No sensitive data in client-side code
- ✅ All translations are public
- ✅ No authentication required
- ✅ Safe dependency versions (check regularly)
- ✅ Input validation in forms

### Recommendations
1. Regular dependency updates: `npm audit`
2. Monitor for security advisories
3. Rate limiting on contact forms
4. HTTPS required in production
5. CSP headers configured

---

## SEO Features

- ✅ Dynamic metadata per product page
- ✅ Open Graph tags for social sharing
- ✅ Twitter card support
- ✅ Proper semantic HTML
- ✅ XML sitemap ready (auto-generated by Vercel)
- ✅ robots.txt configuration
- ✅ Canonical tags configured

### Next Steps for SEO
1. Submit sitemap to Google Search Console
2. Monitor search rankings
3. Add structured data (Schema.org)
4. Implement analytics
5. Monitor Core Web Vitals

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## Troubleshooting

### Language Not Switching
- Check localStorage isn't disabled
- Verify language button click handler
- Check browser console for errors

### RTL Layout Broken
- Verify `dir="rtl"` is set on `<html>` element
- Check Tailwind RTL modifier classes
- Clear browser cache

### Products Not Showing
- Verify `lib/products.ts` is imported in `product-grid.tsx`
- Check PRODUCTS array is exported
- Verify slugs match routes

### Armenian Text Not Displaying
- Verify `Noto_Sans_Armenian` font loads
- Check font variable is applied in layout
- Verify character encoding is UTF-8

---

## Maintenance Tasks

### Weekly
- Monitor error logs
- Check analytics

### Monthly
- Update dependencies: `npm update`
- Security audit: `npm audit`
- Performance check

### Quarterly
- Full security audit
- SEO audit
- User feedback review
- Performance optimization

---

## Contact & Support

**For technical issues:**
- Check this documentation
- Review code comments
- Check browser console for errors

**For content updates:**
- Edit translations in `lib/i18n.tsx`
- Update products in `lib/products.ts`
- No code rebuild needed for translation updates

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | May 19, 2026 | Complete redesign with Armenian, product pages, trust sections |
| 1.0 | Previous | Initial B2B export website |

---

## Conclusion

The website has been successfully redesigned with:
- ✅ Armenian language support
- ✅ Dynamic product page system
- ✅ Enhanced trust and credibility sections
- ✅ Refined visual design and spacing
- ✅ Proper RTL/LTR handling
- ✅ Improved SEO and accessibility

**Status: Ready for production deployment**

For questions or updates, refer to `REDESIGN_SUMMARY.md` for detailed change documentation.
