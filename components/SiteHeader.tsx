import Header from "@/components/Header";
import { fetchGraphQL } from "@/lib/api";
import { buildMenuTree } from "@/lib/menu-tree";

export default async function SiteHeader() {
  const data = await fetchGraphQL(`
    query GetHeaderMenu {
      header: menu(id: "header-navigation", idType: SLUG) {
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

  const headerNodes = data?.header?.menuItems?.nodes || [];
  const headerMenu = buildMenuTree(headerNodes);

  return <Header menuItems={headerMenu} />;
}
