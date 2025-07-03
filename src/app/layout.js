import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tejas Bhitle - Software Developer & Photographer",
  description: "A passionate Software Developer who loves crafting scalable backend systems and a Photographer capturing stories through the lens. Specialized in Spring Boot, Python, and mobile development.",
  keywords: ["Software Developer", "Backend Engineer", "Photographer", "Spring Boot", "Python", "Mobile Development", "Full Stack Developer"],
  authors: [{ name: "Tejas Bhitle" }],
  creator: "Tejas Bhitle",
  publisher: "Tejas Bhitle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tejasbhitle.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tejas Bhitle - Software Developer & Photographer",
    description: "A passionate Software Developer who loves crafting scalable backend systems and a Photographer capturing stories through the lens.",
    url: 'https://tejasbhitle.com',
    siteName: 'Tejas Bhitle Portfolio',
    images: [
      {
        url: '/profile_pic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tejas Bhitle - Software Developer & Photographer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tejas Bhitle - Software Developer & Photographer",
    description: "A passionate Software Developer who loves crafting scalable backend systems and a Photographer capturing stories through the lens.",
    images: ['/profile_pic.jpeg'],
    creator: '@tejasbhitle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/profile_pic.jpeg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tejas Bhitle" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} antialiased transition-colors duration-300 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
