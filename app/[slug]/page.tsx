/*// app/[slug]/page.tsx
async function getPage(slug: string) {
  const res = await fetch("https://griffinheadlesscms.kinsta.cloud/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetPage($slug: ID!) {
          page(id: $slug, idType: URI) {
            title
            content
          }
        }
      `,
      variables: { slug },
    }),
    cache: "no-store",
  });

  const json = await res.json();
  return json?.data?.page || null; // safely handle undefined
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params; // unwrap the Promise

  const page = await getPage(slug);

  if (!page) {
    return (
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>404 - Page not found</h1>
        <p>No page found for slug: {slug}</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </main>
  );
}*/


// app/[slug]/page.tsx
async function getPage(slug: string) {
  const res = await fetch("https://griffinheadlesscms.kinsta.cloud/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetPage($slug: ID!) {
          page(id: $slug, idType: URI) {
            title
            content
          }
        }
      `,
      variables: { slug },
    }),
    cache: "no-store",
  });

  const json = await res.json();
  return json?.data?.page || null;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    return <div className="container">Page not found</div>;
  }

  return (
    <article className="article">
      <h1>{page.title}</h1>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </article>
  );
}