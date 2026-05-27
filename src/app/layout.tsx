import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'CryptoForge - Secure & Advanced Crypto Trading Platform',
  description: 'Unlock your financial potential with CryptoForge, the leading platform for secure decentralized finance, advanced crypto trading, and innovative investments. Join 1M+ users today.',
  keywords: ["crypto, cryptocurrency, blockchain, trading, DeFi, Bitcoin, Ethereum, investment, secure wallet, financial freedom"],
  openGraph: {
    "title": "CryptoForge - Secure & Advanced Crypto Trading Platform",
    "description": "Unlock your financial potential with CryptoForge, the leading platform for secure decentralized finance, advanced crypto trading, and innovative investments. Join 1M+ users today.",
    "url": "https://www.cryptoforge.com",
    "siteName": "CryptoForge",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/stock-market-trader-analyzing-charts_23-2151937277.jpg",
        "alt": "Futuristic cryptocurrency dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "CryptoForge - Secure & Advanced Crypto Trading Platform",
    "description": "Unlock your financial potential with CryptoForge, the leading platform for secure decentralized finance, advanced crypto trading, and innovative investments. Join 1M+ users today.",
    "images": [
      "http://img.b2bpic.net/free-photo/stock-market-trader-analyzing-charts_23-2151937277.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
