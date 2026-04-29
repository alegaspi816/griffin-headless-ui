import { notFound } from "next/navigation";
import Image from "next/image";
import { fetchGraphQL } from "@/lib/api";
import { mapBannerData } from "@/lib/api";
import DefaultBanner from "@/components/InnerBanner";
import FooterSection from "@/components/FooterSection";
import Sidebar from "@/components/Sidebar";
import MassTortHeader from "@/components/mass-tort/MassTortHeader";
import MassTortPage from "@/components/templates/MassTortPage";
import MassTortFooter from "@/components/mass-tort/MassTortFooter";
import PageShell from "@/components/PageShell";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

async function getMassTortLegalContent() {
  const data = await fetchGraphQL(
    `
    query GetMassTortLegalContent {
      privacyPolicyPage: page(id: 66, idType: DATABASE_ID) {
        content
      }
    }
  `
  );

  return {
    privacyPolicyContent: data?.privacyPolicyPage?.content || "",
  };
}

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
                landbotScript
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
                    cardBgImage {
                      node {
                        sourceUrl
                      }
                    }
                    cardLink {
                      title
                      url
                    }
                  }
                  lowerContent
                }
                ... on MassTortTemplateMassTortFlexibleContentTwoColLayoutLayout {
                  content
                  contentRight
                  darkBackground
                  bgPositionMobile
                  bgPositionDesktop
                  sectionImage {
                    node {
                      sourceUrl
                    }
                  }
                }
                ... on MassTortTemplateMassTortFlexibleContentCtaLayoutLayout {
                  alignCenter
                  contentRight
                  ctaButton {
                    url
                    title
                  }
                  h2Title
                  overlayColor
                  sectionContent
                  sectionTitle
                  backgroundImage {
                    node {
                      sourceUrl
                    }
                  }
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

  const page = await getPage(uri);

  if (!page) notFound();

  const massTortData = page?.template?.massTortTemplate;
  
  if (massTortData) {
    const legalContent = await getMassTortLegalContent();

    return (
      <PageShell header={<MassTortHeader />} footer={<MassTortFooter privacyPolicyContent={legalContent.privacyPolicyContent} />}>
        <MassTortPage data={massTortData} />
      </PageShell>
    );
  }

  //  DEFAULT TEMPLATE
  const banner = mapBannerData(page.acf);

  return (
    <>
      <SiteHeader />
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
              <Image src={page.featuredImage.node.sourceUrl} alt={page.featuredImage.node.altText || page.title} width={1200} className="w-full h-auto object-cover" priority />
            </div>
          )}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>

        <Sidebar />
      </article>

      <FooterSection />
      <SiteFooter />
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
