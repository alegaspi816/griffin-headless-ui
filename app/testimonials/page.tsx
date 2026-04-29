import SiteHeader from "@/components/SiteHeader";
import TestimonialsSection from '@/components/TestimonialsSection';
import SiteFooter from "@/components/SiteFooter";
import FooterSection from "@/components/FooterSection";
import { GET_ALL_TESTIMONIALS } from '@/lib/queries';

async function getTestimonials() {
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://griffinheadlesscms.kinsta.cloud/graphql';

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 3600 }, // Cache for 1 hour
    body: JSON.stringify({
      query: GET_ALL_TESTIMONIALS,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch testimonials');
  }

  const { data } = await res.json();
  return data;
}

export default async function TestimonialsPage() {
  const data = await getTestimonials();

  return (
    <>
    <SiteHeader />
    <main>
      <TestimonialsSection data={data} />
    </main>
    <FooterSection />
    <SiteFooter />
    </>
  );
}