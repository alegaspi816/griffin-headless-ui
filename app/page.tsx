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
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
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
      <section className="hero">
        <div className="home-banner">
          <h1>Justice for the Injured.<br/>Compassion for Our Clients.</h1>
          <p>When an accident turns your world upside down, you need more than just a lawyer—you need an advocate.
Griffin Law, PLC is a leading personal injury firm dedicated to fighting for the rights of accident victims in Chandler, AZ.
We handle the legal battle so you can focus on healing.</p>
          <Link href="/contact-us" className="btn-primary">Free Consultation</Link>
        </div>
      </section>

      <h1 className="page-title">Pages</h1>

      {pages.length === 0 && (
        <p>No pages found (check console)</p>
      )}

      <div className="grid">
        {pages.map((page: any) => (
          <Link key={page.id} href={`/${page.slug}/`} className="card">
            <div className="card-content">
              <h2>{page.title}</h2>
              {page.featuredImage?.node?.sourceUrl && (
                <div className="card-image-container">
                  <img src={page.featuredImage.node.sourceUrl} alt={page.featuredImage.node.altText} className="card-image" />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}