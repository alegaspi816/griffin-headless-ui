"use client";
import Image from "next/image";

export default function TwoColLayout({ data }: { data: any }) {

  // Determine if content should be on the right or left
  const contentOrder = data.contentRight ? "lg:order-2" : "lg:order-1";
  const imageOrder = data.contentRight ? "lg:order-1" : "lg:order-2";

  return (
    <section className="flex flex-col lg:flex-row min-h-[600px] w-full overflow-hidden">
      
      {/* Image Column */}
      <div className={`relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full ${imageOrder}`}>
        {data.sectionImage?.node?.sourceUrl && (
          <Image src={data.sectionImage.node.sourceUrl} alt="Medical background" fill className="object-cover" loading="lazy" />
        )}
      </div>

      {/* Content Column */}
      <div className={`w-full py-16 px-5 lg:w-1/2 flex items-center ${contentOrder} ${data.darkBackground ? "dark-background text-white" : "bg-white text-gray-900"}`}>
        <div className="[&>h2]:font-serif [&>h2]:text-4xl [&>h2]:md:text-5xl [&>h2]:mb-8 [&>h2]:leading-tight [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:opacity-90" dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>

    </section>
  );
}