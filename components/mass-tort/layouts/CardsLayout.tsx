"use client";

import Link from "next/link";

export default function CardsLayout({ data }: { data: any }) {
  return (
    <section className={`py-16 ${data.darkBackground ? "bg-black text-white" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 text-center">

        {data.sectionTitle && (
          <h2 className="text-3xl font-bold mb-6">
            {data.sectionTitle}
          </h2>
        )}

        {data.upperContent && (
          <div
            className="mb-8"
            dangerouslySetInnerHTML={{ __html: data.upperContent }}
          />
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {data.cardsRepeater?.map((card: any, i: number) => (
            <div key={i} className="border p-6 rounded">
              <h3 className="text-xl font-bold mb-2">
                {card.cardTitle}
              </h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: card.cardContent,
                }}
              />

              {card.cardLink?.url && (
                <Link
                  href={card.cardLink.url}
                  className="inline-block mt-4 underline"
                >
                  {card.cardLink.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {data.lowerContent && (
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: data.lowerContent }}
          />
        )}
      </div>
    </section>
  );
}