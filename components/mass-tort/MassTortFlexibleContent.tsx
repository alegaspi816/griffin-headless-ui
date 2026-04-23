"use client";

import CardsLayout from "./layouts/CardsLayout";

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
          case "Page_Masstorttemplate_MasstortFlexibleContent_CardsLayout":
            return <CardsLayout key={index} data={layout} />;

          default:
            return null;
        }
      })}
    </>
  );
}