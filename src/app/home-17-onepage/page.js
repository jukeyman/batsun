import Home17Main from "@/components/layout/main/Home17Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 17 One page | RJ Business Solutions",
  description:
    "Explore Home 17 by RJ Business Solutions for innovative and comprehensive business consulting services. Designed to elevate your success.",
};
export default function Home17Onepage() {
  return (
    <PageWrapper headerStyle={2} footerStyle={2} isOnepage={true}>
      <ThemeController />
      <Home17Main />
    </PageWrapper>
  );
}