"use client";

import { useGetCategoriesQuery } from "@/features/products/productAPi";

export default function CategoriesSection() {
  const { data, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <p className="text-center">Loading categories...</p>;

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.map((category) => (
          <div
            key={category}
            className="bg-indigo-100 text-center py-6 rounded-lg text-indigo-700 capitalize font-semibold"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}
