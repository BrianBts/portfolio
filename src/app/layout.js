"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Braian Barrientos Portfolio</title>
      </head>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            defaultTheme="light"
            enableSystem={true}
            attribute="class"
          >
            {children}{" "}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
