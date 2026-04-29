import SiteHeader from "@/components/SiteHeader";
import ResultsSection from '@/components/ResultsSection';
import SiteFooter from "@/components/SiteFooter";
import FooterSection from "@/components/FooterSection";
import { GET_ALL_RESULTS } from '@/lib/queries';

async function getResults() {
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://griffinheadlesscms.kinsta.cloud/graphql';

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 3600 }, // Cache for 1 hour
    body: JSON.stringify({
      query: GET_ALL_RESULTS,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch results');
  }

  const { data } = await res.json();
  return data;
}

export default async function ResultsPage() {
  const data = await getResults();

  return (
    <>
    <SiteHeader />
    <main>
      <ResultsSection data={data} />
    </main>
    <FooterSection />
    <SiteFooter />
    </>
  );
}