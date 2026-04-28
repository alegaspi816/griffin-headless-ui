import { fetchGraphQL } from "@/lib/api";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import FooterSection from "@/components/FooterSection";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

async function getPracticeAreas() {
  const data = await fetchGraphQL(`
    query GetPracticeAreas {
      page(id: "/", idType: URI) {
        homeFlexLayouts {
          homeFlexibleContent {
            __typename

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

  const layouts =
    data?.page?.homeFlexLayouts?.homeFlexibleContent || [];

  return layouts.find(
    (l: any) =>
      l.__typename ===
      "HomeFlexLayoutsHomeFlexibleContentPracticeAreasLayout"
  );
}

export default async function MassTortsPage() {
  const paLayout = await getPracticeAreas();

  return (
    <>
      <SiteHeader />
      <PracticeAreasSection data={paLayout} />
      <FooterSection />
      <SiteFooter />
    </>
  );
}
