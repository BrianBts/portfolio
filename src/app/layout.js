import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Braian Barrientos Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
