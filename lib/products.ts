/**
 * Product Catalog with Complete Specifications
 * Used for both product grid and individual product pages
 */

export interface ProductSpec {
  en: string
  fa: string
  hy: string
}

export interface Product {
  id: string
  slug: string
  name: ProductSpec
  shortDescription: ProductSpec
  fullDescription: ProductSpec
  origin: ProductSpec
  originRegion: string
  image: string
  grades: string[]
  packaging: ProductSpec[]
  certifications: string[]
  specs: {
    label: ProductSpec
    value: ProductSpec
  }[]
  minOrderVolume: ProductSpec
  shippingOptions: ProductSpec[]
  sampleAvailable: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: "saffron",
    slug: "saffron",
    name: {
      en: "Saffron",
      fa: "زعفران",
      hy: "Ազաֆրան"
    },
    shortDescription: {
      en: "Grade 1 and Sargol cuts, hand-harvested from Khorasan's high-altitude fields. Available in 1g–500g retail packs and kilogram-level bulk export quantities. Compliant with ISO 3632.",
      fa: "برش‌های سرگل و نگین درجه یک، برداشت دستی از مزارع مرتفع خراسان. موجود در بسته‌بندی‌های خرده‌فروشی ۱ تا ۵۰۰ گرم و مقادیر فله‌ای کیلویی جهت صادرات. مطابق با استاندارد ایزو ۳۶۳۲.",
      hy: "1-ին դասի և Սարգոլ կտրվածքներ, ձեռքով հավաքված Խորասանի բարձր լեռնային դաշտերից: Հասանելի են 1գ–500գ մանրածախ փաթեթներով և կիլոգրամային մասշտաբի զանգվածային արտահանման քանակներով: ISO 3632-ի համաձայն:"
    },
    fullDescription: {
      en: "Our Premium Saffron represents the finest hand-harvested saffron from Khorasan Province. Each strand is carefully selected and processed to ensure maximum color, aroma, and flavor. We offer both Sargol (all-red stigmas) and Grade 1 whole stigmas. Every batch is ISO 3632 compliant and includes phytosanitary certification for international markets.",
      fa: "زعفران پرمیوم ما نمایندگی بهترین زعفران دستی‌برداشت شده از استان خراسان است. هر رشته با احتیاط انتخاب و پردازش می‌شود تا حداکثر رنگ، عطر و طعم را تضمین کند. ما هر دو سرگل (تمام‌قرمز استیگما) و استیگما کامل درجه یک را ارائه می‌دهیم. هر دسته مطابق ISO 3632 است و شامل گواهینامه بهداشتی گیاهی برای بازارهای بین‌المللی است.",
      hy: "Մեր Պրեմիում Ազաֆրանը Խորասանի նահանգից ձեռքով հավաքված լավագույն ազաֆրանի ներկայացումն է: Յուրաքանչյուր մանցանց ուշադիրորեն ընտրված և մշակված է՝ առավելագույն գույն, հոտ և համ ապահովելու համար: Մենք առաջարկում ենք Սարգոլ (բոլոր-կարմիր տեղանիշ) և ամբողջ տեղանիշ 1-ին դասի: Յուրաքանչյուր հաբ ISO 3632-ի համաձայն է և ներառում է միջազգային շուկաների համար ֆիտոսանիտար սերտիֆիկատ:"
    },
    origin: {
      en: "Khorasan Province",
      fa: "استان خراسان",
      hy: "Խորասան նահանգ"
    },
    originRegion: "Khorasan",
    image: "/images/saffron.jpg",
    grades: ["Sargol (All-Red)", "Grade 1"],
    packaging: [
      {
        en: "1g retail pouches",
        fa: "کیسه های خرده فروشی 1 گرمی",
        hy: "1 գ մանրածախ փաթեթներ"
      },
      {
        en: "10g blister packs",
        fa: "بسته‌های حباب 10 گرمی",
        hy: "10 գ բូم փաթեթներ"
      },
      {
        en: "50g jars",
        fa: "شیشه های 50 گرمی",
        hy: "50 գ բանկա"
      },
      {
        en: "500g kraft boxes",
        fa: "جعبه های کرافت 500 گرمی",
        hy: "500 գ kraft տուփեր"
      },
      {
        en: "Kilogram bulk cartons",
        fa: "کارتن های فله یک کیلوگرمی",
        hy: "Կիլոգրամ զանգվածային կարտոն"
      }
    ],
    certifications: ["ISO 3632", "ISO 22000", "GlobalG.A.P.", "Phytosanitary Certificate"],
    specs: [
      {
        label: {
          en: "Moisture Content",
          fa: "درصد رطوبت",
          hy: "Խոնավության պարունակ"
        },
        value: {
          en: "< 10%",
          fa: "< ۱۰٪",
          hy: "< 10%"
        }
      },
      {
        label: {
          en: "Color Strength (USTA)",
          fa: "شدت رنگ (USTA)",
          hy: "Գույնի ուժ (USTA)"
        },
        value: {
          en: "> 190",
          fa: "> ۱۹۰",
          hy: "> 190"
        }
      },
      {
        label: {
          en: "Flavor Strength (ISO)",
          fa: "شدت طعم (ISO)",
          hy: "Համի ուժ (ISO)"
        },
        value: {
          en: "> 100",
          fa: "> ۱۰۰",
          hy: "> 100"
        }
      },
      {
        label: {
          en: "Crocin Content",
          fa: "محتوای کروسین",
          hy: "Կրոցինի պարունակ"
        },
        value: {
          en: "> 200 ppm",
          fa: "> ۲۰۰ ppm",
          hy: "> 200 ppm"
        }
      }
    ],
    minOrderVolume: {
      en: "100g for samples, 5kg for commercial orders",
      fa: "۱۰۰ گرم برای نمونه، ۵ کیلوگرم برای سفارش تجاری",
      hy: "100 գ նմուշների համար, 5 կգ առևտրային պատվերների համար"
    },
    shippingOptions: [
      {
        en: "FOB Isfahan",
        fa: "FOB اصفهان",
        hy: "FOB Իսֆահան"
      },
      {
        en: "CIF your port",
        fa: "CIF بندر شما",
        hy: "CIF ձեր նավահանգիստ"
      },
      {
        en: "DDP delivery",
        fa: "تحویل DDP",
        hy: "DDP մատակարար"
      }
    ],
    sampleAvailable: true
  },
  {
    id: "spices",
    slug: "premium-spices",
    name: {
      en: "Premium Iranian Spices",
      fa: "ادویه‌جات اعلای ایرانی",
      hy: "Պրեմիում իրանական մոլեգներ"
    },
    shortDescription: {
      en: "Carefully sourced Iranian spices known for rich aroma, vibrant color, and export-grade quality. Suitable for wholesale distribution, food manufacturing, and international culinary markets.",
      fa: "ادویه‌جات ایرانی با دقت تامین شده، شناخته شده به دلیل عطر غنی، رنگ طبیعی و کیفیت صادراتی. مناسب برای توزیع عمده، صنایع غذایی و بازارهای بین‌المللی آشپزی.",
      hy: "Խնամքով ընտրված իրանական մոլեգներ, հայտնի առատ ծանր հոտով, վառ գույնով և արտահանման դասի որակով: Հարմար մեծածախ բաշխման, սննդի արտադրության և միջազգային խոհարար շուկայի համար:"
    },
    fullDescription: {
      en: "Our Premium Spice Collection features the finest hand-selected spices from Iran's premier growing regions. Each spice is carefully tested for potency, purity, and microbial safety. We source from direct farmers to ensure authenticity and competitive pricing. Available in various bulk quantities and custom packaging.",
      fa: "مجموعه ادویه‌جات پرمیوم ما بهترین ادویه‌جات دست‌چیده شده از منطقه‌های پیشرو رشد ایران را معرفی می‌کند. هر ادویه به‌دقت برای تاثیر، خلوص و ایمنی میکروبی آزمایش می‌شود. ما از کشاورزان مستقیم تامین می‌کنیم تا اصالت و قیمت رقابتی را تضمین کنیم. موجود در مقادیر مختلف فله و بسته‌بندی سفارشی.",
      hy: "Մեր Պրեմիում Մոլեգների Հավաքածուն Իրանի լավագույն աճող շրջաններից ձեռքով ընտրված լավագույն մոլեգներ: Յուրաքանչյուր մոլեգ ուշադիրորեն փորձարկվում է ուժի, մաքրության և միկրոբային անվտանգության համար: Մենք ուղղակիորեն ֆերմերներից տամ ենք՝ իսկությունը և մրցունակ գինը ապահովելու համար: Հասանելի են տարբեր զանգվածային քանակներով և հատուկ փաթեթավորմամբ:"
    },
    origin: {
      en: "Kerman Province",
      fa: "استان کرمان",
      hy: "Կերման նահանգ"
    },
    originRegion: "Kerman",
    image: "/images/spice.jpg",
    grades: ["Premium Grade A", "Export Grade"],
    packaging: [
      {
        en: "1kg vacuum pouches",
        fa: "کیسه های بدون هوا 1 کیلوگرمی",
        hy: "1 կգ վակուում փաթեթներ"
      },
      {
        en: "5kg bulk cartons",
        fa: "کارتن های فله 5 کیلوگرمی",
        hy: "5 կգ զանգվածային կարտոն"
      },
      {
        en: "25kg sacks",
        fa: "کیسه های 25 کیلوگرمی",
        hy: "25 կգ պայուսակ"
      },
      {
        en: "Custom packaging",
        fa: "بسته‌بندی سفارشی",
        hy: "Հատուկ փաթեթավորում"
      }
    ],
    certifications: ["ISO 22000", "GlobalG.A.P.", "Phytosanitary Certificate", "Allergen-Free Lab Test"],
    specs: [
      {
        label: {
          en: "Moisture Content",
          fa: "درصد رطوبت",
          hy: "Խոնավության պարունակ"
        },
        value: {
          en: "< 12%",
          fa: "< ۱۲٪",
          hy: "< 12%"
        }
      },
      {
        label: {
          en: "Volatile Oil Content",
          fa: "محتوای روغن فرار",
          hy: "Նավաժային նավ պարունակ"
        },
        value: {
          en: "> 3%",
          fa: "> ۳٪",
          hy: "> 3%"
        }
      },
      {
        label: {
          en: "Microbial Count",
          fa: "تعداد میکروبی",
          hy: "Միկրոբային հաշիվ"
        },
        value: {
          en: "< 10,000 CFU/g",
          fa: "< ۱۰٬۰۰۰ CFU/g",
          hy: "< 10,000 CFU/g"
        }
      }
    ],
    minOrderVolume: {
      en: "500g for samples, 25kg for bulk",
      fa: "۵۰۰ گرم برای نمونه، ۲۵ کیلوگرم برای فله",
      hy: "500 գ նմուշների համար, 25 կգ զանգվածային"
    },
    shippingOptions: [
      {
        en: "FOB Kerman",
        fa: "FOB کرمان",
        hy: "FOB Կերման"
      },
      {
        en: "CIF your port",
        fa: "CIF بندر شما",
        hy: "CIF ձեր նավահանգիստ"
      }
    ],
    sampleAvailable: true
  },
  {
    id: "dried-fruits",
    slug: "dried-fruits",
    name: {
      en: "Dried Fruits",
      fa: "خشکبار",
      hy: "Չոր մրգեր"
    },
    shortDescription: {
      en: "Mazafati and Medjool dates, sun-dried figs, and dried apricots from Fars province. Available in consumer retail cartons and bulk palletised volumes. Brix and moisture specs on request.",
      fa: "خرماهای مضافتی و مجول، انجیر خشک آفتابی و برگه‌های زردآلو از استان فارس. موجود در کارتن‌های خرده‌فروشی و حجم‌های عمده پالت‌بندی شده. ارائه مشخصات بریکس و رطوبت در صورت درخواست.",
      hy: "Mazafati և Medjool ամսյակներ, արևի չոր թզուկներ և չոր կորկոտներ Փարսայից: Հասանելի են սպառողական մանրածախ տուփերով և պալետավորված զանգվածային ծավալներով: Brix և խոնավության սպեցիֆիկացիաներ՝ պահանջի դեպքում:"
    },
    fullDescription: {
      en: "Our Dried Fruits collection features premium selections from Fars Province. We work exclusively with orchards certified for organic and conventional production. All fruits are naturally sun-dried, with no added sugars or preservatives. Perfect for direct retail, food manufacturing, and ingredients in confectionery.",
      fa: "مجموعه خشکبار ما انتخاب‌های پرمیوم از استان فارس را معرفی می‌کند. ما منحصراً با باغ‌ها که برای تولید ارگانیک و معمولی صدور شده اند کار می‌کنیم. تمام میوه‌ها طبیعی‌طور خشک آفتابی هستند، بدون شکر اضافی یا حفاظ‌کننده. ایده‌آل برای خرده‌فروشی مستقیم، صنایع غذایی و اجزای شیرینی‌خوری.",
      hy: "Մեր Չոր Մրգերի հավաքածուն Փարսայից պրեմիում ընտրանիներ: Մենք բացառապես փայտապետ շարասանի հետ աշխատում ենք, որոնք օրգանական և սովորական արտադրության համար սերտիֆիկացված են: Բոլոր մրգերը բնական արևային չոր են, առանց ավելացված շաքարի կամ մի կամ հետևածանցիկների: Կատարյալ անմիջական մանրածախի, սննդի արտադրության և քաղցր թխվածքի բաղադրիչների համար:"
    },
    origin: {
      en: "Fars Province",
      fa: "استان فارس",
      hy: "Փարս նահանգ"
    },
    originRegion: "Fars",
    image: "/images/dried-fruits.jpg",
    grades: ["Premium Grade", "Organic Certified"],
    packaging: [
      {
        en: "500g consumer packs",
        fa: "بسته های مصرف کننده 500 گرمی",
        hy: "500 գ սպառողական փաթեթներ"
      },
      {
        en: "10kg cartons",
        fa: "کارتن های 10 کیلوگرمی",
        hy: "10 կգ կարտոն"
      },
      {
        en: "25kg bulk boxes",
        fa: "جعبه های فله 25 کیلوگرمی",
        hy: "25 կգ զանգվածային տուփեր"
      },
      {
        en: "Pallet loads",
        fa: "بارهای پالتی",
        hy: "Պալետ բեռ"
      }
    ],
    certifications: ["ISO 22000", "GlobalG.A.P.", "Organic (available)", "Phytosanitary"],
    specs: [
      {
        label: {
          en: "Sugar Content (Brix)",
          fa: "محتوای شکر (Brix)",
          hy: "Շաքարի պարունակ (Brix)"
        },
        value: {
          en: "18-24°",
          fa: "۱۸-۲۴°",
          hy: "18-24°"
        }
      },
      {
        label: {
          en: "Moisture Content",
          fa: "درصد رطوبت",
          hy: "Խոնավության պարունակ"
        },
        value: {
          en: "12-16%",
          fa: "۱۲-۱۶٪",
          hy: "12-16%"
        }
      },
      {
        label: {
          en: "Shelf Life",
          fa: "مدت نگهداری",
          hy: "Պահառու կյանքի"
        },
        value: {
          en: "24 months",
          fa: "۲۴ ماه",
          hy: "24 ամիս"
        }
      }
    ],
    minOrderVolume: {
      en: "1kg for samples, 100kg for bulk",
      fa: "۱ کیلوگرم برای نمونه، ۱۰۰ کیلوگرم برای فله",
      hy: "1 կգ նմուշների համար, 100 կգ զանգվածային"
    },
    shippingOptions: [
      {
        en: "FOB Shiraz",
        fa: "FOB شیراز",
        hy: "FOB Շիրազ"
      },
      {
        en: "CIF your port",
        fa: "CIF بندر شما",
        hy: "CIF ձեր նավահանգիստ"
      }
    ],
    sampleAvailable: true
  },
  {
    id: "herbal-drinks",
    slug: "herbal-drinks",
    name: {
      en: "Traditional Herbal Drinks",
      fa: "نوشیدنی‌های سنتی گیاهی",
      hy: "Ավանդական բուսական ըմպելիքներ"
    },
    shortDescription: {
      en: "Authentic Iranian herbal beverages crafted from natural botanicals and regional ingredients. Prepared for international markets with premium packaging and consistent quality standards.",
      fa: "نوشیدنی‌های گیاهی اصیل ایرانی تهیه‌شده از گیاهان طبیعی و ترکیبات بومی. آماده شده برای بازارهای بین‌المللی با بسته‌بندی ویژه و استانداردهای کیفی یکپارچه.",
      hy: "Իրանական ստուգված բուսական ըմպելիքներ՝ պատրաստված բնական բուսական նյութերից և տարածաշրջանային բաղադրիչներից: Պատրաստ միջազգային շուկաների համար՝ պրեմիում փաթեթավորմամբ և հետևողական որակի ստանդարտներով:"
    },
    fullDescription: {
      en: "Our Traditional Herbal Drinks represent centuries of Iranian botanical expertise. Each blend combines premium dried herbs, flowers, and natural ingredients to create authentic, aromatic beverages. Available in loose-leaf and convenient tea bag formats. Perfect for specialty retailers, cafes, and health-conscious consumers worldwide.",
      fa: "نوشیدنی‌های گیاهی سنتی ما نمایندگی قرن‌ها تخصص گیاهی ایرانی است. هر ترکیب برترین گیاهان خشک، گل‌ها و مواد طبیعی را ترکیب می‌کند تا نوشیدنی‌های اصیل و معطر ایجاد کند. موجود در فرم‌های برگ شل و کیسه چای راحت. ایده‌آل برای فروشگاه‌های تخصصی، کافه‌ها و مصرف‌کنندگان آگاه به سلامت در سراسر جهان.",
      hy: "Մեր Ավանդական Բուսական Ըմպելիքները հարյուրամյակ իրանական բուսական մասնագիտականի ներկայացումն են: Յուրաքանչյուր խառնուրդ լավագույն չոր բույսեր, ծաղիկներ և բնական բաղադրիչներ միավորում է իրական, ուշակալ ըմպելիքներ ստեղծելու համար: Հասանելի են느슨한տերև և հարմար թեյի պայուսակի ձևաչափերով: Կատարյալ մասնագիտական մեծածախ կազմակերպիչների, կաֆե փակել և ամբողջ աշխարհում առողջության վերաբերյալ գիտակցական սպառողների համար:"
    },
    origin: {
      en: "Isfahan Province",
      fa: "استان اصفهان",
      hy: "Իսֆահան նահանգ"
    },
    originRegion: "Isfahan",
    image: "/images/herbs.jpg",
    grades: ["Premium Blend", "Organic Mix"],
    packaging: [
      {
        en: "50g loose-leaf pouches",
        fa: "کیسه های برگ شل 50 گرمی",
        hy: "50 գ느슨한տերև փաթեթներ"
      },
      {
        en: "20 tea bags",
        fa: "۲۰ کیسه چای",
        hy: "20 թեյի պայուսակ"
      },
      {
        en: "500g bulk pouches",
        fa: "کیسه های فله 500 گرمی",
        hy: "500 գ զանգվածային փաթեթներ"
      },
      {
        en: "Custom catering format",
        fa: "قالب تامین سفارشی",
        hy: "Հատուկ Կազմակերպման ձևաչափ"
      }
    ],
    certifications: ["ISO 22000", "Organic Certified", "Allergen Declaration"],
    specs: [
      {
        label: {
          en: "Ingredient Count",
          fa: "تعداد مواد",
          hy: "Բաղադրիչ հաշիվ"
        },
        value: {
          en: "5-8 natural botanicals",
          fa: "۵-۸ گیاه طبیعی",
          hy: "5-8 բնական բույս"
        }
      },
      {
        label: {
          en: "Shelf Life",
          fa: "مدت نگهداری",
          hy: "Պահառու կյանքի"
        },
        value: {
          en: "18 months",
          fa: "۱۸ ماه",
          hy: "18 ամիս"
        }
      },
      {
        label: {
          en: "Flavor Profile",
          fa: "پروفایل طعم",
          hy: "Համի պրոֆիլ"
        },
        value: {
          en: "Aromatic, Balanced",
          fa: "معطر، متوازن",
          hy: "Ուշակալ, հավասար"
        }
      }
    ],
    minOrderVolume: {
      en: "100g for samples, 50kg for bulk",
      fa: "۱۰۰ گرم برای نمونه، ۵۰ کیلوگرم برای فله",
      hy: "100 գ նմուշների համար, 50 կգ զանգվածային"
    },
    shippingOptions: [
      {
        en: "FOB Isfahan",
        fa: "FOB اصفهان",
        hy: "FOB Իսֆահան"
      },
      {
        en: "CIF your port",
        fa: "CIF بندر شما",
        hy: "CIF ձեր նավահանգիստ"
      }
    ],
    sampleAvailable: true
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(product => product.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map(product => product.slug)
}
