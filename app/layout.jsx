/* eslint-disable @next/next/google-font-display */
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Feed from "@components/Feed";
import Footer from "@components/Footer";
import "@styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dream party",
  description: "Welcome to my shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Feed />
      </body>
    </html>
  );
}
