import { notFound } from "next/navigation";
import { fetchGraphQL } from "../../lib/api";

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
    /* 404 Template: /app/not-found.tsx */
    notFound();
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

/* Pages Dynamic SEO Title */
export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const page = await getPage(slug);

  return {
    title: page?.title || "Page",
  };
}