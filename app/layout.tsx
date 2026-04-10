/*import type { Metadata } from "next";
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
  title: "Griffin Law, PLC",
  description: "Justice for the Injured. Compassion for Our Clients",
  robots: {
    index: false,
    follow: false,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}*/

// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Griffin Law, PLC",
  description: "We understand that a personal injury case is more than just a file",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* HEADER */}
        <header className="header">
          <div className="container">
            <h2 className="logo">
              <Link href="/">Griffin Law, PLC</Link>
            </h2>
            <nav>
              <Link href="/">Home</Link>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="container">{children}</main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Griffin Law, PLC</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
