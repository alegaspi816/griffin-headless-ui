"use client";

import CardsLayout from "./layouts/CardsLayout";
import TwoColLayout from "./layouts/TwoColLayout";
import CtaLayout from "./layouts/CtaLayout"

export default function MassTortFlexibleContent({
  layouts,
}: {
  layouts: any[];
}) {
  if (!layouts) return null;
  return (
    <>
      {layouts.map((layout, index) => {
        switch (layout.__typename) {
          case "MassTortTemplateMassTortFlexibleContentCardsLayoutLayout":
            return <CardsLayout key={index} data={layout} />;
          case "MassTortTemplateMassTortFlexibleContentTwoColLayoutLayout":
            return <TwoColLayout key={index} data={layout} />;
          case "MassTortTemplateMassTortFlexibleContentCtaLayoutLayout":
            return <CtaLayout key={index} data={layout} />;
          default:
            return null;
        }
      })}
    </>
  );
}