import Home13Main from "@/components/layout/main/Home13Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 13 Onepage | RJ Business Solutions",
  description:
    "Explore Home 13 by RJ Business Solutions for innovative and comprehensive business consulting services. Designed to elevate your success.",
};
export default function Home13() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      bodyBg={"black"}
      headerBg={"black"}
    >
      <ThemeController />
      <Home13Main />
    </PageWrapper>
  );
}
