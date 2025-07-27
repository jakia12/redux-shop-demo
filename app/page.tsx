// app/page.tsx
"use client";

import CategoriesSection from "./components/CategoriesSection";
import HeroBanner from "./components/HeroBanner";
import TopRatedSection from "./components/TopRatedSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategoriesSection />
      <TopRatedSection />
    </>
  );
}
