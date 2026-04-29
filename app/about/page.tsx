import FooterSection from "@/components/FooterSection";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Image from 'next/image';
import Link from "next/link";

export default async function ContactUsPage() {
    return (
      <>
        <SiteHeader />


        {/* BANNER SECTION */}
        <section className="home-banner relative isolate overflow-hidden bg-cover bg-center py-24 sm:py-32">
            <Image src="https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2026/04/arizona-skyline-e1757520675891.webp" alt="Banner Background" fill priority className="object-cover -z-10" sizes="100vw" quality={75} />
            <div className="banner-overlay absolute inset-0 bg-black/40"></div>
            <div className="home-banner-cont relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto lg:mx-0">
                <p className="home-banner-pretitle font-bold mb-2 uppercase">More Than a Law Firm. We're Your Advocates.</p>
                <span className="home-banner-title text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Griffin Law, PLC</span>
                <div  className="home-banner-desc mt-8 text-lg max-w-2xl font-medium text-pretty text-white sm:text-xl/8"/>At Griffin Law, PLC, we believe effective legal representation is built on a foundation of trust, compassion, and an unwavering commitment to our clients' well-being. We don't just see a case; we see a person in need of a champion, and we are here to fight for you every step of the way.</div>
            <Link href="#schedula-a-free-consultation" className="btn-primary uppercase inline-block mt-10">Free Consultation</Link>
            </div>
        </section>

        <section className="about-section overflow-hidden pt-20 sm:pt-15">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6 xl:col-span-8 pb-6 lg:pb-0">
                <span className="pre-title block text-xs font-bold uppercase tracking-widest mb-3">Our Story</span>
                <h2 className="title text-3xl text-white mb-4">Our Mission: A Voice for the Voiceless</h2>
                <div className="content space-y-4 text-base leading-relaxed">
                    <p>Griffin Law, PLC was founded on a simple but powerful principle: everyone deserves exceptional legal representation, especially when facing the immense resources of insurance companies and large corporations. We saw that too often, individuals were overwhelmed and undervalued by a legal system that favored the powerful. We built this firm to be different—to provide a voice for those who have been wronged and to ensure that justice is accessible to all.</p>
                    <p>Our approach is both strategic and personal. We begin by listening to your story to understand the full impact an injury has had on your life. From there, we craft a personalized legal strategy tailored to your unique circumstances. Every case is prepared with meticulous attention to detail, ready for trial from day one. This proactive stance gives us maximum leverage during aggressive negotiations and ensures we are always prepared to fearlessly litigate in the courtroom if a fair settlement cannot be reached.</p>
                    <p>Our promise to you is simple: we will be your dedicated partners throughout this process. You can expect clear and consistent communication, transparent guidance, and a team that always puts your best interests first. We handle the complexities of the law so you can focus on the most important thing—healing.</p>
                </div>
                
              </div>
              <div className="lg:col-span-6 xl:col-span-4 flex justify-center lg:justify-end">
                <Image src="https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2025/09/neely.png" alt="About Image" width={343} height={516} className="rounded-lg object-cover" loading="lazy" />
              </div>

            </div>
          </div>
        </section>



        <section className="section-team section section-p bg-[#1c302a] py-16 md:py-24 text-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                <span className="text-orange block text-[#e87a24] text-xs font-bold tracking-[0.2em] uppercase mb-3">Griffin Law, PLC</span>
                
                <h2 className="text-white text-4xl md:text-5xl font-serif font-medium mb-6">Meet Our Dedicated Team</h2>

                <p className="text-sm md:text-base opacity-90 max-w-3xl mx-auto leading-relaxed">Our attorneys bring a wealth of experience and a shared passion for justice to every case they handle.</p>
                </div>

                {/* Content Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:items-start">
                
                {/* Left Column: Team Card */}
                <div className="lg:col-span-4 xl:col-span-3 flex justify-center">
                    <div className="team-card border border-white/20 p-2 rounded-lg bg-white/5 w-full max-w-[320px] shadow-xl">
                    <div className="overflow-hidden rounded-md">
                        <Image className="img-fluid w-full h-auto object-cover grayscale-[0.1]" src="https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2025/09/Kenn-1.webp"  alt="Kenneth Neely" width={400} height={400}/>
                    </div>
                    
                    <div className="px-2 py-6 border-radius mt-2 bg-[#1c302a] text-center rounded-md border border-white/5">
                        <h3 className="h4 text-2xl font-serif text-white mb-1">Kenneth Neely</h3>
                        <span className="text-orange block text-[#e87a24] text-[10px] font-bold tracking-[0.15em] uppercase">Founder</span>
                    </div>
                    </div>
                </div>

                {/* Right Column: Bio Text */}
                <div className="lg:col-span-8 xl:col-span-8">
                    <div className="text-start text-white/70 space-y-7 text-base md:text-lg leading-relaxed">
                    <p>Kenneth Neeley founded Neeley Law Firm in 2009 when he recognized a pressing need 
                        for a legal practice that prioritized personalized service and unwavering dedication 
                        to clients. Armed with a profound understanding of the intricacies of the law and a 
                        passion for advocating on behalf of those facing legal challenges, Neeley set out to 
                        establish a firm that would provide exceptional representation and guidance.</p>
                    <p>With a clear vision in mind, he meticulously assembled a team of talented attorneys 
                        who shared his commitment to excellence. Together, they cultivated an environment 
                        where clients could find solace and trust in the expertise of their legal advocates. 
                        From the outset, Neeley Law Firm became known for its client-centered approach, 
                        going above and beyond to ensure that each individual received the attention and 
                        support they deserved.</p>
                    <p>Today, under Kenneth Neeley's leadership, the firm continues to thrive, remaining 
                        steadfast in its mission to deliver unparalleled legal services and foster lasting 
                        relationships with clients.</p>
                    </div>
                </div>

                </div>
            </div>
        </section>



        <FooterSection />
        <SiteFooter />
      </>
    );
}
