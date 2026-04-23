import { notFound } from "next/navigation";
import Image from "next/image";
import { fetchGraphQL } from "@/lib/api";
import DefaultBanner from "@/components/InnerBanner";
import { mapBannerData } from "@/lib/api";

async function getPage(slug: string) {
  const data = await fetchGraphQL(
    `
    query GetPage($uri: ID!) {
      page(id: $uri, idType: URI) {
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `,
    { uri: `/${slug}/` }
  );

  return data?.page || null;
}

/**
 * Default Page Template
 */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPage(slug);
  const banner = mapBannerData(page.acf);

  if (!page) {
    // 404 page
    notFound();
  }

  return (
    <>
    <DefaultBanner {...banner}
        fallbackTitle={page.title}
        type="page" />
    <article className="inner-page article max-w-4xl mx-auto py-12 px-4">
      {/* HEADER SECTION */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">{page.title}</h1>
      </div>

      {/* FEATURED IMAGE */}
      {page?.featuredImage?.node?.sourceUrl && (
        <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
          <Image src={page.featuredImage.node.sourceUrl} alt={page.featuredImage.node.altText || page.title} width={1200} height={600} className="w-full h-auto object-cover" priority />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="inner-page-content prose prose-lg max-w-none content" 
        dangerouslySetInnerHTML={{ __html: page.content }} 
      />
    </article>
    </>

  );
}

/**
 * SEO Metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPage(slug);

  return {
    title: page ? `${page.title} | Your Site Name` : "Page Not Found",
  };
}