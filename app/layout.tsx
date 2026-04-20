// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { fetchGraphQL } from "@/lib/api";

// function buildMenuTree(nodes: any[]) {
//   const map = new Map();
//   const roots: any[] = [];

//   // Map all items
//   nodes.forEach((item) => {
//     map.set(item.databaseId, { ...item, children: [] });
//   });

//   // Assign children
//   nodes.forEach((item) => {
//     if (item.parentDatabaseId) {
//       const parent = map.get(item.parentDatabaseId);
//       if (parent) {
//         parent.children.push(map.get(item.databaseId));
//       }
//     } else {
//       roots.push(map.get(item.databaseId));
//     }
//   });

//   return roots;
// }

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const data = await fetchGraphQL(`
//     query GetHeaderMenu {
//       menu(id: "header-navigation", idType: SLUG) {
//         menuItems(first: 100) {
//           nodes {
//             id
//             label
//             uri
//             databaseId
//             parentDatabaseId
//           }
//         }
//       }
//     }
//   `);

 

//   const allNodes = data?.menu?.menuItems?.nodes || [];
//   const menuTree = buildMenuTree(allNodes);

//   return (
//     <html lang="en">
//       <body>
//         <Header menuItems={menuTree} />
//         <main className="flex-grow">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchGraphQL } from "@/lib/api";

function buildMenuTree(nodes: any[]) {
  const map = new Map();
  const roots: any[] = [];

  nodes.forEach((item) => {
    map.set(item.databaseId, { ...item, children: [] });
  });

  nodes.forEach((item) => {
    if (item.parentDatabaseId) {
      const parent = map.get(item.parentDatabaseId);
      if (parent) {
        parent.children.push(map.get(item.databaseId));
      }
    } else {
      roots.push(map.get(item.databaseId));
    }
  });

  return roots;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchGraphQL(`
    query GetMenus {
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

  const headerNodes = data?.header?.menuItems?.nodes || [];
  const footerNodes = data?.footer?.menuItems?.nodes || [];

  const headerMenu = buildMenuTree(headerNodes);
  const footerMenu = buildMenuTree(footerNodes);

  return (
    <html lang="en">
      <body>
        <Header menuItems={headerMenu} />
        <main className="flex-grow">{children}</main>
        <Footer menuItems={footerMenu} />
      </body>
    </html>
  );
}