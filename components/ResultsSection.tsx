import Image from "next/image";

interface ResultNode {
  id: string;
  title: {
    rendered: string;
  } | string;
  content: string;
}

interface ResultsSectionProps {
  data: {
    results: {
      nodes: ResultNode[];
    };
  };
}

export default function ResultsSection({ data }: ResultsSectionProps) {
  
  // Safety check: If there's no data or no results, don't break the site
  const results = data?.results?.nodes || [];

  if (results.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <section id="verdicts-settlements" className="section-results py-20 md:py-28 bg-white text-center">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <span className="text-[#f48120] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Proven Results Speak for Themselves</span>
        <h1 className="font-secondary font-serif text-4xl md:text-5xl text-[#1c302a] mb-16">Verdicts and Settlements</h1>

        {/* Results Container: Flex used instead of Grid to allow centering of the 5th item */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {results.map((node) => (
            <div key={node.id}  className="results-card bg-[#1c302a] text-white p-8 md:p-10 rounded-md shadow-lg flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[320px] transition-transform hover:-translate-y-1">
              {/* Result Icon */}
              <div className="results-card__icon mb-8">
                <Image src="https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2025/09/justice-doc.svg" alt="Justice Icon" width={42} height={42} className="opacity-90" />
              </div>

              {/* Amount (Title) */}
              <h3 className="text-white text-3xl md:text-4xl font-serif font-medium mb-4">{typeof node.title === 'string' ? node.title : node.title?.rendered}</h3>

              {/* Case Description (Content) */}
              <div className="text-sm md:text-base text-white/70 leading-relaxed font-light [&>p]:mb-0" dangerouslySetInnerHTML={{ __html: node.content }} />
            </div>
          ))}
        </div>

        {/* Disclaimer Footer */}
        <p className="smaller pt-16 text-[11px] md:text-xs text-gray-500 italic max-w-4xl mx-auto leading-relaxed">Disclaimer: Past results do not guarantee future outcomes. The value of each case is determined by its own specific facts and legal circumstances.</p>
      </div>
    </section>
  );
}