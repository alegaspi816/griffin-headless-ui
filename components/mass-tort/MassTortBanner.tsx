"use client";

import Image from "next/image";

export default function MassTortBanner({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="relative py-24 text-white text-center">
      {data.bannerBackgroundImage?.node?.sourceUrl && (
        <Image
          src={data.bannerBackgroundImage.node.sourceUrl}
          alt=""
          fill
          className="object-cover -z-10"
        />
      )}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          {data.bannerTitle}
        </h1>

        {data.bannerDescription && (
          <div
            dangerouslySetInnerHTML={{
              __html: data.bannerDescription,
            }}
          />
        )}
      </div>
    </section>
  );
}