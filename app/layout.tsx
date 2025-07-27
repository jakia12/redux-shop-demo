import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ReduxProvider from "@/providers/redux-provider";
import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
