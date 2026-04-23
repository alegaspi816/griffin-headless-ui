// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { fetchGraphQL } from "@/lib/api";
// import { mapBannerData } from "@/lib/api";
// import DefaultBanner from "@/components/InnerBanner";
// import FooterSection from "@/components/FooterSection";
// import Sidebar from "@/components/Sidebar";

// async function getPage(slug: string) {
//   const data = await fetchGraphQL(
//     `
//     query GetPage($uri: ID!) {
//       page(id: $uri, idType: URI) {
//         title
//         content
//         featuredImage {
//           node {
//             sourceUrl
//             altText
//           }
//         }
//       }
//     }
//   `,
//     { uri: `/${slug}/` }
//   );

//   return data?.page || null;
// }

// /**
//  * Default Page Template
//  */
// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const page = await getPage(slug);
//   const banner = mapBannerData(page.acf);

//   if (!page) {
//     // 404 page
//     notFound();
//   }

//   return (
//     <>
//     <DefaultBanner {...banner} fallbackTitle={page.title} type="page" />
//     <article className="inner-page article max-w-7xl mx-auto py-12 px-4 mx-auto py-12 px-4 flex flex-col min-[992px]:flex-row gap-8">
//       <div className="inner-page-content w-full min-[992px]:w-2/3">
//         {/* HEADER SECTION */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">{page.title}</h1>
//         </div>

//         {/* FEATURED IMAGE */}
//         {page?.featuredImage?.node?.sourceUrl && (
//           <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
//             <Image src={page.featuredImage.node.sourceUrl} alt={page.featuredImage.node.altText || page.title} width={1200} height={600} className="w-full h-auto object-cover" priority />
//           </div>
//         )}

//         {/* MAIN CONTENT */}
//         <div className="inner-page-content prose prose-lg max-w-none content" 
//           dangerouslySetInnerHTML={{ __html: page.content }} 
//         />
//        </div>
//        <Sidebar />
//     </article>

//     <FooterSection />
//     </>

//   );
// }

// /**
//  * SEO Metadata
//  */
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const page = await getPage(slug);

//   return {
//     title: page ? `${page.title} | Your Site Name` : "Page Not Found",
//   };
// }

import { notFound } from "next/navigation";
import Image from "next/image";
import { fetchGraphQL } from "@/lib/api";
import { mapBannerData } from "@/lib/api";
import DefaultBanner from "@/components/InnerBanner";
import FooterSection from "@/components/FooterSection";
import Sidebar from "@/components/Sidebar";
import MassTortPage from "@/components/templates/MassTortPage";

async function getPage(uri: string) {
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

        template {
          templateName
          ... on Template_MassTorts {
            massTortTemplate {
              bannerFieldsGroup {
                bannerTitle
                bannerDescription
                overlayColor
                bannerBackgroundImage {
                  node {
                    sourceUrl
                  }
                }
              }

              massTortFlexibleContent {
                __typename

                ... on MassTortTemplateMassTortFlexibleContentCardsLayoutLayout {
                  darkBackground
                  sectionTitle
                  upperContent
                  cardsRepeater {
                    cardTitle
                    cardContent
                    cardLink {
                      title
                      url
                    }
                  }
                  lowerContent
                }
              }
            }
          }
        }
      }
    }
  `,
    { uri }
  );

  return data?.page || null;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  // BUILD FULL URI
  const uri = `/${slug.join("/")}/`;

  console.log("Fetching URI:", uri); // CONSOLE LOG

  const page = await getPage(uri);

  if (!page) notFound();

  const massTortData = page?.template?.massTortTemplate;

  //  MASS TORT TEMPLATE
  if (massTortData) {
    return <MassTortPage data={massTortData} />;
  }

  //  DEFAULT TEMPLATE
  const banner = mapBannerData(page.acf);

  return (
    <>
      <DefaultBanner {...banner} fallbackTitle={page.title} type="page" />

      <article className="inner-page article max-w-7xl mx-auto py-12 px-4 flex flex-col min-[992px]:flex-row gap-8">
        <div className="inner-page-content w-full min-[992px]:w-2/3">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold mb-4">
              {page.title}
            </h1>
          </div>

          {page?.featuredImage?.node?.sourceUrl && (
            <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={page.featuredImage.node.sourceUrl}
                alt={page.featuredImage.node.altText || page.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>

        <Sidebar />
      </article>

      <FooterSection />
    </>
  );
}

/**
 * SEO
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const uri = `/${slug.join("/")}/`;

  const page = await getPage(uri);

  return {
    title: page ? `${page.title} | Your Site Name` : "Page Not Found",
  };
}