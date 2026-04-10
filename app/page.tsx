/*export default async function Home() {
  const res = await fetch("https://griffinheadlesscms.kinsta.cloud/wp-json/wp/v2/pages", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div>
      <h1>Griffin Headless Site</h1>
      {data.map((page: any) => (
        <div key={page.id}>
          <h2 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
        </div>
      ))}
    </div>
  );
}*/

/* ******************************************************************************** */

/*
import Link from "next/link";

async function getPages() {
  const res = await fetch("https://griffinheadlesscms.kinsta.cloud/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          pages {
            nodes {
              id
              title
              slug
            }
          }
        }
      `,
    }),
    cache: "no-store",
  });

  const json = await res.json();
  return json.data.pages.nodes;
}

export default async function Home() {
  const pages = await getPages();

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Griffin Headless Site</h1>

      {pages.map((page: any) => (
        <div key={page.id} style={{ marginBottom: "15px" }}>
          <Link href={`/${page.slug}`}>
            <h2 style={{ cursor: "pointer", color: "blue" }}>
              {page.title}
            </h2>
          </Link>
        </div>
      ))}
    </main>
  );
}*/

import Link from "next/link";

async function getPages() {
  try {
    const res = await fetch("https://griffinheadlesscms.kinsta.cloud/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            pages {
              nodes {
                id
                title
                slug
              }
            }
          }
        `,
      }),
      cache: "no-store",
    });

    const json = await res.json();

    if (!json?.data?.pages?.nodes) {
      console.error("GraphQL FULL ERROR:", json);
      return [];
    }

    return json.data.pages.nodes;

  } catch (error) {
    console.error("FETCH ERROR:", error);
    return [];
  }
}

export default async function Home() {
  const pages = await getPages();

  return (
    <div>
      <h1 className="page-title">Pages</h1>

      {pages.length === 0 && (
        <p>No pages found (check console)</p>
      )}

      <div className="grid">
        {pages.map((page: any) => (
          <Link key={page.id} href={`/${page.slug}/`} className="card">
            <div className="card-content">
              <h2>{page.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}