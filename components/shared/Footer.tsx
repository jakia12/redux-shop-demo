import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 text-gray-700">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl mb-3">
            <ShoppingBag size={22} />
            ShopX
          </div>
          <p className="text-sm text-gray-500">
            Discover amazing products at the best prices. Secure checkout & fast
            delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-indigo-600">
                All Products
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Top Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-600">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Men's Clothing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Women's Clothing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Jewelry
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t">
        &copy; {new Date().getFullYear()} ShopX. All rights reserved.
      </div>
    </footer>
  );
}
