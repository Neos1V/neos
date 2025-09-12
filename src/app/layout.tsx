import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neos",
  description: "Neos marketing website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeFont.variable} overflow-x-hidden`}>
        {children}
				<Analytics mode="production" />;
			</body>
    </html>
  );
}
