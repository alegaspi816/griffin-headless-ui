import Link from "next/link";
import FooterSection from "@/components/FooterSection";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
    <SiteHeader />
    <div className="flex flex-col items-center justify-center text-center px-4 py-24 min-h-[60vh]">
      <h1 className="text-[#757575] text-8xl md:text-[140px] font-light leading-none mb-6">404</h1>
      <h2 className="text-[#1c302a] text-2xl md:text-3xl font-bold mb-4 tracking-tight">The page you were looking for doesn&apos;t exist.</h2>
      {/* Subtext */}
      <p className="text-[#757575] text-lg max-w-xl mb-10">You may have mistyped the address or the page may have moved.</p>
      {/* Button */}
      <Link href="/" className="bg-[#1c302a] text-white px-8 py-4 rounded-md font-bold text-sm tracking-[0.15em] flex items-center gap-3 hover:bg-[#152520] transition-colors uppercase">Back to Home <span className="text-xl leading-none">&rarr;</span></Link>
    </div>
    <FooterSection />
    <SiteFooter />
    </>
  );
}
