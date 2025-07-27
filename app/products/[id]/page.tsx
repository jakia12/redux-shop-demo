"use client";

import { useGetProductByIdQuery } from "@/features/products/productAPi";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams() as { id: string };
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error || !product) return notFound();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain max-h-[400px] w-full"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-2">{product.description}</p>
          <p className="text-xl font-semibold text-indigo-600">
            ${product.price}
          </p>
          <p className="mt-2 text-sm text-gray-500 capitalize">
            Category: {product.category}
          </p>
          <p className="text-sm text-yellow-600 mt-2">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
}
