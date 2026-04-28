"use client";
import "./css/mass-tort-template.css";
import MassTortBanner from "@/components/mass-tort/MassTortBanner";
import MassTortFlexibleContent from "@/components/mass-tort/MassTortFlexibleContent";
import MassTortLocations from "@/components/mass-tort/MassTortLocations";
import MassTortPreFooter from "@/components/mass-tort/MassTortPreFooter";

export default function MassTortPage({ data }: { data: any }) {
  return (
    <>
      <MassTortBanner data={data.bannerFieldsGroup} />
      <MassTortFlexibleContent layouts={data.massTortFlexibleContent} />
      <MassTortLocations />
      <MassTortPreFooter />
    </>
  );
}