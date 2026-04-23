"use client";

import Link from "next/link";
import Image from "next/image";

export default function PracticeAreasSection({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="section-practice-areas py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 text-center text-white">

        {data.sectionPreTitle && (
          <span className="pre-title block text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">
            {data.sectionPreTitle}
          </span>
        )}

        {data.sectionTitle && (
          <h2 className="title text-white text-3xl font-semibold mb-4">
            {data.sectionTitle}
          </h2>
        )}

        {data.sectionContent && (
          <div
            className="content text-white mb-10 max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: data.sectionContent }}
          />
        )}

        <div className="flex flex-wrap justify-center gap-6 mt-15 mb-10 md:mb-15">
          {data.practiceAreasGrid?.nodes?.map((paPage: any, index: number) => {
            const rc = paPage.relatedContentInterlinking;
            const paExcerpt = paPage.practiceArea?.practiceAreasExcerpt;

            const templateBanner =
              paPage.template?.massTortTemplate?.bannerFieldsGroup
                ?.bannerBackgroundImage;

            const cardTitle = rc?.tsegRcPostTitle || paPage.title;

            const cardImage =
              rc?.tsegRcPostImage?.node?.sourceUrl ||
              templateBanner?.node?.sourceUrl ||
              "https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2025/09/griffin-law-plc-social-image.jpg";

            return (
              <Link
                key={paPage.id}
                href={paPage.uri}
                className="pa-card group relative block h-[300px] w-full overflow-hidden rounded sm:w-[calc(50%-1.5rem)] xl:w-[calc(33.333%-1.5rem)] no-underline"
              >
                <Image
                  src={cardImage}
                  alt={paPage.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 3}
                />

                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors"></div>

                <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {cardTitle}
                  </h3>

                  {paExcerpt && (
                    <p className="text-sm text-gray-200 mb-6 line-clamp-3">
                      {paExcerpt}
                    </p>
                  )}

                  <span className="inline-block border border-white px-5 py-2 text-xs font-bold uppercase text-white group-hover:bg-white group-hover:text-black">
                    Learn More
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {data.sectionLink?.url && (
          <Link
            href={data.sectionLink.url}
            className="inline-block btn-secondary px-8 py-3"
          >
            {data.sectionLink.title || "View All"}
          </Link>
        )}
      </div>
    </section>
  );
}