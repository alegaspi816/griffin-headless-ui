"use client";
import Image from "next/image";
import Link from "next/link";

export default function CtaLayout({ data }: { data: any }) {

    const overlayColor = data.overlayColor || "rgba(0,0,0,0.7)";

    return (
        <section className="cta-section relative py-20 lg:py-24 text-white overflow-hidden min-h-[400px] flex items-center">
            {/* Background Image */}
            {data.backgroundImage?.node?.sourceUrl && (
                <Image src={data.backgroundImage.node.sourceUrl} alt="CTA Background" fill className="object-cover" priority />
            )}

            {/* Overlay */}
            <div className="overlay absolute inset-0 bg-black/70 z-1" style={{ backgroundColor: overlayColor }}></div>

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                
                    <div className="w-full lg:w-2/3 text-left">
                        {data.sectionTitle && (
                            <h2 className="cta-title font-serif text-3xl md:text-4xl font-medium mb-6 leading-tight">{data.sectionTitle}</h2>
                        )}
                        {data.sectionContent && (
                            <div  className="cta-desc text-base md:text-lg leading-relaxed opacity-90 space-y-4 max-w-3xl" dangerouslySetInnerHTML={{ __html: data.sectionContent }} />
                        )}
                    </div>

                    {data.ctaButton && (
                        <div className="cta-btn-cont w-full lg:w-1/3 flex justify-center lg:justify-end">
                            <Link href={data.ctaButton.url || "#"} className="cta-button inline-block bg-[#d9f99d] text-[#1c302a] px-8 py-4 rounded-md font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300 shadow-lg text-center min-w-[280px]">{data.ctaButton.title}</Link>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}