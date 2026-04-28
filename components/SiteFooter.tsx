import Footer from "@/components/Footer";
import { fetchGraphQL } from "@/lib/api";
import { buildMenuTree } from "@/lib/menu-tree";

export default async function SiteFooter() {
  const data = await fetchGraphQL(`
    query GetFooterMenu {
      footer: menu(id: "footer-navigation", idType: SLUG) {
        menuItems(first: 100) {
          nodes {
            id
            label
            uri
            databaseId
            parentDatabaseId
          }
        }
      }
    }
  `);

  const footerNodes = data?.footer?.menuItems?.nodes || [];
  const footerMenu = buildMenuTree(footerNodes);

  return <Footer menuItems={footerMenu} />;
}
