import "./globals.css";
import Link from "next/link";
import Image from 'next/image';

export const metadata = {
  title: {
    default: "Griffin Law, PLC",
    template: "%s | Griffin Law, PLC",
  },
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
            <div className="logo">
              <Link href="/">
                <Image src="/griffin-plc.png" alt="Griffin Law, PLC" className="logo-image" width={150} height={50} priority />
              </Link>
            </div>
            <nav>
              <Link href="tel:1234567" className="btn-primary">FREE CONSULTATION</Link>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="container">{children}</main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <div className="footer-logo">
              <Link href="/">
                <Image src="/griffin-plc.png" alt="Griffin Law, PLC" className="logo-image" width={150} height={50} priority />
              </Link>
            </div>
          </div>
          <div className="container">
            <p>© {new Date().getFullYear()} Griffin Law, PLC</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
