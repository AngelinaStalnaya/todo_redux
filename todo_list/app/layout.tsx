import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToDo App",
  description: "Todo list with timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[80px_1fr_80px] items-center justify-items-center min-h-screen p-8 pb-10 gap-8 sm:p-12 font-[family-name:var(--font-geist-sans)]">
          <header className="flex row-start-1 items-center justify-center flex-wrap gap-6">
            Header with auth
          </header>
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {children}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            Footer with statistics
          </footer>
        </div>
      </body>
    </html>
  );
}
