"use client";

import { useGetTopRatedQuery } from "@/features/products/productAPi";
import Image from "next/image";
import Link from "next/link";

export default function TopRatedSection() {
  const { data, isLoading } = useGetTopRatedQuery();

  if (isLoading) return <p className="text-center">Loading top products...</p>;

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Top Rated Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition">
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className="mx-auto h-32 object-contain"
              />
              <h3 className="mt-4 font-medium text-sm">{product.title}</h3>
              <p className="text-indigo-600 font-semibold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
