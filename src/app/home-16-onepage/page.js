import Home16Main from "@/components/layout/main/Home16Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 16 One page | RJ Business Solutions",
  description:
    "Explore Home 16 by RJ Business Solutions for innovative and comprehensive business consulting services. Designed to elevate your success.",
};
export default function Home16Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      headerBg={"black"}
      footerStyle={2}
      home={14}
      isNotHeaderTop={true}
      isOnepage={true}
      headerType={2}
    >
      <ThemeController />
      <Home16Main />
    </PageWrapper>
  );
}