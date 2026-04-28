import { fetchGraphQL } from "@/lib/api";
import Link from 'next/link';
import Image from 'next/image';
import FooterSection from "@/components/FooterSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

async function getHomePage() {
  const data = await fetchGraphQL(`
    query GetHomePage {
      page(id: "/", idType: URI) {
        homeFlexLayouts {
          bannerGroup {
            bannerPreTitle
            bannerTitle
            bannerTitleTag
            bannerContent
            bannerSubContent
            bannerLink {
              url
              title
              target
            }
            bannerBackground {
                node {
                sourceUrl
              }
            }
          }
          homeFlexibleContent {
            __typename
            ... on HomeFlexLayoutsHomeFlexibleContentAboutLayout {
              sectionPreTitle
              sectionTitle
              sectionTitleTag
              sectionContent
              sectionImage {
                node {
                  sourceUrl
                  altText
                }
              }
              sectionLink {
                url
                title
                target
              }
            }

            ... on HomeFlexLayoutsHomeFlexibleContentPracticeAreasLayout {
              sectionContent
              sectionPreTitle
              sectionSubContent
              sectionTitle
              sectionTitleTag
              sectionLink {
                title
                url
              }
              practiceAreasGrid(first: 100) {
                nodes {
                  ... on Page {
                    id
                    uri
                    title
                    relatedContentInterlinking {
                      tsegRcPostTitle
                      tsegRcPostIcon {
                        node {
                          sourceUrl
                        }
                      }
                      tsegRcPostImage {
                        node {
                          sourceUrl
                        }
                      }
                    }
                    practiceArea {
                      practiceAreasExcerpt
                    }
                    template {
                      ... on Template_MassTorts {
                        templateName
                        massTortTemplate {
                          bannerFieldsGroup {
                            bannerBackgroundImage {
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
            }

          }
        }
      }
    }
  `);

  return data?.page?.homeFlexLayouts || null;
}

export default async function Home() {
  const homeData = await getHomePage();
  
  // Extract the Banner Group data
  const banner = homeData?.bannerGroup;

  //  Logic for the Dynamic Title Tag
  // If bannerTitleTag is true (H1), otherwise span.
  const BannerTitleTag = banner?.bannerTitleTag ? 'h1' : 'span';

  // Extract About Layout from the Flexible Content Array
  const aboutLayout = homeData?.homeFlexibleContent?.find(
    (layout: any) => layout.__typename === "HomeFlexLayoutsHomeFlexibleContentAboutLayout"
  );

  // Logic for About Section Title Tag (H2 vs Span)
  const AboutTitleTag = aboutLayout?.sectionTitleTag ? 'h2' : 'span';

  const paLayout = homeData?.homeFlexibleContent?.find((l: any) => l.__typename === "HomeFlexLayoutsHomeFlexibleContentPracticeAreasLayout");

  return (
    <div>
      <SiteHeader />
      {/* BANNER SECTION */}
      <section className="home-banner relative isolate overflow-hidden bg-cover bg-center py-24 sm:py-32">
        <Image src={banner?.bannerBackground?.node?.sourceUrl || 'https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2026/04/arizona-skyline-e1757520675891.webp'} alt="Banner Background" fill priority className="object-cover -z-10" sizes="100vw" quality={75} />
        <div className="banner-overlay absolute inset-0 bg-black/40"></div>
        <div className="home-banner-cont relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            {banner.bannerPreTitle && (<p className="home-banner-pretitle font-bold mb-2 uppercase">{banner.bannerPreTitle}</p>)}
            {banner.bannerTitle && (<BannerTitleTag className="home-banner-title text-5xl font-semibold tracking-tight text-white sm:text-7xl" dangerouslySetInnerHTML={{ __html: banner.bannerTitle }} />)}
            <div  className="home-banner-desc mt-8 text-lg max-w-2xl font-medium text-pretty text-white sm:text-xl/8" dangerouslySetInnerHTML={{ __html: banner?.bannerContent || "" }} /></div>
          {banner?.bannerLink && (<Link href={banner.bannerLink.url} target={banner.bannerLink.target || '_self'} className="btn-primary uppercase inline-block mt-10">{banner.bannerLink.title}</Link>)}
        </div>
      </section>

      {/* ABOUT SECTION */}
      {aboutLayout && (
        <section className="about-section overflow-hidden pt-20 sm:pt-15">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6 xl:col-span-8 pb-6 lg:pb-0">
                <span className="pre-title block text-xs font-bold uppercase tracking-widest mb-3">{aboutLayout.sectionPreTitle}</span>
                <AboutTitleTag className="title text-3xl font-bold text-white mb-4">{aboutLayout.sectionTitle}</AboutTitleTag>
                <div className="content space-y-4 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: aboutLayout.sectionContent || "" }} />
                {aboutLayout.sectionLink && (
                  <div className="mt-6">
                    <Link href={aboutLayout.sectionLink.url} target={aboutLayout.sectionLink.target || '_self'} className="inline-block btn-primary text-white px-6 py-3 font-semibold rounded transition hover:opacity-90">{aboutLayout.sectionLink.title}</Link>
                  </div>
                )}
              </div>
              <div className="lg:col-span-6 xl:col-span-4 flex justify-center lg:justify-end">
                {aboutLayout.sectionImage?.node?.sourceUrl && (
                 <Image src={aboutLayout.sectionImage.node.sourceUrl} alt={aboutLayout.sectionImage.node.altText || "About Image"} width={343} height={516} className="rounded-lg object-cover" loading="lazy" />
                )}
              </div>

            </div>
          </div>
        </section>
      )}

    {paLayout && <PracticeAreasSection data={paLayout} />}
     
    <FooterSection />
    <SiteFooter />

    </div>
  );
}
