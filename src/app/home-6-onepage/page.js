import Home6Main from "@/components/layout/main/Home6Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 6 Onepage | RJ Business Solutions",
  description:
    "Explore RJ Business Solutions' streamlined one-page layout with Home 6, offering comprehensive consulting solutions designed to elevate your business.",
};

export default function Home6Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
      isOnepage={true}
    >
      <ThemeController />
      <Home6Main />
    </PageWrapper>
  );
}
