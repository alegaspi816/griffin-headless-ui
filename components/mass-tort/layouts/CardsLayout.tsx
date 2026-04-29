"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardsLayout({ data }: { data: any }) {
  return (
    <section className={`cards-section py-16 ${data.darkBackground ? "dark-background text-white" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">

        {data.sectionTitle && (
          <h2 className="title text-3xl font-bold mb-6">{data.sectionTitle}</h2>
        )}

        {data.upperContent && (
          <div className="section-content mb-8" dangerouslySetInnerHTML={{ __html: data.upperContent }} />
        )}

        <div className="cards-grid flex flex-wrap justify-center gap-6">
          {data.cardsRepeater?.map((card: any, i: number) => (
            <div key={i} className="card-item relative border p-6 rounded sm:w-[calc(50%-1.5rem)] xl:w-[calc(33.333%-1.5rem)]">
              {/* Background Image */}
              {card.cardBgImage?.node?.sourceUrl && (
                <Image src={card.cardBgImage.node.sourceUrl} alt="CTA Background" fill className="object-cover" priority />
              )}

              {card.cardTitle && (
                <h2 className="card-title text-xl font-bold mb-2">{card.cardTitle}</h2>
              )}
              
              {card.cardContent && (
                <div className="card-content relative" dangerouslySetInnerHTML={{__html: card.cardContent, }} />
              )}

              {card.cardLink?.url && (
                <Link href={card.cardLink.url} className="inline-block mt-4 underline">{card.cardLink.title}</Link>
              )}
            </div>
          ))}
        </div>

        {data.lowerContent && (
          <div className="lower-content mt-8" dangerouslySetInnerHTML={{ __html: data.lowerContent }} />
        )}
      </div>
    </section>
  );
}