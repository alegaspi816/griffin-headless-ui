import Link from 'next/link';
import SidebarForm from "@/components/SidebarForm";

export default async function Sidebar() {
    return (
        <aside className="sidebar w-full min-[992px]:w-1/3">

            <div className="sidebar-widget practice-areas-sidebar rounded-lg bg-[#e9f5db] p-5 md:p-6 shadow-xl bg-lgreen mx-auto my-10">
                <p className="sidebar-menu-title font-serif text-2xl md:text-3xl mb-6">Mass Torts</p>

                <nav id="practice-areas-nav">
                    <ul id="practice-areas-menu" className="list-unstyled flex flex-col gap-3 mb-0">
                        {[
                            { title: "Paragard", href: "/mass-torts/paragard/" },
                            { title: "NEC", href: "/mass-torts/nec/" },
                            { title: "Dexcom G6", href: "/mass-torts/dexcom-g6/" },
                            { title: "Lung Cancer/Meso", href: "/mass-torts/lung-cancer-meso/" },
                            { title: "Pressure Cooker Injuries", href: "/mass-torts/pressure-cooker-injuries/" },
                            { title: "SteriCare Solutions", href: "/mass-torts/stericare-solutions/" },
                            { title: "Roundup", href: "/mass-torts/roundup/" },
                            { title: "Hair Relaxer", href: "/mass-torts/hair-relaxer/" },
                            { title: "Social Media Harm", href: "/mass-torts/social-media-harm/" },
                            { title: "Allergan Lap-Band", href: "/mass-torts/allergan-lap-band/" },
                            { title: "Paraquat", href: "/mass-torts/paraquat/" },
                            { title: "Hernia Mesh", href: "/mass-torts/hernia-mesh/" },
                            { title: "Bard Power Port", href: "/mass-torts/bard-power-port/" },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.href} 
                                    className="flex items-center justify-between font-medium text-[17px] text-[#263e33] transition-all group"
                                >
                                    {/* Only the text is underlined to match the image */}
                                    <span className="underline decoration-1 underline-offset-4 hover:text-[#f48120] transition-colors">
                                        {item.title}
                                    </span>
                                    <span className="text-xl text-[#263e33] no-underline group-hover:translate-x-1 transition-transform">
                                        &rarr;
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
                    
            <div className="sidebar-form bg-[#1c302a] shadow-2xl mt-8 rounded-xl border border-white/10 py-6 md:py-8 px-5 sticky top-[150px]">
                <span className="sidebar-form-title font-secondary d-block text-3xl font-serif mb-8 block">Contact Us</span>
                <SidebarForm />
            </div>
            

        </aside>
    );
}