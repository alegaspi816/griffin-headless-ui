
export default async function Sidebar() {
    return (
        <aside className="sidebar w-full min-[992px]:w-1/3">
            <div className="rounded-2xl bg-[#eff8ef] p-12 max-w-sm mx-auto my-10">
                <p className="font-serif text-4xl font-semibold text-[#263e33] mb-12">
                    Mass Torts
                </p>

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
                    <a
                        key={index}
                        href="#"
                        className="flex items-center justify-between py-3.5 border-b border-[#a5b9ad]/30 font-medium text-lg text-[#263e33] underline decoration-0 underline-offset-4 hover:decoration-2 transition-all"
                    >
                        {item} <span className="text-lg text-[#263e33] no-underline">&rarr;</span>
                    </a>
                    ))}
                </div>
            </div>
        </aside>
    );
}