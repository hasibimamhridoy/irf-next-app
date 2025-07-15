import Provider from "@/provider/provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "আই আর এফ ",
  description:
    "আই আর এফ একটি ইসলামী ব্লগ সাইট ও তরুণ-তরুণীদের জন্য প্রকাশিত হয়। আমাদের লক্ষ্য হলো নতুন প্রজন্মকে ইসলামী মূল্যবোধে দীক্ষিত করে সমাজের দায়িত্বশীল সদস্য হিসেবে গড়ে তোলা।",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_CLIENT_BASE || "https://irf.org"
  ),
  openGraph: {
    title: "আই আর এফ",
    description:
      "আই আর এফ একটি ইসলামী ব্লগ সাইট ও তরুণ-তরুণীদের জন্য প্রকাশিত হয়। আমাদের লক্ষ্য হলো নতুন প্রজন্মকে ইসলামী মূল্যবোধে দীক্ষিত করে সমাজের দায়িত্বশীল সদস্য হিসেবে গড়ে তোলা।",
    url: process.env.NEXT_PUBLIC_CLIENT_BASE,
    siteName: "আই আর এফ",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link rel="icon" href="/favicon.svg" sizes="any" />

        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
