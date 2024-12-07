import ShopMain from "@/components/layout/main/ShopMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Shop 3 Column | RJ Business Solutions",
  description:
    "Explore RJ Business Solutions' 3-column shop layout for streamlined browsing and a premium shopping experience designed for your business needs.",
};

export default function Shop3Column() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ShopMain shop={1} />
    </PageWrapper>
  );
}
