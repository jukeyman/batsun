import ShopMain from "@/components/layout/main/ShopMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Shop | RJ Business Solutions",
  description:
    "Explore the premium products and services available in the RJ Business Solutions Shop. Everything you need to elevate your business.",
};

export default function Shop() {
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
