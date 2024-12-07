import Home11Main from "@/components/layout/main/Home11Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 11 Onepage | RJ Business Solutions",
  description:
    "Explore Home 11 by RJ Business Solutions for innovative and comprehensive business consulting services. Designed to elevate your success.",
};

export default function Home11Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      bodyBg={"black"}
      // headerBg={"black"}
      copyright={2}
      headerType={2}
      isOnepage={true}
      home={11}
    >
      <ThemeController />
      <Home11Main />
    </PageWrapper>
  );
}
