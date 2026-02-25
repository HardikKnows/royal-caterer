import "./globals.css";
import LayoutClient from "./components/LayoutClient";
import Script from "next/script";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <LayoutClient>{children}</LayoutClient>

        {/* Razorpay script */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}