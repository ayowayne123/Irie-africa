import localFont from "next/font/local";
import "./globals.css";
import { Bebas_Neue, Noto_Sans, Alex_Brush } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin-ext"],
  style: ["normal"],
  weight: "400",
  display: "block",
  variable: "--font-bebas",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  style: ["normal"],
  weight: "400",
  variable: "--font-alexBrush",
});

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Irie Africa",
  description: "Visit Irie Africa to taste beautiful meals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${alexBrush.variable} ${noto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
