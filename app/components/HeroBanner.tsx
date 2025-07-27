import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-indigo-50 py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4 leading-tight">
            Discover Deals You'll Love
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Explore top-rated products, latest trends, and unbeatable prices —
            all in one place.
          </p>
          <Link
            href="/products"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Optional Image or Illustration */}
        <div className="md:w-1/2">
          <Image
            src="/banner.jpg" // Replace with your own banner image
            alt="Shopping Illustration"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
