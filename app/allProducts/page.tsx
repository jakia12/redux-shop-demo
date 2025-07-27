"use client";

import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
} from "@/features/products/productAPi";
import {
  setCategory,
  setSearch,
  setSort,
} from "@/features/products/productFilterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

export default function AllProductsPage() {
  const { category, sort, search } = useAppSelector(
    (state) => state.productFilter
  );
  const dispatch = useAppDispatch();

  const { data: products, isLoading } = useGetAllProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

  const filteredProducts = products?.filter((p) => {
    const matchesCategory = category === "all" || p.category === category;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sorted = [...(filteredProducts || [])].sort((a, b) =>
    sort === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4 space-y-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <select
              className="w-full border px-2 py-1 rounded"
              onChange={(e) => dispatch(setCategory(e.target.value))}
              value={category}
            >
              <option value="all">All</option>
              {categories?.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Sort by Price</h3>
            <select
              className="w-full border px-2 py-1 rounded"
              onChange={(e) =>
                dispatch(setSort(e.target.value as "asc" | "desc"))
              }
              value={sort}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            sorted?.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded shadow hover:shadow-md transition"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain h-40 mx-auto"
                />
                <h3 className="mt-2 font-medium">{product.title}</h3>
                <p className="text-indigo-600 font-semibold">
                  ${product.price}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
