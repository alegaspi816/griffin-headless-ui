"use client";

import Image from "next/image";
import { useEffect } from "react";
import Script from "next/script";


export default function MassTortBanner({ data }: { data: any }) {
  if (!data) return null;

  const landbotUrl = data.landbotScript;

  useEffect(() => {
  if (!landbotUrl) return;

  const initLandbot = () => {
      if (!(window as any).Landbot) return;

      new (window as any).Landbot.Container({
        container: "#myLandbot",
        configUrl: landbotUrl,
        customData: {
          useragent: navigator.userAgent,
          refurl: document.referrer || "direct",
          cururl: window.location.href,
        },
      });
    };

    // if script already loaded
    if ((window as any).Landbot) {
      initLandbot();
      return;
    }

    // wait for script
    const interval = setInterval(() => {
      if ((window as any).Landbot) {
        clearInterval(interval);
        initLandbot();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [landbotUrl]);

  return (
    <section className="mass-tort-banner relative min-h-[60vh] flex items-center py-16 lg:py-24 text-white overflow-hidden">
      {/* Background Image */}
      {data.bannerBackgroundImage?.node?.sourceUrl && (
        <Image src={data.bannerBackgroundImage.node.sourceUrl} alt="mass-tort-banner" fill className="object-cover -z-20" priority />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>
      <div className="relative z-10 container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">{data.bannerTitle}</h1>

            {data.bannerDescription && (
              <div className="text-lg md:text-xl opacity-90 leading-relaxed max-w-xl" dangerouslySetInnerHTML={{__html: data.bannerDescription,}} />
            )}
          </div>

          {/* Right Column: Landbot Quiz Container */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden min-h-[500px] w-full">
              {/* Landbot renders here */}
              <div id="myLandbot" className="w-full h-[500px]"></div>
              {landbotUrl && (
                <Script src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.js" strategy="afterInteractive" />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>

    
  );
}