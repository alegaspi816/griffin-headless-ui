import SidebarForm from "@/components/SidebarForm";

export default async function Sidebar() {
    return (
        <aside className="sidebar w-full min-[992px]:w-1/3">
            {/* <div className="practice-areas-sidebar rounded-2xl bg-[#eff8ef] p-12 max-w-sm mx-auto my-10">
                <p className="font-serif text-4xl font-semibold text-[#263e33] mb-12">Mass Torts</p>

                <div className="flex flex-col">
                    {[
                    "Paragard",
                    "NEC",
                    "Dexcom G6",
                    "Lung Cancer/Meso",
                    "Pressure Cooker Injuries",
                    "SteriCare Solutions",
                    "Roundup",
                    "Hair Relaxer",
                    "Social Media Harm",
                    "Allergan Lap-Band",
                    "Paraquat",
                    "Hernia Mesh",
                    "Bard Power Port",
                    ].map((item, index) => (
                    <a key={index} href="#" className="flex items-center justify-between py-3.5 border-b border-[#a5b9ad]/30 font-medium text-lg text-[#263e33] underline decoration-0 underline-offset-4 hover:decoration-2 transition-all">{item} <span className="text-lg text-[#263e33] no-underline">&rarr;</span></a>
                    ))}
                </div>
            </div> */}

            <div className="sidebar-widget practice-areas-sidebar rounded-lg bg-[#e9f5db] p-5 md:p-6 shadow-xl bg-lgreen mx-auto my-10">
                <p className="sidebar-menu-title font-serif text-2xl md:text-3xl mb-6">Mass Torts</p>

                <nav id="practice-areas-nav">
                    <ul id="practice-areas-menu" className="list-unstyled flex flex-col gap-3 mb-0">
                        {[
                            "Heavy Metals in Baby Food",
                            "Hernia Mesh",
                            "Allergan Lap-Band",
                            "Oxbryta",
                            "Suboxone",
                            "SteriCare Solutions",
                            "Online Sports Gambling Addiction",
                            "Oxbryta",
                        ].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="flex items-center justify-between font-medium text-[17px] text-[#263e33] transition-all group">
                                    {/* Only the text is underlined to match the image */}
                                    <span className="underline decoration-1 underline-offset-4 hover:text-[#f48120] transition-colors">
                                        {item}
                                    </span>
                                    <span className="text-xl text-[#263e33] no-underline group-hover:translate-x-1 transition-transform">
                                        &rarr;
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
                    
            <div className="sidebar-form bg-[#1c302a] shadow-2xl mt-8 rounded-xl border border-white/10 p-6 md:p-8 sticky top-[150px]">
                <span className="sidebar-form-title font-secondary d-block text-3xl font-serif mb-8 block">Contact Us</span>
                <SidebarForm />
            </div>
            

        </aside>
    );
}