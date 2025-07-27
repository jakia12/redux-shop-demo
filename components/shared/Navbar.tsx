"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          ShopX
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/allProducts" className="hover:text-indigo-600">
              All Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
