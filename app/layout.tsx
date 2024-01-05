import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import "aos/dist/aos.css";
import BodyComponent from "./body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaze-bot",
  description:
    "The fastest and most convenient way to trade and earn on Injective.",
};

const aspekta = localFont({
  variable: "--font-aspekta",
  src: [
    {
      path: "./fonts/ttf/Aspekta-250.ttf",
      weight: "250",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Aspekta-350.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Aspekta-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Aspekta-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Aspekta-700.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Aspekta-750.ttf",
      weight: "750",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Aspekta-800.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${aspekta.variable}`}>
        <Navbar />
        <BodyComponent>{children}</BodyComponent>
      </body>
    </html>
  );
}