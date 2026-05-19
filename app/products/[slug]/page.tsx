import { ProductDetail } from "@/components/product-detail";
import { getProductBySlug, getAllProductSlugs, PRODUCTS } from "@/lib/products";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {};
  }
  return {
    title: `${product.name.en} | Ariana Global Trade`,
    description: product.shortDescription.en,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <ProductDetail product={product} />
    </main>
  );
}
