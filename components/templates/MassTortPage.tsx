"use client";

import MassTortBanner from "@/components/mass-tort/MassTortBanner";
import MassTortFlexibleContent from "@/components/mass-tort/MassTortFlexibleContent";

export default function MassTortPage({ data }: { data: any }) {
  return (
    <>
      <MassTortBanner data={data.bannerFieldsGroup} />
      <MassTortFlexibleContent
        layouts={data.massTortFlexibleContent}
      />
    </>
  );
}