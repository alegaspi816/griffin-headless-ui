export async function fetchGraphQL(query: string, variables = {}) {
  const res = await fetch("https://griffinheadlesscms.kinsta.cloud/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error("Failed to fetch GraphQL");
  }

  return json.data;
}