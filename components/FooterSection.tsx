import ContactForm from "@/components/ContactForm";
import Image from 'next/image';

export default async function FooterSection() {

return(
    <section id="footer-contact" className="footer-contact">
      <div className="relative isolate mx-auto max-w-7xl px-3 md:px-6 py-10 rounded overflow-hidden min-h-[400px]">
        <Image src="https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2026/04/arizona-skyline-e1757520675891.webp" alt="Arizona Skyline" fill className="object-cover -z-20" sizes="(max-width: 1280px) 100vw, 1280px" loading="lazy" />
        <div className="absolute inset-0 bg-black/75 -z-10"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-5 text-white">
            <span className="title block text-center text-2xl font-bold">Ready to Discuss Your Case?</span>
            <p className="content text-lg text-center mt-2">Contact Griffin Law, PLC for a Free Consultation</p>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-white/10 bg-white/10 backdrop-blur rounded py-6 md:py-10 px-4 md:px-8">
              <span className="form-title block text-center text-white text-2xl mb-6">Schedule A Free Consultation</span>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
);
}