
interface TestimonialNode {
  id: string;
  title: {
    rendered: string;
  } | string;
  content: string;
}

interface TestimonialsSectionProps {
  data: {
    testimonials: {
      nodes: TestimonialNode[];
    };
  };
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  
  // Safety check: If there's no data or no testimonials, don't break the site
  const testimonials = data?.testimonials?.nodes || [];

  if (testimonials.length === 0) {
    return <p>No testimonials found.</p>;
  }

  return (
    <section className="section-testimonials py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            
            {/* Header Section */}
            <span className="text-[#f48120] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">What Our Clients Say</span>
            <h1 className="font-secondary text-4xl md:text-5xl font-serif text-[#1c302a] mb-16">Testimonials</h1>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {testimonials.map((node) => (
                <div key={node.id} className="testimonial-wrapper relative">
                
                <div className="absolute -top-7 -left-5 z-10 bg-[#f48120] w-14 h-14 flex items-center justify-center rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-9 h-9"><path fill="#fff" d="M96 280C96 213.7 149.7 160 216 160L256 160L256 224L216 224C185.1 224 160 249.1 160 280L160 288L288 288L288 480L96 480L96 280zM352 280C352 213.7 405.7 160 472 160L512 160L512 224L472 224C441.1 224 416 249.1 416 280L416 288L544 288L544 480L352 480L352 280z"/></svg>
                </div>

                <div className="testimonial-card h-full bg-[#e9f2e4] border border-[#cbd5cc] rounded-md p-10 md:p-14 flex flex-col justify-between">
                    
                    {/* Testimonial Content */}
                    <blockquote className="text-[#233b33] text-lg md:text-[22px] leading-[1.6] opacity-90 mb-10 font-normal">
                        <div className="[&>p]:mb-0" dangerouslySetInnerHTML={{ __html: node.content }} />
                    </blockquote>

                    {/* Card Footer: Author & Stars */}
                    <div className="flex flex-row flex-wrap items-center justify-between gap-4 mt-auto pt-8">
                        <span className="block font-semibold text-[#5a6b5d] text-sm md:text-base">
                            &mdash; {typeof node.title === 'string' ? node.title : node.title?.rendered}
                        </span>

                        {/* Hardcoded 5-star Rating - Matching the orange in image */}
                        <div className="testimonial-rating flex flex-row gap-0.5">
                            {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20" fill="#f48120">
                                <path d="M288.1 0l86.5 164 182.7 31.6L428 328.5 454.4 512 288.1 430.2 121.7 512l26.4-183.5L18.9 195.6 201.5 164 288.1 0z" />
                            </svg>
                            ))}
                        </div>
                    </div>
                </div>

                </div>
            ))}
            </div>
        </div>
    </section>

  );
}