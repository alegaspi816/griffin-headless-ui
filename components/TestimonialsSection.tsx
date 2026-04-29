
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
    // <section className="testimonials-section py-12 bg-gray-50">
    //   <div className="container mx-auto px-4">
    //     <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {/* 3. THE MAP (The "node" fix) */}
    //       {testimonials.map((node) => (
    //         <div key={node.id} className="testimonial-card p-6 bg-white rounded-lg shadow-md">
    //           <h3 className="text-xl font-semibold mb-2">
    //             {/* Handle both object or string titles */}
    //             {typeof node.title === 'string' ? node.title : node.title?.rendered}
    //           </h3>
    //           <div 
    //             className="prose prose-sm text-gray-600"
    //             dangerouslySetInnerHTML={{ __html: node.content }} 
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>







    // <section className="section-testimonials py-16 md:py-24 bg-white overflow-hidden">
    //     <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            
    //         {/* Header Section */}
    //         <span className="text-[#e87a24] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
    //         What Our Clients Say
    //         </span>
    //         <h2 className="text-4xl md:text-5xl font-serif text-[#1c302a] mb-16">
    //         Testimonials
    //         </h2>

    //         {/* Grid: 2 columns on desktop to match the layout in the image */}
    //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
    //         {testimonials.map((node) => (
    //             <div key={node.id} className="testimonial-wrapper relative">
                
    //             {/* Floating Orange Quote Icon */}
    //             <div className="absolute -top-6 -left-4 z-10 bg-[#e87a24] w-12 h-12 flex items-center justify-center rounded-lg shadow-lg">
    //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fff" d="M96 280C96 213.7 149.7 160 216 160L256 160L256 224L216 224C185.1 224 160 249.1 160 280L160 288L288 288L288 480L96 480L96 280zM352 280C352 213.7 405.7 160 472 160L512 160L512 224L472 224C441.1 224 416 249.1 416 280L416 288L544 288L544 480L352 480L352 280z"/></svg>
    //             </div>

    //             {/* Main Card */}
    //             <div className="testimonial-card h-full bg-[#eff8ef] border border-gray-200 rounded-md p-8 md:p-12 flex flex-col justify-between shadow-sm">
                    
    //                 {/* Testimonial Content */}
    //                 <blockquote className="text-[#1c302a] italic text-lg md:text-xl leading-relaxed opacity-90 mb-8">
    //                 <div 
    //                     className="[&>p]:mb-0" // Reset WordPress p margin
    //                     dangerouslySetInnerHTML={{ __html: node.content }} 
    //                 />
    //                 </blockquote>

    //                 {/* Card Footer: Author & Stars */}
    //                 <div className="flex flex-row flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-gray-300/30">
    //                 <span className="block font-medium text-gray-700 text-sm md:text-base">
    //                     &mdash; {typeof node.title === 'string' ? node.title : node.title?.rendered}
    //                 </span>

    //                 {/* Hardcoded 5-star Rating */}
    //                 <div className="testimonial-rating flex flex-row gap-0.5">
    //                     {[...Array(5)].map((_, i) => (
    //                     <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18" fill="#ff9100">
    //                         <path d="M288.1 0l86.5 164 182.7 31.6L428 328.5 454.4 512 288.1 430.2 121.7 512l26.4-183.5L18.9 195.6 201.5 164 288.1 0z" />
    //                     </svg>
    //                     ))}
    //                 </div>
    //                 </div>
    //             </div>

    //             </div>
    //         ))}
    //         </div>
    //     </div>
    // </section>

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