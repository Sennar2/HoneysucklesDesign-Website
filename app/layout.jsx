import "./globals.css";
import { Playfair_Display, Nunito } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Honeysuckles Design — Are you ready to bloom?",
  description: "Thoughtful branding, web design, and digital experiences inspired by nature.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Honeysuckles Design — Are you ready to bloom?",
    description: "Thoughtful branding, web design, and digital experiences inspired by nature.",
    images: ["/logo.png"]
  }
};

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
