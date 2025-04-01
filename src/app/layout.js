import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "./context/LocaleContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Babylon National School",
  description: "Official website of Babylon National School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
