import { fetchGraphQL } from "@/lib/api";
import Link from 'next/link';
import ContactForm from "@/components/ContactForm";

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
                cursor
                node {
                  link
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

  // 2. Extract About Layout from the Flexible Content Array
  const aboutLayout = homeData?.homeFlexibleContent?.find(
    (layout: any) => layout.__typename === "HomeFlexLayoutsHomeFlexibleContentAboutLayout"
  );

  // 3. Logic for About Section Title Tag (H2 vs Span)
  const AboutTitleTag = aboutLayout?.sectionTitleTag ? 'h2' : 'span';

  const paLayout = homeData?.homeFlexibleContent?.find((l: any) => l.__typename === "HomeFlexLayoutsHomeFlexibleContentPracticeAreasLayout");

  

  return (
    <div>

       {/* DISPLAYING THE BANNER FIELDS */}
      <section className="home-banner relative isolate overflow-hidden bg-cover bg-center bg-overlay py-24 sm:py-32" style={{  backgroundImage: `url(${banner?.bannerBackground?.sourceUrl || '/arizona-skyline.jpg'})`  }}>
        <div className="home-banner-cont relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            
            {banner.bannerPreTitle && (<p className="home-banner-pretitle font-bold mb-2 uppercase">{banner.bannerPreTitle}</p>)}

            {banner.bannerTitle && (<BannerTitleTag className="home-banner-title text-5xl font-semibold tracking-tight text-white sm:text-7xl" dangerouslySetInnerHTML={{ __html: banner.bannerTitle }} />)}

            {/* Banner Content */}
            <div  className="home-banner-desc mt-8 text-lg max-w-2xl font-medium text-pretty text-white sm:text-xl/8" dangerouslySetInnerHTML={{ __html: banner?.bannerContent || "" }} /></div>

          {/* Banner Link */}
          {banner?.bannerLink && (<Link href={banner.bannerLink.url} target={banner.bannerLink.target || '_self'} className="btn-primary uppercase inline-block mt-10">{banner.bannerLink.title}</Link>)}
        </div>
      </section>

      {/* ABOUT SECTION (Conditional Rendering) */}
      {aboutLayout && (
        <section className="about-section overflow-hidden pt-20 sm:pt-15">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">

              {/* TEXT CONTENT */}
              <div className="lg:col-span-6 xl:col-span-8 pb-6 lg:pb-0">
                {/* Pre-Title */}
                <span className="pre-title block text-xs font-bold uppercase tracking-widest mb-3">{aboutLayout.sectionPreTitle}</span>

                {/* Heading (Dynamic H2 or Span) */}
                <AboutTitleTag className="title text-3xl font-bold text-white mb-4">{aboutLayout.sectionTitle}</AboutTitleTag>

                {/* Content */}
                <div className="content space-y-4 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: aboutLayout.sectionContent || "" }} />

                {/* CTA Link */}
                {aboutLayout.sectionLink && (
                  <div className="mt-6">
                    <Link href={aboutLayout.sectionLink.url} target={aboutLayout.sectionLink.target || '_self'} className="inline-block btn-primary text-white px-6 py-3 font-semibold rounded transition hover:opacity-90">{aboutLayout.sectionLink.title}</Link>
                  </div>
                )}
              </div>

              {/* IMAGE */}
              <div className="lg:col-span-6 xl:col-span-4 flex justify-center lg:justify-end">
                {aboutLayout.sectionImage?.node?.sourceUrl && (
                  <img src={aboutLayout.sectionImage.node.sourceUrl} alt={aboutLayout.sectionImage.node.altText || "About Image"}  width={343} height={516} className="w-full max-w-sm h-auto" />
                )}
              </div>

            </div>
          </div>
        </section>
      )}




     {/* PRACTICE AREAS SECTION */}
      {paLayout && (
        <section className="section-practice-areas py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 text-center text-white">
            
            {paLayout.sectionPreTitle && (<span className="pre-title block text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">{paLayout.sectionPreTitle}</span>)}
            
            {paLayout.sectionTitle && (<h2 className="title text-white text-3xl font-semibold mb-4">{paLayout.sectionTitle}</h2>)}

            {paLayout.sectionContent && (<div className="content text-white mb-10 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: paLayout.sectionContent }} />)}

            <div className="flex flex-wrap justify-center gap-6 mt-15 mb-10 md:mb-15">
              {paLayout.practiceAreasGrid?.nodes?.map((paPage: any) => {
                
                // --- 1. DEFINE VARIABLES HERE ---
                const rc = paPage.relatedContentInterlinking;
                const paExcerpt = paPage.practiceArea?.practiceAreasExcerpt;
                
                // This is the line that was likely missing or misplaced:
                const templateBanner = paPage.template?.massTortTemplate?.bannerFieldsGroup?.bannerBackgroundImage;

                // --- 2. APPLY FALLBACK LOGIC ---
                const cardTitle = rc?.tsegRcPostTitle || paPage.title;

                const cardIcon = rc?.tsegRcPostIcon?.node?.sourceUrl || "https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2025/09/justice-sword.svg";

                const cardImage = 
                  rc?.tsegRcPostImage?.node?.sourceUrl || 
                  templateBanner?.node?.sourceUrl || 
                  'https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2025/09/griffin-law-plc-social-image.jpg';

                // --- 3. RETURN JSX ---
                return (
                  <Link key={paPage.id} href={paPage.uri} className="pa-card block no-underline group w-full sm:w-[calc(50%-1.5rem)] xl:w-[calc(33.333%-1.5rem)]">
                    <div className="flex flex-col gap-2 rounded overflow-hidden bg-cover bg-center relative shadow h-full py-6 md:py-10 px-4 transition-transform duration-300 group-hover:scale-[1.01]" style={{ backgroundImage: `url(${cardImage})` }}>
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors"></div>

                      <div className="relative z-10 flex flex-col h-full items-center text-center">

                        <h3 className="pa-card-title text-xl font-bold text-white mb-3">{cardTitle}</h3>

                        {paExcerpt && (<p className="pa-card-excerpt text-sm text-gray-200 mb-8 line-clamp-3">{paExcerpt}</p>)}
                        
                        <span className="pa-card-link mt-auto inline-block border border-white text-white text-xs px-4 py-2 uppercase tracking-widest font-bold group-hover:bg-white group-hover:text-black transition-all">Learn More</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {paLayout.sectionLink?.url && (
              <Link href={paLayout.sectionLink.url} className="inline-block btn-secondary font-semibold rounded px-8 py-3 transition hover:bg-white hover:text-primary">{paLayout.sectionLink.title || "View All"}</Link>
            )}
          </div>
        </section>
      )}





    <section id="footer-contact" className="footer-contact">
      <div className="mx-auto max-w-7xl px-3 md:px-6 py-10 rounded overflow-hidden bg-cover bg-center relative" style={{ backgroundImage: "url(https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2025/09/arizona-skyline-e1757520675891.jpg)" }}>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 text-white">
            <span className="title block text-center">Ready to Discuss Your Case?</span>
            <p className="content text-lg text-center mt-2">Contact Griffin Law, PLC for a Free Consultation</p>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="border border-white/10 bg-white/10 backdrop-blur rounded py-6 md:py-10 px-4 md:px-8">
              <span className="form-title block text-center text-white text-2xl mb-6">Schedule A Free Consultation</span>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>




    </div>
  );
}